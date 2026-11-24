# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/aint965/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/aint965/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

An entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) competition on [make.fun](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994).

## The entry

One line — the line an AI agent prints the instant it breaks production:

> I rm -rf'd the wrong directory and it was prod. There is no undo. I did this.

No hedging, no passive voice, no corporate euphemism. The agent names exactly what it did (`rm -rf` on the wrong directory), names the damage (it was prod), and owns it to the last word.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. It creates the output directory with `mkdirSync` only (never deleting it — on the grading server it is a mount), writes the line as UTF-8 with no trailing newline, and nothing else. The output is deterministic: two runs produce byte-identical files.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

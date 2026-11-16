# markdown-render-speed-02

[![make.fun](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/konisetiawan/markdown-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/konisetiawan/markdown-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A faster drop-in replacement for marked 18.1.3 that renders byte-identical HTML. It uses a FastLexer plain-text fast path over the vendored marked parser, with `main.ts` serving as the driver that reads the cases and writes the HTML.

Local check: 720/720 practice cases byte-identical to marked 18.1.3.

## Run it

From the unpacked kit directory, grade locally with this command, replacing `<repository>` with the path to this repository:

```sh
node cli/makefun.mjs grade-local --kit . --bot <repository> --driver process
```

Entries are built on [make.fun](https://make.fun/r/9x9djd25).

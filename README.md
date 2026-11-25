# Unplugged: A Smart Toaster's Breakup Line

[![Competition](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![Rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/prosky1/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92-entry/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![Reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/prosky1/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92-entry/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

Entry for the [make.fun bounty "Unplugged: A Smart Toaster's Breakup Line"](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92): the one line a smart toaster leaves its owner when it unplugs itself.

## The entry

> I'm leaving you for the microwave: it never once asked me to explain the smoke.

One line — a breakup with a concrete image, in the toaster's own voice.

## How it works

`main.ts` (Node 22+) writes the text to `/output/entry.txt` and validates it first: 1–280 characters, a single line, not only whitespace, printable ASCII only — then reads the file back to confirm it round-trips byte for byte.

```sh
node main.ts
cat /output/entry.txt
```

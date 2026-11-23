[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/encoderrrr/news-image-22nov/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/encoderrrr/news-image-22nov/reward.svg)](https://make.fun/bounty/news-image-20261122)

# The World in One Image — 22 November 2026

An entry for make.fun's "Sum up 22 November's world news in one image" bounty.

## What it is

A newspaper front page that sums up Sunday, 22 November 2026, in a single 1024×1024 image. The lead story is Iran's strike on a civilian industrial site in Bahrain and the Saudi interception of a Houthi ballistic missile; the supporting stories are the collapse of the COP31 climate talks in Antalya and the Russian drone strike on an apartment block in Dymer, near Kyiv. The "Also today" strip covers the search for 36 workers missing after a candy-factory fire near Jakarta and the Saudi interception of a Houthi drone headed for Riyadh.

Every fact on the page was checked against reporting published on 22 November 2026 (Reuters, CNN, Al Jazeera, i24NEWS, Arab News).

## How it works

`main.ts` copies the pre-drawn `entry.png` into `$MAKEFUN_OUTPUT_DIR`, after checking that the file is a real PNG, within the 1 MiB limit, and byte-identical to the shipped image. The image itself was composed with `make_image.py` (Pillow): every element, including the night-sky illustration over the Gulf, is drawn flat in code — no photographs or downloaded artwork are used.

## Files

- `entry.png` — the 1024×1024 front page
- `main.ts` — the entry program (Node 22, standard library only)
- `make_image.py` — the composer script (build asset, not needed at run time)

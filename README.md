# For Ladu — Anusha&apos;s birthday wish

A private birthday website for **Anusha**, called **Ladu**. Open it together: a sealed letter, a handwritten note, six reasons, candles to blow out, and a final sky of gold.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:43147](http://localhost:43147) (or the port printed in the terminal).

To share a fast copy with someone else:

```bash
npm run serve:public
```

That builds the finished site and serves it on port 43148.

## The evening, in order

1. **Open your gift** — her name, and a quiet beginning.
2. **The envelope** — break the seal and lift the letter.
3. **The letter** — a Bangla birthday note. If she cannot read it, tap **চিঠি শোনো** to hear it aloud.
4. **Six little truths** — tap each card.
5. **Make a wish** — light the candles, then hold to blow them out.
6. **Happy birthday to my love** — the last page, with her song on a vinyl player.

Edit the Bangla letter in `src/lib/wish-copy.ts`. Listening uses the device’s Bangla voice when one is installed.

import type { Coin, RawCoin } from "./schema.ts";

export const coinTransformers = (coin: RawCoin): Coin => ({
  id: coin.id,
  name: coin.name,
  symbol: coin.symbol,
  currentPrice: Number(coin.priceUsd),
  totalVolume: Number(coin.volumeUsd24Hr),
});

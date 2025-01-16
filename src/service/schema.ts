export type RawCoin = {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  volumeUsd24Hr: number;
};

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  totalVolume: number;
};

export type CoinsResponse = Coin[];
export interface RawCoinsResponse {
  data: RawCoin[];
}
export type CoinHistoryInterval = {
  priceUsd: number;
  time: number;
};

export type RawCoinHistoryResponse = {
  data: CoinHistoryInterval[];
};

export type CoinHistoryResponse = CoinHistoryInterval[];

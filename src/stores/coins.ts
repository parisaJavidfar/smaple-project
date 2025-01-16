import { defineStore } from "pinia";
import type { Coin, CoinHistoryResponse } from "../service/schema.ts";

type State = {
  isLoading: boolean;
  isError: boolean;
  coins: Coin[];
  coinHistory: CoinHistoryResponse;
};

export const useCoinsStore = defineStore("coins", {
  state: (): State => {
    return {
      isLoading: true,
      isError: false,
      coins: [],
      coinHistory: [],
    };
  },
  actions: {
    setCoins(data: Coin[]) {
      this.coins = data;
      this.stopLoading();
    },
    setCoinsHistory(data: CoinHistoryResponse) {
      this.coinHistory = data;
    },
    updateCoinPrice(data: { coin: string; price: number }) {
      this.coins = this.coins.map((coin) => {
        if (coin.id === data.coin) {
          coin.currentPrice = data.price;
        }

        return coin;
      });
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
});

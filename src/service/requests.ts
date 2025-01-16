import { useHttp } from "./http";
import { coinTransformers } from "./coinTransformers.ts";
import { ENDPOINTS } from "./constants";

import type {
  CoinsResponse,
  RawCoinsResponse,
  CoinHistoryResponse,
  RawCoinHistoryResponse,
} from "./schema";

const http = useHttp();

export async function getCoins(): Promise<CoinsResponse> {
  try {
    const response = await http.get<RawCoinsResponse>(ENDPOINTS.COINS, {
      query: {
        limit: 10,
      },
    });

    return response.data.map((coin) => coinTransformers(coin));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch coins");
  }
}

export async function getCoinHistory(
  coinId: string,
): Promise<CoinHistoryResponse> {
  try {
    const response = await http.get<RawCoinHistoryResponse>(
      ENDPOINTS.HISTORY.replace(":id", coinId),
      {
        query: {
          interval: "h6",
        },
      },
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to get coin history");
  }
}

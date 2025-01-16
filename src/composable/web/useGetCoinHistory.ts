import { getCoinHistory } from "../../service/requests";
import { useCoinsStore } from "../../stores/coins.ts";

export const useGetCoinHistory = (coinId: string) => {
  const coinsStore = useCoinsStore();

  const fetchCoinHistory = async () => {
    try {
      const response = await getCoinHistory(coinId);
      coinsStore.setCoinsHistory(response);
      coinsStore.stopLoading();
    } catch (e) {
      console.error(e);
      coinsStore.isError = true;
      coinsStore.stopLoading();
    }
  };

  return {
    fetchCoinHistory,
  };
};

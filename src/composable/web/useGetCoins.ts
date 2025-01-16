import { getCoins } from "../../service/requests";
import { useCoinsStore } from "../../stores/coins.ts";

export const useGetCoins = () => {
  const coinsStore = useCoinsStore();

  const fetchCoins = async () => {
    try {
      const response = await getCoins();
      coinsStore.setCoins(response);
      coinsStore.stopLoading();
    } catch (e) {
      console.error(e);
      coinsStore.isError = true;
      coinsStore.stopLoading();
    }
  };

  return {
    fetchCoins,
  };
};

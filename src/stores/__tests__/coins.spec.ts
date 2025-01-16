import { setActivePinia, createPinia } from "pinia";
import { useCoinsStore } from "../coins";

describe("useCoinsStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("sets coins correctly", () => {
    const store = useCoinsStore();
    const mockCoins = [
      {
        id: "bitcoin",
        currentPrice: 50000,
        symbol: "btc",
        name: "bitcoin",
        totalVolume: 56789,
      },
    ];

    store.setCoins(mockCoins);

    expect(store.coins).toEqual(mockCoins);
    expect(store.isLoading).toBe(false);
  });
});

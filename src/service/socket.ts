import { useCoinsStore } from "../stores/coins";

export const connectWebSocket = (): WebSocket => {
  const store = useCoinsStore();
  const coinsToListen = store.coins.map((coin) => coin.id);
  const socketUrl = `wss://ws.coincap.io/prices?assets=${coinsToListen.join(",")}`;
  const socket = new WebSocket(socketUrl);

  socket.onmessage = (event: MessageEvent) => {
    try {
      const data = JSON.parse(event.data);
      for (const coin in data) {
        if (coinsToListen.includes(coin)) {
          store.updateCoinPrice({
            coin,
            price: Number(data[coin]),
          });
        }
      }
    } catch (error) {
      console.error("Error parsing WebSocket message:", error);
    }
  };

  socket.onerror = (err: Event) => {
    console.error("WebSocket Error:", err);
    store.isError = true;
  };

  socket.onclose = () => {
    console.warn("WebSocket connection closed.");
  };

  return socket;
};

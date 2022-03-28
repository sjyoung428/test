const BASE_URL = "https://api.coinpaprika.com/v1";

export const CoinFetcher = async () =>
  await (await fetch(`${BASE_URL}/coins`)).json();

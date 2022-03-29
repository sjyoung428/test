const BASE_URL = "https://api.coinpaprika.com/v1";

export const CoinFetcher = async () =>
  await (await fetch(`${BASE_URL}/coins`)).json();

export const CoinInfoFetcher = async (id: string | undefined) =>
  await (await fetch(`${BASE_URL}/coins/${id}`)).json();

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { CoinFetcher } from "../api";
import Loading from "../components/Loading";

const AccentTitle = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const AccentCoin = styled.li`
  :hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Container = tw.div`
container
border-2
border-solid
mx-auto
h-screen
my-6
flex
flex-col
justify-center
items-center
py-5
rounded-md
`;

const CoinList = tw.ul`
mt-4
w-full
divide-y
divide-solid
overflow-y-scroll
`;

const Coin = tw(AccentCoin)`
flex
justify-between
items-center
p-4
transition-colors
hover:cursor-pointer
`;

export const Title = tw(AccentTitle)`
w-full
text-center
pb-5
font-extrabold
text-3xl
border-b
border-solid
border-[ghostwhite]
`;

const Symbol = tw.img`
h-[35px]
w-[35px]
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data: coins } = useQuery<ICoin[]>("allCoins", CoinFetcher);
  return (
    <>
      <Container>
        <Title>Coins</Title>
        <CoinList>
          {isLoading ? (
            <Loading />
          ) : (
            coins?.slice(0, 20).map((coin) => (
              <Link key={coin.id} to={`${coin.id}`} state={{ name: coin.name }}>
                <Coin key={coin.id}>
                  <span>{coin.name}</span>
                  <Symbol
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol?.toLowerCase()}`}
                    alt="coin-icon"
                  />
                </Coin>
              </Link>
            ))
          )}
        </CoinList>
      </Container>
    </>
  );
};

export default Coins;

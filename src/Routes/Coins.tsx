import styled from "styled-components";
import tw from "tailwind-styled-components";

const AccentColor = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Container = tw.div`
container
max-w-2xl
border-2
border-solid
mx-auto
h-3/4
my-6
flex
flex-col
content-center
items-center
py-5
`;

const CoinList = tw.ul`
mt-4
w-full
divide-y
divide-solid
overflow-y-scroll
`;

const Coin = tw.li`
flex
justify-between
p-4
`;

const Title = tw(AccentColor)`
w-full
text-center
pb-5
font-extrabold
text-3xl
border-b
border-solid
border-[ghostwhite]
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

const Coins = () => {
  return (
    <>
      <Container>
        <Title>Coins</Title>
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <span>{coin.name}</span>
              <span>{coin.symbol}</span>
            </Coin>
          ))}
        </CoinList>
      </Container>
    </>
  );
};

export default Coins;

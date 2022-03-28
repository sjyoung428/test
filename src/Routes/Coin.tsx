import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { Title } from "./Coins";
import tw from "tailwind-styled-components";

const ChartStyle = styled.div``;

const PriceStyle = styled.div``;

const Chart = tw(ChartStyle)``;

const Price = tw(PriceStyle)``;

interface ILocation {
  state: {
    name: string;
  };
}

const Coin = () => {
  const { coinId } = useParams();
  const {
    state: { name },
  } = useLocation() as ILocation;
  return (
    <>
      <Title>{name}</Title>
    </>
  );
};

export default Coin;

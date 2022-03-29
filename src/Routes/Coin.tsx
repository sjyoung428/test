import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { Title } from "./Coins";
import tw from "tailwind-styled-components";
import { useQuery } from "react-query";
import { CoinInfoFetcher } from "../api";
import Loading from "../components/Loading";

const LinkContainer = tw.div`
container
flex
justify-around
mt-10
`;

const TabStyle = styled.div<{ isMatch: boolean }>`
  :hover {
    color: ${(props) => props.theme.accentColor};
  }
  color: ${(props) =>
    props.isMatch ? props.theme.accentColor : props.theme.textColor};
`;

const Tab = tw(TabStyle)`
px-6
py-4
border
border-solid
rounded-md
`;

interface ILocation {
  state: {
    name: string;
  };
}
interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: Date;
  last_data_at: Date;
}

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation() as ILocation;
  const { data: info, isLoading } = useQuery<IInfo>("coinInfo", () =>
    CoinInfoFetcher(coinId)
  );
  const chartMatch = Boolean(useMatch("/:id/chart"));
  const priceMatch = Boolean(useMatch("/:id/price"));
  return (
    <>
      <Title>
        {state?.name ? state.name : isLoading ? <Loading /> : info?.name}
      </Title>
      <LinkContainer>
        <Link to="chart">
          <Tab isMatch={chartMatch}>Chart</Tab>
        </Link>
        <Link to="price">
          <Tab isMatch={priceMatch}>Price</Tab>
        </Link>
      </LinkContainer>
      <Outlet />
    </>
  );
};

export default Coin;

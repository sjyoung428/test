import styled from "@emotion/styled";
import { newOrderState } from "atoms/order";
import useRestaurantDetail from "hooks/useRestaurantDetail";
import { useOrder } from "libs/order";
import { flexColumn, flexRow } from "mixins/styles";
import { IMenu } from "mixins/types";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

export default function RestaurantDetailPage() {
  const navigate = useNavigate();
  const [order, addItemToOrder] = useRecoilState(newOrderState);
  // const { addItemToOrder } = useOrder();
  const { id: restaurantId } = useParams();
  const { data: restaurant } = useRestaurantDetail(
    restaurantId ? parseInt(restaurantId) : 0
  );

  const handleMenuClick = (menu: IMenu) => {
    addItemToOrder([
      ...order,
      {
        name: menu.name,
        id: menu.id,
        price: menu.price,
        count: 1,
        picture: menu.picture,
      },
    ]);
    navigate("/order");
  };

  return (
    <Wrapper>
      <RestaurantName>{restaurant?.name}</RestaurantName>
      {restaurant?.menu_set.map((menu) => (
        <MenuWrap onClick={() => handleMenuClick(menu)}>
          <MenuInfo>
            <MenuName>{menu.name}</MenuName>
            <MenuDescription>{menu.description}</MenuDescription>
            <MenuPrice>{`${menu.price.toString().slice(0, 2)},${menu.price
              .toString()
              .slice(2)}원`}</MenuPrice>
          </MenuInfo>
          <img alt={menu.name} src={menu.picture} width={80} height={80} />
        </MenuWrap>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexColumn}
  row-gap: 16px;
  margin-top: 64px;
  padding: 24px;
`;

const MenuName = styled.h2`
  color: #1d2745;
`;

const MenuDescription = styled.h4`
  color: grey;
`;

const MenuPrice = styled.h5`
  color: black;
`;

const RestaurantName = styled.h1`
  color: #1d2745;
`;

const MenuWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  cursor: pointer;
  padding-bottom: 16px;
  border-bottom: 1px solid grey;
`;

const MenuInfo = styled.div`
  ${flexColumn}
`;

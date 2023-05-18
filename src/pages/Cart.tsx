import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { useFetch } from "../hooks/useFetch";
import { cartProductsSelector } from "../recoil/selector";
import { ROUTER_PATH } from "../router";
import {
  Header,
  Page,
  CartProductList,
  TotalPriceTable,
  Button,
  Loading,
} from "../components";
import { useRouter } from "../hooks/useRouter";

const Cart = () => {
  const { goPage } = useRouter();
  const cartProducts = useRecoilValue(cartProductsSelector);
  const { isLoading } = useFetch();

  return (
    <>
      <Header />
      <Page>
        {isLoading ? (
          <Loading message="장바구니 불러오는 중..." />
        ) : (
          <>
            <TitleBox>장바구니</TitleBox>
            {cartProducts.length === 0 ? (
              <EmptyContainer>
                <span>🛒</span>
                <p>장바구니가 텅 비었어요</p>
                <Button onClick={goPage(ROUTER_PATH.Main)}>
                  상품 담으러 가기
                </Button>
              </EmptyContainer>
            ) : (
              <Container>
                <CartProductList />
                <TotalPriceTable />
              </Container>
            )}
          </>
        )}
      </Page>
    </>
  );
};

const TitleBox = styled.div`
  align-self: center;
  width: 85%;
  height: 40px;

  font-weight: 700;
  font-size: 25px;
  text-align: center;
  border-bottom: 4px solid var(--dark-gray);
`;

const Container = styled.section`
  display: flex;
  padding: 40px 8%;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const EmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  align-self: center;

  text-align: center;
  padding: 10% 0;

  & > span {
    font-size: 60px;
    margin-bottom: 25px;
  }
  & > p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 25px;
  }
`;

export default Cart;

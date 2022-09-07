import styled from "styled-components";

const CartListBox = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  padding: 20px 100px 20px 90px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  position: relative;
`;

const RadioBtn = styled.input`
  appearance: none;
  height: 20px;
  width: 20px;
  display: block;
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 2px solid #fa897b;
  &:after {
    content: "";
    height: 12px;
    width: 12px;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: #fa897b;
    border-radius: 50%;
    transition: 100ms ease-in-out 0s;
  }
  &:checked {
    &:after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const ImageBox = styled.div`
  margin-right: 36px;
  width: 160px;
  height: 160px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  margin-right: 48px;
  width: 418px;
`;

const ShopText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: #767676;
`;

const ProductText = styled.strong`
  display: block;
  margin: 10px auto;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;

const PriceText = styled.p`
  margin-bottom: 40px;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 700;
`;

const ShipText = styled(ShopText)``;

const OrderBox = styled.div`
  margin-left: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const PriceAllText = styled.p`
  font-size: 1.8rem;
  line-height: 2.3rem;
  color: #eb5757;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export {
  CartListBox,
  RadioBtn,
  ImageBox,
  InfoBox,
  ShopText,
  ProductText,
  PriceText,
  ShipText,
  PriceAllText,
  OrderBox,
  DeleteBtn,
};

import React, { useState } from "react";
import plusIcon from "../../../assets/icons/icon-plus-line.svg";
import minusIcon from "../../../assets/icons/icon-minus-line.svg";
import plusDisableIcon from "../../../assets/icons/icon-plus-line-disabled.svg";
import * as S from "./amountStyle";
import { fetchPutCartQuantity, CartItem } from "../../../features/cartListSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getToken } from "../../../features/authSlice";

interface AmountBtnProps {
  count?: number;
  getCount?: (res: number) => void; //선택 개수를 반환
  product_id?: number;
  cart_item_id?: number;
  item?: CartItem;
}

function AmountBtn({ count, getCount, item }: AmountBtnProps) {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(count || 1);
  const TOKEN = useAppSelector(getToken) || "";

  const onIncrease = () => {
    const quantity = amount + 1;
    setAmount(quantity);
    getCount?.(quantity);
    if (item) {
      const { product_id, cart_item_id, is_active } = item;
      dispatch(fetchPutCartQuantity({ TOKEN, product_id, quantity, cart_item_id, is_active }));
    }
  };

  const onDecrease = () => {
    const quantity = amount - 1 < 1 ? 1 : amount - 1;
    setAmount(quantity);
    getCount?.(quantity);
    if (item) {
      const { product_id, cart_item_id, is_active } = item;
      dispatch(fetchPutCartQuantity({ TOKEN, product_id, quantity, cart_item_id, is_active }));
    }
  };
  return (
    <S.AmountBtnBox>
      <S.MinusBtn onClick={onDecrease}>
        <img src={minusIcon} />
      </S.MinusBtn>
      <S.AmountText>{amount}</S.AmountText>
      <S.PlusBtn onClick={onIncrease}>
        <img src={plusIcon} />
      </S.PlusBtn>
    </S.AmountBtnBox>
  );
}

export default AmountBtn;

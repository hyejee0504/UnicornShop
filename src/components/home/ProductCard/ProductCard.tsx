import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Product } from "../../../features/productSlice";
import * as S from "./productCardStyle";

function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  return (
    <S.ProductItem onClick={() => navigate(`/products/${product.product_id}`)}>
      <S.ThumbContainer image={product.image} />
      <S.TextWrap>
        <Link to="#">
          <S.SellerText>{product.store_name}</S.SellerText>
        </Link>
        <S.ProductText>{product.product_name}</S.ProductText>
        <S.PriceText>
          {product.price.toLocaleString()}
          <S.WonText> 원</S.WonText>
        </S.PriceText>
      </S.TextWrap>
    </S.ProductItem>
  );
}

export default ProductCard;

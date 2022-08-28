import React from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductLists, ProductContainer } from "./homePageStyle";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { postProductAxios, selectProducts, getProductStatus } from "../../reducers/getProductSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(getProductStatus);
  const products = useAppSelector(selectProducts);
  useEffect(() => {
    if (status === "init") {
      dispatch(postProductAxios());
    }
  }, [status]);
  return (
    <ProductContainer>
      <ProductLists>
        {products &&
          products.map((product, index) => {
            return (
              <li key={index}>
                <ProductCard product={product} />
              </li>
            );
          })}
      </ProductLists>
    </ProductContainer>
  );
};

export default HomePage;
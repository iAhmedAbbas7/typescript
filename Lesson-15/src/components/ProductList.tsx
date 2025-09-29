// <== IMPORTS ==>
import Product from "./Product";
import useCart from "../hooks/useCart";
import type { ReactElement } from "react";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const { products } = useProducts();
  const { dispatch, REDUCER_ACTION, cart } = useCart();
  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          inCart={inCart}
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTION={REDUCER_ACTION}
        />
      );
    });
  }
  const content = <main className="main main--products">{pageContent}</main>;
  return content;
};

export default ProductList;

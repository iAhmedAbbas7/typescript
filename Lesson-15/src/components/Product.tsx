// <== IMPORTS ==>
import { memo, type ReactElement } from "react";
import type { ProductType } from "../context/ProductsProvider";
import type { ReducerAction, ReducerActionType } from "../context/CartProvider";

// <== PROPS TYPE ==>
type PropsType = {
  inCart: boolean;
  product: ProductType;
  REDUCER_ACTION: ReducerActionType;
  dispatch: React.Dispatch<ReducerAction>;
};

const Product = ({
  inCart,
  product,
  dispatch,
  REDUCER_ACTION,
}: PropsType): ReactElement => {
  const img: string = new URL(
    `../assets/images/${product.sku}.jpg`,
    import.meta.url
  ).href;
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTION.ADD, payload: { ...product, qty: 1 } });
  const itemInCart = inCart ? "  → Item in Cart: ✔️" : null;
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
  return content;
};

const areProductsEqual = (
  { product: prevProduct, inCart: prevInCart }: PropsType,
  { product: nextProduct, inCart: nextInCart }: PropsType
) => {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevInCart === nextInCart
  );
};

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;

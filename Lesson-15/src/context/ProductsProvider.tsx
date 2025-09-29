// <== IMPORTS ==>
import { createContext, useEffect, useState, type ReactElement } from "react";

// <== PRODUCTS TYPE ==>
export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

// <== INITIAL STATE ==>
const initialProductState: ProductType[] = [];

// <== PRODUCTS CONTEXT TYPE ==>
export type UseProductsContextType = {
  products: ProductType[];
};

// <== INITIAL CONTEXT STATE ==>
const initialContextState: UseProductsContextType = { products: [] };

// <== PRODUCTS CONTEXT ==>
const ProductsContext =
  createContext<UseProductsContextType>(initialContextState);

// <== CHILDREN TYPE ==>
type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

// <== PRODUCTS PROVIDER ==>
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initialProductState);
  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };
    fetchProducts().then((products) => setProducts(products));
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;

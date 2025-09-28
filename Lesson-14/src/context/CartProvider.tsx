// <== IMPORTS ==>
import { createContext, useMemo, useReducer, type ReactElement } from "react";

// <== CART ITEM TYPE ==>
export type CartItemType = {
  sku: string;
  qty: number;
  name: string;
  price: number;
};

// <== CART STATE TYPE ==>
type CartStateType = {
  cart: CartItemType[];
};

// <== CART INITIAL STATE ==>
const initialCartState: CartStateType = {
  cart: [],
};

// <== REDUCER ACTION TYPES ==>
const REDUCER_ACTION_TYPES = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

// <== EXPORTING REDUCER ACTION TYPE ==>
export type ReducerActionType = typeof REDUCER_ACTION_TYPES;

// <== REDUCER ACTION TYPE ==>
export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

// <== CART REDUCER FUNCTION ==>
const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.ADD: {
      if (!action.payload) {
        throw new Error("Action Payload Missing for ADD Action Type!");
      }
      const { sku, name, price } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku == sku
      );
      const qty: number = itemExists ? itemExists.qty + 1 : 1;
      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }
    case REDUCER_ACTION_TYPES.REMOVE: {
      if (!action.payload) {
        throw new Error("Action Payload Missing for REMOVE Action Type!");
      }
      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPES.QUANTITY: {
      if (!action.payload) {
        throw new Error("Action Payload Missing for QUANTITY Action Type!");
      }
      const { sku, qty } = action.payload;
      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.sku == sku
      );
      if (!itemExists) {
        throw new Error(
          "Item must be present in the Cart in order to Update the Quantity!"
        );
      }
      const updatedItem: CartItemType = { ...itemExists, qty };
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );
      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPES.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Invalid Reducer Action Type!");
  }
};

// <== CART CONTEXT ==>
const useCartContext = (initialCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initialCartState);
  const REDUCER_ACTION = useMemo(() => {
    return REDUCER_ACTION_TYPES;
  }, []);
  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);
  const totalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );
  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });
  return { dispatch, REDUCER_ACTION, totalItems, totalPrice, cart };
};

// <== CART CONTEXT TYPE ==>
export type UseCartContextType = ReturnType<typeof useCartContext>;

// <== INITIAL CART CONTEXT STATE ==>
const initialCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTION: REDUCER_ACTION_TYPES,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

// <== CART CONTEXT ==>
const CartContext = createContext<UseCartContextType>(initialCartContextState);

// <== CHILDREN TYPE ==>
type ChildrenType = { children?: ReactElement | ReactElement[] };

// <== CART PROVIDER ==>
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initialCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

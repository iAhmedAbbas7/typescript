// <== IMPORTS ==>
import { type ReactElement } from "react";
import {
  CounterContext,
  useCounterContext,
  type StateType,
} from "./counter.store";

// <== CHILDREN TYPE ==>
type ChildrenType = {
  children?: ReactElement | undefined;
};

// <== COUNTER PROVIDER ==>
export const CounterProvider = ({
  children,
  ...initialState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initialState)}>
      {children}
    </CounterContext.Provider>
  );
};

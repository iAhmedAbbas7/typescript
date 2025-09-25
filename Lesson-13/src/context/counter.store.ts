// <== IMPORTS ==>
import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  type ChangeEvent,
} from "react";

// <== STATE TYPE ==>
export type StateType = {
  count: number;
  text: string;
};

// <== INITIAL STATE ==>
export const initialState: StateType = { count: 0, text: "" };

// <== REDUCER ACTION ENUM ==>
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

// <== REDUCER ACTION TYPE ==>
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// <== REDUCER FUNCTION ==>
const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      throw new Error("Counter Error!");
  }
};

// <== USE COUNTER CONTEXT HOOK ==>
export const useCounterContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );
  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }, []);
  return { state, increment, decrement, handleTextInput };
};

// <== COUNTER CONTEXT TYPE ==>
export type CounterContextType = ReturnType<typeof useCounterContext>;

// <== INITIAL COUNTER CONTEXT STATE ==>
const initialCounterContextState: CounterContextType = {
  state: initialState,
  increment: () => {},
  decrement: () => {},
  handleTextInput: () => {},
};

// <== COUNTER CONTEXT ==>
export const CounterContext = createContext<CounterContextType>(
  initialCounterContextState
);

// <== COUNTER COUNT HOOK TYPE ==>
type UseCounterCountHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// <== USE COUNTER COUNT ==>
export const useCounterCount = (): UseCounterCountHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};

// <== COUNTER TEXT HOOK TYPE ==>
type UseCounterTextHookType = {
  text: string;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

// <== USE COUNTER TEXT ==>
export const useCounterText = (): UseCounterTextHookType => {
  const {
    state: { text },
    handleTextInput,
  } = useContext(CounterContext);
  return { text, handleTextInput };
};

import React from "react";
import { useImmer } from "use-immer";

const initialState = {
  bed: {
    id: "",
    size: "",
    name: "",
    image: "",
    price: 0,
  },
  accessories: {
    quantity: 1,
    color: {
      name: "",
      image: "",
      _id: "",
    },
    headboard: {
      name: "",
      price: 0,
      basePrice:0,
      value: "",
    },
    storage: {
      name: "",
      price: 0,
      basePrice:0,
      value: "",
    },
    feet: {
      name: "",
      price: 0,
      basePrice:0,
      value: "",
    },
    mattress: {
      name: "",
      price: 0,
      basePrice:0,
      value: "",
    },
  },
  total: 0,
};
const useProduct = () => {
  const [state, setState] = useImmer(initialState);

  const setBed = React.useCallback(
    (data: any) => {
      setState((draft) => {
        draft.bed = data;
      });
    },
    [setState]
  );

  const resetState = React.useCallback(() => {
    setState(Object.freeze(initialState));
  }, [setState]);

  const setAccessories = React.useCallback(
    (key: string, value: any) => {
      setState((draft: any) => {
        draft.accessories[key] = value;
      });
    },
    [setState]
  );
  const setTotal = React.useCallback(
    (data: any) => {
      setState((draft) => {
        draft.total = data;
      });
    },
    [setState]
  );
  return {
    setBed,
    setTotal,
    setAccessories,
    productState: state,
    resetState,
  };
};
export default useProduct;

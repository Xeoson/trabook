/* eslint-disable react/display-name */
"use client";
import { createContext, useContext, useMemo } from "react";

const StoreContext = createContext<any>({});

export const useStore = <S,>() => useContext(StoreContext) as S;

type InitState<Store extends new (args: any) => any> =
  ConstructorParameters<Store>[0] extends undefined
    ? {}
    : { initState: ConstructorParameters<Store>[0] };

export default <P extends {}, Store extends new (args?: any) => any>(
  Component: React.FC<P>,
  Store: Store
) => {
  return (props: P & InitState<Store>) => {
    const store = useMemo(
      () =>
        new Store(
          (props as { initState?: ConstructorParameters<Store>[0] }).initState
        ),
      []
    );
    return (
      <StoreContext.Provider value={store}>
        <Component {...props} />
      </StoreContext.Provider>
    );
  };
};

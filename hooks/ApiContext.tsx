import { createContext, ReactNode, useState } from "react";

export const ApiContext = createContext({});
const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;

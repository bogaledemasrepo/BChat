import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { io } from "socket.io-client";
const sock = io(`http://localhost:3000`);

export const ApiContext = createContext({});
const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApiContext.Provider
      value={{
        sock: sock,
        user: {},
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

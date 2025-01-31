import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";
import { io } from "socket.io-client";
const sock = io(`http://localhost:3000`);

export const ApiContext = createContext({
  sock: sock,
  user: {},
  setUserHandler: (val: string) => {},
});
const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  const setUserHandler = (val: string) => {
    setUser(val);
  };
  return (
    <ApiContext.Provider
      value={{
        sock: sock,
        user: user,
        setUserHandler,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;

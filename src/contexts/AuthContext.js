import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

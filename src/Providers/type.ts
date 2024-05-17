import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface IContext {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

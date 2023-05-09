import { createContext, useEffect, useState } from "react";
import { PuppiesContextType } from "../interfaces/types";
import { IPuppy } from "../interfaces/interfaces";
import { getPuppies } from "../services/puppyApi";

interface PuppiesProviderProps {
  children: React.ReactNode
}

export const PuppiesContext = createContext({});

export const PuppiesProvider = ( {children} : PuppiesProviderProps) => {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  const getData = async () => {
    setPuppies(await getPuppies());
  }


  useEffect(() => {
    getData();
  }, [])

  return (
    <PuppiesContext.Provider value={{puppies}}>
      {children}
    </PuppiesContext.Provider >
  )
}

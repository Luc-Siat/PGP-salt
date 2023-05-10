import { createContext, useEffect, useState } from "react";
import { PuppiesContextType } from "../interfaces/types";
import { IPuppy } from "../interfaces/interfaces";
import { getPuppies, postPuppy } from "../services/puppyApi";

interface PuppiesProviderProps {
  children: React.ReactNode
}

export const PuppiesContext = createContext({});


export const PuppiesProvider = ( {children} : PuppiesProviderProps) => {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);

  const postingPuppy = async (puppy: Partial<IPuppy>) => {
    const addedPuppy = await postPuppy(puppy);
    setPuppies( prevState => [addedPuppy, ...prevState])
  }

  const editPuppy = async (currentId : number, puppy: Partial<IPuppy>) => {
    // const updatedPuppy = await putPuppy(puppy);
    // const updatedPuppies = [updatedPuppy, ...puppies.filter(pup => pup.id !== puppy.id )]
    // setPuppies( updatedPuppies);
  }

  const getData = async () => {
    setPuppies(await getPuppies());
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <PuppiesContext.Provider value={{puppies, setPuppies, postingPuppy, editPuppy}}>
      {children}
    </PuppiesContext.Provider >
  )
}

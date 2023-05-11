import { createContext, useEffect, useState } from "react";
import { PuppiesContextType } from "../interfaces/types";
import { IPuppy } from "../interfaces/interfaces";
import { deletePuppy, getPuppies, postPuppy, putPuppy } from "../services/puppyApi";
import { stringify } from "querystring";
import { PuppyCard } from "../components/PuppyCard";

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

  const editPuppy = async (puppy: IPuppy) => {
    await putPuppy(puppy);
    const updatedPuppies = [puppy, ...puppies.filter(pup => pup.id !== puppy.id )];
    setPuppies(updatedPuppies);
  }

  const deletingPuppy = async (id : number) => {
    await deletePuppy(id);
    setPuppies(puppies.filter(pup => pup.id !== id));
  }

  const getData = async () => {
    setPuppies(await getPuppies());
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <PuppiesContext.Provider value={{puppies, setPuppies, postingPuppy, editPuppy, deletingPuppy}}>
      {children}
    </PuppiesContext.Provider >
  )
}

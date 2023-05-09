import { ContextType, useContext } from "react"
import { PuppiesContextType } from "../interfaces/types";
import { PuppiesContext } from "../context/PuppiesContext";


export const Home = () => {
  const  { puppies }  = useContext(PuppiesContext) as PuppiesContextType;

  return (
    <>
      { puppies.map(puppy => <PuppyCard puppy={puppy}/> ) }
    </>
  )
}

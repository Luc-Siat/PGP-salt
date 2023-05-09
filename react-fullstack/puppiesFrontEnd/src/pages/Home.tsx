import { ContextType, useContext } from "react"
import { PuppiesContextType } from "../interfaces/types";
import { PuppiesContext } from "../context/PuppiesContext";
import { PuppyCard } from "../components/PuppyCard";
import { AddPuppyForm } from "../components/AddPuppyForm";


export const Home = () => {
  const  { puppies }  = useContext(PuppiesContext) as PuppiesContextType;

  return (
    <>
      { puppies.map(puppy => <PuppyCard puppy={puppy} key={puppy.id}/> ) }

      < AddPuppyForm />
    </>
  )
}

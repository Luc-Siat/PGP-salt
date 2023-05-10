import { useContext } from "react"
import { PuppiesContextType } from "../interfaces/types";
import { PuppiesContext } from "../context/PuppiesContext";
import { PuppyCard } from "../components/PuppyCard";
import { PuppyForm } from "../components/PuppyForm";



export const Home = () => {
  const  { puppies, postingPuppy }  = useContext(PuppiesContext) as PuppiesContextType;

  return (
    <>
      { puppies.map(puppy => <PuppyCard puppy={puppy} key={puppy.id}/> ) }
      < PuppyForm func={ postingPuppy}/>
    </>
  )
}

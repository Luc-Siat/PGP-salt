import { useContext, useState } from "react"
import { IPuppy } from "../interfaces/interfaces"
import { PuppyForm } from "./PuppyForm"
import { PuppiesContextType } from "../interfaces/types"
import { PuppiesContext } from "../context/PuppiesContext"


type puppyCardProps = {
  puppy: IPuppy
}

export const PuppyCard = ( { puppy } : puppyCardProps) => {
  const  { editPuppy, deletingPuppy }  = useContext(PuppiesContext) as PuppiesContextType;

  const [formToggle, setFormToggle] = useState<boolean>(false);

  const handlePuppyUpdate = (updatedData: Partial<IPuppy>) => {
    setFormToggle(!formToggle);
      const updatedPuppy : IPuppy= {
        id: puppy.id,
        name: updatedData.name ? updatedData.name : puppy.name,
        breed: updatedData.breed ? updatedData.breed : puppy.breed,
        birthDate: updatedData.birthDate ? updatedData.birthDate : puppy.birthDate
    }
    editPuppy(updatedPuppy);
  }

  return (
    <div>
      <p>{puppy.name} {puppy.breed} {puppy.birthDate.toString()}</p>
      <button onClick={() => setFormToggle(!formToggle)}>edit</button>
      <button onClick={() => deletingPuppy(puppy.id)}>delete</button>
      { formToggle &&
        <div>
          <PuppyForm func={handlePuppyUpdate}/>
        </div>
      }
      </div>
  )
}

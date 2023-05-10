import { useState } from "react"
import { IPuppy } from "../interfaces/interfaces"
import { PuppyForm } from "./PuppyForm"
import { PuppiesContextType } from "../interfaces/types";


type puppyCardProps = {
  puppy: IPuppy
}

export const PuppyCard = ( { puppy } : puppyCardProps) => {
  const [formToggle, setFormToggle] = useState<boolean>(false);

  const handlePuppyUpdate = (updatedPuppy: Partial<IPuppy>) => {
    setFormToggle(!formToggle);
    editPuppy(puppy.id, updatedPuppy);
  }

  return (
    <div>
      <p>{puppy.name} {puppy.breed} {puppy.birthDate.toString()}</p>
      <button onClick={() => setFormToggle(!formToggle)}></button>
      { formToggle &&
        <div>
          <PuppyForm func={handlePuppyUpdate}/>
        </div>
      }
      </div>
  )
}

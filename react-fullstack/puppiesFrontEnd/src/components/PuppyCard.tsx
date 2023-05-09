import { IPuppy } from "../interfaces/interfaces"


type puppyCardProps = {
  puppy: IPuppy
}

export const puppyCard = ( { puppy } : puppyCardProps) => {
  return (
    <div>{puppy.name} {puppy.breed} p{puppy.birthdate}</div>
  )
}

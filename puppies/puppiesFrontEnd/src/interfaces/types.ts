import { IPuppy } from "./interfaces";

export type PuppiesContextType = {
  puppies: IPuppy[],
  postingPuppy: (puppy: Partial<IPuppy>) => void,
  editPuppy: (puppy: IPuppy) => void,
  deletingPuppy: (id : number) => void,
}

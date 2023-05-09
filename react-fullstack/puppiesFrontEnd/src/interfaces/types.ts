import { IPuppy } from "./interfaces";

export type PuppiesContextType = {
  puppies: IPuppy[],
  postingPuppy: (puppy: Partial<IPuppy>) => void
}

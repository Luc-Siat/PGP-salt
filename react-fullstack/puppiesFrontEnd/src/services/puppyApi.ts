import { IPuppy } from "../interfaces/interfaces";

const puppyApiUrl = "http://localhost:5200/puppies";

export const getPuppies = async () => {
  const response = await fetch(puppyApiUrl);
  return await response.json() as IPuppy[];
}

import { IPuppy } from "../interfaces/interfaces";

const puppyApiUrl = "http://localhost:5200/puppies";

export const getPuppies = async () => {
  const response = await fetch(puppyApiUrl);
  return await response.json() as IPuppy[];
}

export const postPuppy = async (puppy : Partial<IPuppy>) => {
  const response = await fetch(puppyApiUrl ,
    {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(puppy)
    })
  return await response.json() as IPuppy;
}

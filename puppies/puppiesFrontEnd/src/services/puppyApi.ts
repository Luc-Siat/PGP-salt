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

export const putPuppy = async ( puppy: IPuppy) => {
  return await fetch(`${puppyApiUrl}/${puppy.id}`,
  {
    method: 'PUT',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(puppy)
  });
}

export const deletePuppy = async (id : number) => {
  const response =  await fetch(`${puppyApiUrl}/${id}`,
  {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
  console.log(response);
}

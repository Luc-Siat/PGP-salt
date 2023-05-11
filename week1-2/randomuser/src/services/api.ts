import { IUser } from "../interfaces/interfaces";

// https://randomuser.me/api/


export const getUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const person = (await response.json()).results[0];
  return {
    name: `${person.name.first} ${person.name.last}`,
    address: `${person.location.street.number} ${person.location.street.name} ${person.location.city} ${person.location.postcode} ${person.location.country}`,
    age: person.dob.age
  } as IUser;
}

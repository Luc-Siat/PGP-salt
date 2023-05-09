
const puppyApiUrl = "http://localhost:5113/puppies";

const getPuppies = async () => {
  const response = await fetch(puppyApiUrl);
  return await response.json() as IPuppy[];
}

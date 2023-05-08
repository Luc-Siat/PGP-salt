import { useEffect, useState } from 'react'
import './App.css'
import { getUser } from './services/api';
import { IUser } from './interfaces/interfaces';

function App() {

  const [user, setUser] = useState<IUser>();

  const getData = async () => {
    setUser(await getUser());
    console.log(await getUser());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>{user?.name}</h3>
      <p>{user?.address}</p>
      <p>{user?.age} years old</p>
    </>
  )
}

export default App

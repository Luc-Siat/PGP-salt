import { SyntheticEvent, useEffect, useState } from 'react'
import './App.css'
import { getUser } from './services/api';
import { IUser } from './interfaces/interfaces';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {

  const [user, setUser] = useState<IUser>();

  const getData = async () => {
    setUser(await getUser());
  }

  const updateName = (name : string) => {
    const newUser : IUser = {
      name: name,
      address: user!.address,
      age: user!.age
    }
    setUser(newUser);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>{user?.name}</h3>
      <p>{user?.address}</p>
      <p>{user?.age} years old</p>
      <br />
      <div>
     <Formik
       initialValues={{ name: ''}}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           setSubmitting(false);
           updateName(values.name)
         }, 400);
       }}
      >
        <Form>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <button type="submit">
            Submit
          </button>
        </Form>
     </Formik>
   </div>
    </>
  )
}

export default App

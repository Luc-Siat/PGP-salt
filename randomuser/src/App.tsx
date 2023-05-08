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

  const updateName = (e: SyntheticEvent, name : string) => {
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
     <h1>Any place in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
    </>
  )
}

export default App

import React, { useContext } from 'react'
import { Formik, Form, Field} from 'formik'
import { postPuppy } from '../services/puppyApi'
import { PuppiesContext } from '../context/PuppiesContext'
import { PuppiesContextType } from '../interfaces/types'


export const AddPuppyForm = () => {

  const {puppies, postingPuppy} = useContext(PuppiesContext) as PuppiesContextType;

  return (
    <Formik
    initialValues={ {name: "", breed: "" , birthdate: new Date() }}
    onSubmit={ (puppy) =>  {
      postingPuppy(puppy);
    }}>

      <Form action="">
        <Field name="name" type="text"></Field>
        <Field name="breed" type="text"></Field>
        <Field name="birthdate" type="date"></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

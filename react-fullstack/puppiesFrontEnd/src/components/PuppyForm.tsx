import { Formik, Form, Field} from 'formik'
import { IPuppy } from '../interfaces/interfaces';

type PuppyFormProps = {
  func: (puppy : Partial<IPuppy>) => void;
}


export const PuppyForm = ( { func } : PuppyFormProps ) => {

  return (
    <Formik
    initialValues={ {name: "", breed: "" , birthdate: new Date() }}
    onSubmit={ (puppy) =>  {
      func(puppy);
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

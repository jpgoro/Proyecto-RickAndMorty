import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState, useContext } from "react";
import CharContext from "../../../../contexts/charContext/charContext";
import CustomField from "./presentational/CustomField";

const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "Enter a valid name!"
  },
  GENDER: {
    IS_REQUIRED: "Enter a valid gender!"
  },
  SPECIES: {
    IS_REQUIRED: "Enter a valid specie!"
  },
  STATUS: {
    IS_REQUIRED: "Enter a valid status!"
  }
};

function errorHandle(errors) {
  return {
    name() {
      return errors.name && (<div className="name-error">{errors.name}</div>)
    },
    gender() {
      return errors.gender && (<div className="gender-error">{errors.gender}</div>)
    },
    species() {
      return errors.species && (<div className="specie-error">{errors.specie}</div>)
    },
    status() {
      return errors.status && (<div className="status-error">{errors.status}</div>)
    }
  }
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  gender: Yup.string().required(TAGS_VALIDATION_FORM.GENDER.IS_REQUIRED),
  species: Yup.string().required(TAGS_VALIDATION_FORM.SPECIES.IS_REQUIRED),
  status: Yup.string().required(TAGS_VALIDATION_FORM.STATUS.IS_REQUIRED)
});

//Espero las props

export default function Reel() {
  const { chars, setChars } = useContext(CharContext)
  let initialValue = { name: "", gender: "", species: "", status: "", image: "" }
  const [status, setStatus] = useState("")
  const handleRefresh = () => {
      alert("Character created")
      setStatus("")
  }
  const fnValidationForm = (v) => {
    setChars(
      [...chars, { ...v, id: chars.length + 1 }]
    )
  }
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Schema}
      onSubmit={fnValidationForm}>
      {({ errors }) => {
        return (
          <Form className="form-container" >
            <Field name="name" placeholder="Enter a name..." />
            {errorHandle(errors).name()}
            <Field name="gender" placeholder="Enter a gender..." />
            {errorHandle(errors).gender()}
            <Field name="species" placeholder="Enter a specie..." />
            {errorHandle(errors).species()}
            <Field status={status} setStatus={setStatus} name="status" component={CustomField} />
            {errorHandle(errors).status()}
            <button className="submit-btn" type="submit" onClick={ handleRefresh }>Add Character</button>
          </Form>
        )
      }}
    </Formik>
  )
} 
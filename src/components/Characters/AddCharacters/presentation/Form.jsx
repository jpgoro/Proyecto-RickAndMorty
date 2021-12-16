import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState, useContext } from "react";
import CharContext from "../../../../contexts/charContext/charContext";
import CustomField from "./presentational/CustomField";

import '../../../../scss/app.scss'

const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "el nombre es obligatorio"
  },
  STATUS: {
    IS_REQUIRED: "Status es obligatorio"
  }
};

function errorHandle(errors) {
  return {

    name() {
      return errors.name && (<div className="name-error">{errors.name}</div>)
    },

    status() {
      return errors.status && (<div className="status-error">{errors.status}</div>)
    }

  }
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  status: Yup.string().required(TAGS_VALIDATION_FORM.STATUS.IS_REQUIRED)
});

//Espero las props

export default function Reel() {
  const { chars, setChars } = useContext(CharContext)
  let initialValue = { name: "", status: "", image: "" }
  const [cond, setCond] = useState("Alive")
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
          <div className="form-container">
          <Form className="form">
            <Field name="name" className="name" placeholder="type your name..." />
            {errorHandle(errors).name()}
              <Field cond={cond} setCond={setCond} name="status" component={CustomField} />
            {errorHandle(errors).status()}
            <button className="submit-btn" type="submit">Add Character</button>
          </Form>
          </div>
        )
      }}
    </Formik>
  )
} 
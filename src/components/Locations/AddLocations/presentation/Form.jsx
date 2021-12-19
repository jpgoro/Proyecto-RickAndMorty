import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import LocationContext from "../../../../contexts/locationContext/locationContext";
import "./Form.scss"

const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "Enter a valid name!"
  },
  TYPE: {
    IS_REQUIRED: "Enter a valid type!"
  },
  DIMENSION: {
    IS_REQUIRED: "Enter a valid dimension!"
  }
};

function errorHandle(errors) {
  return {

    name() {
      return errors.name && (<div className="description-error">{errors.name}</div>)
    },
    type() {
      return errors.type && (<div className="description-error">{errors.type}</div>)
    },
    dimension() {
      return errors.dimension && (<div className="description-error">{errors.dimension}</div>)
    }
  }
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  type: Yup.string().required(TAGS_VALIDATION_FORM.TYPE.IS_REQUIRED),
  dimension: Yup.string().required(TAGS_VALIDATION_FORM.DIMENSION.IS_REQUIRED)
});

//Espero las props

export default function Reel() {
  let initialValue = { name: "", type: "", dimension: "" }
  const { locations, setLocations } = useContext(LocationContext)
  const fnValidationForm = (v, {resetForm}) => {
    setLocations(
      [...locations, { ...v, id: locations.length + 1 }]
    )
    resetForm()
    alert("Character created")
  }

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Schema}
      onSubmit={fnValidationForm}>
      {({ errors }) => {
        return (
          <Form className="form-container">
            <Field name="name" className="name" placeholder="name" />
            {errorHandle(errors).name()}
            <Field name="type" className="name" placeholder="type" />
            {errorHandle(errors).type()}
            <Field name="dimension" className="name" placeholder="dimension" />
            {errorHandle(errors).dimension()}
            <button className="submit-btn" type="submit" >Add Location</button>
          </Form>
        )
      }}
    </Formik>
  )
}
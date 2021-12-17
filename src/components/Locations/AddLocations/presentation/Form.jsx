import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import LocationContext from "../../../../contexts/locationContext/locationContext";
import "./Form.scss"

const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "El nombre es obligatorio"
  },
  TYPE: {
    IS_REQUIRED: "El tipo es obligatorio"
  },
  DIMENTION: {
    IS_REQUIRED: "La dimension es obligatoria"
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
    dimention() {
      return errors.dimention && (<div className="description-error">{errors.dimention}</div>)
    }

  }
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  type: Yup.string().required(TAGS_VALIDATION_FORM.TYPE.IS_REQUIRED),
  dimention: Yup.string().required(TAGS_VALIDATION_FORM.DIMENTION.IS_REQUIRED)
});

//Espero las props

export default function Reel() {
  let initialValue = { name: "", type: "", dimention: "" }
  const { locations, setLocations } = useContext(LocationContext)
  const fnValidationForm = (v) => {
    setLocations(
      [...locations, { ...v, id: locations.length + 1 }]
    )
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
            <Field name="dimention" className="name" placeholder="dimention" />
            {errorHandle(errors).dimention()}
            <button className="submit-btn" type="submit">Add Location</button>
          </Form>
        )
      }}
    </Formik>
  )
}
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useContext, useState } from "react";
import LocationContext from "../../../../contexts/locationContext/locationContext";
import swal from "sweetalert";
import axios from "axios";

const urlLocationAdd = "https://serverprueba2.herokuapp.com/locations"


const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "Enter a valid name!",
  },
  TYPE: {
    IS_REQUIRED: "Enter a valid type!",
  },
  DIMENSION: {
    IS_REQUIRED: "Enter a valid dimension!",
  },
};

function errorHandle(errors) {
  return {
    name() {
      return (
        errors.name && <div className="description-error">{errors.name}</div>
      );
    },
    type() {
      return (
        errors.type && <div className="description-error">{errors.type}</div>
      );
    },
    dimension() {
      return (
        errors.dimension && (
          <div className="description-error">{errors.dimension}</div>
        )
      );
    },
  };
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  type: Yup.string().required(TAGS_VALIDATION_FORM.TYPE.IS_REQUIRED),
  dimension: Yup.string().required(TAGS_VALIDATION_FORM.DIMENSION.IS_REQUIRED),
});

//Espero las props

export default function Reel() {
  let initialValue = { name: "", type: "", dimension: "" };
  const { locations, setLocations } = useContext(LocationContext);
  const fnValidationForm = (v, { resetForm }) => {
    axios.post(urlLocationAdd,{...v})
    .then(res=>{
      setLocations([...locations, {...res}]);
    resetForm();
    swal({
      title: "Changes Saved",
      icon: "success",
      timer: "1300",
    });
    })
    .catch(err=>console.log(err))
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Schema}
      onSubmit={fnValidationForm}
    >
      {({ errors }) => {
        return (
          <Form className="form-container">
            <Field
              name="name"
              className="name"
              autoComplete="off"
              placeholder="name"
            />
            {errorHandle(errors).name()}
            <Field
              name="type"
              className="name"
              autoComplete="off"
              placeholder="type"
            />
            {errorHandle(errors).type()}
            <Field
              name="dimension"
              className="name"
              autoComplete="off"
              placeholder="dimension"
            />
            {errorHandle(errors).dimension()}

            <button className="submit-btn" type="submit">
              Add Location
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

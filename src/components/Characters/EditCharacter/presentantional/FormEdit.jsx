import CharContext from "../../../../contexts/charContext/charContext";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState, useContext } from "react";
import CustomField from "./presentational/CustomField";
import swal from "sweetalert";

const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "Enter a valid name!",
  },
  GENDER: {
    IS_REQUIRED: "Enter a valid gender!",
  },
  SPECIES: {
    IS_REQUIRED: "Enter a valid specie!",
  },
  STATUS: {
    IS_REQUIRED: "Enter a valid status!",
  },
};

function errorHandle(errors) {
  return {
    name() {
      return errors.name && <div className="edit-error">{errors.name}</div>;
    },
    gender() {
      return errors.gender && <div className="edit-error">{errors.gender}</div>;
    },
    species() {
      return (
        errors.species && <div className="edit-error">{errors.species}</div>
      );
    },
    status() {
      return errors.status && <div className="edit-error">{errors.status}</div>;
    },
  };
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  gender: Yup.string().required(TAGS_VALIDATION_FORM.GENDER.IS_REQUIRED),
  species: Yup.string().required(TAGS_VALIDATION_FORM.SPECIES.IS_REQUIRED),
  status: Yup.string().required(TAGS_VALIDATION_FORM.STATUS.IS_REQUIRED),
});

//Espero las props

export default function Reel() {
  const { chars, setChars, charsId, setCharsId, charsData } =
    useContext(CharContext);
  let initialValue = {
    name: charsData.name,
    gender: charsData.gender,
    species: charsData.species,
    status: charsData.status,
    image: charsData.image,
  };

  const fnValidationForm = (v) => {
    setChars(chars.map((el) => (el.id === charsId ? { ...el, ...v } : el)));
    setCharsId(null);
    swal({
      title: "Changes Saved",
      icon: "success",
      timer: "1300",
    });
  };

  const [status, setStatus] = useState(charsData.status);
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Schema}
      onSubmit={fnValidationForm}
    >
      {({ errors }) => {
        return (
          <Form className="form-editCharacter">
            <div className="field-container">
              <Field
                name="name"
                autoComplete="off"
                placeholder="Enter a name..."
              />
              {errorHandle(errors).name()}
            </div>
            <div className="field-container">
              <Field
                name="gender"
                autoComplete="off"
                placeholder="Enter a gender..."
              />
              {errorHandle(errors).gender()}
            </div>
            <div className="field-container">
              <Field
                name="species"
                autoComplete="off"
                placeholder="Enter a specie..."
              />
              {errorHandle(errors).species()}
            </div>
            <div className="field-container">
              <Field
                status={status}
                setStatus={setStatus}
                name="status"
                component={CustomField}
              />
              {errorHandle(errors).status()}
            </div>
            <button className="submit-btn" type="submit">
              Save changes
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

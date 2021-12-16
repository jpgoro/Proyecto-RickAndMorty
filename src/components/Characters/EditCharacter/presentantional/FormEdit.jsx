import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState, useContext } from "react";
import CharContext from "../../../../contexts/charContext/charContext";
import CustomField from "../../AddCharacters/presentation/presentational/CustomField";

import '../../../../scss/app.scss';

const TAGS_VALIDATION_FORM = {
  NAME: {
    IS_REQUIRED: "Please enter a valid name",
  },
};

function errorHandle(errors) {
  return {
    name() {
      return errors.name && <div className="name-error">{errors.name}</div>;
    },
  };
}

const Schema = Yup.object().shape({
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
});

//Espero las props

export default function FormEdit() {
  const { chars, setChars, charsId, setCharsId, charsData } =
    useContext(CharContext);
  let initialValue = {
    name: charsData.name,
    status: charsData.status,
    image: charsData.image,
  };
  const [cond, setCond] = useState(charsData.status);
  const fnValidationForm = (v) => {
    setChars(chars.map((el) => (el.id === charsId ? { ...el, ...v } : el)));
    setCharsId(null);
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Schema}
      onSubmit={fnValidationForm}
    >
      {({ errors }) => {
        return (
          <Form className="form--editCharacter">
            <Field name="name" placeholder="name" />
            {errorHandle(errors).name()}
            <Field
              cond={cond}
              setCond={setCond}
              name="status"
              component={CustomField}
            />
            <button className="submit-btn" type="submit">
              Guardar cambios
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

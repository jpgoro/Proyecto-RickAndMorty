import LocationContext from "../../../../contexts/locationContext/locationContext";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useContext} from 'react'
import swal from 'sweetalert';

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
      return errors.name && <div className="location-error">{errors.name}</div>;
    },

    type() {
      return errors.type && <div className="location-error">{errors.type}</div>;
    },
    dimension() {
      return (
        errors.dimension && (
          <div className="location-error">{errors.dimension}</div>
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

export default function FormEdit() {
  const { locationData, setLocations, locationId, locations, setLocationId } = useContext(LocationContext)
  let initialValue = {
    name: locationData.name,
    type: locationData.type,
    dimension: locationData.dimension,
  };

  const fnValidationForm = (v) => {
    setLocations(
      locations.map((el) => (el.id === locationId ? { ...el, ...v } : el))
    );
    setLocationId(null);
    swal({
      title: "Changes Saved",
      icon: "success",
      timer: "1300",
    });
  };

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
              <Field name="name" autoComplete="off" placeholder="name" />
              {errorHandle(errors).name()}
            </div>
            <div className="field-container">
              <Field name="type" autoComplete="off" placeholder="type" />
              {errorHandle(errors).type()}
            </div>
            <div className="field-container">
              <Field
                name="dimension"
                autoComplete="off"
                placeholder="dimension"
              />
              {errorHandle(errors).dimension()}
            </div>
            <button className="submit-btn" type="submit">
              Enviar
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

import * as Yup from "yup";
import {Formik, Form, Field} from "formik";
import { useContext } from "react";
import LocationContext from "../../../../contexts/locationContext/locationContext";
import "./Reel.scss"

const TAGS_VALIDATION_FORM = {
    NAME:{
      IS_REQUIRED:"El nombre es obligatorio"
    },
    TYPE:{
        IS_REQUIRED:"El tipo es obligatorio"
    },
    DIMENTION:{
      IS_REQUIRED:"La dimension es obligatoria"
  }  
  };

  function errorHandle(errors){
    return {

        name(){
            return errors.name && (<div className="status-error">{errors.name}</div>)
        },

        type(){
            return errors.status && (<div className="status-error">{errors.type}</div>)
        },
        dimention(){
          return errors.dimention && (<div className="status-error">{errors.dimention}</div>)
        }

    }
  }

  const Schema = Yup.object().shape({
    name:Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
    status:Yup.string().required(TAGS_VALIDATION_FORM.TYPE.IS_REQUIRED),
    dimention:Yup.string().required(TAGS_VALIDATION_FORM.DIMENTION.IS_REQUIRED)
  });

   //Espero las props
  
  export default function Reel(){
    const [locationData,setLocations,locationId,locations] = useContext(LocationContext)
    let initialValue = {name:locationData.name, type:locationData.type, dimention:locationData.dimention}  /* Ver que tengo que poner */
    const fnValidationForm = (v) => { 
      setLocations(    
        locations.map(el=> el.id === locationId ? {...el,...v} : el)
      )
      locationId(null)
  }

    return(
           <Formik 
            initialValues={initialValue}
            validationSchema={Schema}
            onSubmit={fnValidationForm}>
              {({errors})=>{
                  return(
                <Form className="form--editCharacter">
                    <Field name="name" placeholder="name"/>
                    {errorHandle(errors).name()}
                    <Field name="type" placeholder="type" />
                    {errorHandle(errors).type()}
                    <Field name="type" placeholder="type" />
                    {errorHandle(errors).dimention()}
                    <button className="submit-btn" type="submit">Enviar</button>
                </Form>
                ) 
              }}
           </Formik>            
    )
}
import React,{useState} from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { useNavigate,useLocation } from 'react-router-dom';

const Schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Invalid Short Password")
      .max(40, "Invalid Larger Password")
  });


const portal = {
    hidden:{
        opacity:0,
        scale:0
    },
    visible:{
        scale:1,
        opacity:1
    },
    exit:{
        opacity:0,
        scale:0
    }
}




const Login = () => {
  const initialValue = { username: "", email: "", password: "" };
  const [portalBool,setPortalBool] = useState(null)
  /* const navigation = useNavigate()
  const a = useLocation() */

  return (
    <>
    {  <motion.div variants={portal} initial="hidden" animate="visible" exit={portal.exit} className="portal"></motion.div> }
    <div className="form-user bg">
      <Formik
        initialValues={initialValue}
        validationSchema={Schema}
        onSubmit={(v) => {
          console.log(v);
        }}
      >
        {({ errors }) => {
          return (
            <Form className="form--addCharacter">
              <Field
                name="email"
                className="field"
                placeholder="type your email..."
              />
              {/* {errorHandle(errors).email()} */}
              <Field
                name="password"
                className="field"
                placeholder="type a password..."
              />
              {/* {errorHandle(errors).password()} */}
              <button className="submit-btn" type="submit">
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
    </>
  );
};

export default Login;

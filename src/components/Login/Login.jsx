import React, { useContext } from "react";
import RouterContext from "../../contexts/historyContext/history";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";

function errorHandle(errors) {
  return {
    email() {
      return errors.email && <div className="status-error">{errors.email}</div>;
    },
    password() {
      return (
        errors.password && <div className="status-error">{errors.password}</div>
      );
    },
  };
}

const Schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Invalid Short Password")
    .max(40, "Invalid Larger Password"),
});


const portalForm = {
  exit:{
    opacity:0,
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  },
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      delay:.6
    }
  }
  
}

const portal = {
  animate:{
    scale:[1,1,0],
    opacity:[1,1,0],
    transition:{
      duration:2,
      ease: "easeInOut"
    }
  }
} 


const Login = () => {
  const initialValue = { username: "", email: "", password: "" };
  const path = useContext(RouterContext);
  return (
    <>
      {path.from == "/Register" ? <motion.div variants={portal} animate="animate"></motion.div> : <h1>6</h1>}
      <div className="form-user">
        <motion.div variants={portalForm} initial="initial" animate="animate" exit="exit">
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
                {errorHandle(errors).email()}
                <Field
                  name="password"
                  className="field"
                  placeholder="type a password..."
                />
                {errorHandle(errors).password()}
                <button className="submit-btn" type="submit">
                  Login
                </button>
              </Form>
            );
          }}
        </Formik>
        </motion.div>
      </div>
    </>
  );
};

export default Login;

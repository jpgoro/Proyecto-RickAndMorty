import React, { useContext } from "react";
import RouterContext from "../../contexts/historyContext/history";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import "./Login.scss" 
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


const portal = {
  initial:{
    opacity:0,
    scale:0
  },
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
  const realRoute = useContext(RouterContext);
  
  return (
    <>
      {realRoute.from == "/Register" ? <motion.div className="portal" variants={portal} initial="initial" animate="animate"><motion.img className="img" src="src\portal-rick-and-morty.gif"  ></motion.img></motion.div> : <></> }
      <div className="form-user bg">
      <h2>{realRoute.from}</h2>
      <motion.div className="hola" initial={(realRoute.from == "/Register") ? {opacity:0} : {opacity:1}} animate={{opacity:1, transition:{delay:1, ease:"easeInOut"}}} > 
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

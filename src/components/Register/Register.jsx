import React,{useContext} from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import "./Register.scss";
import RouterContext from "../../contexts/historyContext/history";
import { motion, AnimatePresence } from "framer-motion";


function errorHandle(errors) {
  return {
    username() {
      return errors.username && <div className="name-error">{errors.username}</div>;
    },

    email() {
      return errors.email && <div className="status-error">{errors.email}</div>
      
    },
    password() {
      return errors.password && <div className="status-error">{errors.password}</div>

    },
  };
}

const Schema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters")
});

const portalForm = {
  exit:{
    opacity:0,
    transition:{
      duration:1,
      ease:"easeInOut"
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

const Register = () => {
  const initialValue = { username:"", email:"", password:"" };
  const realRoute = useContext(RouterContext);
  return (
    <>
    {realRoute.from == "/Login" ? <motion.div variants={portal} className="portal" animate="animate"><motion.img className="img" src="src\portal-rick-and-morty.gif" ></motion.img></motion.div> : <></>}
    <div className="form-user bg">
      <h2>{realRoute.from}</h2>
      <motion.div initial={realRoute.from == "/Login"  ? {opacity:0} : {opacity:1}} animate={{opacity:1, transition:{delay:1, ease:"easeInOut"}}}> 
      <Formik
        initialValues={initialValue}
        validationSchema={Schema}
        onSubmit={(v)=>{console.log(v)}}
      >
        {({ errors }) => {
          return (
            <Form className="form--addCharacter">
              <Field
                name="username"
                className="field"
                placeholder="type your username..."
              />
              {errorHandle(errors).username()}
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
                Register
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

export default Register;


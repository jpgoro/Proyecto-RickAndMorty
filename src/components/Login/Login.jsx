import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function errorHandle(errors) {
  return {
    email() {
      return (
        errors.email && <div className="description-error">{errors.email}</div>
      );
    },
    password() {
      return (
        errors.password && (
          <div className="description-error">{errors.password}</div>
        )
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
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    scale: [1, 1, 0],
    opacity: [1, 1, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const tokenStore = (body, nav) => {
  axios
    .post("http://localhost:5002/users/login", body)
    .then((res) => {
      console.log(res);
      localStorage.setItem("UserToken", res.data.token);
      nav("/");
    })
    .catch((err) => console.log(err));
};

const Login = () => {
  const initialValue = { username: "", email: "", password: "" };
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="portal"
        variants={portal}
        initial="initial"
        animate="animate"
      >
        <motion.img
          className="img"
          src="src\portal-rick-and-morty.gif"
        ></motion.img>
      </motion.div>
      <div className="form-user bg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, ease: "easeInOut" } }}
        >
          <Formik
            initialValues={initialValue}
            validationSchema={Schema}
            onSubmit={(v) => {
              tokenStore(v, navigate);
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

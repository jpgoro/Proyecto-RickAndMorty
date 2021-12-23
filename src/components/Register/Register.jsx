import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import "./Register.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import axios from "axios";

function errorHandle(errors) {
  return {
    username() {
      return (
        errors.username && (
          <div className="description-error">{errors.username}</div>
        )
      );
    },

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
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
});

const registerUser = (body, nav) => {
  axios
    .post("https://serverprueba2.herokuapp.com/users/register", body)
    .then((res) => {
      nav("/login");
    })
    .catch((err) => console.log(err));
};

const portal = {
  animate: {
    scale: [1, 1, 0],
    opacity: [1, 1, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Register = () => {
  const initialValue = { username: "", email: "", password: "" };
  const navigate = useNavigate();

  return (
    <>
      <motion.div variants={portal} className="portal" animate="animate">
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
              registerUser(v, navigate);
            }}
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
                    type="password"
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

/* 
  Estado en el contexto que si venis de login el estado sea true.
  Si ahora venis Register el estado sea true.
  Si venis de cualquier que sea false
*/

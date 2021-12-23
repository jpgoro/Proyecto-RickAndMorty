import {useContext} from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import axios from "axios";
import UserContext from "../../../contexts/userContext/UserContext";

const urlEditUser = "https://serverprueba2.herokuapp.com/users"


function errorHandle(errors) {
  return {
    username() {
      return errors.username && <div className="description-error">{errors.username}</div>;
    }
  };
}

const Schema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters")
});

const editUser = (user,nav,setUserInfo)=>{
  axios.put(urlEditUser,user)
    .then(res=>{
        setUserInfo(res.data.user)
        localStorage.setItem("UserToken",res.data.token)
        nav("/")
  })
  .catch(err=>console.log(err))
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

const EditUser = () => {
  const {userInfo,setUserInfo} = useContext(UserContext)
  const initialValue = { username:userInfo.username || "hola"};
  const navigate = useNavigate()

  return (
    <>
    <motion.div variants={portal} className="portal" animate="animate"><motion.img className="img" src="src\portal-rick-and-morty.gif" ></motion.img></motion.div> 
    <div className="form-user bg">
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2, ease:"easeInOut"}}}> 
      <motion.h2 style={{textAlign:"center"}} >Edit My Account</motion.h2>
      <Formik
        initialValues={initialValue}
        validationSchema={Schema}
        onSubmit={(v)=>{
          let user = {username:v.username,email:userInfo.email}
          editUser(user,navigate,setUserInfo)
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
              <button className="submit-btn" type="submit">
                Edit My User
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

export default EditUser;
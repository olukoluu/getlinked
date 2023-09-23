import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const useValidation = () => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,3}$/i;

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        first_name: "",
        topic: "",
        email: "",
        message: "",
      },
      validationSchema: Yup.object({
        first_name: Yup.string().required("Required"),
        topic: Yup.string().required("Required"),
        email: Yup.string()
          .email()
          .required("Required")
          .matches(emailRegex, "Invalid email address"),
        message: Yup.string().required("Required"),
      }),
      onSubmit: async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        fetch(`${import.meta.env.VITE_API_URL}/hackathon/contact-form`,
        {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body : JSON.stringify(values)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        actions.resetForm();
      },
    });

  return [values, handleBlur, handleChange, handleSubmit, touched, errors];
};

export default useValidation;

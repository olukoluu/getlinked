import { useFormik } from "formik";
import * as Yup from "yup";

const useRegisterValidation = (setIsSuccess) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]{2,3}$/i;

  const { values, handleBlur, handleChange, handleSubmit, touched, errors, isSubmitting, isValid, dirty } =
    useFormik({
      initialValues: {
        team_name: "",
        project_topic: "",
        phone_number: "",
        email: "",
        category: "",
        group_size: "",
        privacy_policy_accepted: false,
      },
      validationSchema: Yup.object({
        team_name: Yup.string().required("Required"),
        project_topic: Yup.string().required("Required"),
        phone_number: Yup.number("invalid number").required("Required"),
        email: Yup.string()
          .email()
          .required("Required")
          .matches(emailRegex, "Invalid email address"),
        category: Yup.number()
          .oneOf([1, 2, 3], "Invalid Category")
          .required("Required"),
        group_size: Yup.number()
          .oneOf([7, 8, 9, 10], "Invalid Size")
          .required("Required"),
        privacy_policy_accepted: Yup.boolean().oneOf(
          [true],
          "Please accept the terms and condition"
        ).required('Required'),
      }),
      onSubmit: async (values, actions) => {
        console.log(values)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        fetch(`${import.meta.env.VITE_API_URL}/hackathon/registration`,
        {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body : JSON.stringify(values)
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
         
        setIsSuccess(true)
        actions.resetForm();
      },
    });


  return [values, handleBlur, handleChange, handleSubmit, touched, errors, isSubmitting, isValid, dirty];
};

export default useRegisterValidation;

import React, { useEffect } from "react";
import useRegisterValidation from "../FormValidation/useRegisterValidation";
import Button from "../UI/Button";
import Input from "../UI/Input";

const INPUT = [
  {
    id: "team_name",
    type: "text",
    placeholder: "Enter the name of your group",
    label: `Team's Name`,
  },
  {
    id: "phone_number",
    type: "tel",
    placeholder: "Enter your phone number",
    label: `Phone`,
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter the your email",
    label: `Email`,
  },
  {
    id: "project_topic",
    type: "text",
    placeholder: "What is your group project topic",
    label: `Project Topic`,
  },
];

const RegisterForm = ({ setIsSuccess }) => {
  const [values, handleBlur, handleChange, handleSubmit, touched, errors] =
    useRegisterValidation(setIsSuccess);

  return (
    <div className=" z-30 md:w-2/4 md:bg-[#120a29] flex flex-col p-6 md:p-20 ">
      <h2 className="absolute top-8 left-16 md:static md:text-xl text-[#D434FE] font-semibold">
        Register
      </h2>
      <p className="text-xs mt-6 mb-3">
        Be part of this movement!...............
      </p>
      <h3 className=" text-xl font-semibold mb-8">CREATE YOUR ACCOUNT</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-3 md:gap-5">

          {INPUT.map(({ id, type, label, placeholder }) => (
            <Input
              key={id}
              name={id}
              type={type}
              label={label}
              placeholder={placeholder}
              style={" w-[100%] md:w-[45%]"}
              value={values[id]}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched[id]}
              error={errors[id]}
            />
          ))}

          <div className=" w-[60%] md:w-[45%] flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <select
              className=" bg-[#120a29] border rounded p-2 px-3 text-xs"
              name="category"
              id="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select your category</option>
              <option value="1">MOBILE</option>
              <option value="2">WEB</option>
              <option value="3">BACKEND</option>
            </select>
            {touched.category && errors.category && (
              <p className=" text-red-500">{errors.category}</p>
            )}
          </div>

          <div className=" w-[36%] md:w-[45%] flex flex-col gap-1">
            <label htmlFor="size">Size</label>
            <select
              className=" bg-[#120a29] border rounded p-2 md:px-4 text-xs"
              name="group_size"
              id="group_size"
              value={values.group_size}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {touched.group_size && errors.group_size && (
              <p className=" text-red-500">{errors.group_size}</p>
            )}
          </div>
          <div className="">
            <p className=" text-xs text-red-400">
              Please review your registration details before submitting
            </p>
            <input
              type="checkbox"
              name="privacy_policy_accepted"
              id="privacy_policy_accepted"
              checked={values.privacy_policy_accepted}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor="privacy_policy_accepted">
              {" "}
              I agreed with the event terms and conditions and privacy policy
            </label>
            {touched.privacy_policy_accepted &&
              errors.privacy_policy_accepted && (
                <p className=" text-red-500">
                  {errors.privacy_policy_accepted}
                </p>
              )}
          </div>
          <Button
            type="submit"
            text={"Submit Now"}
            style={" w-full disabled:bg-slate-600"}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

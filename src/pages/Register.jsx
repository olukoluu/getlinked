import React, { useState } from "react";
import { flare, register, star, starpu } from "../assets/image";
import Navbar from "../component/Navbar";
import RegisterForm from "../form/RegisterForm";
import SuccessModal from "../UI/SuccessModal";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const isContact = true;
  const [isSuccess, setIsSuccess] = useState(false)

  const navigate = useNavigate();
	const goBack = () => {
		navigate('/', {replace: true});
	}

  return (
    <>
      <Navbar isContact={isContact} />
      {isSuccess && <SuccessModal setIsSuccess={setIsSuccess} />}
      <div className=" md:overflow-hidden relative pt-10 md:pt-0 md:mt-20 md:pr-24  flex flex-col md:flex-row justify-between items-center md:h-[88vh] w-full text-sm">
      <div onClick={goBack} className=" md:hidden absolute top-8 left-8 border border-[#D434FE] rounded-full z-40">
          <Icon icon="uil:arrow-left" width="20" />
        </div>
      <img
          src={star}
          className="absolute left-[80%] md:left-[12%] top-10 md:bottom-36 opacity-10 w-4 animate-pulse"
        />
        <img
          src={star}
          className="absolute right-[10%] bottom-10 md:bottom-36 opacity-10 w-4 animate-pulse"
        />
        <img
          src={starpu}
          className="absolute left-4 md:left-[45%] top-[42%] opacity-60 w-3 animate-pulse"
        />
        <img
          src={starpu}
          className="absolute left-4 md:left-[65%] bottom-[4%] opacity-60 w-3 animate-pulse"
        />
        <img
          src={flare}
          alt=""
          className=" z-10 opacity-40 absolute -left-[30%] md:-left-[20%] md:-top-[20%] md:w-[50%]"
        />
        <img
          src={flare}
          alt=""
          className=" z-10 opacity-50 absolute -right-[100%] md:-right-[20%] md:-bottom-[45%] md:w-[50%]"
        />
        <img src={register} className="w-2/4" />
        <RegisterForm setIsSuccess={setIsSuccess} />
      </div>
    </>
  );
};

export default Register;

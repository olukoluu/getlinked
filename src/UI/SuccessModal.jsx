import React from "react";
import { successdone, successman } from "../assets/image";
import Button from "./Button";

const SuccessModal = ({setIsSuccess}) => {
	const goBack = () => {
		setIsSuccess(false)
	}

  return (
    <div className=" fixed flex flex-col justify-center items-center top-0 bg-[rgba(21, 14, 40, 0.93)] w-full h-[100vh] z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <div className="flex flex-col justify-center items-center bg-transparent w-fit border p-10">
        <div className=" relative w-fit">
          <img src={successman} className=" w-52" />
          <img src={successdone} className=" w-32 absolute top-6 -left-5" />
        </div>
        <h2>Congratulations</h2>
        <h2>you have successfully Registered!</h2>
        <p className=" text-xs mt-2">Yes, it was easy and you did it!</p>
        <p className=" text-xs mb-5">check your mail box for next step</p>
        <Button text={'Back'} style={' w-full'} onClick={goBack} />
      </div>
    </div>
  );
};

export default SuccessModal;

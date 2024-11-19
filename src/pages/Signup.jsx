import React from "react";
import Navbar from "../components/navbar/Navbar";
import Form from "../components/form/Form";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="w-full  min-h-screen flex flex-col justify-center items-center gap-[1rem]">
        <h1 className="text-[2rem] font-bold tracking-tight">
          Create an account
        </h1>
        <Form component={'signup'}/>
      </div>
    </>
  );
}
export default Signup;

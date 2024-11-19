import React from "react";
import Form from "../components/form/Form";
import Navbar from "../components/navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar/>
      <div className="w-full  min-h-screen flex flex-col justify-center items-center gap-[2rem]">
        <h1 className="text-[2rem] font-bold tracking-tight">
          Welcome back
        </h1>
        <Form component={"login"} />
      </div>
    </>
  );
}

export default Login;

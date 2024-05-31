import React from "react";
import LoginForm from "../organisms/LoginForm";
import LoginAndRegisterPageImage from "../molecules/LoginAndRegisterPageImage";

function LoginTemplate() {
  return (
    <>
      <div className="bg-gray-100 flex shadow-2xl max-w-3xl md:p-0 p-10 items-center rounded-2xl">
        {/* image */}
        <div className="w-1/2 p-5  md:block hidden">
          <LoginAndRegisterPageImage />
        </div>

        {/* form */}
        <div className="md:w-1/2">
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginTemplate;

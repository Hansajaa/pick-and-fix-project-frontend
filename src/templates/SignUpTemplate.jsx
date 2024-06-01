import React from "react";
import LoginAndRegisterPageImage from "../molecules/LoginAndRegisterPageImage";
import LoginForm from "../organisms/LoginForm";
import SignupForm from "../organisms/SignupForm";

function SignUpTemplate() {
  return (
    <>
      <div className="bg-gray-100 flex shadow-2xl max-w-3xl md:p-0 p-10 items-center rounded-2xl">
        {/* form */}
        <div className="md:w-1/2">
          <SignupForm/>
        </div>

        {/* image */}
        <div className="w-3/5 p-2  md:block hidden">
          <LoginAndRegisterPageImage />
        </div>
      </div>
    </>
  );
}

export default SignUpTemplate;

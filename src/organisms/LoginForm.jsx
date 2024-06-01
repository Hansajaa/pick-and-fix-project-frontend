import React from "react";
import Devider from "../molecules/Devider";
import AuthButton from "../atoms/buttons/AuthButton";
import Paragraph from "../atoms/texts/Paragraph";
import LevelTwoHeading from "../atoms/headings/LevelTwoHeading";
import { useForm } from "react-hook-form";
import GoogleAuthenticationButton from "../atoms/buttons/GoogleAuthenticationButton";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <>
      <LevelTwoHeading
        content="Login"
        classes="font-bold text-2xl mt-3 text-center text-[#354F52]"
      />
      <Paragraph
        classes="mt-3 text-center text-[#354F52]"
        content="If you're already a member, easily login"
      />

      <form action="" className="flex flex-col p-3 gap-4">
        {/* username input field */}
        <input
          className="p-2 mt-8 rounded-xl"
          type="text"
          placeholder="Username"
          {...register("userName", {
            required: {
              value: true,
              message: "* Required",
            },
          })}
        />
        <span className="-mt-3 text-xs text-[red]">
          {errors.userName?.message}
        </span>

        {/* password input field */}
        <div className="relative">
          <input
            className="p-2 mt-5 rounded-xl w-full"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "* Required",
              },
            })}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            className="bi bi-eye absolute top-1/2 right-3 translate-y-0.5"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
          </svg>
        </div>
        <span className="-mt-3 text-xs text-[red]">
          {errors.password?.message}
        </span>

        {/* Login Button */}
        <AuthButton label="Login" onClick={handleSubmit(handleClick)} />
      </form>

      <Devider />

      {/* Google Login Button */}
      <div className="p-3">
        <GoogleAuthenticationButton label={"Login with google"} />
      </div>

      <a className="ml-4 text-xs border-b py-4 text-gray-700" href="">
        Forgot Your Password ?
      </a>

      <div className="flex justify-between text-sm item-center mt-4">
        <Paragraph classes="mt-2" content="Don't have an account?" />
        <Link to={"/signup"} className="bg-white px-5 py-2 border rounded-xl mb-3 mr-4 hover:scale-110 duration-300">
          Register
        </Link>
      </div>
    </>
  );
}

export default LoginForm;

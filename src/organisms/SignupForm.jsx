import React, { useState } from "react";
import LevelTwoHeading from "../atoms/headings/LevelTwoHeading";
import Paragraph from "../atoms/texts/Paragraph";
import AuthButton from "../atoms/buttons/AuthButton";
import Devider from "../molecules/Devider";
import GoogleAuthenticationButton from "../atoms/buttons/GoogleAuthenticationButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function SignupForm() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = (data) => {
    const user = {
        username: data?.userName,
        email: data?.email,
        contactNumber: data?.contactNumber,
        password: data?.password,
    }
    
    axios
      .post("http://localhost:3000/auth/create-user", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        reset();
        successAlert();
      })
      .catch((err) => console.log(err));
  };

  const successAlert = async () => {
    await Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You're Registered Successfully",
      showConfirmButton: false,
      timer: 1500
    });

    navigate('/');
  }

  const [isExistsUsername, setIsExistsUsername] = useState(false);

  // const checkUsername = () => {
  //   axios
  //     .post(
  //       `http://localhost:3001/api/checkUsername?userName=${getValues(
  //         "userName"
  //       )}`
  //     )
  //     .then((res) => {
  //       if (res.data.data == true) {
  //         setIsExistsUsername(true);
  //       } else {
  //         setIsExistsUsername(false);
  //       }
  //     })
  //     .catch((err) => {
  //       setIsExistsUsername(false);
  //     });
  // };

  return (
    <>
      <LevelTwoHeading
        content="Sign Up"
        classes="font-bold text-2xl mt-3 text-center text-[#354F52]"
      />
      <Paragraph classes="mt-2 text-center text-[#354F52]" content="Welcome" />

      <form action="" className="flex flex-col p-3 gap-5">
        {/* username input field */}
        <input
          className="p-2 mt-3 rounded-xl"
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
          {isExistsUsername
            ? "Username Already Exists"
            : errors.userName?.message}
        </span>

        {/* contact number input field */}
        <input
          className="p-2 rounded-xl"
          type="number"
          placeholder="* Contact Number"
          {...register("contactNumber", {
            required: {
              value: true,
            },
          })}
        />

        {/* email input field */}
        <input
          className="p-2 rounded-xl"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "* Required",
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email",
            },
          })}
        />
        <span className="-mt-3 text-xs text-[red]">
          {errors.email?.message}
        </span>

        {/* password input field */}
        <div className="relative">
          <input
            className="p-2 rounded-xl w-full"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "* Required",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                message:
                  "Requires a minimum of 8 characters *[a-z], *[A-Z], *[!@#$%^&*]",
              },
            })}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            className="bi bi-eye absolute top-1/3 right-3 translate-y-0.5"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
          </svg>
        </div>
        <span className="-mt-3 text-xs text-[red]">
          {errors.password?.message}
        </span>

        {/* Signup Button */}
        <AuthButton label="Sign Up" onClick={handleSubmit(handleClick)} />
      </form>

      <Devider />

      {/* Google Login Button */}
      <div className="p-3">
        <GoogleAuthenticationButton label={"Sign Up with google"} />
      </div>

      <div className="flex justify-between text-sm item-center mt-4">
        <Paragraph classes="mt-2 ml-2" content="You Already have an account?" />
        <Link
          to={"/"}
          className="bg-white px-5 py-2 border rounded-xl mb-3 mr-4 hover:scale-110 duration-300"
        >
          Login
        </Link>
      </div>
    </>
  );
}

export default SignupForm;

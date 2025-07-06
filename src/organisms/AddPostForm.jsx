import React from "react";
import { FileInput, Label, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddPostForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();

    // Append text fields
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("contact", data.contact);
    formData.append("location", data.location);

    // Append file
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const response = await fetch("http://localhost:3001/advertisement", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Post created successfully!",
          confirmButtonColor: "#16a34a",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: result.message || "Something went wrong.",
        });
      }
      reset(); // Clear form after submit
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to submit post. Please try again later.",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Image Upload */}
        <div className="flex w-full items-center justify-center">
          <Label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-300 hover:bg-gray-200"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG or JPG (MAX. 800x400px)</p>
            </div>
            <FileInput
              id="dropzone-file"
              className="hidden"
              {...register("image", { required: true })}
            />
          </Label>
        </div>
        {errors.image && <p className="text-red-500">Image is required</p>}

        {/* Title */}
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full rounded-md mt-5 py-4 bg-gray-400 text-white"
          placeholder="Title"
          type="text"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        {/* Description */}
        <Textarea
          {...register("description", { required: "Description is required" })}
          className="mt-5 bg-gray-400 text-white"
          placeholder="Description"
          rows={4}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="mt-5 gap-7 flex flex-col sm:flex-row">
          {/* Location */}
          <input
            {...register("location", { required: "Location is required" })}
            placeholder="Location"
            type="text"
            className="rounded-md w-full sm:w-1/2 bg-gray-400 text-white"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}

          {/* Contact */}
          <input
            {...register("contact", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact must be a 10-digit number",
              },
            })}
            placeholder="Contact"
            type="text"
            className="rounded-md sm:w-1/2 bg-gray-400 text-white"
          />
          {errors.contact && (
            <p className="text-red-500">{errors.contact.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
        >
          Submit Post
        </button>
      </form>
    </>
  );
}

export default AddPostForm;

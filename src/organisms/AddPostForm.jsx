import React from "react";
import { FileInput, Label, Textarea } from "flowbite-react";

function AddPostForm() {
  return (
    <>
      {/* image input field */}
      <div className="flex w-full items-center justify-center">
        <Label
          htmlFor="dropzone-file"
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-300 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
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
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
             PNG or JPG (MAX. 800x400px)
            </p>
          </div>
          <FileInput id="dropzone-file" className="hidden" />
        </Label>
      </div>

      {/* Title input field */}
      <input
        className="w-full rounded-md mt-5 py-4 bg-gray-400 text-white border-[#84A98C] hover:border-[#84A98C] focus:border-[#84A98C] focus:outline-none focus:ring-0 focus:shadow-md"
        placeholder="Title"
        type="text"
      />

      {/* Description input field */}
      <Textarea
        className="mt-5 bg-gray-400 text-white border-[#84A98C] hover:border-[#84A98C] focus:border-[#84A98C] focus:outline-none focus:ring-0 focus:shadow-md"
        id="comment"
        placeholder="Description"
        required
        rows={4}
      />

      <div className="mt-5 gap-7 flex flex-col sm:flex-row">
        {/* Location input field */}
        <input placeholder="Location" type="text" className="rounded-md w-full sm:w-1/2 lg:w-1/2 bg-gray-400 text-white border-[#84A98C] hover:border-[#84A98C] focus:border-[#84A98C] focus:outline-none focus:ring-0 focus:shadow-md" />

        {/* Contact input field */}
        <input  placeholder="Contact" type="number" className="rounded-md sm:w-1/2 bg-gray-400 text-white border-[#84A98C] hover:border-[#84A98C] focus:border-[#84A98C] focus:outline-none focus:ring-0 focus:shadow-md" />
      </div>
    </>
  );
}

export default AddPostForm;

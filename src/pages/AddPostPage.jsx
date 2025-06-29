import React from "react";
import Navbar from "../organisms/Navbar";
import AddPostForm from "../organisms/AddPostForm";

function AddPostPage(props) {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* form */}
      <div className="mt-10 p-3">
        <AddPostForm />
      </div>
    </>
  );
}

export default AddPostPage;

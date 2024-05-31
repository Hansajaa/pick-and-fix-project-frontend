import React from "react";

function Paragraph({ content, classes }) {
  return (
    <>
      <p className={classes}>{content}</p>
    </>
  );
}

export default Paragraph;

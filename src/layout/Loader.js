import React from "react";
import { FiLoader } from "react-icons/fi";

function Loader() {
  return (
    <div className="loader">
      <FiLoader className="icon-spin" />
    </div>
  );
}

export default Loader;

import React from "react";
import "./form.css"
import Leftcontainer from "./Leftcontainer";
import Rightcontainer from "./rightcontainer";

export default function Form() {
  return (
    <>
    <div className="inputform">
      <Leftcontainer />
      <Rightcontainer />
    </div>
    </>
  );
}

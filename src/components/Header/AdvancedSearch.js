import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
    user_name: yup
      .string()
      .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
      .required("This field is required"),
    password: yup.string().required("This field is required"),
  });
  
function AdvancedSearch() {
  return <div></div>;
}

export default AdvancedSearch;

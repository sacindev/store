import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import fetchLogin from "../../services/fetchLogin";
import fetchRegistry from "../../services/fetchRegistry";
import Form from "react-bootstrap/Form";
import "./Form.css";

const CONTRACT = {
  LOGIN: "login",
  REGISTRY: "registry",
  PRODUCT: "product",
};

const schema = yup.object().shape(
  {
    first_name: yup
      .string()
      .lowercase()
      .matches(/^[A-Za-z\s]*$/g, "This field is not correct")
      .required("This field is required"),
    last_name: yup
      .string()
      .lowercase()
      .matches(/^[A-Za-z\s]*$/g, "This field is not correct")
      .required("This field is required"),
    user_name: yup
      .string()
      .lowercase()
      .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
      .required("This field is required"),
    birthday: yup.date().required("This field is required"),
    email: yup
      .string()
      .lowercase()
      .email("Email is not correct")
      .required("This field is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    contract: yup.string().required(),
  },
  {
    user_name: yup
      .string()
      .lowercase()
      .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
      .required("This field is required"),
    password: yup.string().required("Password is required"),
    contract: yup.string().required(),
  },
  {
    title: yup
      .string()
      .lowercase()
      .max(50)
      .min(15)
      .matches(/^[A-Za-z0-9\s]*$/g, "This field is not correct")
      .required("This field is required"),

    description: yup
      .string()
      .max(500)
      .min(150)
      .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
      .required("Password is required"),
    categorie: yup.string().required("This field is required"),
    price: yup.number().min(0.0).max(1000.0),
    file: yup.string(),
    contract: yup.string().required(),
  }
);
const schema_logup = yup.object().shape({
  first_name: yup
    .string()
    .lowercase()
    .matches(/^[A-Za-z\s]*$/g, "This field is not correct")
    .required("This field is required"),
  last_name: yup
    .string()
    .lowercase()
    .matches(/^[A-Za-z\s]*$/g, "This field is not correct")
    .required("This field is required"),
  user_name: yup
    .string()
    .lowercase()
    .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
    .required("This field is required"),
  birthday: yup.date().required("This field is required"),
  email: yup
    .string()
    .lowercase()
    .email("Email is not correct")
    .required("This field is required"),
  password: yup.string().required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  contract: yup.string().required(),
});
const schema_login = yup.object().shape({
  user_name: yup
    .string()
    .lowercase()
    .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
    .required("This field is required"),
  password: yup.string().required("Password is required"),
  contract: yup.string().required(),
});
const schema_product = yup.object().shape({
  title: yup
    .string()
    .lowercase()
    .max(50)
    .min(15)
    .matches(/^[A-Za-z0-9\s]*$/g, "This field is not correct")
    .required("This field is required"),

  description: yup
    .string()
    .max(500)
    .min(150)
    .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
    .required("Password is required"),
  categorie: yup.string().required("This field is required"),
  price: yup.number().min(0.0).max(1000.0),
  file: yup.string(),
  contract: yup.string().required(),
});

function Forms(props) {
  const { register, handleSubmit, errors, getValues, setValue } = useForm({
    // resolver: yupResolver(schema_logup),
    // resolver: yupResolver(schema_login),
    resolver: yupResolver(schema_product),
    // resolver: yupResolver(schema),
    defaultValues: {
      price: "0.0",
    },
  });

  const onSubmit = (data) => {

    // switch (data.contract) {
    //   case CONTRACT.REGISTRY:
    //     fetchRegistry(data);

    //     break;
    //   case CONTRACT.LOGIN:
    //     fetchLogin(data);

    //     break;
    //   case CONTRACT.PRODUCT:
    //     break;
    // }
  };
  return (
    <Form onSubmit={handleAction} className="form">
    <h2 className="form__title">{title}</h2>
      {props.render(register, errors, getValues, setValue)}
      <Button variant="light" type="submit" className="form__button">
        Submit
      </Button>
    </Form>
  );
}

export default Forms;

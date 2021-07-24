import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormWrapper from "./FormWrapper";
import "./Form.css";
import { Calendar } from "react-calendar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import fetchRegistry from "../../services/fetchRegistry";
import * as yup from "yup";

function Logup() {
  const [value, onChange] = useState(new Date());

  const { Group, Label, Control } = Form;

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
    birthday: yup
    .date()
    .required("This field is required"),
    email: yup
      .string()
      .lowercase()
      .email("Email is not correct")
      .required("This field is required"),
    password: yup.string().required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  });

  const { register, handleSubmit, errors, getValues } = useForm({
    resolver: yupResolver(schema_logup)
  });


  const handleLogup = async () => {
    let values = getValues();
    let promise = await fetchRegistry(values)
    let response = await promise.json();
    console.log(response);
  }

  return (
    <FormWrapper
      handleAction={handleSubmit(handleLogup)}
      title="Logup"
      render={() => (
        <>
          <Group className="form__item" controlId="first_name">
            <Label className="form__label">First Name</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Enter first name"
              size="sm"
              maxLength="25"
              name="first_name"
              autoComplete="on"
            />
            {errors.first_name && (
              <strong className="form__warning">
                {errors.first_name?.message}⚠️
              </strong>
            )}
          </Group>
          <Group className="form__item" controlId="last_name">
            <Label className="form__label">Last Name</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Enter last name"
              size="sm"
              maxLength="25"
              name="last_name"
              autoComplete="on"
            />
            {errors.last_name && (
              <strong className="form__warning">
                {errors.last_name?.message}⚠️
              </strong>
            )}
          </Group>
          <Group className="form__item" controlId="user_name">
            <Label className="form__label">User Name</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Enter user name"
              size="sm"
              maxLength="25"
              name="user_name"
              autoComplete="on"
            />
            {errors.user_name && (
              <strong className="form__warning">
                {errors.user_name?.message}⚠️
              </strong>
            )}
          </Group>
          <Group className="form__item" controlId="email">
            <Label className="form__label">Email address</Label>
            <Control
              ref={register}
              type="email"
              placeholder="Enter email"
              size="sm"
              maxLength="25"
              name="email"
              autoComplete="on"
            />
            {errors.email && (
              <strong className="form__warning">
                {errors.email?.message}⚠️
              </strong>
            )}
          </Group>
          <Group className="form__item" controlId="password">
            <Label className="form__label">Password</Label>
            <Control
              ref={register}
              type="password"
              placeholder="Password"
              size="sm"
              maxLength="25"
              name="password"
              autoComplete="on"
            />
            {errors.first_name && (
              <strong className="form__warning">
                {errors.password?.message ||
                  errors.passwordConfirmation?.message}
                ⚠️
              </strong>
            )}
          </Group>
          <Group className="form__item" controlId="passwordConfirmation">
            <Label className="form__label">Repeat Password</Label>
            <Control
              ref={register}
              type="password"
              placeholder="Enter a password"
              size="sm"
              maxLength="25"
              name="passwordConfirmation"
              autoComplete="on"
            />
            {errors.passwordConfirmation && (
              <strong className="form__warning">
                {errors.passwordConfirmation?.message}⚠️
              </strong>
            )}
          </Group>
          <Group className="form__item" controlId="calendar">
            <Label className="form__label">Birthday</Label>
            <Calendar onChange={onChange} value={value} />
            <Control
              hidden
              ref={register}
              onChange={onChange}
              value={value}
              name="birthday"
              autoComplete="on"
            />
            {errors.birthday && (
              <strong className="form__warning">
                {errors.birthday?.message}⚠️
              </strong>
            )}
          </Group>
        </>
      )}
    />
  );
}

export default Logup;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z\s]*$/g, "This field is not correct")
    .required("This field is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z\s]*$/g, "This field is not correct")
    .required("This field is required"),
  userName: yup
    .string()
    .matches(/^[A-Za-z0-9\s]*$/g, "This field is not correct")
    .required("This field is required"),
  // birthday: yup.date().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
  passwordRepeat: yup.string().required("This field is required"),
});

function FormSignUp() {
  const [value, onChange] = useState(new Date());
  const { Group, Label, Control } = Form;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1em",
          backgroundColor: "palegreen",
          borderRadius: "6px",
          boxShadow: "1px 1px 8px 0px",
        }}
      >
        <Group controlId="firstName">
          <Label>First Name</Label>
          <Control
            ref={register}
            type="text"
            placeholder="Enter first name"
            size="sm"
            maxLength="25"
            name="firstName"
            autoComplete="on"
          />
          {errors.firstName && (
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.firstName?.message}⚠️
            </strong>
          )}
        </Group>
        <Group controlId="lastName">
          <Label>Last Name</Label>
          <Control
            ref={register}
            type="text"
            placeholder="Enter last name"
            size="sm"
            maxLength="25"
            name="lastName"
            autoComplete="on"
          />
          {errors.lastName && (
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.lastName?.message}⚠️
            </strong>
          )}
        </Group>
        <Group controlId="userName">
          <Label>User Name</Label>
          <Control
            ref={register}
            type="text"
            placeholder="Enter user name"
            size="sm"
            maxLength="25"
            name="userName"
            autoComplete="on"
          />
          {errors.userName && (
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.userName?.message}⚠️
            </strong>
          )}
        </Group>
        <Group controlId="email">
          <Label>Email address</Label>
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
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.email?.message}⚠️
            </strong>
          )}
        </Group>
        <Group controlId="password">
          <Label>Password</Label>
          <Control
            ref={register}
            type="password"
            placeholder="Password"
            size="sm"
            maxLength="25"
            name="password"
            autoComplete="on"
          />
          {errors.firstName && (
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.password?.message}⚠️
            </strong>
          )}
        </Group>
        <Group controlId="passwordRepeat">
          <Label>Repeat Password</Label>
          <Control
            ref={register}
            type="password"
            placeholder="Enter a password"
            size="sm"
            maxLength="25"
            name="passwordRepeat"
            autoComplete="on"
          />
          {errors.passwordRepeat && (
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.passwordRepeat?.message}⚠️
            </strong>
          )}
        </Group>
        <Group
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: " column",
          }}
          controlId="calendar"
        >
          <Label>Birthday</Label>
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
            <strong
              style={{
                color: "whitesmoke",
                backgroundColor: "#000",
                padding: "0 .8em",
                fontSize: "15px",
              }}
            >
              {errors.birthday?.message}⚠️
            </strong>
          )}
        </Group>

        <Button
          style={{ width: "50%", alignSelf: "center" }}
          variant="light"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormSignUp;

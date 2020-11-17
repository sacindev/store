import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup
    .string()
    .matches(/^[A-Za-z0-9\s]*$/g, "This field is not correct")
    .required("This field is required"),
  password: yup.string().required("This field is required"),
});

function FormSignin() {
  const { Group, Label, Control, Text, Check } = Form;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1em",
          backgroundColor: "palegreen",
          borderRadius: "6px",
          boxShadow: "1px 1px 8px 0px",
        }}
      >
        <Group controlId="email">
          <Label>User name</Label>
          <Control
            ref={register}
            type="text"
            placeholder="Enter email"
            size="sm"
            maxLength="25"
            name="userName"
            autoComplete="on"
          />
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

export default FormSignin;

import React from "react";
import "./Form.css";
import { Link } from "@reach/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import fetchUserLogged from "../../services/fetchUserLogged";
import FormWrapper from "./FormWrapper"
import Form from "react-bootstrap/Form";


function Login() {

  const schema_login = yup.object().shape({
    user_name: yup
      .string()
      .lowercase()
      .matches(/^[A-Za-z0-9]*$/g, "This field is not correct")
      .required("This field is required"),
    password: yup.string().required("Password is required"),
  });

  const { Group, Label, Control } = Form;

  const { register, errors, getValues, handleSubmit } = useForm({
    resolver: yupResolver(schema_login)
  });


  const handleLogin = () => {
    let values = getValues();
   fetchUserLogged(values).then(res => console.log(res))

    // if (error) {
    //   alert(msg)
    // }
  }

  return (
    <FormWrapper
      handleAction={handleSubmit(handleLogin)}
      title="Login"
      render={() => (
        <>
          <Group className="form__item" controlId="user_name">
            <Label className="form__label">User</Label>
            <Control
              ref={register}
              type="text"
              placeholder="Enter your user"
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
          <Group className="form__item" controlId="password">
            <Label className="form__label">Password</Label>
            <Control
              ref={register}
              type="password"
              placeholder="Enter your password"
              size="sm"
              maxLength="25"
              name="password"
              autoComplete="on"
            />
            {errors.password && (
              <strong className="form__warning">
                {errors.password?.message}⚠️
              </strong>
            )}
            <Link to="/signup">
              <p style={{ fontSize: "x-small", margin: "0px" }}>
                Forgot Password
              </p>
            </Link>
          </Group>
        </>
      )}
    />
  );
}

export default Login;

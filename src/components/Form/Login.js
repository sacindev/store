import React from "react";
import Form from "react-bootstrap/Form";
import Forms from "./Form";
import "./Form.css";
import { Link } from "@reach/router";

function Login(props) {
  const { Group, Label, Control } = Form;
  return (
    <Forms
      handleAction={}
      title={"Login"}
      render={(register, errors) => (
        <>
          <h2 className="form__title">Login</h2>

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
          <Control type="text" ref={register}  name="contract" defaultValue="login"/>
        </>
      )}
    />
  );
}

export default Login;

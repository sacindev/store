import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Forms from "./Form";
import "./Form.css";
import { Calendar } from "react-calendar";
function Logup(props) {
  const [value, onChange] = useState(new Date());
  const { Group, Label, Control } = Form;
  return (
    <Forms
      className="form"
      render={(register, errors) => (
        <>
          <h2 className="form__title">Sign Up🤝</h2>

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
          <Control hidden name="contract" defaultValue="login" ref={register} />
        </>
      )}
    />
  );
}

export default Logup;

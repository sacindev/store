import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
function SearchAdvanced() {
  const { Group, Label, Control } = Form;

  return (
    <Form className="form">
      <Group className="form__input" id="passwordConfirmation">
        <Label style={{ color: "whitesmoke", fontSize: "small" }}>
          Repeat Password
        </Label>
        <Control
          ref={register}
          type=""
          placeholder="Enter a password"
          size="sm"
          maxLength="25"
          name="passwordConfirmation"
          autoComplete="on"
        />
      </Group>
    </Form>
  );
}

export default SearchAdvanced;

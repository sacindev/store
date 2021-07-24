import React from "react";

//css
import "./Form.css";

//react-bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Forms({ handleAction, title, render }) {
  return (
    <Form onSubmit={handleAction} className="form">
      <h2 className="form__title">{title}</h2>
      {render()}
      <Button variant="light" type="submit" className="form__button">
        Submit
      </Button>
    </Form> 
  );
}


import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Search() {
  const { Append, Text } = InputGroup;
  const { Control } = Form;

  return (
    <InputGroup size="sm" style={{ width: "100%" }}>
      <Control
        type="text"
        maxLength={25}
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => console.log(e.target.value)}
      />
      <Append>
        <Button variant="outline-secondary ">Search</Button>
      </Append>
    </InputGroup>
  );
}

export default Search;

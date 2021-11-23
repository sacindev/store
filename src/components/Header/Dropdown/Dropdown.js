import React from "react";
import Search from "../../Search/Search";
import Modal from "react-bootstrap/Modal";
import Menu from "../Menu/Menu";
import "./Dropdown.css";
function Dropdown(props) {
  return (
    <Menu>
      {(show, closeModal) => (
        <Modal show={show} onHide={closeModal}>
          <Modal.Body >
            <Search />
          </Modal.Body>
        </Modal>
      )}
    </Menu>
  );
}

export default Dropdown;

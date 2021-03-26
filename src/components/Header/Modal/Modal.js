import React from "react";
import Search from "../../Search/Search";
import MODAL from "react-bootstrap/Modal";
import Menu from "../Menu/Menu";
import "./Modal.css";
function Modal(props) {
  return (
    <Menu>
      {(show, closeModal) => (
        <MODAL className="" show={show} onHide={closeModal}>
          <MODAL.Body >
            <Search />
          </MODAL.Body>
        </MODAL>
      )}
    </Menu>
  );
}

export default Modal;

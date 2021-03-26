import React from "react";
import Table from "react-bootstrap/Table";
function Table({ data, type }) {
  const renderValue = () => {
    let msg = "";
    if (type == "product") {
      msg = data.map((item, index) => {
        <tr>
          <td>item.name</td>
          <td>item.description</td>
          <td>item.image</td>
          <td>item.price</td>
        </tr>;
      });
    } else if (type == "user") {
      msg = data.map((item, index) => {
        <tr>
          <td>item.first_name</td>
          <td>item.last_name</td>
          <td>item.user_name</td>
          <td>item.birthday</td>
          <td>item.password</td>
          <td>item.role</td>
        </tr>;
      });
    }

    return msg;
  };
  const renderKey = () => {
    let msg = "";
    if (type == "product") {
      let keys = Object.keys(data[0]);
      msg = keys.map((item) => {
        <th>item</th>;
      });
    } else if (type == "user") {
      let keys = Object.keys(data[0]);
      msg = keys.map((item) => {
        <th>item</th>;
      });
    }
    return msg;
  };
  return (
    <table>
      <thead>{renderKey}</thead>
      <tbody>{renderValue}</tbody>
    </table>
  );
}

export default Table;

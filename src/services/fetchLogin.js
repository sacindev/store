import fetchUser from "./fetchUser";
import { navigate } from "@reach/router";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


export default function (data) {
  console.log(data);
  const { setLogin } = useContext(UserContext);

  fetch(`http://localhost:3000/api/user/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type":"application/json",
    },
  })
    .then((res) => {
      if (res.ok == false && res.status == 400) {
        return res.json();
      }
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        throw res.msg;
      } else {
        if (document.cookie.match("store")) {
          fetchUser(document.cookie.split("store=")[1])
            .then((res) => console.log(res))
            .then(() => setLogin())
            .then(navigate("/"));
        }
      }
    });
}

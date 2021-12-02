export default function loginService(data) {
 return fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type":"application/json",
    },
  })
.then(response => response.json())

}
 
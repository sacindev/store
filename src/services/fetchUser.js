export default function doLogin(token) {
  return fetch(`http://localhost:3000/api/user/verification`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}

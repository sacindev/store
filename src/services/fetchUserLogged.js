export default async function fetchUserLogged(data) {
 let promise = await fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type":"application/json",
    },
  })
  console.log(promise);
  let response = await promise.json();
  console.log(response);
  return response;
}

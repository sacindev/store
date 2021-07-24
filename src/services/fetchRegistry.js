export default function fetchRegistry (data) {
  return fetch(`http://localhost:3000/api/user/new`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type":"application/json",
    },
  })
    
}

function logoutService (token) {
     console.log(token);

    const URL = "http://localhost:3000/api/user/logout";

    return fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
    })
    .then(response => response.json())
}

export default logoutService
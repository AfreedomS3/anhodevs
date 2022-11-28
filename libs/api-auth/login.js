async function login(user) {
  let attempt = 5;

  while (attempt > 0) {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_LOGIN_API, {
        method: "POST",
        body: JSON.stringify({ ...user }),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await res.json();

      if (res.ok) {
        sessionStorage.setItem("token", data.token);
        return {
          isLoggedIn: true,
        };
      } else {
        console.log(res.status + " - " + res.statusText);
        return {
          isLoggedIn: false,
        };
      }
    } catch (error) {
      console.log(error);
      attempt--;
    }
  }
}

export default login;

export function onChangeHandller(value, userUseState, key) {
  userUseState[1]({ ...userUseState[0], [key]: value });
}
export async function onClickHandller_login(userUseState) {
  let response = await fetch("/users/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userUseState[0][0],
      password: userUseState[0][1],
    }),
  });
  console.log(response);
  alert("loged in");
}
export async function onClickHandller_signup(userUseState, loginUseState) {
  let response = await fetch("/users/", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userUseState[0][0],
      password: userUseState[0][1],
    }),
  });
  console.log(response);
  loginUseState[1](true);
}

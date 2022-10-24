import Cookies from "universal-cookie";

export async function Login(username, password) {
  return await fetch(GetBasePath() + "user/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });
}

export async function RegisterUser(email, password, breed, username) {
  return await fetch(GetBasePath() + "user/create", {
    method: "POST",
    body: JSON.stringify({ username, email, breed, password }),
    headers: { "Content-Type": "application/json" },
  });
}

export function GetBasePath() {
  let requestPath = "https://dogbook-api.herokuapp.com/";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    //use local address if development
    requestPath = "http://localhost:5033/";
  }
  return requestPath;
}

export async function GetBreeds() {
  return await fetch(GetBasePath() + "api/dog", {
    method: "GET",
  });
}

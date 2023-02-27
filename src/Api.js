

//will get a breed from the webapi based on breed id
export async function GetBreedById(breedId) {
  return await fetch(GetBasePath() + "/api/breeds/" + breedId, {
    method: "GET",
  });
}

//will get a list of available breeds
export async function GetBreeds() {
  return await fetch(GetBasePath() + "/api/breeds", {
    method: "GET",
  });
}

//put breed favorite
export async function PutFavorite(breedId, token) {
  return await fetch(GetBasePath() + "/api/breeds/favorites/" + breedId, {
    method: "POST",
    headers: { "Authorization": "Bearer " + token },
  });
}

//remove breed favorite
export async function RemoveFavorite(breedId, token) {
  return await fetch(GetBasePath() + "/api/breeds/favorites/delete/" + breedId, {
    method: "POST",
    headers: { "Authorization": "Bearer " + token },
  });
}

//get favorites
export async function GetFavorites(token) {
  return await fetch(GetBasePath() + "/api/breeds/favorites", {
    method: "GET",
    headers: { "Authorization": "Bearer " + token },
  });
}

// Become memmber
export async function CreateUser(username, email, password) {
  return await fetch(GetBasePath() + "/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  });
}

// log in
export async function SignIn(username, password) {
  return await fetch(GetBasePath() + "/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });
}

const publishedBasePath = "https://springboot-dog-app-rlcqt.kinsta.app";
const localBasePath = "http://localhost:8080";

let requestBasePath = null;

export function CreateBasePath() {
  requestBasePath = publishedBasePath; //this should be the path to the api when it is published

  //this if-statement will check if this is running as development process
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    //use local address if development
    requestBasePath = localBasePath;
  }
}

export function GetBasePath() {
  if (!requestBasePath) {
    CreateBasePath(); //if there is no base path created yet we will create it now
  }

  return requestBasePath; //return the base path
}

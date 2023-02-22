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

//will create a new breed
export async function CreateBreed(name, color, trainability) {
  return await fetch(GetBasePath() + "/api/breeds/create", {
    method: "POST",
    body: JSON.stringify({ name, color, trainability }),
    headers: { "Content-Type": "application/json" },
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

const publishedBasePath = "https://obviouslyfakedomainname.se/dog-info-api";
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

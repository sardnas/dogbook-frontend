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

//below is code to make it easier to have one base path when you are developing locally and one when the site is published
//it is because maybe you want to use a locally hosted webapi when developing to make it easier to debug
//but obviously you don't want to use that locally hosted webapi when you have published the site

const publishedBasePath = "https://obviouslyfakedomainname.se/dog-info-api";
const localBasePath = "http://localhost:8080"; // <---- change this to the path of your locally hosted webapi (!!)

let requestBasePath = null;

export function CreateBasePath() {
  requestBasePath = publishedBasePath; //this should be the path to the api when it is published

  //this if-statement will check if this is running as development process
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    //use local address if development
    requestBasePath = localBasePath; //whatever path you're hosting your api locally on

    //you can comment out the line of code above if you want to use the production webapi when developing locally

    //care of the s in "https". It can cause problems, at the same time, only having "http" can also cause problems
    //"http" can cause problems because mixed content loading is not allowed
    //"https" can cause problems because there needs to be a valid and trusted ssl certificate
    //Sometimes this can appear as a CORS error when it's actually a SSL error
  }
}

export function GetBasePath() {
  if (!requestBasePath) {
    CreateBasePath(); //if there is no base path created yet we will create it now
  }

  return requestBasePath; //return the base path
}

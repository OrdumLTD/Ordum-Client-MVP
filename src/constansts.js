const env = process.env.NODE_ENV;

let API =
  env === "development"
    ? "http://localhost:4000"
    : "https://ordum-mvp-api-9de49c774d76.herokuapp.com/";

export { API };

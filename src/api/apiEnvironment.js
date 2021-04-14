export const apiEnvironment = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  } else if (process.env.NODE_ENV === "production") {
    return "https://lol-friends-server.herokuapp.com";
  }
};

export const apiEnvironment = () => {
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:5000";
  }
  return "https://lol-friends-server.herokuapp.com";
};

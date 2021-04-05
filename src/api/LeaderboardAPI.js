import axios from "axios";
import { resolver } from "../resolvers/Resolver";

export const gLeaderboard = async (region, league) => {
  console.log(`${region}, ${league}`);
  const result = await resolver(
    axios
      .get(`/api/v1.1/leaderboard/${region}/${league}`)
      .then((res) => res.data)
  );
  console.log(result);

  return result;
};

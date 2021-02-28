import axios from "axios";
import { resolver } from "../resolvers/Resolver";

export const gLeaderboard = async (region, queue, rank, division) => {
  console.log(`${region}, ${queue}, ${rank}, ${division}`);
  const result = await resolver(
    axios
      .get(`/${region}/leaderboard/${queue}/${rank}/${division}`)
      .then((res) => res.data)
  );
  console.log(result);

  return result;
};

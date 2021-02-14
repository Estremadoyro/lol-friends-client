import axios from "axios";
import { resolver } from "../resolvers/Resolver";

export const gLeaderboard = async (region, queue, rank, page) => {
  console.log(`${region}, ${queue}, ${rank}, ${page}`);
  const result = await resolver(
    axios
      .get(`/${region}/leaderboard/${queue}/${rank}/${page}`)
      .then((res) => res.data)
  );
  console.log(result);

  return result;
};

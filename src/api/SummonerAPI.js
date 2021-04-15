import axios from "axios";
import { resolver } from "../resolvers/Resolver";

export const getSummonerAPI = async (summonerName, region) => {
  const result = await resolver(
    axios
      .post(`/api/v1.1/summoner/${region}/${summonerName}`)
      .then((res) => res.data)
  );
  // console.log(result);
  return result;
};

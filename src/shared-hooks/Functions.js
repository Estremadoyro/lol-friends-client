import { selectRegion } from "../misc/Variables";

export const getRegionName = (playerRegion) => {
  const obj = selectRegion.regions.filter((region) => {
    return region.value === playerRegion;
  });
  return obj[0].name;
};

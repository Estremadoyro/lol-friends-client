import { selectRegion } from "../misc/Variables";

export const getRegionName = (playerRegion) => {
  const obj = selectRegion.regions.filter((region) => {
    return region.value === playerRegion;
  });
  return { cardRegion: obj[0].card, cardRegionId: obj[0].cardId };
};

import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const isHorizontalCard = useMediaQuery({ minWidth: 738 });
  if (isHorizontalCard) return "isHorizontalCard";
  return "isVerticalCard";
};

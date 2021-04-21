import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import { SummonerPreviewCardDesktop } from "./SummonerPreviewCardDesktop";
import { SummonerPreviewCardMobile } from "./SummonerPreviewCardMobile";

import { useScreenType } from "../../shared-hooks/useScreenType";

export const SummonerPreviewCard = ({ player }) => {
  const screenType = useScreenType();

  switch (screenType) {
    case "isHorizontalCard":
      return <SummonerPreviewCardDesktop player={player} />;
    case "isVerticalCard":
      return <SummonerPreviewCardMobile player={player} />;
  }
};

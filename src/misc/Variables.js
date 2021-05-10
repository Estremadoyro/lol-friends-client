import challenger from "../static/summoner-card-shields/challenger.svg";
import grandmaster from "../static/summoner-card-shields/grandmaster.svg";
import master from "../static/summoner-card-shields/master.svg";
import diamond from "../static/summoner-card-shields/diamond.svg";
import platinum from "../static/summoner-card-shields/platinum.svg";
import gold from "../static/summoner-card-shields/gold.svg";
import silver from "../static/summoner-card-shields/silver.svg";
import bronze from "../static/summoner-card-shields/bronze.svg";
import iron from "../static/summoner-card-shields/iron.svg";
import unranked from "../static/summoner-card-shields/unranked.svg";

export const selectRegion = {
  regions: [
    {
      name: "LAS",
      card: "LAS",
      cardId: "las",
      value: "la2",
    },
    {
      name: "LAN",
      card: "LAN",
      cardId: "lan",
      value: "la1",
    },
    {
      name: "NA",
      card: "NA",
      cardId: "na",
      value: "na1",
    },
    {
      name: "BRASIL",
      card: "BR",
      cardId: "br",
      value: "br1",
    },
    {
      name: "EUW",
      card: "EUW",
      cardId: "euw",
      value: "euw1",
    },
    {
      name: "EUN",
      card: "EUN",
      cardId: "eun",
      value: "eun1",
    },
    {
      name: "RUSSIA",
      card: "RU",
      cardId: "ru",
      value: "ru",
    },
    {
      name: "TURKEY",
      card: "TK",
      cardId: "tk",
      value: "tr1",
    },
    {
      name: "JAPAN",
      card: "JP",
      cardId: "jp",
      value: "jp1",
    },
    {
      name: "KOREA",
      card: "KR",
      cardId: "kr",
      value: "kr",
    },
    {
      name: "OCE",
      card: "OCE",
      cardId: "oce",
      value: "oc1",
    },
  ],
};

export const selectLeague = {
  leagues: [
    {
      name: "CHALLENGER",
      value: "CHALLENGER",
    },
    {
      name: "GRANDMASTER",
      value: "GRANDMASTER",
    },
    {
      name: "MASTER",
      value: "MASTER",
    },
  ],
};

export const selectShield = {
  unranked: {
    id: 0,
    shield: unranked,
  },
  iron: {
    id: 1,
    shield: iron,
  },
  bronze: {
    id: 2,
    shield: bronze,
  },
  silver: {
    id: 3,
    shield: silver,
  },
  gold: {
    id: 4,
    shield: gold,
  },
  platinum: {
    id: 5,
    shield: platinum,
  },
  diamond: {
    id: 6,
    shield: diamond,
  },
  master: {
    id: 7,
    shield: master,
  },
  grandmaster: {
    id: 8,
    shield: grandmaster,
  },
  challenger: {
    id: 9,
    shield: challenger,
  },
};

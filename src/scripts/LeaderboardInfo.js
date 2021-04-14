import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const dateFromNow = (updateTime) => {
  dayjs.extend(relativeTime);
  const timeFromNow = dayjs("2021-04-14T05:17:47.224Z").fromNow();
  return timeFromNow;
};

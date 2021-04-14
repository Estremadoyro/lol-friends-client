import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const dateFromNow = (updateTime) => {
  dayjs.extend(relativeTime);
  const timeFromNow = dayjs(updateTime).fromNow();
  return timeFromNow;
};

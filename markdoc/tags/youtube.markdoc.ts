import YouTube from "../../components/common/Youtube/Youtube";

export const youtube = {
  render: YouTube,
  description: "Display youtube videos",
  attributes: {
    caption: {
      type: String,
    },
    videoId: {
      type: String,
    },
    start: {
      type: String,
    },
    end: {
      type: String,
    },
  },
};

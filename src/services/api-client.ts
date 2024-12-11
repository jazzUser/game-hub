import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "41c217af42fc42b083f36127821c5498",
  },
});

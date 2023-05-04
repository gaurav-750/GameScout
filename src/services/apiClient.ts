import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e5fd59aa1a844493a3b04b0771d10f83",
  },
});

export { CanceledError };

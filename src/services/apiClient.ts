import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "546dbdbb9fa843d9b976724c7459e714",
  },
});

export { CanceledError };

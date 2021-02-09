import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.magicthegathering.io/v1/"
});

export function GET_TYPES () {
  return axiosInstance.get('types');
}

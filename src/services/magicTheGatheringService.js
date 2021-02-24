import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.magicthegathering.io/v1/"
});

export function getTypes () {
  return axiosInstance.get('types');
}

import axios from "axios";

const headers = {
  "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "x-rapidapi-key": "122c60ad1emsh9aac6d521c45d78p10332fjsna1e3d0d0cb5c"
}

const axiosInstanceJsonPlaceholder = axios.create({
  baseURL: "https://omgvamp-hearthstone-v1.p.rapidapi.com/"
});

export function info () {
  return axiosInstanceJsonPlaceholder.request({ method: 'get', url: 'info', headers });
}
export function getByClass (classType) {
  return axiosInstanceJsonPlaceholder.request({ method: 'get', url: `cards/classes/${classType}`, headers });
}
import axios from "axios";

const axiosInstanceJsonPlaceholder = axios.create({
  baseURL: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/"
});

export function createSession () {
  return axiosInstanceJsonPlaceholder.request({
    method: 'post',
    url: 'pricing/v1.0',
    headers: {
      "x-rapidapi-host": "http://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "c7a66df284msh039e3f0ff746cc1p1c9309jsn9499790f1db5",
      "content-type": "application/x-www-form-urlencoded"
    },
    data: {
      "inboundDate": "2019-10-04",
      "cabinClass": "business",
      "children": "0",
      "infants": "0",
      "country": "US",
      "currency": "USD",
      "locale": "en-US",
      "originPlace": "SFO-sky",
      "destinationPlace": "LHR-sky",
      "outboundDate": "2019-10-04",
      "adults": "1"
    }
  });
}
export function getFlights () {
  return axiosInstanceJsonPlaceholder.get("comments");
}
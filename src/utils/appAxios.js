import axios from "axios";

const appAxios = axios.create({
  baseURL:
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "x-rapidapi-key": "",
  },
});
// creating axios instance
export default appAxios;

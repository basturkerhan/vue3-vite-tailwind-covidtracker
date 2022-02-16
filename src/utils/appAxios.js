import axios from "axios";

const appAxios = axios.create({
  baseURL:
    "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api",
  headers: {
    "x-rapidapi-host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
    "x-rapidapi-key": "8b7dc41790msh6da0d3a56fbd478p1b7a93jsn7c6ba99360e3",
  },
});
// creating axios instance
export default appAxios;

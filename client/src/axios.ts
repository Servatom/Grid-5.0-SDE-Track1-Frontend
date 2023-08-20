import axios from "axios";

const axiosDiagon = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DIAGON_ALLEY,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosPortkey = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PORTKEY,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosDiagon, axiosPortkey };

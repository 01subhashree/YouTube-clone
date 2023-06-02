import axios from "axios";
const REACT_APP_API_KEY = "533488b389msh454287101b1f784p1b34a7jsne4dd43b128d5";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  // url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": REACT_APP_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

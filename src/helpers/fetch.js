import axios from "axios";

const baseUrl = "https://raw.githubusercontent.com";

const fetchApi = async (endpoint) => {
  const url = `${baseUrl}/${endpoint}`;
  const { data } = await axios.get(url);
  return data.Brastlewark;
};

export { fetchApi };

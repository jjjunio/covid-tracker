import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  //async
  //if fetch is successful
  try {
    const response = await axios.get(url);

    return response;
  } catch (error) {}
};

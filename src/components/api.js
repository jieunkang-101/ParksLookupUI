import axios from "axios";

const makeRequest = () =>
  axios.get(` http://localhost:5000/api/parks`);


const getRequest = async () => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest();
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};  

export const parksApi = {
  getParks: () => getRequest()
}
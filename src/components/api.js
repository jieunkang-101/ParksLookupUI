import axios from "axios";

const makeRequest = (params) =>
  axios.get(` http://localhost:5000/api/parks`, {
    params: {
      ...params
    }
  });


const getRequest = async (params = {}) => {
  try {
    const {
      data: { results },
      data
    } = await makeRequest(params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};  

export const parksApi = {
  parks: () => getRequest()
}
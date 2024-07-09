import axios from "axios";
const baseURL = `http://yangzzago.kro.kr:3000`;

export const login = async (id, pw) => {
    const result = await axios.post(`${baseURL}/login`, {
      id,
      pw,
    });
    return result.data;
  };
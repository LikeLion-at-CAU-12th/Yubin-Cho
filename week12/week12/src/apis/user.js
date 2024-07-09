import axios from "axios";
const baseURL = `http://yangzzago.kro.kr:3000`;

export const login = async (id, pw) => {
    const result = await axios.post(`${baseURL}/login`, {
      id,
      pw,
    });
    return result.data;
  };
  
  export const signUp = async (id, pw, name, age) => {
    const result = await axios.post(`${baseURL}/signup`, {
      id,
      pw,
      name,
      age,
    });
    return result;
  };
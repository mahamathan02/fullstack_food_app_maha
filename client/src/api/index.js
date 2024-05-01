import axios from "axios";

export const baseURL =
  "http://127.0.0.1:5001/restaurant-app-ff919/us-central1/app";

export const validateUserJWTtoken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtverification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (error) {
    return null;
  }
};

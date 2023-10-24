import axios from "axios";

const SERVER_BASE_URL = "http://localhost:8080";

export const getDiary = async () => {
  return await axios
    .get(SERVER_BASE_URL + "/diary")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createDiary = async (diary) => {
  return await axios
    .post(SERVER_BASE_URL + "/diary", { ...diary })
    .catch((error) => {
      console.log(error);
    });
};

export const updateDiary = async (id, diary) => {
  await axios
    .put(`${SERVER_BASE_URL}/diary/${id}`, { ...diary })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteDiary = async (id) => {
  await axios.delete(`${SERVER_BASE_URL}/diary/${id}`).catch((error) => {
    console.log(error);
  });
};

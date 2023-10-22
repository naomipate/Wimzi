import Axios from "./Axios";

async function getImageById(id) {
  try {
    let { data } = await Axios.get(`?page=${id}&limit=1`);
    return data;
  } catch (error) {
    return error;
  }
}

//Total amount of images: 123203
export { getImageById };

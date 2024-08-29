import { imagesApi } from "./imagesInstace";

export const getImages = () => imagesApi.get("/images");

export const postImages = (id: number) => imagesApi.post(`/images/${id}/likes`);

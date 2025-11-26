import axios from "axios";

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY; 
const PEXELS_URL = "https://api.pexels.com/v1/search";

export const fetchProductImages = async (query: string, perPage = 10) => {
  try {
    const res = await axios.get(PEXELS_URL, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
      params: {
        query,
        per_page: perPage,
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.data.photos.map((photo: any) => ({
      id: photo.id,
      url: photo.src.large,
      small: photo.src.medium,
      photographer: photo.photographer,
    }));
  } catch (error) {
    console.error("Image fetch error:", error);
    return [];
  }
};

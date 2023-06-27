import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36096052-a8b4933efcb0d6eb229fce3f0';

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const respornse = await axios.get(API_URL, {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return respornse.data.hits;
};

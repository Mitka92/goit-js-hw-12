import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export async function fetchPhotos(search, page) {
  const response = await axios.get('api/', {
    params: {
      key: '5078704-abab538ab7558d1cf73264192',
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 15,
    },
  });
  return response.data;
}

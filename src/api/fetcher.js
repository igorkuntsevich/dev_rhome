import axios from "axios";


export const axiosWithBase = axios.create({
  baseURL: 'https://backend.rhome.by/',
  // baseURL: 'http://iproject/',
  // Здесь можно указать другие настройки, такие как заголовки и т.д.
});

export const fetcher = (url) => axiosWithBase.get(url).then((res) => res.data);



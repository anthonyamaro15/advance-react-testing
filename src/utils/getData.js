import Axios from "axios"

import axios from 'axios';

export const getData = async () => {
   const shows = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes");
   return shows.data;
}


import { defineQuery } from "next-sanity";

export const  fetchFoods=defineQuery(
    `
     *[_type == "food"]{
       name,
      category,
       price,
      originalPrice,
       tags,
       "imageUrl": image.asset->url,
       description,
      available
     }
  `
)
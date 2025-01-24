 // import { client } from "@/sanity/lib/client";

import { defineQuery } from "next-sanity";

// export const fetchChefs = async () => {
//   const chefs = await client.fetch(`
//     *[_type == "chef"]{
//       name,
//       position,
//       experience,
//       specialty,
//       "imageUrl": image.asset->url,
//       description,
//       available
//     }
//   `);
//   return chefs;
// };

export const fetchChefs=defineQuery(
  `    *[_type == "chef"]{
      name,
      position,
      experience,
      specialty,
      "imageUrl": image.asset->url,
      description,
      available
    }`
)
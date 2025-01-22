import { client } from "@/sanity/lib/client";

export const fetchChefs = async () => {
  const chefs = await client.fetch(`
    *[_type == "chef"]{
      name,
      position,
      experience,
      specialty,
      "imageUrl": image.asset->url,
      description,
      available
    }
  `);
  return chefs;
};
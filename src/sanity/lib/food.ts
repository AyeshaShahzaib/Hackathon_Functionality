import { client } from "@/sanity/lib/client";

export const fetchFoods = async () => {
  const foods = await client.fetch(`
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
  `);
  return foods;
};
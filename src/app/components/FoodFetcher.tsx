import { sanityfetch } from "@/sanity/lib/fetch";
import { fetchFoods } from "@/sanity/lib/food";
import ShopList from "./ShopList";
// Adjust the path according to your project structure

export default async function FoodFetcher() {
  const Foods = await sanityfetch({ query: fetchFoods });

  return <ShopList Foods={Foods} />;
}
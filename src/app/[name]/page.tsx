// import { notFound } from "next/navigation";
// import { sanityfetch } from "@/sanity/lib/fetch";

// interface Food {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags?: string[]; // Make tags optional
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// interface FoodDetailProps {
//   params: { name: string };
// }

// export default async function FoodDetail({ params }: FoodDetailProps) {
//   const name = decodeURIComponent(params.name);

//   const food = await sanityfetch({
//     query: `
//       *[_type == "food" && name == $name][0] {
//         name,
//         category,
//         price,
//         originalPrice,
//         "imageUrl": image.asset->url,
//         description,
//         available,
//         tags
//       }
//     `,
//     params: { name },
//   });

//   if (!food) {
//     notFound(); // Handle cases where food is not found
//   }

//   return (
//     <div className="food-detail-container p-4">
//       <div className="flex">
//         <img src={food.imageUrl} alt={food.name} className="w-1/2 rounded" />
//         <div className="ml-6">
//           <h1 className="text-3xl font-bold">{food.name}</h1>
//           <p className="text-lg text-gray-600 mt-2">{food.description}</p>
//           <p className="text-lg mt-4">
//             <strong>Price:</strong> ${food.price}{" "}
//             {food.originalPrice > food.price && (
//               <span className="line-through text-gray-500">
//                 ${food.originalPrice}
//               </span>
//             )}
//           </p>
//           <p className="mt-2">
//             <strong>Category:</strong> {food.category}
//           </p>
//           {food.tags && food.tags.length > 0 ? (
//             <p className="mt-2">
//               <strong>Tags:</strong> {food.tags.join(", ")}
//             </p>
//           ) : (
//             <p className="mt-2 text-gray-500">No tags available</p>
//           )}
//           <p className="mt-2">
//             <strong>Availability:</strong>{" "}
//             {food.available ? (
//               <span className="text-green-500">In Stock</span>
//             ) : (
//               <span className="text-red-500">Out of Stock</span>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext"; // Ensure this path is correct
// import { sanityfetch } from "@/sanity/lib/fetch";

// interface Food {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags?: string[];
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// interface FoodDetailProps {
//   params: { name: string };
// }

// export default function FoodDetail({ params }: FoodDetailProps) {
//   const { addToCart } = useCart();
//   const name = decodeURIComponent(params.name);
//   const [food, setFood] = useState<Food | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchFood() {
//       try {
//         const fetchedFood = await sanityfetch({
//           query: `
//             *[_type == "food" && name == $name][0] {
//               name,
//               category,
//               price,
//               originalPrice,
//               "imageUrl": image.asset->url,
//               description,
//               available,
//               tags
//             }
//           `,
//           params: { name },
//         });
//         setFood(fetchedFood);
//       } catch (error) {
//         console.error("Error fetching food:", error);
//         setFood(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchFood();
//   }, [name]);

//   const handleAddToCart = () => {
//     if (food) {
//       addToCart({
//         id: food.name,
//         name: food.name,
//         price: food.price,
//         imageUrl: food.imageUrl,
//         quantity: 1,
//       });
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!food) {
//     return <p>Food not found.</p>;
//   }

//   return (
//     <div className="food-detail-container p-4">
//       <div className="flex">
//         <img src={food.imageUrl} alt={food.name} className="w-1/2 rounded" />
//         <div className="ml-6">
//           <h1 className="text-3xl font-bold">{food.name}</h1>
//           <p className="text-lg text-gray-600 mt-2">{food.description}</p>
//           <p className="text-lg mt-4">
//             <strong>Price:</strong> ${food.price}{" "}
//             {food.originalPrice > food.price && (
//               <span className="line-through text-gray-500">
//                 ${food.originalPrice}
//               </span>
//             )}
//           </p>
//           <p className="mt-2">
//             <strong>Category:</strong> {food.category}
//           </p>
//           {food.tags && food.tags.length > 0 ? (
//             <p className="mt-2">
//               <strong>Tags:</strong> {food.tags.join(", ")}
//             </p>
//           ) : (
//             <p className="mt-2 text-gray-500">No tags available</p>
//           )}
//           <p className="mt-2">
//             <strong>Availability:</strong>{" "}
//             {food.available ? (
//               <span className="text-green-500">In Stock</span>
//             ) : (
//               <span className="text-red-500">Out of Stock</span>
//             )}
//           </p>
//           {food.available && (
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//             >
//               Add to Cart
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState, use } from "react";
// import { useCart } from "../context/CartContext"; // Ensure this path is correct
// import { sanityfetch } from "@/sanity/lib/fetch";

// interface Food {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags?: string[];
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// interface FoodDetailProps {
//   params: Promise<{ name: string }>; // params is now a Promise
// }

// export default function FoodDetail({ params }: FoodDetailProps) {
//   const { addToCart } = useCart();
//   const { name } = use(params); // Unwrap params using use()
//   const decodedName = decodeURIComponent(name);

//   const [food, setFood] = useState<Food | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchFood() {
//       try {
//         const fetchedFood = await sanityfetch({
//           query: `
//             *[_type == "food" && name == $name][0] {
//               name,
//               category,
//               price,
//               originalPrice,
//               "imageUrl": image.asset->url,
//               description,
//               available,
//               tags
//             }
//           `,
//           params: { name: decodedName },
//         });
//         setFood(fetchedFood);
//       } catch (error) {
//         console.error("Error fetching food:", error);
//         setFood(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchFood();
//   }, [decodedName]);

//   const handleAddToCart = () => {
//     if (food) {
//       addToCart({
//         id: food.name,
//         name: food.name,
//         price: food.price,
//         imageUrl: food.imageUrl,
//         quantity: 1,
//       });
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!food) {
//     return <p>Food not found.</p>;
//   }

//   return (
//     <div className="food-detail-container p-4">
//       <div className="flex">
//         <img src={food.imageUrl} alt={food.name} className="w-1/2 rounded" />
//         <div className="ml-6">
//           <h1 className="text-3xl font-bold">{food.name}</h1>
//           <p className="text-lg text-gray-600 mt-2">{food.description}</p>
//           <p className="text-lg mt-4">
//             <strong>Price:</strong> ${food.price}{" "}
//             {food.originalPrice > food.price && (
//               <span className="line-through text-gray-500">
//                 ${food.originalPrice}
//               </span>
//             )}
//           </p>
//           <p className="mt-2">
//             <strong>Category:</strong> {food.category}
//           </p>
//           {food.tags && food.tags.length > 0 ? (
//             <p className="mt-2">
//               <strong>Tags:</strong> {food.tags.join(", ")}
//             </p>
//           ) : (
//             <p className="mt-2 text-gray-500">No tags available</p>
//           )}
//           <p className="mt-2">
//             <strong>Availability:</strong>{" "}
//             {food.available ? (
//               <span className="text-green-500">In Stock</span>
//             ) : (
//               <span className="text-red-500">Out of Stock</span>
//             )}
//           </p>
//           {food.available && (
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//             >
//               Add to Cart
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import { sanityfetch } from "@/sanity/lib/fetch";

// interface Food {
//   name: string;
//   category: string;
//   price: number;
//   originalPrice: number;
//   tags?: string[];
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// interface FoodDetailProps {
//   params: Promise<{ name: string }>; // params is a Promise
// }

// export default function FoodDetail({ params }: FoodDetailProps) {
//   const { addToCart } = useCart();
//   const [food, setFood] = useState<Food | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [decodedName, setDecodedName] = useState<string | null>(null);

//   useEffect(() => {
//     async function unwrapParams() {
//       const { name } = await params; // ✅ Await the params promise
//       setDecodedName(decodeURIComponent(name));
//     }

//     unwrapParams();
//   }, [params]);

//   useEffect(() => {
//     if (!decodedName) return;

//     async function fetchFood() {
//       try {
//         const fetchedFood = await sanityfetch({
//           query: `
//             *[_type == "food" && name == $name][0] {
//               name,
//               category,
//               price,
//               originalPrice,
//               "imageUrl": image.asset->url,
//               description,
//               available,
//               tags
//             }
//           `,
//           params: { name: decodedName },
//         });
//         setFood(fetchedFood);
//       } catch (error) {
//         console.error("Error fetching food:", error);
//         setFood(null);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchFood();
//   }, [decodedName]);

//   const handleAddToCart = () => {
//     if (food) {
//       addToCart({
//         id: food.name,
//         name: food.name,
//         price: food.price,
//         imageUrl: food.imageUrl,
//         quantity: 1,
//       });
//     }
//   };

//   if (loading || !decodedName) {
//     return <p>Loading...</p>;
//   }

//   if (!food) {
//     return <p>Food not found.</p>;
//   }

//   return (
//     <div className="food-detail-container p-4">
//       <div className="flex">
//         <img src={food.imageUrl} alt={food.name} className="w-1/2 rounded" />
//         <div className="ml-6">
//           <h1 className="text-3xl font-bold">{food.name}</h1>
//           <p className="text-lg text-gray-600 mt-2">{food.description}</p>
//           <p className="text-lg mt-4">
//             <strong>Price:</strong> ${food.price}{" "}
//             {food.originalPrice > food.price && (
//               <span className="line-through text-gray-500">
//                 ${food.originalPrice}
//               </span>
//             )}
//           </p>
//           <p className="mt-2">
//             <strong>Category:</strong> {food.category}
//           </p>
//           {food.tags && food.tags.length > 0 ? (
//             <p className="mt-2">
//               <strong>Tags:</strong> {food.tags.join(", ")}
//             </p>
//           ) : (
//             <p className="mt-2 text-gray-500">No tags available</p>
//           )}
//           <p className="mt-2">
//             <strong>Availability:</strong>{" "}
//             {food.available ? (
//               <span className="text-green-500">In Stock</span>
//             ) : (
//               <span className="text-red-500">Out of Stock</span>
//             )}
//           </p>
//           {food.available && (
//             <button
//               onClick={handleAddToCart}
//               className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//             >
//               Add to Cart
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { sanityfetch } from "@/sanity/lib/fetch";
import FoodDetail from "../components/FoodDetail"; // Your client component

interface Food {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags?: string[];
  imageUrl: string;
  description: string;
  available: boolean;
}

export async function generateStaticParams() {
  const foodNames = await sanityfetch({
    query: `
      *[_type == "food"] {
        name
      }
    `,
  });

  return foodNames.map((food: { name: string }) => ({
    name: food.name,
  }));
}

export default async function FoodDetailPage({
  params,
}: {
  params: { name: string }; // Correctly type `params` as an object
}) {
  const decodedName = decodeURIComponent(params.name);

  const food = await sanityfetch({
    query: `
      *[_type == "food" && name == $name][0] {
        _id,
        name,
        category,
        price,
        originalPrice,
        "imageUrl": image.asset->url,
        description,
        available,
        tags
      }
    `,
    params: { name: decodedName },
  });

  if (!food) {
    return <p>Food not found. Please check the name and try again.</p>;
  }

  return <FoodDetail food={food} />;
}
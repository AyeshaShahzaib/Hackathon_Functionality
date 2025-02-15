// components/FoodDetail.tsx (Client Component)
"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";

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

interface FoodDetailProps {
  food: Food;
}

export default function FoodDetail({ food }: FoodDetailProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: food.id,
      name: food.name,
      price: food.price,
      imageUrl: food.imageUrl,
      quantity: 1,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Food Image */}
        <Image
          src={food.imageUrl}
          alt={food.name}
          width={500}
          height={300}
          className="rounded-lg w-full md:w-1/2 object-cover"
          priority
        />

        {/* Food Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-gray-900">{food.name}</h1>
          <p className="text-gray-600 mt-2">{food.description}</p>

          {/* Price Section */}
          <p className="text-xl font-medium mt-4">
            <strong>Price:</strong> ${food.price.toFixed(2)}{" "}
            {food.originalPrice > food.price && (
              <span className="line-through text-gray-500 ml-2 text-lg">
                ${food.originalPrice.toFixed(2)}
              </span>
            )}
          </p>

          {/* Category */}
          <p className="mt-2">
            <strong>Category:</strong> {food.category}
          </p>

          {/* Tags */}
          {food.tags?.length ? (
            <p className="mt-2">
              <strong>Tags:</strong> {food.tags.join(", ")}
            </p>
          ) : (
            <p className="mt-2 text-gray-500">No tags available</p>
          )}

          {/* Availability */}
          <p className="mt-2">
            <strong>Availability:</strong>{" "}
            {food.available ? (
              <span className="text-green-500">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>

          {/* Add to Cart Button */}
          {food.available && (
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 mt-4 rounded-lg transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

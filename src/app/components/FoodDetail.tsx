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
  food: Food; // Food data passed from the server component
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
    <div className="food-detail-container p-4">
      <div className="flex">
        <Image
          src={food.imageUrl}
          alt={food.name}
          width={500}
          height={300}
          className="w-1/2 rounded"
        />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{food.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{food.description}</p>
          <p className="text-lg mt-4">
            <strong>Price:</strong> ${food.price}{" "}
            {food.originalPrice > food.price && (
              <span className="line-through text-gray-500">
                ${food.originalPrice}
              </span>
            )}
          </p>
          <p className="mt-2">
            <strong>Category:</strong> {food.category}
          </p>
          {food.tags && food.tags.length > 0 ? (
            <p className="mt-2">
              <strong>Tags:</strong> {food.tags.join(", ")}
            </p>
          ) : (
            <p className="mt-2 text-gray-500">No tags available</p>
          )}
          <p className="mt-2">
            <strong>Availability:</strong>{" "}
            {food.available ? (
              <span className="text-green-500">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>
          {food.available && (
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
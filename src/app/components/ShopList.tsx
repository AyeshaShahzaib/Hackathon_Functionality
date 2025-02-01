// import { sanityfetch } from "@/sanity/lib/fetch";
// import { fetchFoods } from "@/sanity/lib/food";

// interface Food {
//   name: string;
//   category: string;
//   price: string;
//   originalPrice: string;
//   tags:string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// export default async function ShopList(){
//    const Foods: Food[] = await sanityfetch({ query: fetchFoods });
//     return(
      
       
// <div className="product-page p-4">
//   {/* Sorting and Search Section */}
//   <div className="header-controls flex justify-between items-center mb-6">
//     {/* Sorting */}
//     <div className="sorting flex items-center gap-2">
//       <label htmlFor="sort-by" className="text-sm font-medium">Sort By:</label>
//       <select id="sort-by" className="border border-gray-300 rounded p-2 text-sm">
//         <option value="newest">Newest</option>
//         {/* Add more options as needed */}
//       </select>
//     </div>

//     {/* Show Options */}
//     <div className="view-options flex items-center gap-2">
//       <label htmlFor="show" className="text-sm font-medium">Show:</label>
//       <select id="show" className="border border-gray-300 rounded p-2 text-sm">
//         <option value="default">Default</option>
//         {/* Add more options as needed */}
//       </select>
//     </div>

//     {/* Search */}
//     <div className="search flex items-center gap-2">
//       <input 
//         type="text" 
//         placeholder="Search Product" 
//         className="border border-gray-300 rounded p-2 text-sm w-48"
//       />
//       <button className="bg-yellow-500 text-white rounded px-4 py-2">🔍</button>
//     </div>
//   </div>

//   <div className="main-content flex gap-6">
//     {/* Product Grid Section */}
//     <section className="product-grid grid grid-cols-3 gap-6 w-3/4">
//   {Foods.map((food, index) => (
//     <div className="product-item border rounded p-4 shadow" key={index}>
//       <img src={food.imageUrl} alt={food.name} className="h-[100%] w-[100%]" />
//       <h4 className="font-bold text-lg">{food.name}</h4>
//       <p className="text-sm">
//         {food.price} <span className="line-through text-gray-500">{food.originalPrice}</span>
//       </p>
//     </div>
//   ))}
// </section>
    

//     {/* Sidebar Section */}
//     <aside className="sidebar w-1/4 space-y-6">
//       {/* Category Filter */}
//       <div className="category-filter">
//         <h3 className="font-bold text-lg mb-2">Category</h3>
//         <ul className="space-y-1">
//           <li>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="form-checkbox" />
//               Sandwiches
//             </label>
//           </li>
//           <li>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="form-checkbox" />
//               Burger
//             </label>
//           </li>
//           <li>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="form-checkbox" />
//               Chicken Chop
//             </label>
//           </li>
//           <li>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="form-checkbox" />
//               Drinks
//             </label>
//           </li>
//           <li>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="form-checkbox" />
//               Pizza
//             </label>
//           </li>
//           <li>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" className="form-checkbox" />
//               Non Veg
//             </label>
//           </li>
//         </ul>
//       </div>

//       {/* Ad Banner */}
//       <div className="ad-banner bg-gray-100 p-4 rounded text-center">
//         <h3 className="font-bold text-lg mb-2">Perfect Classic Restaurant</h3>
//         <button className="bg-yellow-500 text-white px-4 py-2 rounded">Shop Now</button>
//       </div>

//       {/* Price Filter */}
//       <div className="price-filter">
//         <h3 className="font-bold text-lg mb-2">Filter By Price</h3>
//         <input 
//           type="range" 
//           min="0" 
//           max="500" 
//           className="w-full"
//         />
//       </div>

//       {/* Latest Products */}
//       <div className="latest-products">
//         <h3 className="font-bold text-lg mb-2">Latest Products</h3>
//         <ul className="space-y-1">
//           <li className="text-sm">Pizza</li>
//           <li className="text-sm">Burger</li>
//           <li className="text-sm">Chocolate Muffin</li>
//         </ul>
//       </div>

//       {/* Product Tags */}
//       <div className="product-tags">
//         <h3 className="font-bold text-lg mb-2">Product Tags</h3>
//         <ul className="flex flex-wrap gap-2">
//           <li className="bg-gray-200 px-2 py-1 rounded text-sm">Services</li>
//           <li className="bg-gray-200 px-2 py-1 rounded text-sm">Our Menu</li>
//           <li className="bg-gray-200 px-2 py-1 rounded text-sm">Burger</li>
//         </ul>
//       </div>
//     </aside>
//   </div>

//   {/* Pagination */}
//   <div className="pagination flex justify-center items-center mt-14 space-x-2 ">
//     <button className="px-3 py-1 bg-gray-200 rounded">◀</button>
//     <button className="px-3 py-1 bg-yellow-500 text-white rounded">1</button>
//     <button className="px-3 py-1 bg-gray-200 rounded">2</button>
//     <button className="px-3 py-1 bg-gray-200 rounded">3</button>
//     <button className="px-3 py-1 bg-gray-200 rounded">▶</button>
//   </div>
// </div>
//     )
// }

// 'use client'

// import { useEffect, useState } from "react";
// import { sanityfetch } from "@/sanity/lib/fetch";
// import { fetchFoods } from "@/sanity/lib/food";

// interface Food {
//   name: string;
//   category: string;
//   price: string;
//   originalPrice: string;
//   tags: string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// export default async function ShopList() {
//   const Foods: Food[] = await sanityfetch({ query: fetchFoods });
//   const [filteredFoods, setFilteredFoods] = useState<Food[]>(Foods);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<number>(500);
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const handleCategoryChange = (category: string) => {
//     setCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((cat) => cat !== category)
//         : [...prev, category]
//     );
//   };

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPriceRange(Number(e.target.value));
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   const applyFilters = () => {
//     let updatedFoods = Foods;

//     // Filter by category
//     if (categories.length > 0) {
//       updatedFoods = updatedFoods.filter((food) =>
//         categories.includes(food.category)
//       );
//     }

//     // Filter by price range
//     updatedFoods = updatedFoods.filter((food) => Number(food.price) <= priceRange);

//     // Filter by search query
//     if (searchQuery) {
//       updatedFoods = updatedFoods.filter((food) =>
//         food.name.toLowerCase().includes(searchQuery)
//       );
//     }

//     setFilteredFoods(updatedFoods);
//   };

//   // Apply filters whenever a dependency changes
//   useEffect(() => {
//     applyFilters();
//   }, [categories, priceRange, searchQuery]);

//   return (
//     <div className="product-page p-4">
//       <div className="header-controls flex justify-between items-center mb-6">
//         <div className="search flex items-center gap-2">
//           <input
//             type="text"
//             placeholder="Search Product"
//             className="border border-gray-300 rounded p-2 text-sm w-48"
//             onChange={handleSearchChange}
//           />
//           <button className="bg-yellow-500 text-white rounded px-4 py-2">
//             🔍
//           </button>
//         </div>
//       </div>

//       <div className="main-content flex gap-6">
//         {/* Product Grid Section */}
//         <section className="product-grid grid grid-cols-3 gap-6 w-3/4">
//           {filteredFoods.map((food, index) => (
//             <div className="product-item border rounded p-4 shadow" key={index}>
//               <img src={food.imageUrl} alt={food.name} className="h-[100%] w-[100%]" />
//               <h4 className="font-bold text-lg">{food.name}</h4>
//               <p className="text-sm">
//                 {food.price} <span className="line-through text-gray-500">{food.originalPrice}</span>
//               </p>
//             </div>
//           ))}
//         </section>

//         {/* Sidebar Section */}
//         <aside className="sidebar w-1/4 space-y-6">
//           {/* Category Filter */}
//           <div className="category-filter">
//             <h3 className="font-bold text-lg mb-2">Category</h3>
//             <ul className="space-y-1">
//               {["Sandwiches", "Burger", "Chicken Chop", "Drinks", "Pizza", "Non Veg"].map(
//                 (category) => (
//                   <li key={category}>
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox"
//                         onChange={() => handleCategoryChange(category)}
//                       />
//                       {category}
//                     </label>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Price Filter */}
//           <div className="price-filter">
//             <h3 className="font-bold text-lg mb-2">Filter By Price</h3>
//             <input
//               type="range"
//               min="0"
//               max="500"
//               className="w-full"
//               value={priceRange}
//               onChange={handlePriceChange}
//             />
//             <p>Max Price: ${priceRange}</p>
//           </div>

//           {/* Latest Products */}
//           <div className="latest-products">
//             <h3 className="font-bold text-lg mb-2">Latest Products</h3>
//             <ul className="space-y-1">
//               {Foods.slice(-3).map((food, index) => (
//                 <li key={index} className="text-sm">{food.name}</li>
//               ))}
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

interface Food {
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  tags: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

interface ShopListProps {
  Foods: Food[];
}

export default function ShopList({ Foods }: ShopListProps) {
  const [filteredFoods, setFilteredFoods] = useState<Food[]>(Foods);
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(500);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const applyFilters = () => {
    let updatedFoods = Foods;

    // Filter by category
    if (categories.length > 0) {
      updatedFoods = updatedFoods.filter((food) =>
        categories.includes(food.category)
      );
    }

    // Filter by price range
    updatedFoods = updatedFoods.filter((food) => Number(food.price) <= priceRange);

    // Filter by search query
    if (searchQuery) {
      updatedFoods = updatedFoods.filter((food) =>
        food.name.toLowerCase().includes(searchQuery)
      );
    }

    setFilteredFoods(updatedFoods);
  };

  // Apply filters whenever a dependency changes
  useEffect(() => {
    applyFilters();
  }, [categories, priceRange, searchQuery]);

  return (

<div className="product-page p-4 flex">
  <div className="main-content flex-grow">
    <section className="product-grid grid grid-cols-3 gap-6">
      {filteredFoods.map((food, index) => (
          <Link href={`/${encodeURIComponent(food.name)}`} key={index}>
            <div className="product-item border rounded p-4 shadow">
              <img
                src={food.imageUrl}
                alt={food.name}
                className="h-[100%] w-[100%]"
              />
              <h4 className="font-bold text-lg">{food.name}</h4>
              <p className="text-sm">
                ${food.price}{" "}
                <span className="line-through text-gray-500">
                  ${food.originalPrice}
                </span>
              </p>
            </div>
          </Link>
      ))}
    </section>
    {/* Pagination */}
    <div className="pagination flex justify-center items-center mt-14 space-x-2">
      <button className="px-3 py-1 bg-gray-200 rounded">◀</button>
      <button className="px-3 py-1 bg-yellow-500 text-white rounded">1</button>
      <button className="px-3 py-1 bg-gray-200 rounded">2</button>
      <button className="px-3 py-1 bg-gray-200 rounded">3</button>
      <button className="px-3 py-1 bg-gray-200 rounded">▶</button>
    </div>
  </div>

  <aside className="sidebar w-1/4 pl-6">
    <div className="header-controls flex justify-between items-center mb-6">
      <div className="search flex items-center gap-2">
        <input
          type="text"
          placeholder="Search Product"
          className="border border-gray-300 rounded p-2 text-sm w-48"
          onChange={handleSearchChange}
        />
        <button className="bg-yellow-500 text-white rounded px-4 py-2">
          🔍
        </button>
      </div>
    </div>
    {/* Category Filter */}
    <div className="category-filter">
      <h3 className="font-bold text-lg mb-2">Category</h3>
      <ul className="space-y-1">
        {["Sandwiches", "Burger", "Chicken Chop", "Drinks", "Pizza", "Non Veg"].map((category) => (
          <li key={category}>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox"
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>

    {/* Price Filter */}
    <div className="price-filter">
      <h3 className="font-bold text-lg mb-2">Filter By Price</h3>
      <input
        type="range"
        min="0"
        max="500"
        className="w-full"
        value={priceRange}
        onChange={handlePriceChange}
      />
      <p>Max Price: ${priceRange}</p>
    </div>

    {/* Latest Products */}
    <div className="latest-products">
      <h3 className="font-bold text-lg mb-2">Latest Products</h3>
      <ul className="space-y-1">
        {Foods.slice(-3).map((food, index) => (
          <li key={index} className="text-sm">{food.name}</li>
        ))}
      </ul>
    </div>
  </aside>
</div>

  
  );
}
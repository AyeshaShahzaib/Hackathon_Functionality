export default function ShopList(){
    return(
//         <div>
//             <div className="container mx-auto p-4">
//   <div className="flex flex-wrap gap-4">
//     {/* Sidebar */}
//     <aside className="w-full lg:w-1/4 bg-gray-50 p-4">
//       {/* Search Product */}
//       <div className="mb-6">
//         <h3 className="text-lg font-bold mb-2">Search Product</h3>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//       </div>

//       {/* Categories */}
//       <div className="mb-6">
//         <h3 className="text-lg font-bold mb-2">Category</h3>
//         <ul>
//           <li><input type="checkbox" className="mr-2" /> Sandwiches</li>
//           <li><input type="checkbox" className="mr-2" /> Burger</li>
//           <li><input type="checkbox" className="mr-2" /> Chicken Chop</li>
//           <li><input type="checkbox" className="mr-2" /> Pizza</li>
//           <li><input type="checkbox" className="mr-2" /> Non-Veg</li>
//           <li><input type="checkbox" className="mr-2" /> Uncategorized</li>
//         </ul>
//       </div>

//       {/* Filter by Price */}
//       <div className="mb-6">
//         <h3 className="text-lg font-bold mb-2">Filter by Price</h3>
//         <input
//           type="range"
//           className="w-full"
//           min="10"
//           max="100"
//           step="10"
//         />
//         <button className="mt-2 p-2 w-full bg-orange-500 text-white rounded">
//           Filter
//         </button>
//       </div>

//       {/* Latest Products */}
//       <div className="mb-6">
//         <h3 className="text-lg font-bold mb-2">Latest Products</h3>
//         <ul>
//           <li className="flex items-center mb-2">
//             <img
//               src="latest-product-1.jpg"
//               alt="Product 1"
//               className="w-12 h-12 object-cover rounded mr-2"
//             />
//             <span>Pizza</span>
//           </li>
//           <li className="flex items-center mb-2">
//             <img
//               src="latest-product-2.jpg"
//               alt="Product 2"
//               className="w-12 h-12 object-cover rounded mr-2"
//             />
//             <span>Burger</span>
//           </li>
//         </ul>
//       </div>

//       {/* Product Tags */}
//       <div>
//         <h3 className="text-lg font-bold mb-2">Product Tags</h3>
//         <div className="flex flex-wrap gap-2">
//           <span className="bg-gray-200 p-1 rounded">Sandwich</span>
//           <span className="bg-gray-200 p-1 rounded">Burger</span>
//           <span className="bg-gray-200 p-1 rounded">Pizza</span>
//         </div>
//       </div>
//     </aside>

//     {/* Main Content */}
//     <main className="w-full lg:w-3/4">
//       {/* Sorting Options */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <label className="mr-2">Sort By:</label>
//           <select className="p-2 border border-gray-300 rounded">
//             <option>Newest</option>
//             <option>Popular</option>
//           </select>
//         </div>
//         <div>
//           <label className="mr-2">Show:</label>
//           <select className="p-2 border border-gray-300 rounded">
//             <option>Default</option>
//             <option>10</option>
//           </select>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {/* Single Product */}
//         <div className="border p-4">
//           <img
//             src="product-1.jpg"
//             alt="Product"
//             className="w-full h-40 object-cover rounded mb-2"
//           />
//           <h3 className="text-lg font-bold">Fresh Lime</h3>
//           <p className="text-orange-500">$12.00</p>
//           <p className="line-through text-gray-500">$15.00</p>
//         </div>

//         <div className="border p-4">
//           <img
//             src="product-2.jpg"
//             alt="Product"
//             className="w-full h-40 object-cover rounded mb-2"
//           />
//           <h3 className="text-lg font-bold">Burger</h3>
//           <p className="text-orange-500">$20.00</p>
//           <p className="line-through text-gray-500">$25.00</p>
//         </div>

//         {/* Add more products as needed */}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-4">
//         <button className="p-2 border border-gray-300">1</button>
//         <button className="p-2 border border-gray-300 bg-orange-500 text-white">
//           2
//         </button>
//         <button className="p-2 border border-gray-300">3</button>
//       </div>
//     </main>
//   </div>
// </div>
//         </div>
<div className="product-page p-4">
  {/* Sorting and Search Section */}
  <div className="header-controls flex justify-between items-center mb-6">
    {/* Sorting */}
    <div className="sorting flex items-center gap-2">
      <label htmlFor="sort-by" className="text-sm font-medium">Sort By:</label>
      <select id="sort-by" className="border border-gray-300 rounded p-2 text-sm">
        <option value="newest">Newest</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Show Options */}
    <div className="view-options flex items-center gap-2">
      <label htmlFor="show" className="text-sm font-medium">Show:</label>
      <select id="show" className="border border-gray-300 rounded p-2 text-sm">
        <option value="default">Default</option>
        {/* Add more options as needed */}
      </select>
    </div>

    {/* Search */}
    <div className="search flex items-center gap-2">
      <input 
        type="text" 
        placeholder="Search Product" 
        className="border border-gray-300 rounded p-2 text-sm w-48"
      />
      <button className="bg-yellow-500 text-white rounded px-4 py-2">🔍</button>
    </div>
  </div>

  <div className="main-content flex gap-6">
    {/* Product Grid Section */}
    <section className="product-grid grid grid-cols-3 gap-6 w-3/4">
      <div className="product-item border rounded p-4 shadow">
        <img src="image1.jpg" alt="Fresh Lime" className="w-full rounded mb-4" />
        <h4 className="font-bold text-lg">Fresh Lime</h4>
        <p className="text-sm">
          $33.00 <span className="line-through text-gray-500">$45.00</span>
        </p>
      </div>
      <div className="product-item border rounded p-4 shadow">
        <img src="image2.jpg" alt="Chocolate Muffin" className="w-full rounded mb-4" />
        <h4 className="font-bold text-lg">Chocolate Muffin</h4>
        <p className="text-sm">
          $33.00 <span className="line-through text-gray-500">$45.00</span>
        </p>
      </div>
      <div className="product-item border rounded p-4 shadow">
        <img src="image3.jpg" alt="Burger" className="w-full rounded mb-4" />
        <h4 className="font-bold text-lg">Burger</h4>
        <p className="text-sm">
          $33.00 <span className="line-through text-gray-500">$45.00</span>
        </p>
      </div>
      {/* Add more product items as needed */}
    </section>

    {/* Sidebar Section */}
    <aside className="sidebar w-1/4 space-y-6">
      {/* Category Filter */}
      <div className="category-filter">
        <h3 className="font-bold text-lg mb-2">Category</h3>
        <ul className="space-y-1">
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Sandwiches
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Burger
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Chicken Chop
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Drinks
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Pizza
            </label>
          </li>
          <li>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="form-checkbox" />
              Non Veg
            </label>
          </li>
        </ul>
      </div>

      {/* Ad Banner */}
      <div className="ad-banner bg-gray-100 p-4 rounded text-center">
        <h3 className="font-bold text-lg mb-2">Perfect Classic Restaurant</h3>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Shop Now</button>
      </div>

      {/* Price Filter */}
      <div className="price-filter">
        <h3 className="font-bold text-lg mb-2">Filter By Price</h3>
        <input 
          type="range" 
          min="0" 
          max="500" 
          className="w-full"
        />
      </div>

      {/* Latest Products */}
      <div className="latest-products">
        <h3 className="font-bold text-lg mb-2">Latest Products</h3>
        <ul className="space-y-1">
          <li className="text-sm">Pizza</li>
          <li className="text-sm">Burger</li>
          <li className="text-sm">Chocolate Muffin</li>
        </ul>
      </div>

      {/* Product Tags */}
      <div className="product-tags">
        <h3 className="font-bold text-lg mb-2">Product Tags</h3>
        <ul className="flex flex-wrap gap-2">
          <li className="bg-gray-200 px-2 py-1 rounded text-sm">Services</li>
          <li className="bg-gray-200 px-2 py-1 rounded text-sm">Our Menu</li>
          <li className="bg-gray-200 px-2 py-1 rounded text-sm">Burger</li>
        </ul>
      </div>
    </aside>
  </div>

  {/* Pagination */}
  <div className="pagination flex justify-center items-center mt-6 space-x-2">
    <button className="px-3 py-1 bg-gray-200 rounded">◀</button>
    <button className="px-3 py-1 bg-yellow-500 text-white rounded">1</button>
    <button className="px-3 py-1 bg-gray-200 rounded">2</button>
    <button className="px-3 py-1 bg-gray-200 rounded">3</button>
    <button className="px-3 py-1 bg-gray-200 rounded">▶</button>
  </div>
</div>
    )
}
// export default function BlogDetails() {
//     return (
//     <div className="flex justify-center items-center">
//         <div className="bg-gray-50 py-10 w-10/12">
//         <div className="container mx-auto grid grid-cols-12 gap-8">
//           {/* Blog Content Section */}
//           <div className="col-span-8 bg-white p-6 shadow-lg rounded">
//             {/* Blog Image */}
//             <img
//               src="BlogThumbnail.png"
//               alt="Blog Thumbnail"
//               className="w-full rounded mb-6"
//             />
//             {/* Blog Meta Info */}
//             <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
//               <span>📅 Feb 14, 2022</span>
//               <span>💬 31 Comments</span>
//               <span>👤 Admin</span>
//             </div>
//             {/* Blog Title */}
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">
//               10 Reasons To Do A Digital Detox Challenge
//             </h1>
//             {/* Blog Content */}
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
//               condimentum nulla eu mi efficitur, vitae interdum elit malesuada.
//             </p>
//             <div className="bg-orange-100 text-orange-600 p-4 rounded mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </div>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
//               bibendum commodo eros, non scelerisque velit fermentum ac.
//             </p>
//             <img
//               src="https://via.placeholder.com/800x400"
//               alt="Dish"
//               className="w-full rounded mb-6"
//             />
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Quisque lacinia, lacus a suscipit varius, enim quam posuere ligula,
//               eu ultrices mauris nisi vel velit.
//             </p>
//             {/* Tags */}
//             <div className="flex items-center flex-wrap space-x-4 text-sm text-gray-500 mt-6">
//               <span>Tags:</span>
//               <a href="#" className="text-orange-500 hover:underline">
//                 Restaurant
//               </a>
//               <a href="#" className="text-orange-500 hover:underline">
//                 Dinner
//               </a>
//               <a href="#" className="text-orange-500 hover:underline">
//                 Pizza
//               </a>
//             </div>
//           </div>
  
//           {/* Sidebar */}
//           <div className="col-span-4">
//             {/* Author Info */}
//             <div className="bg-white p-6 shadow-lg rounded mb-6">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Author"
//                 className="rounded-full w-16 h-16 mx-auto mb-4"
//               />
//               <h3 className="text-center text-lg font-bold">Prince Miyako</h3>
//               <p className="text-center text-gray-500 text-sm">
//                 Blogger / Photographer
//               </p>
//               <div className="flex justify-center space-x-4 mt-4">
//                 <a href="#" className="text-orange-500 hover:underline">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-orange-500 hover:underline">
//                   Twitter
//                 </a>
//                 <a href="#" className="text-orange-500 hover:underline">
//                   Instagram
//                 </a>
//               </div>
//             </div>
  
//             {/* Recent Posts */}
//             <div className="bg-white p-6 shadow-lg rounded mb-6">
//               <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
//               <ul className="space-y-4">
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-orange-500 hover:underline"
//                   >
//                     Lorem ipsum dolor sit amet
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-orange-500 hover:underline"
//                   >
//                     Quisque varius mi a lacus efficitur
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="text-gray-700 hover:text-orange-500 hover:underline"
//                   >
//                     Etiam volutpat vehicula libero
//                   </a>
//                 </li>
//               </ul>
//             </div>
  
//             {/* Filter by Menu */}
//             <div className="bg-white p-6 shadow-lg rounded mb-6">
//               <h3 className="text-lg font-bold mb-4">Filter by Menu</h3>
//               <ul className="space-y-2">
//                 <li>Chicken Fry - 56</li>
//                 <li>Burger Food - 46</li>
//                 <li>Pizza - 16</li>
//                 <li>Fresh Fruits - 36</li>
//               </ul>
//             </div>
  
//             {/* Photo Gallery */}
//             <div className="bg-white p-6 shadow-lg rounded">
//               <h3 className="text-lg font-bold mb-4">Photo Gallery</h3>
//               <div className="grid grid-cols-3 gap-2">
//                 <img
//                   src="https://via.placeholder.com/80"
//                   alt="Gallery Item"
//                   className="rounded"
//                 />
//                 <img
//                   src="https://via.placeholder.com/80"
//                   alt="Gallery Item"
//                   className="rounded"
//                 />
//                 <img
//                   src="https://via.placeholder.com/80"
//                   alt="Gallery Item"
//                   className="rounded"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     );
//   }

export default function BlogDetails() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-50 py-10 w-full sm:w-11/12 lg:w-10/12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Blog Content Section */}
          <div className="md:col-span-8 bg-white p-6 shadow-lg rounded">
            {/* Blog Image */}
            <img
              src="BlogThumbnail.png"
              alt="Blog Thumbnail"
              className="w-full rounded mb-6"
            />
            {/* Blog Meta Info */}
            <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 mb-6">
              <span>📅 Feb 14, 2022</span>
              <span>💬 31 Comments</span>
              <span>👤 Admin</span>
            </div>
            {/* Blog Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              10 Reasons To Do A Digital Detox Challenge
            </h1>
            {/* Blog Content */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              condimentum nulla eu mi efficitur, vitae interdum elit malesuada.
            </p>
            <div className="bg-orange-100 text-orange-600 p-4 rounded mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              bibendum commodo eros, non scelerisque velit fermentum ac.
            </p>
            <img
              src="/blog2.png"
              alt="Dish"
              className="w-full rounded mb-6"
            />
            <p className="text-gray-600 leading-relaxed mb-6">
              Quisque lacinia, lacus a suscipit varius, enim quam posuere ligula,
              eu ultrices mauris nisi vel velit.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-500 mt-6">
              <span>Tags:</span>
              <a href="#" className="text-orange-500 hover:underline">
                Restaurant
              </a>
              <a href="#" className="text-orange-500 hover:underline">
                Dinner
              </a>
              <a href="#" className="text-orange-500 hover:underline">
                Pizza
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 mt-8 md:mt-0">
            {/* Author Info */}
            <div className="bg-white p-6 shadow-lg rounded mb-6">
              <img
                src="/Blogger.png"
                alt="Author"
                className="rounded-full w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-center text-lg font-bold">Prince Miyako</h3>
              <p className="text-center text-gray-500 text-sm">
                Blogger / Photographer
              </p>
              <div className="w-full flex justify-center py-2"><h1 className="text-[#FF9F0D]">★★★★★</h1></div>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-orange-500 hover:underline">
                  <img src="Facebook.png" alt="" />
                </a>
                <a href="#" className="text-orange-500 hover:underline">
                <img src="Twitter.png" alt="" />
                </a>
                <a href="#" className="text-orange-500 hover:underline">
                <img src="Instagram.png" alt="" />
                </a>
                <a href="#" className="text-orange-500 hover:underline">
                <img src="Pinterest.png" alt="" />
                </a>
              </div>
            </div>

            

            <div className="p-6 bg-pink-50">
  {/* Recent Post */}
  <div className="mb-8">
    <h3 className="font-bold text-lg mb-4">Recent Post</h3>
    <ul className="space-y-4">
      <li className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/48"
          alt="Post Thumbnail 1"
          className="w-12 h-12 rounded-md"
        />
        <div>
          <p className="text-sm text-gray-500">June 22, 2023</p>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
      </li>
      <li className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/48"
          alt="Post Thumbnail 2"
          className="w-12 h-12 rounded-md"
        />
        <div>
          <p className="text-sm text-gray-500">June 22, 2023</p>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
      </li>
      <li className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/48"
          alt="Post Thumbnail 3"
          className="w-12 h-12 rounded-md"
        />
        <div>
          <p className="text-sm text-gray-500">June 22, 2023</p>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet...</p>
        </div>
      </li>
    </ul>
  </div>

  {/* Filter By Menu */}
  <div className="mb-8">
    <h3 className="font-bold text-lg mb-4">Filter By Menu</h3>
    <ul className="space-y-4">
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/FilterbyMenu.png"
            alt="Chicken Fry"
            className="w-12 h-12 rounded-md"
          />
          <p className="text-gray-700">Chicken Fry</p>
        </div>
        <span className="text-gray-500">20</span>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="FilterbyMenu2.png"
            alt="Burger Food"
            className="w-12 h-12 rounded-md"
          />
          <p className="text-gray-700">Burger Food</p>
        </div>
        <span className="text-gray-500">48</span>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="FilterbyMenu3.png"
            alt="Pizza"
            className="w-12 h-12 rounded-md"
          />
          <p className="text-gray-700">Pizza</p>
        </div>
        <span className="text-gray-500">16</span>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="FilterbyMenu4.png"
            alt="Fresh Fruits"
            className="w-12 h-12 rounded-md"
          />
          <p className="text-gray-700">Fresh Fruits</p>
        </div>
        <span className="text-gray-500">30</span>
      </li>
      <li className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="FilterbyMenu5.png"
            alt="Vegetables"
            className="w-12 h-12 rounded-md"
          />
          <p className="text-gray-700">Vegetables</p>
        </div>
        <span className="text-gray-500">10</span>
      </li>
    </ul>
  </div>

  {/* Popular Tags */}
  <div className="mb-8">
    <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded">Sandwich</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded">Tikka</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded">BBQ</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded">Burger</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded">Food</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded">Chicken</span>
    </div>
  </div>

  {/* Photo Gallery */}
  <div>
    <h3 className="font-bold text-lg mb-4">Photo Gallery</h3>
    <div className="grid grid-cols-3 gap-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Gallery Image 1"
        className="rounded-md"
      />
      <img
        src="https://via.placeholder.com/100"
        alt="Gallery Image 2"
        className="rounded-md"
      />
      <img
        src="https://via.placeholder.com/100"
        alt="Gallery Image 3"
        className="rounded-md"
      />
      <img
        src="https://via.placeholder.com/100"
        alt="Gallery Image 4"
        className="rounded-md"
      />
      <img
        src="https://via.placeholder.com/100"
        alt="Gallery Image 5"
        className="rounded-md"
      />
      <img
        src="https://via.placeholder.com/100"
        alt="Gallery Image 6"
        className="rounded-md"
      />
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
}
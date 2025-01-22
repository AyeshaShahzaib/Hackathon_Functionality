
// import React from 'react'

// function Chef() {
//   return (
//     <div><div className="bg-black text-white py-12">
//     <div className="container mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-8">
//         <span className="text-yellow-500">Meet</span> Our Chef
//       </h2>
//       <div className="flex flex-wrap justify-center gap-6">
//         <div className="bg-gray-800 rounded-lg p-6 max-w-xs">
//           <img
//             src="path/to/chef1.jpg"
//             alt="Chef D. Estewood"
//             className="rounded-lg mb-4 w-full"
//           />
//           <h3 className="text-xl font-semibold mb-1">D. Estewood</h3>
//           <p className="text-gray-400">Chief Chef</p>
//         </div>
//         <div className="bg-gray-800 rounded-lg p-6 max-w-xs">
//           <img
//             src="path/to/chef2.jpg"
//             alt="Chef D. Sorelesh"
//             className="rounded-lg mb-4 w-full"
//           />
//           <h3 className="text-xl font-semibold mb-1">D. Sorelesh</h3>
//           <p className="text-gray-400">Assistant Chef</p>
//         </div>
//         <div className="bg-gray-800 rounded-lg p-6 max-w-xs">
//           <img
//             src="path/to/chef3.jpg"
//             alt="Chef M. William"
//             className="rounded-lg mb-4 w-full"
//           />
//           <h3 className="text-xl font-semibold mb-1">M. William</h3>
//           <p className="text-gray-400">Advertising Chef</p>
//         </div>
//         <div className="bg-gray-800 rounded-lg p-6 max-w-xs">
//           <img
//             src="path/to/chef4.jpg"
//             alt="Chef W. Breadwood"
//             className="rounded-lg mb-4 w-full"
//           />
//           <h3 className="text-xl font-semibold mb-1">W. Breadwood</h3>
//           <p className="text-gray-400">Chef</p>
//         </div>
//       </div>
//       <button className="mt-8 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600">
//         See More
//       </button>
//     </div>
//   </div></div>
//   )
// }

// export default Chef

// import React, { useEffect, useState } from 'react';
// import { client } from "../../sanity/lib/client";// Adjust the path based on your project structure

// function Chef() {
//   const [chefs, setChefs] = useState([]);

//   useEffect(() => {
//     // Fetch chef data from Sanity
//     const fetchChefs = async () => {
//       try {
//         const data = await client.fetch(
//           `*[_type == "chef"]{
//             name,
//             position,
//             experience,
//             specialty,
//             "imageUrl": image.asset->url,
//             description,
//             available
//           }`
//         );
//         setChefs(data);
//       } catch (error) {
//         console.error('Error fetching chefs:', error);
//       }
//     };

//     fetchChefs();
//   }, []);

//   return (
//     <div>
//       <div className="bg-black text-white py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">
//             <span className="text-yellow-500">Meet</span> Our Chef
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {chefs.map((chef, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-lg p-6 max-w-xs"
//               >
//                 <img
//                   src={chef.imageUrl || 'path/to/default-image.jpg'}
//                   alt={chef.name}
//                   className="rounded-lg mb-4 w-full"
//                 />
//                 <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
//                 <p className="text-gray-400">{chef.position}</p>
//                 <p className="text-gray-300 mt-2">{chef.specialty}</p>
//                 <p className="text-gray-500 text-sm mt-2">
//                   {chef.experience} years of experience
//                 </p>
//               </div>
//             ))}
//           </div>
//           <button className="mt-8 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600">
//             See More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chef;

import { client } from "@/sanity/lib/client";

interface Chef {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

const Chef = async () => {
  try {
    // Fetch data directly in the server component
    const chefs: Chef[] = await client.fetch<Chef[]>(`
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

    console.log('Fetched Chefs:', chefs);

    if (!chefs || chefs.length === 0) {
      return <div>No chefs found!</div>;
    }

    return (
      <div className="chef-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {chefs.map((chef) => (
          <div key={chef.name} className="chef-card p-4 border rounded shadow-md">
            <img src={chef.imageUrl} alt={chef.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{chef.name}</h2>
            <p><strong>Position:</strong> {chef.position}</p>
            <p><strong>Experience:</strong> {chef.experience} years</p>
            <p><strong>Specialty:</strong> {chef.specialty}</p>
            <p><strong>Description:</strong> {chef.description}</p>
            <p className={chef.available ? 'text-green-500' : 'text-red-500'}>
              <strong>Status:</strong> {chef.available ? 'Active' : 'Inactive'}
            </p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching chefs:', error);
    return <div>Error loading chefs data!</div>;
  }
};

export default Chef;


// import React from 'react'

import { fetchChefs } from "@/sanity/lib/chef";
import { sanityfetch } from "@/sanity/lib/fetch";
import Link from "next/link";

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



// interface Chef {
//   name: string;
//   position: string;
//   experience: string;
//   specialty: string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// export default async function Chef(){
//   const Chefs:Chef[]=await sanityfetch({query: fetchChefs});
//   return(
//     <div>
//           <div className="bg-black text-white py-12">
//             <div className="container mx-auto text-center">
//               <h2 className="text-3xl font-bold mb-8">
//                  <span className="text-yellow-500">Meet</span> Our Chef
//               </h2>
//              <div className="flex flex-wrap justify-center gap-6">
//                 {Chefs.map((chef, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-800 rounded-lg p-6 max-w-xs"
//                   >
//                     <img
//                       src={chef.imageUrl || 'path/to/default-image.jpg'}
//                       alt={chef.name}
//                       className="rounded-lg mb-4 w-full"
//                     />
//                     <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
//                     <p className="text-gray-400">{chef.position}</p>
//                     <p className="text-gray-300 mt-2">{chef.specialty}</p>
//                     <p className="text-gray-500 text-sm mt-2">
//                       {chef.experience} years of experience
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <button className="mt-8 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600">
//                 See More
//               </button>
//             </div>
//           </div>
// )
  
// }         </div>
//  

// interface Chef {
//   name: string;
//   position: string;
//   experience: string;
//   specialty: string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
// }

// export default async function Chef() {
//   const Chefs: Chef[] = await sanityfetch({ query: fetchChefs });

//   // Limit the number of chefs displayed to 3
//   const displayedChefs = Chefs.slice(0, 3);

//   return (
//     <div>
//       <div className="bg-black text-white py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">
//             <span className="text-yellow-500">Meet</span> Our Chef
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {displayedChefs.map((chef, index) => (
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
//           </div><Link href="\Chef">
//           <button className="mt-8 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600">
//             See More
//           </button></Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';

interface Chef {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

export default async function Chef() {
  const Chefs: Chef[] = await sanityfetch({ query: fetchChefs });

  // Limit the number of chefs displayed to 3
  const displayedChefs = Chefs.slice(0, 3);

  return (
    <div>
      <div className="bg-black text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-yellow-500">Meet</span> Our Chef
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {displayedChefs.map((chef, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 max-w-xs"
              >
                <Image
                  src={chef.imageUrl || '/path/to/default-image.jpg'}
                  alt={chef.name}
                  width={400}
                  height={400}
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
                <p className="text-gray-400">{chef.position}</p>
                <p className="text-gray-300 mt-2">{chef.specialty}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {chef.experience} years of experience
                </p>
              </div>
            ))}
          </div>
          <Link href="/Chef">
            <button className="mt-8 bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// import { fetchChefs } from "@/sanity/lib/chef";
// import { sanityfetch } from "@/sanity/lib/fetch";
// interface Chef {
//     name: string;
//     position: string;
//     experience: string;
//     specialty: string;
//     imageUrl: string;
//     description: string;
//     available: boolean;
//   }

// async function OurChef() {
//     const Chefs: Chef[] = await sanityfetch({ query: fetchChefs });
//   return (
//     <div>
//         <div className="h-[320px] bg-[url('/OurMenu.png')] bg-cover bg-center">
//         <div className="h-full w-full flex flex-col justify-center items-center text-white px-4">
//           {/* Title */}
//           <h1 className="leading-[56px] text-[32px] md:text-[48px] font-bold text-white py-4">
//             Blog List
//           </h1>
          
//           {/* Breadcrumb */}
//           <div className="flex items-center text-sm md:text-[20px]">
//             <h1 className="leading-[28px] font-normal">Home</h1>
//             <img src="/CaretRight.png" alt="Caret Right" className="w-4 h-4 mx-2" />
//             <h1 className="leading-[28px] font-normal text-[#FF9F0D]">Blog</h1>
//           </div>
//         </div>
//       </div>
//       <div>
//       <div className="bg-black text-white py-12">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8">
//             <span className="text-yellow-500">Meet</span> Our Chef
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {Chefs.map((chef, index) => (
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
//         </div>
//       </div>
//     </div>
//     </div>

//   )
// }

// export default OurChef

import { fetchChefs } from "@/sanity/lib/chef";
import { sanityfetch } from "@/sanity/lib/fetch";

interface Chef {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

async function OurChef() {
  const Chefs: Chef[] = await sanityfetch({ query: fetchChefs });
  return (
    <div>
      <div className="h-[320px] bg-[url('/OurMenu.png')] bg-cover bg-center">
        <div className="h-full w-full flex flex-col justify-center items-center text-white px-4">
          {/* Title */}
          <h1 className="leading-[56px] text-[32px] md:text-[48px] font-bold text-white py-4">
            Blog List
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm md:text-[20px]">
            <h1 className="leading-[28px] font-normal">Home</h1>
            <img
              src="/CaretRight.png"
              alt="Caret Right"
              className="w-4 h-4 mx-2"
            />
            <h1 className="leading-[28px] font-normal text-[#FF9F0D]">Blog</h1>
          </div>
        </div>
      </div>

      {/* Chef Section */}
      <div>
        <div className="bg-black text-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-yellow-500">Meet</span> Our Chef
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {Chefs.map((chef, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 max-w-xs"
                >
                  <img
                    src={chef.imageUrl || "path/to/default-image.jpg"}
                    alt={chef.name}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurChef;

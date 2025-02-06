// export default function AboutUs(){
//     return(
//         <div className="h-[700px] bg-[#0D0D0D]  py-[120px] flex justify-center">
//       <div className="flex justify-evenly w-10/12 ">
//       <div className="w-[562px] flex flex-col gap-4">
//                 <h1 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]">About us</h1>
//                 <h1 className="leading-[56px] text-[48px] font-bold text-white"><b className="font-[700] text-[#FF9F0D]">We</b> Create the best <br />
// foody product
// </h1>
//                 <p className="w-[526px] text-left leading-[24px] text-[16px] font-normal text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
//                 <div className="text-white flex flex-col gap-2">
//                     <div><p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p></div>
//                     <div><p> Quisque diam pellentesque bibendum non dui volutpat fringilla</p></div>
//                     <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></div>
//                 </div>
//                 <button className=" w-[190px] h-[60px]  bg-[#FF9F0D] rounded-full leading-[24px] text-[16px] font-normal text-white">
//         Read More
//       </button>
//                 </div>
//             <div className="w-[660px]">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
 
//   <div className="md:col-span-2">
//     <img
//       src="large-image.png"
//       alt="Large Dish"
//       className="w-full h-full object-cover rounded-lg shadow-lg"
//     />
//   </div>
 
//   <div>
//     <img
//       src="small-image1.png"
//       alt="Small Dish 1"
//       className="w-full h-full object-cover rounded-lg shadow-lg"
//     />
//   </div>
 
//   <div>
//     <img
//       src="small-image2.png"
//       alt="Small Dish 2"
//       className="w-full h-full object-cover rounded-lg shadow-lg"
//     />
//   </div>
// </div>
//             </div>
//       </div>
//         </div>
//     )
// }

import Image from "next/image"; // Import the Image component

export default function AboutUs() {
  return (
    <div className="h-auto min-h-[700px] w-full bg-[#0D0D0D] py-[80px] md:py-[120px] flex justify-center">
      <div className="flex flex-col md:flex-row justify-evenly w-11/12 lg:w-10/12 gap-8 md:gap-0">
        {/* Left Section */}
        <div className="w-full md:w-[562px] flex flex-col gap-4">
          <h1 className="leading-[40px] text-[28px] md:text-[32px] font-normal text-[#FF9F0D]">
            About us
          </h1>
          <h1 className="leading-[40px] md:leading-[56px] text-[32px] md:text-[48px] font-bold text-white">
            <b className="font-[700] text-[#FF9F0D]">We</b> Create the best <br />
            foody product
          </h1>
          <p className="text-left leading-[24px] text-[14px] md:text-[16px] font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="text-white flex flex-col gap-2">
            <div>
              <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div>
              <p>
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
          <button className="w-[160px] md:w-[190px] h-[50px] md:h-[60px] bg-[#FF9F0D] rounded-full leading-[24px] text-[14px] md:text-[16px] font-normal text-white">
            Read More
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[660px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Image
                src="/large-image.png" // Path to the image in the public folder
                alt="Large Dish"
                width={660} // Adjust width as needed
                height={400} // Adjust height as needed
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/small-image1.png" // Path to the image in the public folder
                alt="Small Dish 1"
                width={320} // Adjust width as needed
                height={200} // Adjust height as needed
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/small-image2.png" // Path to the image in the public folder
                alt="Small Dish 2"
                width={320} // Adjust width as needed
                height={200} // Adjust height as needed
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
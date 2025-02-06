import Link from "next/link"

// export default function Header(){
//     return(
//         <div className="h-screen w-full bg-[url('/bg-herosection.png')] ">
//           <div className="flex justify-center items-center h-full w-full">
//           <div className="flex justify-center items-center ">
//   <div className="flex justify-between items-center w-10/12">
//     <div className="w-[58%] flex flex-col gap-4">
//       <h1 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]">Its Quick & Amusing!</h1>
//       <h1 className="leading-[68px] text-[60px] font-bold text-white">
//         <b className="font-[700] text-[#FF9F0D]">Th</b>e Art of speed <br />
//         food Quality
//       </h1>
//       <p className="leading-[24px] text-[16px] font-normal text-white">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//         Varius sed pharetra dictum neque massa congue
//       </p>
//       <button className="w-[190px]  h-[60px] my-[36px]  bg-[#FF9F0D] rounded-full leading-[24px] text-[16px] font-normal text-white">
//         See Menu
//       </button>
//     </div>
//     <div className="flex justify-end ">
//       <img src="Food.png" alt="Food" className="w-[95%] h-[95%]" />
//     </div>
//   </div>
// </div>
//           </div>
// {/* Herosection */}


//         </div>

//     )
// }
// export default function Header() {
//   return (
//     <div className="h-screen  bg-[url('/bg-herosection.png')] bg-cover bg-center">
//       <div className="flex justify-center items-center h-full w-full">
//         <div className="flex flex-col lg:flex-row justify-between items-center w-10/12 lg:w-10/12">
//           {/* Text Content */}
//           <div className="w-full lg:w-[58%] flex flex-col gap-4 text-center lg:text-left">
//             <h1 className="leading-[32px] lg:leading-[40px] text-[24px] lg:text-[32px] font-normal text-[#FF9F0D]">
//               It's Quick & Amusing!
//             </h1>
//             <h1 className="leading-[48px] lg:leading-[68px] text-[36px] lg:text-[60px] font-bold text-white">
//               <b className="font-[700] text-[#FF9F0D]">Th</b>e Art of Speed <br />
//               Food Quality
//             </h1>
//             <p className="leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] font-normal text-white">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
//               Varius sed pharetra dictum neque massa congue
//             </p>
//             <button className="w-[160px] lg:w-[190px] h-[50px] lg:h-[60px] my-[24px] lg:my-[36px] bg-[#FF9F0D] rounded-full leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] font-normal text-white">
//               See Menu
//             </button>
//           </div>
//           {/* Image Content */}
//           <div className="w-full lg:w-[42%] flex justify-center lg:justify-end mt-6 lg:mt-0">
//             <img
//               src="Food.png"
//               alt="Food"
//               className="w-[80%] lg:w-[95%] h-auto max-w-[400px] lg:max-w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Header() {
  return (
    <div className="h-screen bg-[url('/bg-herosection.png')] bg-cover bg-center">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center w-10/12 lg:w-10/12">
          {/* Text Content */}
          <div className="w-full lg:w-[58%] flex flex-col gap-4 text-center lg:text-left">
            <h1 className="leading-[32px] lg:leading-[40px] text-[24px] lg:text-[32px] font-normal text-[#FF9F0D]">
              It's Quick & Amusing!
            </h1>
            <h1 className="leading-[48px] lg:leading-[68px] text-[36px] lg:text-[60px] font-bold text-white">
              <b className="font-[700] text-[#FF9F0D]">Th</b>e Art of Speed <br />
              Food Quality
            </h1>
            <p className="leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] font-normal text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Varius sed pharetra dictum neque massa congue
            </p>
            <button className="w-[160px] lg:w-[190px] h-[50px] lg:h-[60px] my-[24px] lg:my-[36px] bg-[#FF9F0D] rounded-full leading-[20px] lg:leading-[24px] text-[14px] lg:text-[16px] font-normal text-white">
              See Menu
            </button>
          </div>
          {/* Image Content */}
          <div className="w-full lg:w-[42%] flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src="Food.png"
              alt="Food"
              className="w-[80%] lg:w-[95%] h-auto max-w-[400px] lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Cart(){
//     return(

// <div className="h-[320px] bg-[url('/OurMenu.png')] bg-cover bg-center">
// <div className="h-full w-full flex flex-col justify-center items-center text-white px-4">
//   {/* Title */}
//   <h1 className="leading-[56px] text-[32px] md:text-[48px] font-bold text-white py-4">
//   Shopping Cart
//   </h1>
  
//   {/* Breadcrumb */}
//   <div className="flex items-center text-sm md:text-[20px]">
//     <h1 className="leading-[28px] font-normal">Home</h1>
//     <img src="/CaretRight.png" alt="Caret Right" className="w-4 h-4 mx-2" />
//     <h1 className="leading-[28px] font-normal text-[#FF9F0D]">Shopping Cart</h1>
//   </div>
// </div>
// </div>
// )
    
// }

import Image from "next/image"; // Import the Image component

export default function Cart() {
  return (
    <div className="h-[320px] bg-[url('/OurMenu.png')] bg-cover bg-center">
      <div className="h-full w-full flex flex-col justify-center items-center text-white px-4">
        {/* Title */}
        <h1 className="leading-[56px] text-[32px] md:text-[48px] font-bold text-white py-4">
          Shopping Cart
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center text-sm md:text-[20px]">
          <h1 className="leading-[28px] font-normal">Home</h1>
          <Image
            src="/CaretRight.png" // Path to the image in the public folder
            alt="Caret Right"
            width={16} // Adjust width as needed
            height={16} // Adjust height as needed
            className="w-4 h-4 mx-2"
          />
          <h1 className="leading-[28px] font-normal text-[#FF9F0D]">
            Shopping Cart
          </h1>
        </div>
      </div>
    </div>
  );
}
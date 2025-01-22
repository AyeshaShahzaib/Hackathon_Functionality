// export default function OurMenu(){
//     return(
//     <div className="h-[320px] bg-[url('/OurMenu.png')]">
//               <div className="h-full w-full flex flex-col justify-center items-center text-white">
//                      <h1 className="leading-[56px] text-[48px] font-bold text-white py-4">Our Menu</h1>
//                    <div className="flex items-center"><h1 className="leading-[28px] text-[20px] font-normal">Home</h1><img src="/CaretRight.png" alt="" className="w-4 h-4"/><h1 className="leading-[28px] text-[20px] font-normal text-[#FF9F0D]">Menu</h1></div>  
//               </div>
//     </div>
//     )
// }

export default function OurMenu() {
  return (
    <div className="h-[320px] bg-[url('/OurMenu.png')] bg-cover bg-center">
      <div className="h-full w-full flex flex-col justify-center items-center text-white px-4">
        {/* Title */}
        <h1 className="leading-[56px] text-[32px] md:text-[48px] font-bold text-white py-4">
          Our Menu
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm md:text-[20px]">
          <h1 className="leading-[28px] font-normal">Home</h1>
          <img src="/CaretRight.png" alt="Caret Right" className="w-4 h-4 mx-2" />
          <h1 className="leading-[28px] font-normal text-[#FF9F0D]">Menu</h1>
        </div>
      </div>
    </div>
  );
}
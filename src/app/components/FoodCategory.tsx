// export default function FoodCategory(){
//     const imagesURL:string[]=["Food1.png","Food2.png","Food3.png","Food4.png"]
// return(
//     <div className="h-[1464px] bg-[url('/background.jpg')] bg-cover ">

//         <div className="py-[90px] flex flex-col gap-4">
//             <div className="flex justify-center">
//                 <h1 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]"> Food Category</h1>
//             </div>
//             <div  className="flex justify-center">
//                 <h1 className="leading-[56px] text-[48px] font-bold text-white"><b className="font-[700] text-[#FF9F0D]">Ch</b>oose Food Iteam</h1>
//             </div>
//         </div>
        
        
//         <div className="flex justify-center">
//         <div className="w-10/12 flex justify-between gap-6">
//              {
//                 imagesURL.map((images:string)=>{
//                  return(
//                     <img src={images} alt="Food" className="w-[55%] h-[75%]" />
//                  )
//                 })
//              }
//         </div>
             
//     </div>
//     <div className="flex justify-center text-white py-12 px-6 lg:px-16">
//   <div className="w-10/12 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//     {/* Left Section: Image Collage */}
//     <div className="grid grid-cols-3 gap-4">
//       <img src="taco.png" alt="Tacos" className="rounded-lg object-cover h-40 w-full col-span-2" />
//       <img src="Burger.png" alt="Burger" className="rounded-lg object-cover h-40 w-full" />
//       <img src="fried-chicken.png" alt="Fried Chicken" className="rounded-lg object-cover h-40 w-full" />
//       <img src="meal.png" alt="Meal" className="rounded-lg object-cover h-40 w-full" />
//       <img src="pasta.png" alt="Pasta" className="rounded-lg object-cover h-40 w-full" />
//       <img src="fries.png" alt="Fries" className="rounded-lg object-cover h-40 w-full col-span-2" />
//     </div>

//     {/* Right Section: Text Content */}
//     <div>
//       <h3 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]">Why Choose Us</h3>
//       <h2 className="leading-[56px] text-[40px] font-bold text-white">
//         Ex<span className="font-[700] text-[#FF9F0D]">tra</span>ordinary Taste<br />
//         And Experienced
//       </h2>
//       <p className="text-gray-400 mt-4">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
//         dui volutpat fringilla bibendum. Ut ac augue urna, vitae feugiat pretium donec id elementum.
//       </p>
//       <div className="grid grid-cols-3 gap-4 mt-6">
//         {/* Features */}
//         <div className="text-center">
//           <div className="text-yellow-500 text-3xl mb-2">🍔</div>
//           <p className="text-gray-200 font-medium">Fast Food</p>
//         </div>
//         <div className="text-center">
//           <div className="text-yellow-500 text-3xl mb-2">🍝</div>
//           <p className="text-gray-200 font-medium">Lunch</p>
//         </div>
//         <div className="text-center">
//           <div className="text-yellow-500 text-3xl mb-2">🍷</div>
//           <p className="text-gray-200 font-medium">Dinner</p>
//         </div>
//       </div>
//       <div className="mt-8">
//         <p className="text-4xl font-bold text-white">
//           30<span className="text-yellow-500">+</span>
//         </p>
//         <p className="text-gray-400">Years of Experienced</p>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
   
// )
// }

export default function FoodCategory() {
  const imagesURL: string[] = ["Food1.png", "Food2.png", "Food3.png", "Food4.png"];

  return (
    <div className="h-auto w-full bg-[url('/background.jpg')] bg-cover bg-center">
      {/* Heading Section */}
      <div className="py-16 flex flex-col gap-4 text-center">
        <h1 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]">
          Food Category
        </h1>
        <h1 className="leading-[56px] text-[48px] font-bold text-white">
          <b className="font-[700] text-[#FF9F0D]">Ch</b>oose Food Item
        </h1>
      </div>

      {/* Food Items Grid */}
      <div className="flex justify-center py-12">
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {imagesURL.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt={`Food ${index + 1}`}
              className="rounded-lg object-cover w-full h-72"
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex justify-center text-white py-12 px-6 lg:px-16">
        <div className="w-11/12 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section: Image Collage */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src="taco.png"
              alt="Tacos"
              className="rounded-lg object-cover h-40 w-full col-span-2"
            />
            <img
              src="Burger.png"
              alt="Burger"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="fried-chicken.png"
              alt="Fried Chicken"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="meal.png"
              alt="Meal"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="pasta.png"
              alt="Pasta"
              className="rounded-lg object-cover h-40 w-full"
            />
            <img
              src="fries.png"
              alt="Fries"
              className="rounded-lg object-cover h-40 w-full col-span-2"
            />
          </div>

          {/* Right Section: Text Content */}
          <div>
            <h3 className="leading-[40px] text-[32px] font-normal text-[#FF9F0D]">
              Why Choose Us
            </h3>
            <h2 className="leading-[56px] text-[40px] font-bold text-white">
              Ex<span className="font-[700] text-[#FF9F0D]">tra</span>ordinary
              Taste
              <br />
              And Experienced
            </h2>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Ut ac augue urna, vitae feugiat pretium donec id elementum.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {/* Features */}
              {[
                { emoji: "🍔", label: "Fast Food" },
                { emoji: "🍝", label: "Lunch" },
                { emoji: "🍷", label: "Dinner" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-yellow-500 text-3xl mb-2">{item.emoji}</div>
                  <p className="text-gray-200 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-4xl font-bold text-white">
                30<span className="text-yellow-500">+</span>
              </p>
              <p className="text-gray-400">Years of Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
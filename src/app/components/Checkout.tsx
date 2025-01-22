// export default function Checkout(){
//     return(
//         <div className="flex justify-center items-center">
//             <div className="flex justify-center bg-gray-50 min-h-screen py-10 w-10/12">
//   <div className="container mx-auto grid grid-cols-12 gap-6">
//     {/* Shipping Address Section */}
//     <div className="col-span-8 bg-white p-6 shadow-lg rounded">
//       <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
//       <div className="grid grid-cols-2 gap-4">
//         {/* First Name */}
//         <input
//           type="text"
//           placeholder="First name"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Last Name */}
//         <input
//           type="text"
//           placeholder="Last name"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email address"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Phone Number */}
//         <input
//           type="text"
//           placeholder="Phone number"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Company */}
//         <input
//           type="text"
//           placeholder="Company"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Country */}
//         <select className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500">
//           <option>Choose country</option>
//         </select>
//         {/* City */}
//         <select className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500">
//           <option>Choose city</option>
//         </select>
//         {/* Zip Code */}
//         <input
//           type="text"
//           placeholder="Zip code"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Address 1 */}
//         <input
//           type="text"
//           placeholder="Address 1"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//         {/* Address 2 */}
//         <input
//           type="text"
//           placeholder="Address 2"
//           className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
//         />
//       </div>

//       {/* Billing Address */}
//       <div className="mt-6 flex items-center">
//         <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
//         <label className="ml-2 text-gray-700">Same as shipping address</label>
//       </div>

//       {/* Back to Cart Button */}
//       <button className="mt-6 text-[#FF9F0D] hover:underline">← Back to cart</button>
//     </div>

//     {/* Order Summary Section */}
//     <div className="col-span-4 bg-white p-6 shadow-lg rounded">
//       <h2 className="text-xl font-bold mb-6">Order Summary</h2>
//       <div className="space-y-4">
//         {/* Items */}
//         {Array(3)
//           .fill(0)
//           .map((_, i) => (
//             <div key={i} className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   src="/Kabab.png"
//                   alt="Product"
//                   className="w-16 h-16 rounded"
//                 />
//                 <div className="ml-4">
//                   <p className="font-semibold">Chicken Tikka Kabab</p>
//                   <p className="text-sm text-gray-600">150 gm net</p>
//                 </div>
//               </div>
//               <p className="font-semibold">525</p>
//             </div>
//           ))}

//         {/* Pricing Details */}
//         <div className="border-t pt-4">
//           <div className="flex justify-between">
//             <p>Sub-total</p>
//             <p>1305</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Shipping</p>
//             <p>Free</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Discount</p>
//             <p>25%</p>
//           </div>
//           <div className="flex justify-between">
//             <p>Tax</p>
//             <p>54.765</p>
//           </div>
//         </div>

//         {/* Total */}
//         <div className="border-t pt-4">
//           <div className="flex justify-between text-lg font-bold">
//             <p>Total</p>
//             <p>432.655</p>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col space-y-4 mt-6">
//           <button className="bg-[#FF9F0D] text-white py-3 rounded shadow ">
//             Proceed to Shipping →
//           </button>
//           <button className="bg-[#FF9F0D] text-white py-3 rounded shadow ">
//             Place an Order →
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
//     )
// }


export default function Checkout() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center bg-gray-50 min-h-screen py-10 w-full sm:w-10/12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Shipping Address Section */}
          <div className="col-span-1 md:col-span-8 bg-white p-6 shadow-lg rounded">
            <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Last Name */}
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Email address"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Phone Number */}
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Company */}
              <input
                type="text"
                placeholder="Company"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Country */}
              <select className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500">
                <option>Choose country</option>
              </select>
              {/* City */}
              <select className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500">
                <option>Choose city</option>
              </select>
              {/* Zip Code */}
              <input
                type="text"
                placeholder="Zip code"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Address 1 */}
              <input
                type="text"
                placeholder="Address 1"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
              {/* Address 2 */}
              <input
                type="text"
                placeholder="Address 2"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Billing Address */}
            <div className="mt-6 flex items-center">
              <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
              <label className="ml-2 text-gray-700">Same as shipping address</label>
            </div>

            {/* Back to Cart Button */}
            <button className="mt-6 text-[#FF9F0D] hover:underline">← Back to cart</button>
          </div>

          {/* Order Summary Section */}
          <div className="col-span-1 md:col-span-4 bg-white p-6 shadow-lg rounded">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {/* Items */}
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="/Kabab.png"
                        alt="Product"
                        className="w-16 h-16 rounded"
                      />
                      <div className="ml-4">
                        <p className="font-semibold">Chicken Tikka Kabab</p>
                        <p className="text-sm text-gray-600">150 gm net</p>
                      </div>
                    </div>
                    <p className="font-semibold">525</p>
                  </div>
                ))}

              {/* Pricing Details */}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p>Sub-total</p>
                  <p>1305</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>25%</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>54.765</p>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <p>Total</p>
                  <p>432.655</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col space-y-4 mt-6">
                <button className="bg-[#FF9F0D] text-white py-3 rounded shadow">
                  Proceed to Shipping →
                </button>
                <button className="bg-[#FF9F0D] text-white py-3 rounded shadow">
                  Place an Order →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
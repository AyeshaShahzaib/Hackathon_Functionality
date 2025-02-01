// import Link from "next/link"
// export default function Header2(){
//     return(
// <div className="bg-[#0D0D0D] h-[90px]">

//         <div className="flex justify-between items-center w-10/12 mx-auto text-white">
//         <div className="flex justify-center py-11"><img src="/Foodtuck (1).png" alt="" /></div>
// <div className="flex gap-6">
// <Link href="Home"><h1>Home</h1></Link>
// <Link href="Menu"><h1>Menu</h1></Link>
// <Link href="Blog"><h1>Blog</h1></Link>
// <h1>Pages</h1>
// <h1>About</h1>
// <Link href="Shop"><h1>Shop</h1></Link>
// <h1>Contact</h1>
// </div>
// <div className="flex items-center">
// <div className=""><img src="MagnifyingGlass.png" alt="Search" className="ml-2 w-[24px] h-[24px]" /></div>
// <Link href="SignIn"><div className=""><img src="User.png" alt="Search" className="ml-2 w-[24px] h-[24px]" /></div></Link>
// <Link href="ShoppingCart"><div className=""><img src="Tote.png" alt="Search" className="ml-2 w-[24px] h-[24px]" /></div></Link>

// </div>
// </div>
// </div>
//     )
// }

// import Link from "next/link";

// export default function Header2() {
//   return (
//     <div className="bg-[#0D0D0D] h-auto min-h-[90px] flex items-center">
//       <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto text-white py-4">
//         {/* Logo */}
//         <div className="flex justify-center">
//           <img src="/Foodtuck (1).png" alt="Logo" className="w-[120px] h-auto" />
//         </div>

//         {/* Navigation Menu */}
//         <div className="hidden md:flex gap-6">
//           <Link href="Home">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Home</h1>
//           </Link>
//           <Link href="Menu">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Menu</h1>
//           </Link>
//           <Link href="Blog">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Blog</h1>
//           </Link>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">Pages</h1>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">About</h1>
//           <Link href="Shop">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Shop</h1>
//           </Link>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">Contact</h1>
//         </div>

//         {/* Search and Icons */}
//         <div className="flex items-center gap-4">
//           <img
//             src="MagnifyingGlass.png"
//             alt="Search"
//             className="w-[24px] h-[24px] cursor-pointer"
//           />
//           <Link href="SignIn">
//             <img
//               src="User.png"
//               alt="User"
//               className="w-[24px] h-[24px] cursor-pointer"
//             />
//           </Link>
//           <Link href="ShoppingCart">
//             <img
//               src="Tote.png"
//               alt="Cart"
//               className="w-[24px] h-[24px] cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu for Small Screens */}
//         <div className="flex md:hidden">
//           <button
//             className="text-white focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-[#0D0D0D] h-auto min-h-[90px] flex items-center relative">
//       <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto text-white py-4">
//         {/* Logo */}
//         <div className="flex justify-center">
//           <img src="/Foodtuck (1).png" alt="Logo" className="w-[120px] h-auto" />
//         </div>

//         {/* Navigation Menu (Desktop) */}
//         <div className="hidden md:flex gap-6">
//           <Link href="/Home">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Home</h1>
//           </Link>
//           <Link href="/Menu">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Menu</h1>
//           </Link>
//           <Link href="/Blog">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Blog</h1>
//           </Link>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">Pages</h1>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">About</h1>
//           <Link href="/Shop">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Shop</h1>
//           </Link>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">Contact</h1>
//         </div>

//         {/* Search and Icons */}
//         <div className="flex items-center gap-4">
//           <img
//             src="MagnifyingGlass.png"
//             alt="Search"
//             className="w-[24px] h-[24px] cursor-pointer"
//           />
//           <Link href="/SignIn">
//             <img
//               src="User.png"
//               alt="User"
//               className="w-[24px] h-[24px] cursor-pointer"
//             />
//           </Link>
//           <Link href="/ShoppingCart">
//             <img
//               src="Tote.png"
//               alt="Cart"
//               className="w-[24px] h-[24px] cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu for Small Screens */}
//         <div className="flex md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-[90px] left-0 w-full bg-[#0D0D0D] text-white flex flex-col items-center py-4 z-50">
//           <Link href="/Home" onClick={toggleMenu}>
//             <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Home</h1>
//           </Link>
//           <Link href="/Menu" onClick={toggleMenu}>
//             <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Menu</h1>
//           </Link>
//           <Link href="/Blog" onClick={toggleMenu}>
//             <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Blog</h1>
//           </Link>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Pages</h1>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">About</h1>
//           <Link href="/Shop" onClick={toggleMenu}>
//             <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Shop</h1>
//           </Link>
//           <h1 className="cursor-pointer hover:text-[#FF9F0D]">Contact</h1>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";

// import { useUser, useAuth, SignIn } from "@clerk/nextjs";
// import Link from "next/link";
// import { useState } from "react";

// export default function Header2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false); // State to toggle sign-in widget
//   const { isSignedIn, user } = useUser();
//   const { signOut } = useAuth();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut();
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <div className="bg-[#0D0D0D] h-auto min-h-[90px] flex items-center relative">
//       <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto text-white py-4">
//         <div className="flex justify-center">
//           <img src="/Foodtuck (1).png" alt="Logo" className="w-[120px] h-auto" />
//         </div>

//         <div className="hidden md:flex gap-6">
//           <Link href="/Home">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Home</h1>
//           </Link>
//           <Link href="/Menu">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Menu</h1>
//           </Link>
//           <Link href="/Blog">
//             <h1 className="cursor-pointer hover:text-[#FF9F0D]">Blog</h1>
//           </Link>
//         </div>

//         <div className="flex items-center gap-4">
//           {isSignedIn ? (
//             <div className="flex items-center gap-2">
//               <p>Welcome, {user?.firstName || "User"}!</p>
//               <button
//                 onClick={handleLogout}
//                 className="bg-[#FF9F0D] text-white px-4 py-2 rounded-md hover:bg-orange-600"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div>
//               {showSignIn ? (
//                 // Embed the Clerk SignIn component
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <SignIn
//                     afterSignInUrl="/"
//                     appearance={{
//                       elements: {
//                         formButtonPrimary: "bg-[#FF9F0D] text-white hover:bg-orange-600",
//                       },
//                     }}
//                   />
//                   <button
//                     onClick={() => setShowSignIn(false)}
//                     className="mt-4 text-sm text-gray-500 underline"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setShowSignIn(true)}
//                   className="bg-[#FF9F0D] text-white px-4 py-2 rounded-md hover:bg-orange-600"
//                 >
//                   Sign In
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Ensure this path is correct

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); // Get the cart items from the context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-[#0D0D0D] h-auto min-h-[90px] flex items-center relative">
      <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto text-white py-4">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/Foodtuck (1).png"
            alt="Logo"
            width={120}
            height={40} // Adjust height as needed
            className="w-[120px] h-auto"
          />
        </div>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden md:flex gap-6">
          <Link href="/Home">
            <h1 className="cursor-pointer hover:text-[#FF9F0D]">Home</h1>
          </Link>
          <Link href="/Menu">
            <h1 className="cursor-pointer hover:text-[#FF9F0D]">Menu</h1>
          </Link>
          <Link href="/Blog">
            <h1 className="cursor-pointer hover:text-[#FF9F0D]">Blog</h1>
          </Link>
          <h1 className="cursor-pointer hover:text-[#FF9F0D]">Pages</h1>
          <h1 className="cursor-pointer hover:text-[#FF9F0D]">About</h1>
          <Link href="/Shop">
            <h1 className="cursor-pointer hover:text-[#FF9F0D]">Shop</h1>
          </Link>
          <h1 className="cursor-pointer hover:text-[#FF9F0D]">Contact</h1>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <Image
            src="/MagnifyingGlass.png"
            alt="Search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Link href="/SignIn">
            <Image
              src="/User.png"
              alt="User"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/ShoppingCart">
            <div className="relative">
              <Image
                src="/Tote.png"
                alt="Cart"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-[#0D0D0D] text-white flex flex-col items-center py-4 z-50">
          <Link href="/Home" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Home</h1>
          </Link>
          <Link href="/Menu" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Menu</h1>
          </Link>
          <Link href="/Blog" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Blog</h1>
          </Link>
          <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Pages</h1>
          <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">About</h1>
          <Link href="/Shop" onClick={toggleMenu}>
            <h1 className="cursor-pointer hover:text-[#FF9F0D] mb-4">Shop</h1>
          </Link>
          <h1 className="cursor-pointer hover:text-[#FF9F0D]">Contact</h1>
        </div>
      )}
    </div>
  );
}
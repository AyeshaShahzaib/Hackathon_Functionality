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
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#0D0D0D] h-auto min-h-[90px] flex items-center relative">
      <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto text-white py-4">
        {/* Logo */}
        <div className="flex justify-center">
          <img src="/Foodtuck (1).png" alt="Logo" className="w-[120px] h-auto" />
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
          <img
            src="MagnifyingGlass.png"
            alt="Search"
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <Link href="/SignIn">
            <img
              src="User.png"
              alt="User"
              className="w-[24px] h-[24px] cursor-pointer"
            />
          </Link>
          <Link href="/ShoppingCart">
            <img
              src="Tote.png"
              alt="Cart"
              className="w-[24px] h-[24px] cursor-pointer"
            />
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
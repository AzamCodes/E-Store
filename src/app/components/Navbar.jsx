"use client";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../utils/useCart";

// const navlinks = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "Product",
//     href: "/product",
//   },
//   {
//     title: "Service",
//     href: "/service",
//   },
//   {
//     title: "Contact",
//     href: "/contact",
//   },
// ];

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <nav className="flex fixed top-0 w-full text-[#ffC300] bg-[#000814] h-16 z-20 items-center justify-between  px-5 ">
      <Link href={"/"}>
        <span className="">E-STORE</span>
      </Link>
      <Link href={"/cart"}>
        <div className=" text-[#ffC300] flex items-center hover:text-blue-500 gap-1">
          <FiShoppingCart size={18} />
          Cart
          <span>({cartCount})</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;

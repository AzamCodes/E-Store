"use client";
import { HiOutlineShoppingCart } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../utils/useCart";

const AddToCart = ({ product }) => {
  const { addItem } = useCart();
  const handleClick = () => {
    addItem(product);
    toast.success(`${product.name} Item added to cart`);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="w-fit flex items-center gap-1 bg-black text-white text-sm p-3 rounded-md hover:bg-black/90"
      >
        <HiOutlineShoppingCart size={16} /> Add To Cart
      </button>
      <Toaster />
    </div>
  );
};

export default AddToCart;

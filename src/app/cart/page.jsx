"use client";
import Btn from "../components/Btn";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useCart } from "../utils/useCart";
import { formatAmount } from "../utils/stripe";
import { handleCheckout } from "../services/checkout-cart";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CartPage = () => {
  const {
    cartCount,
    cartItems,
    cartTotal,
    incrementCartItems,
    decrementCartItems,
    deleteById,
    deleteAllItems,
  } = useCart();

  const router = useRouter();

  const cartCheckout = async () => {
    try {
      const body = cartItems.map((item) => {
        return {
          price: item.price_id,
          quantity: item.quantity,
        };
      });
      const url = await handleCheckout(body);
      router.push(url);
    } catch (err) {
      console.log("err");
      toast.error(`checkout failed`);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
      deleteAllItems();
    }

    if (query.get("canceled")) {
      toast.error(
        "Order canceled -- continue to shop around and checkout when you are ready."
      );
    }
  }, []);

  return (
    <div className="p-5 pt-14 sm:p-10 min-h-screen mt-6 sm:mt-8 lg:mt-10 bg-[#FFF8E0] ">
      {cartCount > 0 ? (
        <>
          <div className="mb-8">
            <h2 className="font-semibold text-2xl mb-3 ">
              Cart Items: {cartCount}
            </h2>
            <button onClick={deleteAllItems}>
              <Btn title={"Clear All"} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center flex-col mt-24 sm:mt32 lg:40 ">
            <h2 className="font-semibold text-xl sm:text-3xl sm:mb-5 mb-2">
              Your Cart is Empty!
            </h2>
            <Link href={"/"} className="sm:text-2xl text-sm underline">
              Shop Here
            </Link>
          </div>
        </>
      )}
      {cartCount > 0 && (
        <div>
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center  mb-3 justify-between sm:p-2.5 p-1.5 border-[#000000] border bg-[#FFF8E0] rounded-md"
              >
                <Link
                  href={`/products/${item.id}`}
                  className="flex items-center gap-3"
                >
                  <Image
                    width={80}
                    height={85}
                    className="w-20 h-20 rounded-md object-cover"
                    src={item.image}
                    alt="demo"
                  />
                  <p className="font-medium text-sm sm:font-semibold">
                    {item.name}
                  </p>
                </Link>

                <div className="flex items-center gap-1 sm:gap-5">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={() => incrementCartItems(item.id)}
                      className="p-0.8 sm:p-1  hover:bg-black rounded-md border-1 border-black  hover:text-white disabled:cursor-not-allowed"
                    >
                      <AiOutlinePlus width={12} height={12} />
                    </button>
                    <p className="sm:font-semibold font-normal text-medium">
                      {item.quantity}
                    </p>
                    <button
                      disabled={item.quantity == 1}
                      onClick={() => decrementCartItems(item.id)}
                      className="p-0.8 sm:p-1 hover:bg-black rounded-md border-1 border-black  hover:text-white disabled:cursor-not-allowed"
                    >
                      <AiOutlineMinus width={12} height={12} />
                    </button>
                  </div>
                  <div className="flex items-center align-middle gap-1.5 sm:gap-3 ">
                    <p>
                      x{" "}
                      <span className="sm:text-xl text-medium font-medium sm:font-semibold">
                        {formatAmount(item.price)}
                      </span>
                    </p>
                    <button
                      onClick={() => deleteById(item.id)}
                      className="hover:bg-black rounded hover:text-white"
                    >
                      <RxCrossCircled width={18} height={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col mt-5 items-end">
            <p className="text-base sm:text-xl sm:mb-3 mb-2">
              TOTAL:{" "}
              <span className="font-bold text-[#111111]">
                &#8377; {cartTotal}
              </span>
            </p>
            <button
              onClick={cartCheckout}
              className="bg-black  text-white sm:text-sm p-2 text-xs sm:p-3 rounded-md hover:bg-black/90"
            >
              CheckOut
            </button>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default CartPage;

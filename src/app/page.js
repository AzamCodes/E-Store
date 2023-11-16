import Cards from "./components/Cards";
import Link from "next/link";
import { getProducts } from "./services/productServices";
import Footer from "./components/Footer";
import Head from "next/head";

// export const revalidate = 30;

export default async function Home() {
  // console.log("Home Page Returned");
  const products = await getProducts(8);
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="32x32"
          type="/favicon.ico.png"
        />
      </Head>
      <div className="sm:h-[400px]  h-[280px] bg-[#ffC300] flex items-center justify-center text-white">
        <h1 className="sm:font-bold pt-12 font-semibold text-[#FFF8E0] text-xl sm:text-4xl">
          <span className="text-[#111111]">Shop </span> Early{" "}
          <span className="text-[#111111]">Black </span>
          Friday
          <span className="text-[#111111]"> Deals.</span>
        </h1>
      </div>
      <div className=" bg-[#FFF8E0] p-24 pb-5 flex gap-6 items-center justify-evenly flex-wrap">
        {products.data.map((item, index) => (
          <Cards key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className="grid place-content-center bg-[#FFF8E0] ">
        <Link
          href={"/product"}
          className=" text-gray-700 hover:text-gray-900 font-bold pb-12 "
        >
          View All{">"}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

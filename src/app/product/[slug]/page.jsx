import { BsCheckSquareFill } from "react-icons/bs";
import AddToCart from "@/app/components/AddToCart";
import { getProductById, getProducts } from "@/app/services/productServices";
import { formatAmount } from "@/app/utils/stripe";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareBtn from "@/app/components/ShareBtn";

// export const revalidate = 30;
// export const dynamic = "Force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getProducts();
  const slugs = products.data.map((item) => ({ slug: item.id }));
  return slugs;
}

export async function generateMetadata({ params: { slug } }) {
  const product = await getProductById(slug);
  if (!product) {
    notFound();
  }
  return {
    title: `E-STORE | ${product.name}`,
  };
}

const P1 = async ({ params: { slug } }) => {
  console.log("individual Page Return", slug);
  const product = await getProductById(slug);

  const clientProduct = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.default_price.unit_amount,
    price_id: product.default_price.id,
    currency: "INR",
    image: product.images[0],
  };

  return (
    <>
      <div className="flex gap-5 justify-evenly items-center sm:items-start flex-col sm:flex-row  border-spacing-1 mt-3 sm:mt-10 lg:mt-12">
        <div>
          <Image
            alt="demo"
            priority
            width={288}
            height={240}
            className="w-72 h-60 rounded-md object-cover"
            src={product.images[0]}
          />
        </div>
        <div className="max-w-md shadow-sm lg:w-96 sm:h-60 p-4 sm:pt-6 w-72 bg-slate-100 rounded-md">
          <h2 className="font-semibold text-center sm:text-left text-4xl">
            {product.name}
          </h2>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
            <span className="flex pr-2 border-r-2 border-slate-950">
              <BsCheckSquareFill size={20} />
              &nbsp; InStock
            </span>
            <ShareBtn />
          </div>
          <div className="mt-6 pt-4 lg:mt-8 lg:pt-6 border-t flex items-center justify-around">
            <div>
              <p className="text-black font-semibold">PRICE:</p>
              <p>{formatAmount(product.default_price.unit_amount)}</p>
            </div>
            <div>
              <AddToCart product={clientProduct} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-6 px-5 sm:m-10 sm:px-6">
        <p className="text-left mt-5 sm:text-xl text-md font-sm ">
          {product.description}
        </p>
      </div>
    </>
  );
};

export default P1;

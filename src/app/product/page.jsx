import Cards from "../components/Cards";
import { getProducts } from "../services/productServices";

// export const revalidate = 30;

const ProductPage = async () => {
  // console.log("All Product Return bro where are you");
  const products = await getProducts();
  return (
    <div className="m-16 mt-5 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.data.map((item, index) => (
        <Cards key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default ProductPage;

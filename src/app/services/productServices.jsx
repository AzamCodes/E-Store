import { stripe } from "../utils/stripe";

export const getProducts = async (limit) => {
  let products = {
    data: [],
  };
  try {
    products = await stripe.products.list({
      limit: limit || 10,
      expand: ["data.default_price"],
    });
    // console.log("---------------all products---------");
    console.log(JSON.stringify(products, null, 2));
    return products;
  } catch (error) {
    console.log("Error From Stripe:", error);
  }
};
export const getProductById = async (product_id) => {
  let product = null;
  try {
    product = await stripe.products.retrieve(product_id, {
      expand: ["default_price"],
    });
    // console.log("==========product-----------");
    console.log(JSON.stringify(product, null, 2));
    return product;
  } catch (error) {
    console.log("Error From Stripe:", error);
  }
};

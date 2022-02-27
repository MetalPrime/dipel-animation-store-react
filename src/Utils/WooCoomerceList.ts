import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "http://aveleri.com/shop/",
    consumerKey: "ck_cfd56ff458ea681ea638d0da6a62acd6665e9791",
    consumerSecret: "cs_7624ac89b0c8f36262d420319e0e2b803a63472e",
    version: "wc/v3"
  });

export const  products = () => {
    return {};
}

export default products;
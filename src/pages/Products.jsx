import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  const resp = await customFetch(url);
  const products = resp.data.data;
  const meta = resp.data.meta;

  return { products, meta };
};

const Products = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;

import React from "react";
import { loader as landingPageLoader, loader } from "../pages/Landing";
import { Link, useLoaderData } from "react-router-dom";

const ProductsGrid = () => {
  const loader = useLoaderData();

  const products = loader.products.map((product) => product.attributes);

  // const { title, description, image, price, id } = products;

  // console.log(title);
  console.log(products);

  return (
    <div className="pt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link
          to="/products/${product.id}"
          className="card w-80 h-96 bg-gray-900 shadow-xl"
          key={product.id}
        >
          <figure>
            <img src={product.image} />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">{product.title}</h2>
            <p className="font-bold">${product.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;

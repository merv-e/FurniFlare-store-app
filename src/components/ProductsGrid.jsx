import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <div
            className="card w-80 h-96 bg-gray-800 shadow-xl"
            key={product.id}
          >
            <figure>
              <img src={image} />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">{title}</h2>
              <p className="font-bold text-xl text-secondary">{formatPrice(price)}</p>
              <div className="card-actions justify-end">
                <Link to={`/products/${product.id}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;

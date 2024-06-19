import React, { useState } from "react";
import ProductsList from "./ProductsList";
import ProductsGrid from "./ProductsGrid";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalNumOfProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalNumOfProducts} product{totalNumOfProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>

          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      <div>
        {totalNumOfProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
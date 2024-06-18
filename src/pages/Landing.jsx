import React from "react";
import { Hero } from "../components";
import { customFetch } from "../utils/index";

const url = "/products?featured=true";

export const loader = async () => {
  const resp = await customFetch(url);
  const products = resp.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Landing;

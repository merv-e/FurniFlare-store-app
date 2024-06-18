import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Elevate Your Home with Style and Quality.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Discover a curated selection of exquisite furniture, stunning
          lighting, and unique decor pieces that transform your house into a
          luxurious sanctuary. Our passion for design and commitment to quality
          ensure every item enhances your space with elegance and comfort.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Explore Our Collection
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => (
          <div key={image} className="carousel-item">
            <img
              src={image}
              className="rounded-box h-full w-80 object-cover"
              alt={`Hero Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

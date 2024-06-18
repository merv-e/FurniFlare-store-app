import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 justify-center items-center">
        <h1 className="text-4xl font-bold tracking-tight leading-none">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl tracking-widest">
              FurniFlare
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to FurniFlare, your one-stop destination for all things home
        decor, furniture, and lighting! At FurniFlare, we believe that a
        beautiful home starts with quality, stylish pieces that reflect your
        unique taste and personality.
      </p>
    </>
  );
};

export default About;

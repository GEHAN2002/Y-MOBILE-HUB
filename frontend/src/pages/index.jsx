import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import Offers from "../components/Offers";

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <NewArrivals />
      <Offers />
    </div>
  );
}

export default Home;
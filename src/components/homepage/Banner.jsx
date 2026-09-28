import React from "react";
import bannerImg from "../../assets/hero_img.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero mx-auto min-h-[70vh] w-full max-w-7xl rounded-2xl bg-base-200 px-4 py-10 sm:px-8 lg:px-12">
      <div className="hero-content flex w-full flex-col-reverse gap-10 lg:flex-row-reverse lg:justify-between lg:gap-16">
        <img
          alt="A collection of books"
          src={bannerImg}
          className="w-full max-w-xs rounded-2xl object-cover shadow-2xl sm:max-w-sm lg:max-w-md"
        />
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-success">
            Discover your next favorite book
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Books to freshen up your bookshelf
          </h1>

          <p className="mt-5 text-base text-base-content/70 sm:text-lg">
            Explore inspiring stories, timeless classics, and exciting new
            adventures for every kind of reader.
          </p>

          <Link to="/books" className="btn btn-success mt-8">
            View the list
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

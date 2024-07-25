import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center sm:justify-center bg-darkBlue text-white">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-center bg-darkBlue text-white px-2 py-8 gap-8">
        <p>© 2019 Dinners by Derek</p>
        <div className="flex flex-row gap-4 text-[48px]">
          <a href="https://www.facebook.com/ChefDerekDouglas" target="__blank" >
            <BsFacebook />
            <span className="hidden">Link to Facebook</span>
          </a>
          <a href="https://www.instagram.com/dinnersbyderek/" target="__blank">
            <BsInstagram />
            <span className="hidden">Link to Facebook</span>
          </a>
        </div>
      </div>
      <p className="flex flex-row items-center gap-2 pb-4 ">Website powered by <a href="https://www.novelconcept.studio"><img className="p-2 max-h-[4rem]" src="/nc_logo_wide_white_small.png" alt='Novel Concept Studio'></img></a></p>
    </footer>
  );
}

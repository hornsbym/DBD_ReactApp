import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse sm:flex-row items-center sm:justify-center w-full  bg-darkBlue text-white px-2 py-8 gap-8">
      <p>© 2019 Dinners by Derek</p>
      <div className="flex flex-row gap-4 text-[48px]">
        <a href="https://www.facebook.com/ChefDerekDouglas" target="__blank" >
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/dinnersbyderek/" target="__blank">
          <BsInstagram />
        </a>
      </div>
    </footer>

  );
}

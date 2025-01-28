import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";

function HeaderComponent() {
  return (
    <header className="bg-gradient-to-r from-gray-950 to-gray-700 text-white p-6 shadow-lg rounded-b-2xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to={"/"}
          className="font-extrabold text-xl sm:text-xl md:text-2xl lg:text-3xl"
        >
          BoolFilms
        </Link>
        <HamburgerMenu></HamburgerMenu>
        {/* Dark Mode Button */}
      </div>
    </header>
  );
}

export default HeaderComponent;

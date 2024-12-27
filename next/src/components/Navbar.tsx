"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const handleRoute = (to: string) => {
    router.push(to);
  };

  return (
    <header className="bg-pink-300 shadow-lg">
      <div className="mx-auto container text-xl font-bold flex gap-4 py-4 select-none">
        <div
          className="py-2 px-8 rounded cursor-pointer bg-pink-500"
          onClick={() => handleRoute("/")}
        >
          Home page
        </div>
        <div
          className="py-2 px-8 rounded cursor-pointer bg-pink-500"
          onClick={() => handleRoute("/hello")}
        >
          Hello page
        </div>
        <div
          className="p-2 px-8 rounded cursor-pointer bg-pink-500"
          onClick={() => handleRoute("/env")}
        >
          View env page
        </div>
      </div>
    </header>
  );
};

export default Navbar;

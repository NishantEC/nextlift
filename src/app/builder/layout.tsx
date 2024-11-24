"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen relative">
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-gray-300 p-5 absolute right-0 h-full "
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-5 left-0 transform -translate-x-1/2 p-2.5 bg-gray-300 z-10 transition-right duration-300 ease-in-out text-black rounded-full`}
        >
          {isOpen ? "Close" : "Open"}
        </button>
        <nav className={`${isOpen ? "block" : "hidden"}`}>
          <ul className="list-none p-0">
            <li className="mb-2.5">
              <a href="#">Link 1</a>
            </li>
            <li className="mb-2.5">
              <a href="#">Link 2</a>
            </li>
            <li className="mb-2.5">
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </motion.aside>
      <motion.main
        initial={{ marginRight: 0 }}
        animate={{ marginRight: isOpen ? "16rem" : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 p-5"
      >
        {children}
      </motion.main>
    </div>
  );
}

export default Layout;

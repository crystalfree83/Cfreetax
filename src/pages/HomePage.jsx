// src/pages/HomePage.jsx

import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main className="bg-white min-h-screen py-12 px-6 sm:px-12 lg:px-24">
      <section className="text-center mb-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-green-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to C. Free Virtual Tax Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get your taxes done from the comfort of your home by a certified Enrolled Agent. Fast, affordable, and secure virtual service.
        </motion.p>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <motion.div
          className="flex-shrink-0 w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            alt="Crystal Free, Enrolled Agent"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto md:mx-0"
            src="/crystal_headshot.jpg"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Meet Crystal Free, EA
          </h2>
          <p className="text-gray-600 mb-4">
            Crystal is a licensed Enrolled Agent with years of experience helping individuals, families, and small businesses navigate the tax process with ease.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Pay-by-refund & refund advance options available</li>
            <li>Friendly, professional help tailored to your needs</li>
            <li>Fully virtual process — nationwide service</li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;

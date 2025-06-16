import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">
      <Card className="shadow-2xl bg-brand-shark text-main border-brand-tarawera">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block p-3 bg-white rounded-full mb-4"
          >
            <img
              src="https://www.irs.gov/pub/image/ea_bw_050118.jpg"
              alt="IRS Enrolled Agent Badge"
              className="w-16 h-16 object-contain"
            />
          </motion.div>

          <CardTitle className="text-3xl gradient-text font-bold">
            C. Free Virtual Tax Services
          </CardTitle>
          <CardDescription className="text-description mt-2">
            Taxes done from the comfort of your home by a licensed Enrolled Agent. Fast, secure, and fully virtual.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.

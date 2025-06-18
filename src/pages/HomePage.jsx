import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 md:px-8">
      <Card className="shadow-2xl bg-brand-shark text-main border-brand-tarawera">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block p-3 bg-brand-java/20 rounded-full mb-4"
          >
            <img
              src="/ea_bw_050118.jpg"
              alt="IRS Enrolled Agent Logo"
              className="h-12 w-12 object-contain"
            />
          </motion.div>
          <CardTitle className="text-3xl gradient-text">C. Free Virtual Tax Services</CardTitle>
          <CardDescription className="text-description mt-2">
            Taxes done by a certified Enrolled Agent. Fast. Secure. 100% virtual.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col md:flex-row items-center gap-10 pt-4">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/crystal_headshot.jpg"
              alt="Crystal Free, Enrolled Agent"
              className="rounded-xl shadow-lg w-full max-w-sm mx-auto md:mx-0"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 text-main"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-brand-green">Meet Crystal Free, EA</h2>
            <p className="mb-4 text-description">
              With years of experience, Crystal helps individuals, families, and small businesses
              navigate taxes with confidence and care.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Pay-by-refund & refund advance options</li>
              <li>Friendly, personalized expert help</li>
              <li>Fully remote service — available nationwide</li>
            </ul>
            <div className="mt-6">
              <Link to="/contact">
                <Button className="bg-brand-green text-brand-black hover:bg-brand-green/80 text-base px-6 py-3">
                  Start Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;

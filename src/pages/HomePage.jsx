import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, BarChart2, Award, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const features = [
    { icon: <CheckCircle className="h-8 w-8 text-brand-green" />, title: "Easy Process", description: "Streamlined virtual tax preparation from start to finish." },
    { icon: <Users className="h-8 w-8 text-brand-green" />, title: "Expert Guidance", description: "Certified Enrolled Agent ready to maximize your refund." },
    { icon: <BarChart2 className="h-8 w-8 text-brand-green" />, title: "Secure & Virtual", description: "Handle your taxes securely from the comfort of your home." },
  ];

  const services = [
    { icon: <FileText className="h-6 w-6 text-brand-java" />, name: "Individual Tax Preparation (1040)" },
    { icon: <Briefcase className="h-6 w-6 text-brand-java" />, name: "Small Business Tax Services (Schedule C, Partnerships, S-Corps)" },
    { icon: <FileText className="h-6 w-6 text-brand-java" />, name: "Tax Planning & Consultation" },
    { icon: <Users className="h-6 w-6 text-brand-java" />, name: "IRS Representation (Enrolled Agent)" },
    { icon: <CheckCircle className="h-6 w-6 text-brand-java" />, name: "Amendment & Prior Year Returns" },
  ];

  return (
    <div className="space-y-16 animate-fade-in">
      <motion.section 
        className="text-center py-16 md:py-24 bg-gradient-to-b from-brand-deep-sea-green/50 to-brand-tiber/30 rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}
            className="inline-block p-4 bg-brand-java/20 rounded-full mb-6"
          >
            <img alt="Tax preparation icon" className="w-16 h-16 text-brand-java" src="https://images.unsplash.com/photo-1643101448770-d508b0cfe8bf" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block gradient-text">C. Free Virtual Tax Services</span>
          </h1>
          <p className="text-2xl md:text-3xl text-brand-java mb-8 font-medium">
            "Taxes Made Easy. Virtually."
          </p>
          <p className="text-lg md:text-xl text-description max-w-3xl mx-auto mb-10">
            Welcome! We provide professional, reliable, and convenient virtual tax preparation services led by Crystal Free, an Enrolled Agent with 5 years of dedicated experience. Let us handle the complexities of tax season so you can focus on what matters most.
          </p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/client-intake">
              <Button size="lg" className="bg-brand-green text-brand-black hover:bg-brand-green/80 font-bold text-lg py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Meet Crystal Free, EA</h2>
            <p className="text-xl text-brand-java mb-4">Your Dedicated Tax Professional</p>
            <p className="text-description mb-3">
              With 5 years of experience in tax preparation and a passion for helping clients navigate the complexities of the tax code, Crystal Free is an Enrolled Agent (EA) licensed by the IRS. 
            </p>
            <p className="text-description mb-3">
              As an Enrolled Agent, Crystal has earned the highest credential the IRS awards. EAs have unlimited practice rights, meaning they can represent taxpayers before the IRS on any tax matter, including audits, collections, and appeals.
            </p>
            <p className="text-description">
              Crystal is committed to providing personalized, accurate, and ethical tax services to ensure you receive the maximum benefits you're entitled to.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 bg-brand-shark/30 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Card className="h-full bg-brand-tiber/50 border-brand-tarawera hover:border-brand-java transition-colors">
                  <CardContent className="pt-6 flex items-center space-x-4">
                    {service.icon}
                    <p className="text-main font-medium">{service.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Why Choose an Enrolled Agent?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity:


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ClientIntakePage from '@/pages/ClientIntakePage';
import AppointmentBookingPage from '@/pages/AppointmentBookingPage';
import BlogPage from '@/pages/BlogPage';
import TaxCalculatorPage from '@/pages/TaxCalculatorPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import FaqPage from '@/pages/FaqPage';
import PrivacyPage from '@/pages/PrivacyPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
					<Route path="/client-intake" element={<AnimatedPage><ClientIntakePage /></AnimatedPage>} />
					<Route path="/book-appointment" element={<AnimatedPage><AppointmentBookingPage /></AnimatedPage>} />
					<Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
					<Route path="/tax-calculator" element={<AnimatedPage><TaxCalculatorPage /></AnimatedPage>} />
					<Route path="/testimonials" element={<AnimatedPage><TestimonialsPage /></AnimatedPage>} />
					<Route path="/faq" element={<AnimatedPage><FaqPage /></AnimatedPage>} />
					<Route path="/privacy-security" element={<AnimatedPage><PrivacyPage /></AnimatedPage>} />
					<Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</Layout>
			<Toaster />
		</Router>
	);
}

const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="flex-grow"
  >
    {children}
  </motion.div>
);

export default App;

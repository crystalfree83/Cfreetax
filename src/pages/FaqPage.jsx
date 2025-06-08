import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

const FaqPage = () => {
  const faqs = [
    {
      question: "What is Pay by Refund?",
      answer: "Pay by Refund allows you to pay your tax preparation fees directly from your federal or state tax refund. This means no upfront out-of-pocket costs for our services. Certain terms and conditions apply."
    },
    {
      question: "Do you offer Refund Advances?",
      answer: "Yes, we may offer refund advance loans through a partner bank for eligible clients. This allows you to get a portion of your refund early. Availability and amounts depend on eligibility criteria set by the bank."
    },
    {
      question: "How do I receive my Intuit Link invite?",
      answer: "After you submit your initial contact information through our 'Start Here' page, we will manually review your details. Once processed, we will send a secure invitation to your provided email address from Intuit Link. This email will contain instructions on how to create an account (if you don't have one) and securely upload your tax documents."
    },
    {
      question: "What documents do I need to provide?",
      answer: "Common documents include W-2s, 1099s (for various income types), mortgage interest statements, student loan interest, records of charitable contributions, and any other relevant financial information. We'll provide a detailed checklist via Intuit Link."
    },
    {
      question: "How long does the tax preparation process take?",
      answer: "The timeline can vary depending on the complexity of your tax situation and how quickly you provide all necessary documents. We strive for efficiency and will keep you updated throughout the process."
    }
  ];


  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
          <HelpCircle size={40} className="text-brand-java" />
        </div>
        <h1 className="text-4xl font-bold gradient-text">Frequently Asked Questions</h1>
        <p className="text-xl text-description mt-2">Find answers to common questions about our services.</p>
      </header>

      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-brand-tarawera">
                <AccordionTrigger className="text-brand-java hover:text-brand-green text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-description">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
      
      <p className="text-center text-description mt-12">
        Can't find your question? <a href="/contact" className="text-brand-java hover:underline">Contact us</a> for more information.
      </p>
    </div>
  );
};

export default FaqPage;
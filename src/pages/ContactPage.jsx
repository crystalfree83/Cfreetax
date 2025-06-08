import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      toast({
        variant: "destructive",
        title: "Incomplete Form",
        description: "Please fill out all fields.",
      });
      return;
    }
    console.log('Contact Form Submitted:', contactData);
    localStorage.setItem('contactFormData', JSON.stringify(contactData));
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setContactData({ name: '', email: '', message: '' });
  };


  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
          <Mail size={40} className="text-brand-java" />
        </div>
        <h1 className="text-4xl font-bold gradient-text">Get In Touch</h1>
        <p className="text-xl text-description mt-2">We're here to help. Reach out with any questions.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="text-brand-java flex items-center"><Send size={24} className="mr-2"/>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={contactData.name} onChange={handleChange} placeholder="Your Name" required className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada"/>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={contactData.email} onChange={handleChange} placeholder="your.email@example.com" required className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada"/>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={contactData.message} 
                  onChange={handleChange} 
                  placeholder="Your question or comment..." 
                  required 
                  className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada"
                />
              </div>
              <Button type="submit" className="w-full bg-brand-green text-brand-black hover:bg-brand-green/80 font-semibold">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-brand-java">Contact Information</CardTitle>
            <CardDescription className="text-description">Other ways to reach us.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-main">
            <div className="flex items-start">
              <Phone size={20} className="mr-3 mt-1 text-brand-green flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:409-203-9138" className="hover:text-brand-green transition-colors">409-203-9138</a>
              </div>
            </div>
            <div className="flex items-start">
              <Mail size={20} className="mr-3 mt-1 text-brand-green flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:crystalfree83@gmail.com" className="hover:text-brand-green transition-colors">crystalfree83@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin size={20} className="mr-3 mt-1 text-brand-green flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Virtual Services - Available Nationwide</p>
                <p className="text-sm text-description">(Secure online services from anywhere)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-description">While we are a virtual business, our commitment to you is real.</p>
      </div>
    </div>
  );
};

export default ContactPage;
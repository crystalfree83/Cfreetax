import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { User, Mail, Phone as PhoneIcon, MessageSquare, Send } from 'lucide-react';


const ClientIntakePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactPreference: { text: false, email: false },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && (name === 'prefText' || name === 'prefEmail')) {
      setFormData(prev => ({
        ...prev,
        contactPreference: {
          ...prev.contactPreference,
          [name === 'prefText' ? 'text' : 'email']: checked
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please fill out all required fields.",
      });
      return;
    }
    if (!formData.contactPreference.text && !formData.contactPreference.email) {
      toast({
        variant: "destructive",
        title: "Missing Preference",
        description: "Please select at least one preferred contact method.",
      });
      return;
    }

    console.log('Form Data Submitted:', formData);
    localStorage.setItem('clientIntakeData', JSON.stringify(formData));
    
    setIsSubmitted(true); 
    
    toast({
      title: "Information Sent!",
      description: "We've received your details.",
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-8 md:py-12 animate-slide-in-up">
      <Card className="shadow-2xl">
        <CardHeader className="text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block p-3 bg-brand-java/20 rounded-full mb-4"
          >
            <Send size={32} className="text-brand-java" />
          </motion.div>
          <CardTitle className="text-3xl gradient-text">Start Your Tax Journey</CardTitle>
          <CardDescription className="text-description">
            Provide your contact information below, and we'll guide you through the next steps.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center"><User size={16} className="mr-2 text-brand-java" />Full Name</Label>
              <Input 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="e.g., Jane Doe" 
                required 
                className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center"><Mail size={16} className="mr-2 text-brand-java" />Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="e.g., jane.doe@example.com" 
                required 
                className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center"><PhoneIcon size={16} className="mr-2 text-brand-java" />Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="e.g., (555) 123-4567" 
                required 
                className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada"
              />
            </div>
            <div className="space-y-3">
              <Label className="flex items-center"><MessageSquare size={16} className="mr-2 text-brand-java" />Preferred method of contact:</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="prefText" 
                    name="prefText" 
                    checked={formData.contactPreference.text} 
                    onCheckedChange={(checked) => handleChange({ target: { name: 'prefText', type: 'checkbox', checked }})}
                  />
                  <Label htmlFor="prefText" className="font-normal text-main">Text Message</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="prefEmail" 
                    name="prefEmail" 
                    checked={formData.contactPreference.email} 
                    onCheckedChange={(checked) => handleChange({ target: { name: 'prefEmail', type: 'checkbox', checked }})}
                  />
                  <Label htmlFor="prefEmail" className="font-normal text-main">Email</Label>
                </div>
              </div>
            </div>
            <Dialog open={isSubmitted} onOpenChange={setIsSubmitted}>
              <DialogTrigger asChild>
                <Button type="submit" className="w-full bg-brand-green text-brand-black hover:bg-brand-green/80 font-semibold py-3 text-base">
                  Submit Information
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-brand-shark border-brand-tarawera">
                <DialogHeader>
                  <DialogTitle className="text-brand-green text-2xl">Thank You!</DialogTitle>
                  <DialogDescription className="text-main pt-2">
                    Thanks for reaching out! We'll be in touch soon. You'll receive a secure invitation via Intuit Link to upload your tax documents safely.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => setIsSubmitted(false)} className="bg-brand-java text-white hover:bg-brand-java/80">
                    Close
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-description text-center w-full">
            Your information is kept confidential. See our <a href="/privacy-security" className="underline hover:text-brand-java">Privacy Policy</a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ClientIntakePage;
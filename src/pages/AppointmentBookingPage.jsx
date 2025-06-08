import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

const AppointmentBookingPage = () => {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
            <CalendarDays size={32} className="text-brand-java" />
          </div>
          <CardTitle className="text-3xl gradient-text">Book a Consultation</CardTitle>
          <CardDescription className="text-description">
            Schedule a time that works for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-main mb-4">
            Our appointment booking system is currently under development.
          </p>
          <p className="text-description">
            Please check back soon, or <a href="/contact" className="text-brand-java hover:underline">contact us</a> directly to schedule an appointment.
          </p>
          <div className="mt-8 p-8 border-2 border-dashed border-brand-tarawera rounded-lg bg-brand-shark/30">
            <p className="text-description font-semibold">Scheduling System Integration Area</p>
            <p className="text-sm text-description mt-2">This is where an embedded calendar or booking form will go.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentBookingPage;
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
            <ShieldCheck size={40} className="text-brand-java" />
          </div>
          <CardTitle className="text-3xl gradient-text">Privacy & Security</CardTitle>
          <CardDescription className="text-description">
            Your trust and data security are our top priorities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-main">
          <section>
            <h2 className="text-2xl font-semibold text-brand-java mb-3">Our Commitment to Your Privacy</h2>
            <p>
              C. Free Virtual Tax Services is committed to protecting the privacy and confidentiality of your personal and financial information. We understand the sensitivity of the data you entrust to us and have implemented robust measures to safeguard it.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-brand-java mb-3">Secure Document Sharing with Intuit Link</h2>
            <p>
              We utilize Intuit Link, a secure portal designed by the makers of TurboTax and QuickBooks, for all client document exchange. Intuit Link provides bank-level encryption (256-bit SSL) to protect your data during transmission and storage.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-description">
              <li>Securely upload W-2s, 1099s, and other tax documents.</li>
              <li>Communicate with your tax preparer within a protected environment.</li>
              <li>Access your documents anytime, anywhere.</li>
            </ul>
            <p className="mt-2">
              You will receive a personal invitation to join Intuit Link after initiating services with us. This ensures that only authorized individuals can access your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-java mb-3">Data Handling and Storage</h2>
            <p>
              We adhere to strict data handling protocols. Your information is accessed only by authorized personnel for the purpose of preparing your tax returns. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-java mb-3">Your Responsibilities</h2>
            <p>
              While we take extensive measures to protect your data, we also encourage you to practice good online security habits:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4 text-description">
              <li>Use strong, unique passwords for your Intuit Link account.</li>
              <li>Be cautious of phishing attempts and verify any suspicious communications.</li>
              <li>Keep your computer and devices updated with the latest security software.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-java mb-3">Questions?</h2>
            <p>
              If you have any questions about our privacy and security practices, please do not hesitate to <a href="/contact" className="text-brand-java hover:underline">contact us</a>.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPage;
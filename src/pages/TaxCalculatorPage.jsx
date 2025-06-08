import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Users, Percent } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaxCalculatorPage = () => {
  const [income, setIncome] = useState('');
  const [dependents, setDependents] = useState('');
  const [filingStatus, setFilingStatus] = useState('');
  const [estimatedRefund, setEstimatedRefund] = useState(null);

  const calculateRefund = () => {
    if (!income || !filingStatus) {
      alert("Please enter income and select a filing status.");
      return;
    }
    const incomeNum = parseFloat(income);
    const dependentsNum = parseInt(dependents) || 0;
    let taxRate = 0.15; 
    let standardDeduction = 12000; 

    if (filingStatus === 'married') standardDeduction = 24000;
    if (filingStatus === 'hoh') standardDeduction = 18000;

    const taxableIncome = Math.max(0, incomeNum - standardDeduction - (dependentsNum * 2000));
    const taxOwed = taxableIncome * taxRate;
    const withholding = incomeNum * 0.20; 
    const refund = withholding - taxOwed;
    
    setEstimatedRefund(refund.toFixed(2));
  };
  
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="inline-block p-3 bg-brand-java/20 rounded-full mb-4 mx-auto">
            <Calculator size={32} className="text-brand-java" />
          </div>
          <CardTitle className="text-3xl gradient-text">Simple Refund Estimator</CardTitle>
          <CardDescription className="text-description">
            Get a rough estimate of your potential tax refund. This is for informational purposes only.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="income" className="flex items-center"><Percent size={16} className="mr-2 text-brand-java" />Annual Income</Label>
            <Input id="income" type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g., 50000" className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada" />
          </div>
          
          <div>
            <Label htmlFor="filingStatus" className="flex items-center"><Users size={16} className="mr-2 text-brand-java" />Filing Status</Label>
            <Select onValueChange={setFilingStatus} value={filingStatus}>
              <SelectTrigger className="w-full bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main data-[placeholder]:text-brand-nevada">
                <SelectValue placeholder="Select status..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married Filing Jointly</SelectItem>
                <SelectItem value="hoh">Head of Household</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="dependents" className="flex items-center"><Users size={16} className="mr-2 text-brand-java" />Number of Dependents</Label>
            <Input id="dependents" type="number" value={dependents} onChange={(e) => setDependents(e.target.value)} placeholder="e.g., 2" className="bg-brand-tiber/50 border-brand-blue-chill focus:bg-brand-tiber text-main placeholder:text-brand-nevada" />
          </div>
          
          <Button onClick={calculateRefund} className="w-full bg-brand-green text-brand-black hover:bg-brand-green/80 font-semibold">Calculate Estimate</Button>

          {estimatedRefund !== null && (
            <div className="mt-6 p-4 bg-brand-tarawera rounded-lg text-center">
              <p className="text-lg text-main">Estimated Refund/Amount Due:</p>
              <p className={`text-3xl font-bold ${estimatedRefund >= 0 ? 'text-brand-green' : 'text-red-500'}`}>
                ${Math.abs(estimatedRefund).toLocaleString()} {estimatedRefund >= 0 ? 'Refund' : 'Due'}
              </p>
              <p className="text-xs text-description mt-2">This is a simplified estimate and not financial advice. Consult with a tax professional for accurate calculations.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxCalculatorPage;
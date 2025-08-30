import React from 'react';
import GPACalculator from '@/components/GPACalculator';
import heroImage from '@/assets/hero-academic.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl font-bold mb-4">GAP</h1>
          <h2 className="text-2xl font-light opacity-90">Official GPA Calculator</h2>
          <p className="mt-2 text-lg opacity-75">Accurate • Easy to Use</p>
        </div>
      </div>

      {/* Main Calculator */}
      <GPACalculator />
      
      {/* Footer */}
      <footer className="bg-muted border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2025 GAP - GPA Calculator</p>
          <p className="text-sm">Developed to help IAA students calculate their academic performance accurately. By DTC</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React from 'react';
import Expertise from '../components/Expertise';
import QuoteSection from '../components/QuoteSection';

const ExpertisePage = () => {
  return (
    <div>
      <Expertise />
      
      <QuoteSection
        quote="Deep sector knowledge combined with analytical rigor—that's how we deliver solutions that work in real-world contexts."
        author="Arvington Limited"
        role="Our Approach to Expertise"
      />
    </div>
  );
};

export default ExpertisePage;

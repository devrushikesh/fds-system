// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinancialScamArticle from './FinancialScamsArticle';
import HomePage from './HomePage';
import WebSite from './WebSite';
import ContactPage from './ContactPage'
import IdentityTheftArticle from './IdentityTheftArticle';
import PhishingAttacksArticle from './PhishingAttactArticle';
import CorporateFraudArticle from './CorporateFraudArticle';
import EcommerceFraudArticle from './EcommerceFraudArticle';
import FraudPreventionArticle from './FraudPreventionArticle';
import SocialEngineeringArticle from './SocialEngineeringArticle';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <WebSite>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fraud-details/financial-scam" element={<FinancialScamArticle />} />
          <Route path="/fraud-details/identity-theft" element={<IdentityTheftArticle />} />
          <Route path="/fraud-details/phishing-attacts" element={<PhishingAttacksArticle />} />
          <Route path="/fraud-details/corporate-fraud" element={<CorporateFraudArticle />} />
          <Route path="/fraud-details/ecommerce-fraud" element={<EcommerceFraudArticle />} />
          <Route path="/fraud-details/social-engineering" element={<SocialEngineeringArticle />} />
          <Route path="/fraud-prevention" element={<FraudPreventionArticle />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
      </WebSite>
    </Router>
  );
}

export default App;

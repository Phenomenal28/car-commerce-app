"use client";

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "How does the AI concierge work?",
    answer: "Our AI analyzes your preferences, budget, and performance needs to recommend the perfect vehicle from our curated collection. Available 24/7 via chat."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We deliver worldwide with full customs handling, insurance, and enclosed transport. Your dream car arrives safely at your door."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept wire transfers, certified checks, and major cryptocurrencies (BTC, ETH). All transactions are secure and fully insured."
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "Absolutely. We accept luxury and exotic cars as trade-ins. Our team will provide a fair market appraisal within 24 hours."
  },
  {
    question: "What kind of warranty do you offer?",
    answer: "Every vehicle includes a comprehensive 12-month mechanical warranty. Extended coverage options are available for up to 5 years."
  }
];

function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {FAQS.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                onClick={() => toggleFaq(index)}
                className="faq-question-button"
              >
                <span className="faq-question-text">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="faq-icon-open" size={20} />
                ) : (
                  <ChevronDown className="faq-icon-closed" size={20} />
                )}
              </button>
              <div className={`faq-answer ${openFaq === index ? 'open' : 'closed'}`}>
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
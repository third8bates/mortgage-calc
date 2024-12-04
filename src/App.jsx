import React, { useState } from 'react';

function MortgageInterestCalculator() {
  

  return (
    <div>
      <h2>Mortgage Interest Calculator</h2>
      <div>
        <label>Principal Loan Amount ($):</label>
      </div>
      <div>
        <label>Interest Rate (%):</label>
      </div>
      <div>
        <label>Loan Term (Years):</label>
      </div>
      <button>Calculate</button>
    </div>
  );
};

export default MortgageInterestCalculator;
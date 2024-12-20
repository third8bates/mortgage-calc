import { useState } from 'react';

function MortgageInterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculate = () => {
    //calculate monthly payment
    const monthlyPayment = ((rate / 100 / 12) * principal) / (1 - Math.pow((1 + (rate / 100 / 12)), ((term * -1) * 12))) 
    setMonthlyPayment(monthlyPayment.toFixed(2));

    //calculate total interest paid over life of loan
    const totalInterest = ((monthlyPayment * term * 12) - principal)
    setTotalInterest(totalInterest.toFixed(2));

  }


  return (
    <div>
      <h1>Monthly Mortgage Payment Calculator</h1>
      <div>
        <label>Principal Loan Amount ($):</label>
        <input 
          type="number" 
          value={principal} 
          onChange={(e) => setPrincipal(parseFloat(e.target.value))} 
        />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input 
          type="number" 
          value={rate} 
          onChange={(e) => setRate(parseFloat(e.target.value))} 
        />
      </div>
      <div>
        <label>Loan Term (Years):</label>
        <input 
          type="number" 
          value={term} 
          onChange={(e) => setTerm(parseInt(e.target.value, 10))} 
        />
      </div>
      <br></br>
      <button onClick={calculate}>Calculate</button>
      {monthlyPayment > 0 && (
        <div>
        <br></br>
          <h3>Monthly Payment: ${monthlyPayment}</h3>
        </div>
      )}
      {monthlyPayment > 0 && (
        <div>
          <h3>Total Interest: ${totalInterest}</h3>
        </div>
      )}
    </div>
  );
};

export default MortgageInterestCalculator;
import React, { useState, useEffect } from 'react';
import TipCalculator from './components/TipCalculator';

function App() {

  const [bill, setBill] = useState('');
  const [persons, setPersons] = useState('');
  const [btnVal, setBtnVal] = useState('');

  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const output = [
    {
      name: 'Tip Amount',
      per: '/ Person',
      result: tipAmount
    },
    {
      name: 'Total Amount',
      per: '/ Person',
      result: totalAmount
    }
  ]
  useEffect(() => {
    const amountTotal = () => {
      let total = parseFloat(bill) / parseInt(persons) + tipAmount
      setTotalAmount(parseFloat(total.toFixed(2)))
    }
    amountTotal()
  }, [bill, persons, tipAmount, btnVal])

  const handleReset = () => {
    setTipAmount(0)
    setTotalAmount(0)
    setPersons('')
    setBill('')
    setBtnVal('')
  }


  return (
    <div>
      <TipCalculator
        bill={bill}
        setBill={setBill}
        persons={persons}
        setPersons={setPersons}
        btnVal={btnVal}
        setBtnVal={setBtnVal}
        output={output}
        setTipAmount={setTipAmount}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;

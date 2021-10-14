import React, { useState } from 'react';
import './App.css';
import Output from './components/Output';
import TipBtn from './components/TipBtn';

function App() {

  const tipsInPercent = [5, 10, 15, 25, 50];

  const [bill, setBill] = useState('');
  const [persons, setPersons] = useState('');
  const [customVal, setCustomVal] = useState('');

  const [tipAmount, setTipAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

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


  const handleBillChange = (e) => {
    setBill(e.target.value);
  }
  const handlePersonChange = (e) => {
    setPersons(e.target.value);
  }
  const handleCustomChange = (e) => {
    setCustomVal(e.target.value);
  }
  const handleClick = () => {
    const perPerson = bill / persons;
    setTipAmount((0.05) * perPerson);
    setTotalAmount(perPerson + tipAmount);
  }

  console.log(bill, persons)

  return (
    <div className="bg-green-200 text-white w-screen h-screen ">
      <div className="pt-16">
        <div className="text-2xl uppercase text-center text-green-900 font-bold">
          <p className="tracking-widest">spli</p>
          <p className="tracking-widest">tter</p>
        </div>
        <div className="w-full md:mx-auto bg-white rounded-2xl p-8 md:w-3/5 lg:w-3/6 mt-16 lg:flex gap-5">
          <div className="w-full lg:w-1/2">
            <div className="mb-4">
              {/* <p className="text-md text-green-700">Bill</p> */}
              <label className="text-md text-green-700 font-semibold">Bill</label>
              <input
                type='number'
                value={bill}
                onChange={handleBillChange}
                placeholder='$'
                className="border-2 w-full rounded-md border-green-300 p-1 text-green-900 font-bold text-lg text-right"
              />
            </div>
            <div className="mb-4">
              {/* <p className="text-md text-green-700">Select Tips %</p> */}
              <label className="text-md text-green-700 font-semibold">Select Tips %</label>
              <div className="mt-2 flex flex-wrap gap-3">
                <TipBtn
                  handleClick={handleClick}
                  tipsInPercent={tipsInPercent}
                />
                {/* <button className="bg-green-800 text-white rounded-md px-8 py-1 font-bold hover:bg-green-600 focus:bg-green-400 flex-1">5%</button>
                <button className="bg-green-800 text-white rounded-md px-8 py-1 font-bold hover:bg-green-600 focus:bg-green-400 flex-1">5%</button>
                <button className="bg-green-800 text-white rounded-md px-8 py-1 font-bold hover:bg-green-600 focus:bg-green-400 flex-1">5%</button>
                <button className="bg-green-800 text-white rounded-md px-8 py-1 font-bold hover:bg-green-600 focus:bg-green-400 flex-1">5%</button> */}
                <input
                  type='number'
                  placeholder='custom'
                  value={customVal}
                  onChange={handleCustomChange}
                  className="border-2 w-full rounded-md border-green-300 px-8 text-green-900 font-bold text-lg text-right flex-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-md text-green-700 font-semibold">Number of People</span>
                <span className="text-md text-red-700 text-sm">Can't be Zero</span>
              </div>
              <input
                type='text'
                value={persons}
                placeholder='$'
                onChange={handlePersonChange}
                className="border-2 w-full rounded-md border-green-300 p-1 text-green-900 font-bold text-lg text-right"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-lg bg-green-800 p-6">
            <Output output={output} />
            {/* <div className="flex items-center justify-between">
              <div className="text-sm tracking-widest">
                <p className="font-bold">Tip Amount</p>
                <p className="font-light">/ person</p>
              </div>
              <p className="font-bold text-3xl justify-end text-green-200">${tipAmount}</p>
            </div> */}
            {/* <div className="flex items-center justify-between mt-8">
              <div className="text-sm tracking-widest">
                <p className="font-bold">Total</p>
                <p className="font-light">/ person</p>
              </div>
              <p className="font-bold text-3xl justify-end text-green-200">${totalAmount}</p>
            </div> */}
            <button className="bg-green-200 text-green-800 rounded-sm px-8 py-1 font-bold hover:bg-green-400 focus:bg-blue-200 uppercase w-full lg:mt-12">reset</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

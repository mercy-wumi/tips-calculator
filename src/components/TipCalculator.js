import React from 'react'
import Output from './Output';
import TipBtn from './TipBtn';

function TipCalculator({
    bill, setBill, persons, setPersons,
    btnVal, setBtnVal, output, setTipAmount,
    handleReset
}) {

    const handleBillChange = (e) => {
        setBill(e.target.value);
    }
    const handlePersonChange = (e) => {
        setPersons(e.target.value);
    }

    const fivePercentBtn = () => {
        let perResult = parseFloat(bill) * 5 / 100
        let totalTip = perResult / parseInt(persons)
        setTipAmount(parseFloat(totalTip.toFixed(2)))
    }

    const tenPercentBtn = () => {
        let perResult = parseFloat(bill) * 10 / 100
        let totalTip = perResult / parseInt(persons)
        setTipAmount(parseFloat(totalTip.toFixed(2)))
    }

    const fifteenPercentBtn = () => {
        let perResult = parseFloat(bill) * 15 / 100
        let totalTip = perResult / parseInt(persons)
        setTipAmount(parseFloat(totalTip.toFixed(2)))
    }

    const twentyFivePercentBtn = () => {
        let perResult = parseFloat(bill) * 25 / 100
        let totalTip = perResult / parseInt(persons)
        setTipAmount(parseFloat(totalTip.toFixed(2)))
    }

    const fiftyPercentBtn = () => {
        let perResult = parseFloat(bill) * 50 / 100
        let totalTip = perResult / parseInt(persons)
        setTipAmount(parseFloat(totalTip.toFixed(2)))
    }

    const customBtn = () => {
        let perResult = parseFloat(bill) * btnVal / 100
        let totalTip = perResult / parseInt(persons)
        setTipAmount(parseFloat(totalTip.toFixed(2)))
    }

    return (<div className="bg-green-200 text-white w-screen h-screen ">
        <div className="pt-12">
            <div className="text-2xl uppercase text-center text-green-900 font-bold">
                <p className="tracking-widest">spli</p>
                <p className="tracking-widest">tter</p>
            </div>
            <div className="w-full md:mx-auto bg-white rounded-2xl p-8 md:w-3/5 lg:w-7/12 mt-12 lg:flex gap-5">
                <div className="w-full lg:w-1/2">
                    <div className="mb-4">
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
                        <label className="text-md text-green-700 font-semibold">Select Tips %</label>
                        <div className="mt-2 flex flex-wrap gap-3">
                            <TipBtn
                                btnVal={btnVal}
                                setBtnVal={setBtnVal}
                                fivePercentBtn={fivePercentBtn}
                                tenPercentBtn={tenPercentBtn}
                                fifteenPercentBtn={fifteenPercentBtn}
                                twentyFivePercentBtn={twentyFivePercentBtn}
                                fiftyPercentBtn={fiftyPercentBtn}
                                customBtn={customBtn}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <span className="text-md text-green-700 font-semibold">Number of People</span>
                        </div>
                        <input
                            type='text'
                            value={persons}
                            onChange={handlePersonChange}
                            className="border-2 w-full rounded-md border-green-300 p-1 text-green-900 font-bold text-lg text-right"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 rounded-lg bg-green-800 p-6 pt-12">
                    <Output
                        output={output}
                    />
                    <button
                        onClick={handleReset}
                        className="bg-green-200 text-green-800 rounded-sm px-8 py-1 font-bold hover:bg-green-400 focus:bg-blue-200 uppercase w-full lg:mt-12"
                    >
                        reset
                    </button>
                </div>
            </div>
        </div>
    </div >
    )
}

export default TipCalculator

import React, { useEffect } from 'react';

function TipBtn({
    setBtnVal, fivePercentBtn, tenPercentBtn, fifteenPercentBtn,
    twentyFivePercentBtn, fiftyPercentBtn, customBtn, btnVal
}) {

    const handleCustomChange = (e) => {
        setBtnVal(e.target.value);
    }
    useEffect(() => {
        customBtn()
    }, [btnVal]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <button
                onClick={fivePercentBtn}
                className="bg-green-800 text-white rounded-md px-8 py-2 font-bold hover:bg-green-600 focus:bg-green-400 flex-1"
            >
                5%
            </button>
            <button
                onClick={tenPercentBtn}
                className="bg-green-800 text-white rounded-md px-8 py-2 font-bold hover:bg-green-600 focus:bg-green-400 flex-1"
            >
                10%
            </button>
            <button
                onClick={fifteenPercentBtn}
                className="bg-green-800 text-white rounded-md px-8 py-2 font-bold hover:bg-green-600 focus:bg-green-400 flex-1"
            >
                15%
            </button>
            <button
                onClick={twentyFivePercentBtn}
                className="bg-green-800 text-white rounded-md px-8 py-2 font-bold hover:bg-green-600 focus:bg-green-400 flex-1"
            >
                25%
            </button>
            <button
                onClick={fiftyPercentBtn}
                className="bg-green-800 text-white rounded-md px-8 py-2 font-bold hover:bg-green-600 focus:bg-green-400 flex-1"
            >
                50%
            </button>
            <input
                type='number'
                placeholder='custom'
                value={btnVal}
                onChange={handleCustomChange}
                className="border-2 w-full rounded-md border-green-300 px-8 text-green-900 font-bold text-lg text-right flex-1"
            />
        </>
    )
}

export default TipBtn

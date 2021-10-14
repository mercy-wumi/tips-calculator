import React from 'react'

function TipBtn({ tipsInPercent, handleClick }) {
    return (
        <>
            {tipsInPercent.map(tipsPercentage => {
                return (
                    <button
                        id="tipPercent"
                        onClick={handleClick}
                        className="bg-green-800 text-white rounded-md px-8 py-1 font-bold hover:bg-green-600 focus:bg-green-400 flex-1"
                    >
                        {tipsPercentage}
                    </button>
                )
            })}
        </>
    )
}

export default TipBtn

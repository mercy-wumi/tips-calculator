import React from 'react'

function Output({ output }) {
    return (
        <>
            {output.map((outputs, index) => {
                return (
                    <div className="flex items-center justify-between mb-8" key={index}>
                        <div className="text-sm tracking-widest">
                            <p className="font-bold">{outputs.name}</p>
                            <p className="font-light">{outputs.per}</p>
                        </div>
                        <p className="font-bold text-3xl justify-end text-green-200">${isNaN(outputs.result) ? '0' : outputs.result}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Output

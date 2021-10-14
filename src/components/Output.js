import React from 'react'

function Output({ output }) {
    return (
        <>
            {output.map(outputs => {
                return (
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-sm tracking-widest">
                            <p className="font-bold">{outputs.name}</p>
                            <p className="font-light">{outputs.per}</p>
                        </div>
                        <p className="font-bold text-3xl justify-end text-green-200">${outputs.result}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Output

import React from 'react'
import { useState } from 'react'

function CounterCard() {
    const [count, setcount] = useState(0)
    return (
        <div className="m-4 max-w-xs  bg-white shadow-md rounded-xl p-4 text-center border">
        
        <h3 className="text-lg font-semibold mb-2">
            Counter Box
        </h3>

        <p className="text-3xl font-bold text-gray-800">
            {count}
        </p>

        <div className="flex justify-center gap-2 mt-4">
            <button onClick={() => setcount(count + 1)} className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded transition">
            Increase
            </button>

            <button onClick={() => setcount(count - 1)} className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1 px-3 rounded transition">
            Decrease
            </button>
        </div>

        </div>
    )
}

export default CounterCard
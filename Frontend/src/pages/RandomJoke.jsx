import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import cors from 'cors'

const RandomJoke = () => {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    const fetchJokes = async () => {
      const result = await axios.get('/api/v1/jokes')
      setjokes(result.data)
    }
    fetchJokes()
  },[])


  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
            Random J
        </h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jokes.map((joke, index) => (
                console.log(joke),
            <div
                key={joke.id}
                className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
                {/* Index badge */}
                <div className="absolute -top-3 -left-3 bg-indigo-600 text-white font-bold text-sm px-3 py-1 rounded-e-2xl rounded-bl-lg shadow-md ">
                {index + 1}
                </div>

                <p className="text-gray-700 font-medium mb-2">{joke.setup}</p>
                <p className="text-gray-900 font-semibold">{joke.punchline}</p>
            </div>
            ))}
        </div>
    </div>
    );
}

export default RandomJoke
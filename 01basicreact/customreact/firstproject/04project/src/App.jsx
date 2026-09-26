import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white gap-6">
      <h1 className="bg-green-500 text-black font-bold text-3xl p-6 rounded-2xl shadow-xl">
        Tailwind is Working!
      </h1>
      
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200"
      >
        Count is {count}
      </button>
    </div>
  )
}
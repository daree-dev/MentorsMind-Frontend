import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Logo/Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            MentorMinds <span className="text-stellar">Stellar</span>
          </h1>
          <p className="text-xl text-gray-600">
            Blockchain-Powered Mentoring Platform
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="mb-6">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-8 py-3 bg-stellar hover:bg-stellar-dark text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Count is {count}
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Instant Payments</h3>
            <p className="text-gray-600 text-sm">Powered by Stellar blockchain</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold text-lg mb-2">Secure Escrow</h3>
            <p className="text-gray-600 text-sm">Smart contract protection</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="font-semibold text-lg mb-2">Global Access</h3>
            <p className="text-gray-600 text-sm">Connect mentors worldwide</p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App

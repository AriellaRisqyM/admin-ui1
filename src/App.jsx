import React from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="bg-white-200 min-h-screen flex flex-col items-center justify-center">
      <div className="flex shadow-lg max-5xl">
        <div className="hidden md:block  rounded-l-2xl w-100">
          <img className="w-[600] h-[500]" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt=""/>
        </div>
        {/* form login */}
        <div>
          <div className="rounded p-3 w-96 ">
            <h1 className="text-center font-bold">Login</h1>
            <ul className="m-2 p-5 space-y-3">
              <span>Email</span>
              <input type="text" placeholder='Masukkan Email' className="border-black rounded w-full"/><br/>
              <span>Password</span>
              <input type="password" placeholder='Masukkan Password' className="border-black rounded w-full" />
              <button class=" bg-blue-500 text-white p-2   rounded-lg w-full hover:bg-blue-600">Login</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default App

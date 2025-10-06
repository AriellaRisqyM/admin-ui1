import React from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="bg-white-200 min-h-screen flex flex-col items-center justify-center">
      <div className="flex shadow-lg max-5xl">
        <div className="hidden md:block  rounded-l-2xl w-100">
          <img className="w-[600] h-[500]" src="https://th.bing.com/th/id/R.1288998aeafc4181eae659bce211566f?rik=aRoEL73U6Gag3g&riu=http%3a%2f%2fimg.jakpost.net%2fc%2f2017%2f06%2f20%2f2017_06_20_28883_1497943853._large.jpg&ehk=eI6GHUH09TK99aocow1SoJS%2brvu27TeznTt4gL6CJUs%3d&risl=&pid=ImgRaw&r=0" alt=""/>
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

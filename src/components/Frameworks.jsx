import React, { useState } from 'react'

const Frameworks = () => {

        return (
    <div>
        <button 
        className="w-96 bg-light-purple shadow-lg text-black text-xl font-semibold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline"
        >
         <h4>Frameworks</h4>
        </button>
        
        <div className="mb-3">
          <ul>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800 text-black rounded">
            <h5>React</h5>
          </li>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800 text-black rounded">
           <h5>Ruby On Rails</h5>
          </li>
          <li
            className="inline-block px-4 py-2 text-gray-800 text-black rounded">
            <h5>Postgresql</h5>
          </li>

          </ul>
        </div>
    </div>
  )
}

export default Frameworks
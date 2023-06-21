import React, { useState } from 'react'

const Skills = () => {

        return (
    <div>
        <button 
        className="w-96 bg-light-purple shadow-lg text-black text-xl font-semibold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline"
        >
         <h4>Skills</h4>
        </button>
        

        <div className="">
          <ul>
          <li
            className="mr-5 inline-block text-gray-800 text-black rounded">
            <h5>Communication</h5>
          </li>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800  text-black rounded">
           <h5>Pair Programming</h5>
          </li>
          <li
            className="inline-block text-gray-800 text-black rounded">
            <h5>Fast Learner</h5>
          </li>

          </ul>
        </div>
    </div>
  )
}

export default Skills
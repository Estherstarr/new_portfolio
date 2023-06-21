import React, { useState } from 'react'

const Languages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
};


        return (
    <div>
        <button
        className="w-96 bg-light-purple shadow-lg text-black text-xl font-semibold py-2 px-4 mb-3 rounded focus:outline-none focus:shadow-outline">
         <h4>Languages</h4>
        </button>
      
        <div className="mb-3">
          <ul>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800 text-black rounded">
            <h5>HTML</h5>
          </li>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800 text-black rounded">
           <h5>CSS</h5>
          </li>
          <li
            className="inline-block px-4 py-2 text-gray-800 text-black rounded">
            <h5>JavaScript</h5>
          </li>
          <li
            className="inline-block px-4 py-2 text-gray-800 text-black rounded">
            <h5>Ruby</h5>
          </li>


          </ul>
        </div>
    </div>
  )
}

export default Languages
import React, { useState } from 'react'

const Languages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
        return (
    <div>
        <button
        className="w-96 bg-blue-500 text-white font-semibold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
        >
         Languages
        </button>
        

      {isOpen && (
        <div className="absolute mt-2 py-2 w-auto bg-white rounded-md shadow-lg">
          <ul>
            <li className="inline-block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              <img src="#" />
             <span>JavaScript</span>
            </li>
            <li className="inline-block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              <img src="#" />
             <span>HTML</span>
            </li>
            <li className="inline-block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
              <img src="#" />
             <span>HTML</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Languages
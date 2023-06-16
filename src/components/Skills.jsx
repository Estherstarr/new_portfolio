import React, { useState } from 'react'

const Skills = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
};
        return (
    <div>
        <button 
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
        >
         Skills
        </button>
        

      {isOpen && (
        <div className="absolute mt-2 py-2 w-auto bg-white rounded-md shadow-lg">
          <a
            href="#"
            className="inline-block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Option 1
          </a>
          <a
            href="#"
            className="inline-block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Option 2
          </a>
          <a
            href="#"
            className="inline-block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  )
}

export default Skills
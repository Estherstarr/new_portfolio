import React, { useState } from 'react'

const Skills = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
};

const closeDropdowns = () => {
  setIsOpen(false);
};

        return (
    <div>
        <button 
        className="w-96 bg-white shadow-lg text-black text-xl font-semibold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleDropdown}
        >
         <h4>Skills</h4>
        </button>
        

      {isOpen && (
        <div className="absolute mt-2 py-2 w-auto bg-white rounded-md shadow-lg">
          <ul>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800 bg-light-purple text-white rounded">
            <h5>Communication</h5>
          </li>
          <li
            className="mr-5 inline-block px-4 py-2 text-gray-800 bg-light-purple text-white rounded">
           <h5>Pair Programming</h5>
          </li>
          <li
            className="inline-block px-4 py-2 text-gray-800 bg-light-purple text-white rounded">
            <h5>Fast Learner</h5>
          </li>

          </ul>
        </div>
      )}
      {isOpen && <div className="fixed inset-0 z-0" onClick={closeDropdowns} />}
    </div>
  )
}

export default Skills
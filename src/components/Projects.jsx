import React from 'react'

const Projects = ({image_url,project_title,project_name,stack,year,project_description,stack_1,stack_2,stack_3,project_url,description,project_deck}) => {
  return (
    <div>
        <div  className="w-5/6 mx-auto p-5 flex h-96 justify-between mt-28 rounded-xl bg-white shadow-lg">
          <div className="pt-5 pl-10 rounded-lg w-5/12  w-96 "><img src={image_url}/></div>
          <div className="pt-3 w-7/12 ml-10">
                <h2 className="text-3xl mb-3 font-bold text-bold-ash">{project_title}</h2>
                <ul className="flex">
                <li className="font-bold mr-2 mb-3">{project_name}</li>
                <span className="mr-1">|</span>
                <li className="mr-2 text-so-grey">{stack}</li>
                <span className="mr-1">|</span>
                <li className="text-so-grey">{year}</li>
                </ul>
                <p>{project_description}</p>
                <ul className="flex mt-3 mb-3">
                <li className="bg-circle-purple text-light-purple rounded mr-5 rounded-full pr-5 pl-5"><a href={project_deck}><button>{stack_1}</button></a></li>
                <li className="bg-circle-purple text-light-purple rounded mr-5 rounded-full pr-5 pl-5">{stack_2}</li>
                <li className="bg-circle-purple text-light-purple rounded mr-5 rounded-full pr-5 pl-5">{stack_3}</li>
                </ul>
                <a href={project_url}>
                <button type="button" className="pt-2 pb-3 p w-32 text-center mt-3 bg-white  border border-light-purple text-light-purple rounded-md mx-auto shadow">See {description}</button>
                </a>
          </div>
       </div>
    </div>
  )
}

export default Projects




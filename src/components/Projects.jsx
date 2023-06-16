import React from 'react'

const Projects = ({image_url,project_title,project_name,stack,year,project_description,stack_1,stack_2,stack_3,project_url}) => {
  return (
    <div>
        <div  className="w-2/3 mx-auto p-12 flex justify-between mt-28 rounded-xl bg-white shadow-lg">
          <div className="pt-3 pl-10 rounded-xl w-5/12 shadow-sm "><img src={image_url}/></div>
          <div className="pt-3 w-7/12 ml-10">
                <h2>{project_title}</h2>
                <ul className="flex">
                <li>{project_name}</li>
                <li>{stack}</li>
                <li>{year}</li>
                </ul>
                <p>{project_description}</p>
                <ul className="flex">
                <li>{stack_1}</li>
                <li>{stack_2}</li>
                <li>{stack_3}</li>
                </ul>
                <a href={project_url}>See Project</a>
          </div>
       </div>
    </div>
  )
}

export default Projects




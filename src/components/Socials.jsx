import React from 'react'

const Socials = () => {
  return (
    <div>
             <h3 className="text-light-purple font-bold pb-1.5">LET'S CONNECT</h3>
            <div>
              <ul className="mt-2 flex items-center">
                <li className="pr-5">
                  <a title="twitter" href="https://twitter.com/anibeesther">
                  <img src="/assets/Icons/twitter.svg" alt="twitter-icon"/>
                  </a>
                </li>
                <li className="pr-5">
                  <a title="linkedin" href="https://www.linkedin.com/in/onwuanibe-onomeh-52300a19a/">
                  <img src="/assets/Icons/linkedin.svg"/>
                  </a>
                </li>
                <li className="pr-5">
                  <a title="medium" href="https://medium.com/@ellasion19">
                  <img src="/assets/Icons/medium.svg"/>
                  </a>
                </li>
                <li className="pr-5">
                  <a title="github" href="https://github.com/Estherstarr">
                  <img src="/assets/Icons/github.svg"/>
                  </a>
                </li>
                <li>
                  <a title="angellist" href="https://wellfound.com/u/onomeh-onwuanibe">
                  <img src="/assets/Icons/angel-list.svg"/>
                  </a>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default Socials
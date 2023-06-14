export default function App() {
  return (
    <div className="bg-body-gray h-screen" >
      <div className="bg-white rounded-bl-3xl">
        <nav className="flex justify-between">
          <div>
            <h2 className="pl-5 pt-5 font-bold text-blue-purple text-xl	 	">My Logo</h2>
          </div>
          <div className="flex justify-evenly w-6/12 pt-5	">
            <h3>Portfolio</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
        </nav>
        <section className="pt-36 pb-6 bg-[url('assets/images/header-shapes-mobile@2x.svg')] bg-cover bg-right-top	">
          <div className="w-2/3 mx-auto">
            <h1 className="text-5xl font-bold text-bold-ash tracking-wide">I'm Onomeh,  </h1>
            <h1 className="text-5xl font-bold text-bold-ash tracking-wide">Glad to see</h1>
            <h1 className="text-5xl font-bold text-bold-ash mb-4 tracking-wide">you!</h1>
            <p className="text-ash-grey text-xl mb-3">
            I’m a software developer! I can help you build a product , feature
            or website. Look through some of my work and experience! 
            I am always thinking about code and this passion often leads me to solve my coding problem, while I’m jogging, playing keyboard, or cooking .
            </p>
            <h3 className="text-light-purple font-bold">LET'S CONNECT</h3>
            <div>
              <ul className="mt-2 flex items-center">
                <li className="pr-3">
                  <a title="twitter" href="https://twitter.com/home">
                  <img src="src/assets/Icons/twitter.svg" alt="twitter-icon"/>
                  </a>
                </li>
                <li className="pr-3">
                  <a title="linkedin" href="https://www.linkedin.com/in/onwuanibe-onomeh-52300a19a/">
                  <img src="src/assets/Icons/linkedin.svg"/>
                  </a>
                </li>
                <li className="pr-3">
                  <a title="medium" href="https://medium.com/">
                  <img src="src/assets/Icons/medium.svg"/>
                  </a>
                </li>
                <li className="pr-3">
                  <a title="github" href="https://github.com/Estherstarr">
                  <img src="src/assets/Icons/github.svg"/>
                  </a>
                </li>
                <li>
                  <a title="angellist" href="https://wellfound.com/u/onomeh-onwuanibe">
                  <img src="src/assets/Icons/angel-list.svg"/>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}
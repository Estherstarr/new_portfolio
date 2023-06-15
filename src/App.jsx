import Contact from "./components/Contact";
import Frameworks from "./components/Frameworks";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="bg-body-gray min-h-screen" >
      <div className="bg-white rounded-bl-3xl pb-40">
        <nav className="flex justify-between">
          <div>
            <h2 className="pl-5 pt-5 font-bold text-blue-purple text-xl">My Logo</h2>
          </div>
          <div className="flex justify-evenly w-6/12 pt-5	">
            <h3>Portfolio</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
        </nav>
        <section className="pt-48 pb-6 bg-[url('assets/images/header-shapes-mobile@2x.svg')] bg-cover bg-right-top	">
          <div className="w-2/3 mx-auto">
            <h1 className="text-5xl font-bold text-bold-ash tracking-wide">I'm Onomeh,  </h1>
            <h1 className="text-5xl font-bold text-bold-ash tracking-wide">Glad to see</h1>
            <h1 className="text-5xl font-bold text-bold-ash mb-4 tracking-wide">you!</h1>
            <p className="text-ash-grey text-xl mb-3">
            I’m a software developer! I can help you build a product , feature
            or website. Look through some of my work and experience! 
            I am always thinking about code and this passion often leads me to solve my coding problem, while I’m jogging, playing keyboard, or cooking .
            </p>
            <Socials/>

          </div>
        </section>
      </div>
      <Projects/>
      <Projects/>
      <Projects/>
      <div className="flex about myself">
        <div>
          <div>
            <h2>About<br/>Myself</h2>
            <p>Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see 
              and have a project you need coded, don’t hestiate to contact me.</p>
              <Socials/>
              <a>Get my resume</a>
          </div>
        </div>
        <div>
          <Languages/>
          <Frameworks/>
          <Skills/>
        </div>
      </div>
      <div className="contact me">
        <div>
          <Contact/>
        </div>
      </div>
    </div>
  )
}
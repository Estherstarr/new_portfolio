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
        <section className="pt-48 pb-6 bg-[url('src/assets/images/header-shapes-mobile@2x.svg')] bg-cover bg-right-top	">
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
      <Projects image_url="src/assets/images/desktopviewimages/PortoflioCard/Snapshoot2.svg" project_title="Tonic" project_name="CANOPY" stack="Back end Dev" year="2015" project_description="A daily selection of privately personalized reads, no accounts or sign-ups required" stack_1="HTML"stack_2="CSS" stack_3="JavaScript" project_url="https://estherstarr.github.io/conferencePage/"/>
      <Projects image_url="src/assets/images/desktopviewimages/PortoflioCard/Snapshoot3.svg" project_title="Tonic" project_name="CANOPY" stack="Back end Dev" year="2015" project_description="A daily selection of privately personalized or sign-ups required" stack_1="HTML"stack_2="CSS" stack_3="JavaScript" project_url="https://isnt-jabokpoe-awesome.netlify.app"/>
      <Projects image_url="src/assets/images/desktopviewimages/PortoflioCard/Snapshoot4.svg" project_title="Tonic" project_name="CANOPY" stack="Back end Dev" year="2015" project_description="A daily selection of privately person" stack_1="HTML"stack_2="CSS" stack_3="JavaScript" project_url="https://isnt-jabokpoe-awesome.netlify.app"/>
      <div className="about-me bg-white flex rounded-tr-3xl mt-28 p-16">
        <div className="w-1/2">
          <div>
            <h2 className="text-blue-dark text-4xl font-bold">About<br/>Myself</h2>
            <p className="text-ash-grey text-xl mt-5 mb-5">Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see 
              and have a project you need coded, don’t hestiate to contact me.</p>
              <Socials/>
              <button className="h-12 shadow-md mt-5 p-3 rounded-lg text-light-purple border border-light-purple hover:bg-blue-purple hover:text-white">
              <a href="https://drive.google.com/file/d/1MIFtt_3yv0kiLo059g0UZf7cyxknhigr/view?usp=drive_link" download>Get my resume</a>
              </button>
          </div>
        </div>
        <div className="w-1/2 ml-10">
          <Languages/>
          <Frameworks/>
          <Skills/>
        </div>
      </div>
      <div className="contact-me">
        <div>
          <Contact/>
        </div>
      </div>
    </div>
  )
}
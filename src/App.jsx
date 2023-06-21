import Contact from "./components/Contact";
import Frameworks from "./components/Frameworks";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="bg-body-gray min-h-screen" >
        <nav className="sticky top-0 z-30 bg-white shadow-xl flex justify-between h-11">
          <div>
            <img className="object-contain h-full w-full" alt="My Logo" src="public/assets/images/estherlogo.png"/>
            {/* <h2 className="pl-5 pt-5 font-bold text-blue-purple text-xl">My Logo</h2> */}
          </div>
          <div className="flex justify-evenly w-6/12 pt-5	tracking-wide">
          <a href="#Portfolio"><h3>Portfolio</h3></a>
          <a href="#About"><h3>About</h3></a>                       
          <a href="#contact-section"><h3>Contact</h3></a>            
          </div>
        </nav>
      <div className="bg-white rounded-bl-3xl pb-40">
        <section className="pt-48 pb-6 bg-[url('/assets/images/header-shapes-mobile@2x.svg')] bg-cover bg-right-top	">
          <div className="w-2/3 mx-auto">
            <h1 className="text-5xl font-bold text-bold-ash tracking-wide">I'm Onomeh,  </h1>
            <h1 className="text-5xl font-bold text-bold-ash tracking-wide">Glad to see</h1>
            <h1 className="text-5xl font-bold text-bold-ash mb-4 tracking-wide">you!</h1>
            <p className="text-ash-grey text-xl mb-3">
            I am Software engineer with a background in developing efficient software applications using Rails and React. 2+
years of industry experience, including mentoring 10+ junior developers to achieve concrete goals on a
strict deadline. Confident communicator, strategic thinker, and ability to collaborate with remote teams to
develop customized software to meet organizational needs.    </p>
            <Socials/>

          </div>
        </section>
      </div>
      <div id="Portfolio">
        <Projects image_url="/assets/images/Screenshot 2023-05-27 at 3.24.45 PM.png" project_title="Women Conference" project_name="CANOPY" stack="Back end Dev" year="2015" project_description="This project is created for women's day celebration. Women's conference which happens annually and the theme for this year is Changing the Bias.I built it using HTML, CSS and JavaScript" stack_1="HTML"stack_2="CSS" stack_3="JavaScript" project_url="https://estherstarr.github.io/conferencePage/"/>
        <Projects image_url="/assets/images/Screenshot 2023-05-27 at 3.08.03 PM.png" project_title="Countries Of The World" project_name="CANOPY" stack="Back end Dev" year="2015" project_description="This app displays exciting information and facts from countries all over the world. Built with JavaScript and CSS" stack_1="HTML"stack_2="CSS" stack_3="JavaScript" project_url="https://isnt-jabokpoe-awesome.netlify.app"/>
        <Projects image_url="/assets/images/desktopviewimages/PortoflioCard/Snapshoot4.svg" project_title="Portfolio" project_name="Portfolio" stack="Front end Dev" year="2018" project_description="A sample of my portfolio built with HTML,CSS and JavaScript " stack_1="HTML"stack_2="CSS" stack_3="JavaScript" project_url="https://estherstarr.github.io/personalPortfolio/"/>
        <Projects image_url="/assets/images/desktopviewimages/PortoflioCard/Snapshoot4.svg" project_title="Learning Blog" project_name="Blog" stack="Front end Dev" year="2022" project_description="Blog site buit with Ruby on Rails " stack_1="Ruby"stack_2="RubyOnRails" stack_3="Tailwind" project_url="https://github.com/Estherstarr/Blogs"/>

      </div>
      <div id="About" className="about-me bg-white flex rounded-tr-3xl mt-28 p-16">
        <div className="w-1/2">
          <div>
            <h2 className="text-blue-dark text-4xl font-bold">About<br/>Myself</h2>
            <p className="text-ash-grey text-xl mt-5 mb-5">I build a efficient softwares, Look through some of my work and experience!  
               Contact me for your projects.</p>
              <Socials/>
              <button className="h-12 shadow-md mt-5 p-3 rounded-lg text-light-purple border border-light-purple hover:bg-blue-purple hover:text-white">
              <a href="https://drive.google.com/file/d/1MIFtt_3yv0kiLo059g0UZf7cyxknhigr/view?usp=drive_link" download>Get my resume</a>
              </button>
          </div>
        </div>
        <div className="w-1/2 ml-20">
          <Languages/>
          <Frameworks/>
          <Skills/>
        </div>
      </div>
      <div className="contact-me">
        <footer id="contact-section">
          <Contact/>
        </footer>
      </div>
    </div>
  )
}
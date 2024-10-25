import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Header from "@/components/header";
import Contact from "@/components/contact";
import About from "@/components/about";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <main className="flex flex-col items-center">
        <About/>
        <Experience/>
        <Contact/>
      </main>
      <footer className="bg-dark flex items-center justify-center gap-x-5 p-10">
        <a  className="hover:text-orange-500" href="https://github.com/Siva-0310" target="_blank"><FaGithub size={24}/></a>
        <a  className="hover:text-orange-500" href="https://www.linkedin.com/in/siva-113736231/" target="_blank"><FaLinkedin size={24}/></a>
      </footer>
    </div>
  );
}

import {FC} from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer:FC = () => {
    return (
        <footer className="flex justify-center w-full my-10 space-x-5">
            <a className="text-logos hover:text-orange-500" href="https://github.com/Siva-0310" target="_blank"><FaGithub size={24}/></a>
            <a className="text-logos hover:text-orange-500" href="https://www.linkedin.com/in/siva-113736231/" target="_blank"><FaLinkedin size={24}/></a>
        </footer>
    )
}

export default Footer
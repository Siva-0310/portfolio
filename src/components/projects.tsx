import {FC} from "react"
import path from 'path';
import fs from 'fs/promises';

interface Project {
    title: string;
    description: string[];
    technologies: string[];
    githubLink: string;
  }

async function fetchProjects():Promise<Project[] | null> {
    try {
        const filePath = path.join(process.cwd(), 'public','data', 'projects.json');
        const data = await fs.readFile(filePath, 'utf8');
        const projectsData = JSON.parse(data);
        
        return projectsData.projects
      } catch (error) {
        console.error("Error reading projects.json:", error);
        return null
      }
}

const Projects:FC = async () => {
    const projectsData = await fetchProjects()
    return(
        <section className="text-dark grid grid-cols-1 gap-x-2 md:grid-cols-4 m-5" id="projects">
            <div className="flex flex-col col-span-1 items-center md:items-start mb-3">
                <div>
                    <h1 className="font-poppins text-xl font-semibold">Projects</h1>
                    <hr className="border border-orange-500 w-full"/>
                </div>
            </div>
            <ul className="flex flex-col items-center col-span-1 md:col-span-3">
                {projectsData?.map((prj,index) => (
                    <li key={index} className="flex flex-col gap-y-2 mb-5">
                        <div className="flex flex-col items-center md:items-start">
                            <a href={prj.githubLink} target="_blank" className="font-poppins font-semibold text-lg">{prj.title}</a>
                        </div>
                        <ul className="mt-3 list-disc max-w-80ch pl-5">
                            {prj.description.map((val,index) => (
                                <li key={index} className="font-lora text-sm sm:text-base mb-1">
                                    {val}
                                </li>
                            ))}
                        </ul>
                        <p className="font-lora text-sm sm:text-base"><span className="font-semibold italic mr-3">Technologies: -</span>{prj.technologies.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects
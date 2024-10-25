import {FC} from "react"
import path from 'path';
import fs from 'fs/promises';

interface Project {
    title: string;
    overview: string;
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
        console.error("Error reading experience.json:", error);
        return null
      }
}

const Projects:FC = async () => {
    const experienceData = await fetchProjects()
    return(
        <section className="text-dark grid grid-cols-1 gap-x-2 md:grid-cols-4 m-5" id="projects">
            <div className="flex flex-col col-span-1 items-center md:items-start mb-3">
                <div>
                    <h1 className="font-poppins text-xl font-semibold">Projects</h1>
                    <hr className="border border-orange-500 w-full"/>
                </div>
            </div>
            <ul className="flex flex-col items-center col-span-1 md:col-span-3">
                {experienceData?.map((exp,index) => (
                    <li key={index} className="flex flex-col gap-y-2 mb-5">
                        <div className="flex flex-col items-center md:items-start">
                            <a href={exp.githubLink} target="_blank" className="font-poppins font-semibold text-lg">{exp.title}</a>
                        </div>
                        <p className="mt-3 prose prose-sm sm:prose-base">{exp.overview}</p>
                        <p className="prose prose-sm sm:prose-base"><span className="font-semibold italic mr-3">Technologies: -</span>{exp.technologies.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects
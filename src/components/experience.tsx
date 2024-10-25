import { FC } from "react";
import path from 'path';
import fs from 'fs/promises';

interface Experience {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location: string;
    technologies: string[];
    description: string[];
}

async function fetchExperience():Promise<Experience[] | null> {
    try {
        const filePath = path.join(process.cwd(), 'public','data', 'experience.json');
        const data = await fs.readFile(filePath, 'utf8');
        const experienceData = JSON.parse(data);
        
        return experienceData.experience
      } catch (error) {
        console.error("Error reading experience.json:", error);
        return null
      }
}

const Experience:FC = async () => {
    const experienceData = await fetchExperience()
    return (
        <section id="experience" className="text-dark grid grid-cols-1 gap-x-2 md:grid-cols-4 m-5">
            <div className="flex flex-col col-span-1 items-center md:items-start mb-3">
                <div>
                    <h1 className="font-poppins text-xl font-semibold">Experience</h1>
                    <hr className="border border-orange-500 w-full"/>
                </div>
            </div>
            <ul className="flex flex-col items-center col-span-1 md:col-span-3">
                {experienceData?.map((exp,index) => (
                    <li key={index} className="flex flex-col gap-y-2 mb-5">
                        <div className="flex flex-col items-center md:items-start">
                            <h1 className="font-poppins font-semibold text-lg">{exp.role}</h1>
                            <div className="flex flex-row text-sm">
                                <span className="italic mr-2 font-medium">{exp.company}</span>
                                <span className="mx-2 font-medium">.</span>
                                <span className="ml-2">{exp.startDate + " - " + exp.endDate}</span>
                            </div>
                        </div>
                        <p className="mt-3 prose prose-sm sm:prose-base">{exp.description.join("")}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experience
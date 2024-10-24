import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
    return (
        <section id="about" className="flex w-[60%] my-5">
            <div className="flex flex-col justify-start w-full">
                <h1 className="font-semibold text-lg font-poppins">About Me</h1>
                <p className="text-sm my-4">
                    Hi, I’m <strong>Siva</strong>, a <strong>backend developer</strong> with a passion for building efficient and scalable server-side applications. 
                    I have a solid foundation in <strong>Golang</strong>, <strong>Python</strong>, and <strong>SQL</strong>, and 
                    I’m excited to explore the world of <strong>machine learning</strong> to enhance my projects. 
                    I enjoy tackling challenges and am constantly seeking opportunities to improve my skills. I’m eager to learn, collaborate, and contribute to innovative solutions that make a difference. 
                    Let’s connect!
                </p>
                <h1 className="font-semibold text-lg font-poppins">Skills</h1>
                <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mt-5">
                    {/* Backend Development */}
                    <li>
                        <Image src="/icons/python.svg" alt="Python" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/gopher.svg" alt="Golang" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/docker.svg" alt="Docker" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/rabbitmq.svg" alt="RabbitMQ" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/fastapi.svg" alt="FastAPI" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/git.svg" alt="Git" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/bash.svg" alt="Bash" width={48} height={48} />
                    </li>
                    
                    {/* Databases */}
                    <li>
                        <Image src="/icons/postgres.svg" alt="PostgreSQL" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/redis.svg" alt="Redis" width={48} height={48} />
                    </li>
                    
                    {/* Deployment & Infrastructure */}
                    <li>
                        <Image src="/icons/kubernetes.svg" alt="Kubernetes" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/nginx.svg" alt="Nginx" width={48} height={48} />
                    </li>

                    {/* Machine Learning */}
                    <li>
                        <Image src="/icons/pytorch.svg" alt="PyTorch" width={48} height={48} />
                    </li>
                    <li>
                        <Image src="/icons/scikit_learn.svg" alt="Scikit-learn" width={48} height={48} />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
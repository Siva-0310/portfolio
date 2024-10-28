import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
    return (
        <section id="about" className="flex flex-col items-center p-6 w-full bg-neutral-800">
            <div>
                <h1 className="font-poppins font-semibold text-xl">About Me</h1>
                <p className="prose prose-sm sm:prose-base mt-4 text-white">
                I’m Siva, a backend developer focused on building microservices primarily using Go and Python. I create REST APIs and utilize WebSockets for real-time communication and background services. I am willing to use any programming 
                language, as I believe no single one is ideal for every project. I have experience with Docker, Docker Compose, and Kubernetes for container orchestration, along with RabbitMQ for message queuing. My database skills include 
                working with Redis and PostgreSQL. Currently, I am dedicated to enhancing my backend development skills while also exploring machine learning applications to solve real-world problems. I am interested in connecting with you to share insights and discuss innovative ideas in the 
                tech industry</p>

                    <ul className="mt-10 grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-10">
                        <li className="flex items-center justify-center"><Image src={"/icons/gopher.svg"} width={48} height={48} alt="golang"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/python.svg"} width={48} height={48} alt="python"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/bash.svg"} width={48} height={48} alt="bash"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/fastapi.svg"} width={48} height={48} alt="fastapi"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/docker.svg"} width={48} height={48} alt="docker"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/kubernetes.svg"} width={48} height={48} alt="kubernetes"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/postgres.svg"} width={48} height={48} alt="postgres"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/redis.svg"} width={48} height={48} alt="redis"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/rabbitmq.svg"} width={48} height={48} alt="rabbitmq"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/pytorch.svg"} width={48} height={48} alt="pytorch"/></li>
                        <li className="flex items-center justify-center"><Image src={"/icons/scikit_learn.svg"} width={64} height={64} alt="scikit_learn"/></li>
                    </ul>
            </div>
        </section>
    );
}

export default About;
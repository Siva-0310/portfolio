import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
    return (
        <section id="about" className="flex flex-col items-center p-6 w-full bg-neutral-800">
            <div>
                <h1 className="font-poppins font-semibold text-xl">About Me</h1>
                <p className="prose prose-sm sm:prose-base mt-4 text-white">
                    I’m Siva, a backend developer with a passion for creating scalable and efficient systems. 
                    I specialize in using <strong className="text-white">Go</strong> and <strong className="text-white">Python</strong> for robust application development, 
                    along with managing databases like <strong className="text-white">PostgreSQL</strong>. My expertise extends to leveraging <strong className="text-white">Docker</strong> for containerization, 
                    ensuring seamless deployment and orchestration of services. With a strong foundation in <strong className="text-white">RabbitMQ</strong> for messaging, REST APIs for communication, 
                    and <strong className="text-white">WebSockets</strong> for real-time interactions, I am dedicated to delivering high-quality solutions that meet user needs. 
                    I have a keen interest in machine learning, particularly in research-oriented fields. I enjoy tackling challenges and am constantly 
                    seeking opportunities to improve my skills. I’m eager to learn, collaborate, and contribute to innovative solutions that make a difference. 
                    Let’s connect!</p>

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
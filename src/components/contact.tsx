"use client";

import { FC, useState } from "react";

const Contact: FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, subject, message);
  };

  return (
    <section className="flex flex-col items-center p-6 w-full bg-neutral-800 mt-10" id="contact">
        <div className="flex flex-col gap-y-4">
            <h1 className="font-poppins text-xl font-semibold">Get In Touch</h1>
            <p className="prose prose-sm sm:prose-base text-white">
                Feel free to reach out if you’re interested in collaborating on a
                project, sharing ideas, or just having a chat. I’m always open to
                connecting with others!
            </p>
            <form className="flex flex-col gap-y-5 mt-4 prose text-white" onSubmit={handleSubmit}>
                <input type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="bg-neutral-700 rounded-xl p-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
                <input type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                    className="bg-neutral-700 rounded-xl p-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                    onChange={(e) => {
                        setSubject(e.target.value)
                    }}
                />
                <textarea id="message"
                    placeholder="Message"
                    required
                    rows={9}
                    className="bg-neutral-700 rounded-xl p-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                />
                <div className="flex justify-center">
                    <button className="px-10 py-1 rounded-xl border border-orange-500">
                        Send
                    </button>
                </div>
            </form>
        </div>
    </section>
  );
};

export default Contact;
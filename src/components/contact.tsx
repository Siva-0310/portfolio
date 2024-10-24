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
    <section className="flex flex-col w-[60%] items-center" id="contact">
      <div className="flex flex-col justify-start my-10 w-full">
        <h1 className="font-poppins text-lg font-semibold my-4">Get In Touch</h1>
        <p className="text-sm">
          Feel free to reach out if you’re interested in collaborating on a
          project, sharing ideas, or just having a chat. I’m always open to
          connecting with others!
        </p>
      </div>
      <form
        className="flex flex-col w-full bg-card border border-border rounded-xl text-sm"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col m-4 bg-grey">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-border p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-4">
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="bg-border p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 text-white"
            required
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col m-4">
          <textarea
            id="body"
            placeholder="Message"
            className="bg-border p-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500 text-black text-white"
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows={5}
          />
        </div>
        <div className="flex justify-center m-4">
          <button className="py-2 px-5 rounded-xl bg-orange-400 focus:ring-1 focus:ring-orange-700">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
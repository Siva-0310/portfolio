"use client";

import { FC, useState } from "react";

const Contact: FC = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        if (!email || !subject || !message) {
            alert("All fields are required!");
            return;
          }
        console.log(email,subject,message)
    }

  return (
    <form className="flex flex-col w-[75%] sm:w-[60%] bg-card border border-border rounded-xl text-xm" onSubmit={handleSubmit}>
        <div className="flex justify-center m-2">
        <h1 className="font-semibold">Contact Us</h1>
        </div>
        <div className="flex flex-col m-4 bg-grey">
        <label className="font-semibold mb-4" htmlFor="email">Your Email Address</label>
        <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-3 rounded-xl focus:outline-none focus:border-blue-500 text-black"
            onChange={(e) => {setEmail(e.target.value)}}
        />
        </div>
        <div className="flex flex-col m-4">
        <label className="font-semibold mb-4" htmlFor="subject">Message Subject</label>
        <input
            type="text"
            id="subject"
            placeholder="Enter message subject"
            className="p-3 rounded-xl focus:outline-none focus:border-blue-500 text-black"
            onChange={(e) => {setSubject(e.target.value)}}
        />
        </div>
        <div className="flex flex-col m-4">
        <label className="font-semibold mb-4" htmlFor="body">Message Content</label>
        <textarea
            id="body"
            placeholder="Write your message here"
            className="p-3 rounded-xl focus:outline-none focus:border-blue-500 text-black"
            onChange={(e) => {setMessage(e.target.value)}}
        />
        </div>
        <div className="flex justify-center m-4">
        <button className="py-2 px-5 rounded-xl bg-button">
            Send
        </button>
        </div>
    </form>
  );
};

export default Contact;
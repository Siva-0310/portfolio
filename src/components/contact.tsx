"use client";

import { FC, useState } from "react";

const Contact: FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to send message");
        setStatus("error");
        return;
      }

      // Reset form and show success message
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus("success");
      setErrorMessage("");

    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
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
            value={email}
            placeholder="Email"
            required
            className="bg-neutral-700 rounded-xl p-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text"
            id="subject"
            value={subject}
            placeholder="Subject"
            required
            className="bg-neutral-700 rounded-xl p-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea id="message"
            value={message}
            placeholder="Message"
            required
            rows={9}
            className="bg-neutral-700 rounded-xl p-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-center">
            <button type="submit" className="px-10 py-1 rounded-xl border border-orange-500">
              {status === "loading" ? "Sending..." : "Send"}
            </button>
          </div>
          {status === "success" && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
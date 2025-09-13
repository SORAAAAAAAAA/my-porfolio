"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type Message = { role: "user" | "assistant"; content: string };

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! Thanks for visiting my website! Feel free to ask me anything related to work in here. I would love to answer your inquiries.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg: Message = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Sorry, something went wrong. Please try again.",
        },
      ]);
    }
  };

  return (
    <div
      className="max-w-md mx-auto rounded-lg shadow-lg bg-gray-500 p-4 flex flex-col h-140"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="flex flex-col items-start mb-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/me.jpg"
              alt="Ray Cielo Briones"
              width={40}
              height={40}
              className="rounded-full object-cover mr-2"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Chat with Cielo</h2>
              <div className="flex items-center text-sm gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-blue-500 hover:text-blue-700"
          >
            X
          </button>
        </div>
        <div className="w-full border-t border-gray-400 mt-4"></div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-2 space-y-4">
        {messages.map((msg, i) =>
          msg.role === "assistant" ? (
            <div key={i} className="flex items-start gap-2">
              <Image
                src="/me.jpg"
                alt="Ray Cielo Briones"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">Ray Cielo Briones</p>
                <div className="bg-gray-200 text-gray-800 rounded-lg px-3 py-2 mt-1 max-w-[75%] break-words">
                  {msg.content}
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg px-3 py-2 max-w-[75%] break-words">
                {msg.content}
              </div>
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex">
        <input
          className="flex-1 border rounded-l px-3 py-2 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r cursor-pointer
                                 transition-transform active:scale-95 active:bg-blue-700 focus:outline-none"
            onClick={sendMessage}
        >
            Send
        </button>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Send, X, MessageCircle } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey there! 👋 I'm Ray's AI assistant. Ask me anything about my projects, experience, or how we can work together!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);

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
          content: "Oops! Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto rounded-2xl shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-0 flex flex-col h-[600px] overflow-hidden border border-slate-700 backdrop-blur-sm"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/me.png"
              alt="Ray Cielo Briones"
              width={44}
              height={44}
              className="rounded-full object-cover ring-2 ring-white/30"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white font-bold text-base">Ray's Assistant</h2>
            <p className="text-xs text-blue-100 font-medium">Always here to help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110"
          aria-label="Close chat"
        >
          <X size={20} className="text-white" />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 custom-scrollbar">
        {messages.map((msg, i) =>
          msg.role === "assistant" ? (
            <div key={i} className="flex items-end gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex-shrink-0">
                <Image
                  src="/me.png"
                  alt="Ray Cielo Briones"
                  width={32}
                  height={32}
                  className="rounded-full object-cover ring-1 ring-blue-500/50"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-[75%]">
                <p className="text-xs font-semibold text-blue-400 px-3 pt-2">Ray's AI</p>
                <div className="bg-gradient-to-br from-slate-700 to-slate-600 text-white rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed shadow-lg border border-slate-600">
                  {msg.content}
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[75%] text-sm leading-relaxed shadow-lg border border-blue-500/50">
                {msg.content}
              </div>
            </div>
          )
        )}
        {isLoading && (
          <div className="flex items-end gap-2">
            <Image
              src="/me.png"
              alt="Ray Cielo Briones"
              width={32}
              height={32}
              className="rounded-full object-cover ring-1 ring-blue-500/50"
            />
            <div className="bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-700 bg-slate-900/50 px-4 py-4 backdrop-blur-sm">
        <div className="flex gap-2">
          <input
            className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-600 transition-all duration-200 border border-slate-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
            placeholder="Ask me something..."
            disabled={isLoading}
          />
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.7);
        }
        @keyframes slide-in-from-bottom-2 {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in-from-top-2 {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: slide-in-from-bottom-2 0.3s ease-out;
        }
        .fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .slide-in-from-bottom-2 {
          animation: slide-in-from-bottom-2 0.3s ease-out;
        }
        .slide-in-from-top-2 {
          animation: slide-in-from-top-2 0.3s ease-out;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}

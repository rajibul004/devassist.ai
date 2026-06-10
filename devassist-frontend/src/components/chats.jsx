import { useState } from "react";
import { sendMessage } from "../api/chatApi";
import ReactMarkdown from "react-markdown";
import DotPattern from "./ui/dot-pattern";
import { Link } from "react-router-dom";
import { downloadPdf } from "../api/chatApi";

import { Message, MessageContent, MessageAvatar } from "./ui/message";

export default function Chats() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");

    setLoading(true);

    try {
      const data = await sendMessage(userMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          explanation: data.explanation,
          suggestedFix: data.suggestedFix,
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "AI server error.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <DotPattern />

      <div className="relative z-20 flex h-screen flex-col">
        {/* Header */}
        <header className="border-b border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link to="/">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600">
                  🤖
                </div>

                <div>
                  <h1 className="text-lg font-semibold text-white">
                    DevAssist AI
                  </h1>

                  <p className="text-xs text-zinc-500">AI Coding Assistant</p>
                </div>
              </div>
            </Link>
            {/* Status */}
            <div className="hidden items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400 md:flex">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Online
            </div>
          </div>
        </header>
        {/* Chat Area */}
        <main className="flex-1 overflow-y-auto min-h-0">
          {messages.length === 0 ? (
            // Empty state
            <div className="flex h-full flex-col items-center justify-center text-center">
              <h1 className="text-4xl font-semibold text-white">
                How can I help you?
              </h1>

              <p className="mt-3 text-zinc-400">
                Ask coding questions and debug issues.
              </p>
            </div>
          ) : (
            // Messages
            <div className="mx-auto max-w-4xl px-6 py-8 pb-36">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-6 flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                    max-w-[85%]
                    rounded-3xl
                    px-5
                    py-4
                    leading-relaxed
                    break-words
                    
                    ${
                      message.role === "user"
                        ? "bg-violet-600 text-white"
                        : "border border-zinc-800 bg-zinc-900/80 text-zinc-100"
                    }
                  `}
                  >
                    {/* Explanation */}
                    {message.explanation && (
                      <div className="mb-4">
                        <h3 className="mb-2 font-semibold text-blue-400">
                          Explanation
                        </h3>

                        <ReactMarkdown>{message.explanation}</ReactMarkdown>
                      </div>
                    )}

                    {/* Suggested Fix */}
                    {message.suggestedFix && (
                      <div className="mb-4">
                        <h3 className="mb-2 font-semibold text-green-400">
                          Suggested Fix
                        </h3>

                        <ReactMarkdown>{message.suggestedFix}</ReactMarkdown>
                      </div>
                    )}

                    {/* Content */}
                    {message.content && (
                      <div>
                        <h3 className="mb-2 font-semibold text-violet-400">
                          Response
                        </h3>

                        <p>{message.content}</p>
                      </div>
                    )}
                    {/* Download Button */}
                    {message.role !== "user" && (
                      
                      <button
                      
                        onClick={() => downloadPdf(message)
                        }
                        
                        
                        className="
      mt-4 rounded-xl
      bg-violet-600
      px-4 py-2
      text-white
    "
                      >
                        Download PDF
                        
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* Input */}
        <footer className="border-t border-zinc-800 bg-black/70 p-5 backdrop-blur-xl">
          <div className="mx-auto max-w-4xl">
            <div
              className="
            flex items-center gap-3
            rounded-2xl
            border border-zinc-700
            bg-zinc-900/90
            px-4 py-3
          "
            >
              <input
                value={input}
                placeholder="Message DevAssist..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                className="
                flex-1
                bg-transparent
                text-white
                outline-none
                placeholder:text-zinc-500
              "
              />

              <button
                onClick={handleSend}
                className="
                rounded-xl
                bg-violet-600
                px-5 py-2
                text-white
                hover:bg-violet-500
              "
              >
                Send
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

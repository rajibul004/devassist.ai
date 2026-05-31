import { useState } from "react";
import { sendMessage } from "../api/chatApi";
import ReactMarkdown from "react-markdown";
import DotPattern from "./ui/dot-pattern";

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
    <div className="relative h-screen w-screen overflow-hidden">
      <DotPattern />

      <div className="relative z-20 flex h-screen flex-col">
        {/* Header */}
        <div className="border-b border-zinc-800 px-6 py-4">
          <h1 className="text-white text-lg font-semibold">DevAssist AI</h1>
        </div>

        {/* Center */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white">
                How can I help you?
              </h1>

              <p className="mt-3 text-zinc-400">
                Ask coding questions and debug issues.
              </p>
            </div>
          ) : (
            <div className="w-full max-w-4xl px-6">
              {/* Messages */}

              {messages.length > 0 && (
                <div className="flex-1 overflow-y-auto">
                  <div className="mx-auto max-w-4xl px-6 py-8 pb-40">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`mb-6 flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[90%] rounded-3xl px-5 py-4 ${
                            message.role === "user"
                              ? "bg-violet-600 text-white"
                              : "border border-zinc-800 bg-zinc-900/80 text-white"
                          }`}
                        >
                          {message.explanation && (
                            <ReactMarkdown>{message.explanation}</ReactMarkdown>
                          )}

                          {message.suggestedFix && (
                            <ReactMarkdown>
                              {message.suggestedFix}
                            </ReactMarkdown>
                          )}

                          {message.content && <p>{message.content}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl">
              <input
                type="text"
                value={input}
                placeholder="Message DevAssist..."
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none"
              />

              <button
                onClick={handleSend}
                className="rounded-xl bg-violet-600 px-4 py-2 text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

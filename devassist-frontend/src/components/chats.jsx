import { useState } from "react";
import { sendMessage } from "../api/chatApi";
import ReactMarkdown from "react-markdown";

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
    <div className="h-screen bg-[#212121] flex flex-col">
      {/* Header */}

      <div className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-white text-lg font-semibold">DevAssist AI</h1>
      </div>

      {/* Empty State */}

      {messages.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-white text-4xl font-semibold mb-3">
            How can I help you?
          </h1>

          <p className="text-zinc-400 text-center max-w-md">
            Ask coding questions, debug backend issues, generate APIs, or
            explore AI ideas.
          </p>
        </div>
      )}

      {/* Messages */}

      {messages.length > 0 && (
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="mx-auto max-w-3xl space-y-6">
            {messages.map((message, index) => (
              <Message key={index} from={message.role}>
                {message.role === "assistant" && <MessageAvatar name="AI" />}

                <MessageContent
                  className={
                    message.role === "user"
                      ? "bg-zinc-700 text-white rounded-2xl px-4 py-3"
                      : "bg-transparent text-white shadow-none"
                  }
                >
                  <div className="space-y-3">
                    {message.explanation && (
                      <div>
                        <p className="text-sm font-semibold text-zinc-300 mb-1">
                          Explanation
                        </p>
                        <ReactMarkdown>
                          {message.explanation}
                        </ReactMarkdown>{" "}
                      </div>
                    )}

                    {message.suggestedFix && (
                      <div>
                        <p className="text-sm font-semibold text-zinc-300 mb-1">
                          Suggested Fix
                        </p>
                        <ReactMarkdown>
                          {message.suggestedFix}
                        </ReactMarkdown>{" "}
                      </div>
                    )}

                    {message.content && <p>{message.content}</p>}
                  </div>
                </MessageContent>

                {message.role === "user" && <MessageAvatar name="RM" />}
              </Message>
            ))}
          </div>
        </div>
      )}

      {/* Input */}

      <div className="border-t border-zinc-800 p-4">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-800 px-4 py-3">
            <input
              type="text"
              placeholder="Message DevAssist AI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-400"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="rounded-xl bg-white px-4 py-2 text-black font-medium hover:bg-zinc-200 disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

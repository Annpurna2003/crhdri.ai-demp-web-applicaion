import { useState } from "react";

const Assistant = () => {
  // 🔹 chatbot open/close state
  const [isOpen, setIsOpen] = useState(true);

  // 🔹 messages state
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 I am Crhdri AI Assistant" }
  ]);

  // 🔹 input state
  const [input, setInput] = useState("");

  // 🔹 send message function
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
try {
  // Localhost ki jagah Render ka URL use karein
  const res = await fetch("https://crhdri-ai-demp-web-applicaion.onrender.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });
      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.reply }
      ]);

    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Server error 😅" }
      ]);
    }

    setInput("");
  };

  return (
    <>
      {/* 🔹 Floating button when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Chat 💬
        </button>
      )}

      {/* 🔹 Chatbox */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* 🔹 Header with cross button */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">AI Assistant</span>

            {/* ❌ Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>

          {/* 🔹 Messages */}
          <div className="h-64 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* 🔹 Input */}
          <div className="flex p-2 border-t">
            <input
              className="flex-1 border p-2 rounded-lg text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white px-4 rounded-lg"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default Assistant;
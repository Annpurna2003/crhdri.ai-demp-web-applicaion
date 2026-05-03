import { useState } from "react";

const Assistant = () => {
  // 🔹 Chat open/close state (controls floating chat UI)
  const [isOpen, setIsOpen] = useState(true);

  // 🔹 Chat messages store (user + assistant messages)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 I am Crhdri AI Assistant" }
  ]);

  // 🔹 Input box state (user typing message)
  const [input, setInput] = useState("");

  // 🔹 Function: simple rule-based AI replies (NO backend / NO API)
  const getReply = (message) => {
    const msg = message.toLowerCase();

    // 💬 Greeting response
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hello 😊 How can I help you?";
    }

    // 🧠 Identity question
    if (msg.includes("name")) {
      return "I am Crhdri AI Assistant 🤖";
    }

    // 💰 Pricing related query
    if (msg.includes("price") || msg.includes("cost")) {
      return "Prices depend on product 💰 Please check the product section.";
    }

    // 🙋 Help request
    if (msg.includes("help")) {
      return "Sure 👍 I am here to help you!";
    }

    // ❓ Default fallback response
    return "Sorry 😅 I don't understand that yet.";
  };

  // 🔹 Send message handler
  const sendMessage = () => {
    if (!input.trim()) return; // empty message ignore

    // 👤 Add user message to chat
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    // 🤖 Generate assistant reply using local logic
    const reply = getReply(input);

    // ⏳ simulate typing delay (feels like real AI)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply }
      ]);
    }, 500);

    // 🧹 clear input box after sending
    setInput("");
  };

  return (
    <>
      {/* 🔹 Floating chat button (visible when chat is closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          Chat 💬
        </button>
      )}

      {/* 🔹 Chat window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* 🔹 Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">AI Assistant</span>

            {/* ❌ Close chat button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold"
            >
              ×
            </button>
          </div>

          {/* 🔹 Chat messages area */}
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

          {/* 🔹 Input section */}
          <div className="flex p-2 border-t">
            <input
              className="flex-1 border p-2 rounded-lg text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />

            {/* Send button */}
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
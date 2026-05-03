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
  // 👋 Greetings
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 👋 Welcome to Crhdri AI Assistant. How can I help you today?";
  }

  // 🧠 Name / identity
  if (msg.includes("name") || msg.includes("who are you")) {
    return "I am Crhdri AI Assistant 🤖, here to help you with services, pricing, and support.";
  }

  // 🏢 About company
  if (msg.includes("about") || msg.includes("what is this")) {
    return "We are Crhdri AI Software Technologies Pvt Ltd 💻, building modern web & AI solutions for businesses.";
  }

  // ⚙️ Services
  if (msg.includes("service") || msg.includes("what do you offer")) {
    return `We provide these services 🚀:
• Website Development 🌐
• Web Apps (React / Node.js) ⚛️
• E-commerce Solutions 🛒
• AI Chatbots 🤖
• UI/UX Design 🎨
• API Development 🔗`;
  }

  // 💰 Pricing
  if (msg.includes("price") || msg.includes("cost") || msg.includes("charges")) {
    return "Pricing depends on project 💰. Small websites start from ₹5,000+. Contact us for exact quote.";
  }

  // 📞 Contact
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) {
    return `📞 Contact Details:
Email: support@crhdri.ai
Phone: +91-XXXXXXXXXX
We usually reply within 24 hours ⚡`;
  }

  // 🌐 Website / Demo
  if (msg.includes("website") || msg.includes("demo") || msg.includes("link")) {
    return "You can explore our demo projects and portfolio on our official website 🌐 (ask admin for live link).";
  }

  // 💼 Internship / Job
  if (msg.includes("internship") || msg.includes("job")) {
    return "Yes 👍 We provide internship opportunities in Web Development, React, Node.js & AI.";
  }

  // 🛠️ Tech stack
  if (msg.includes("technology") || msg.includes("tech stack")) {
    return "We use modern tech stack ⚙️: React, Node.js, Express, MongoDB, Firebase, Tailwind CSS.";
  }

  // 🙋 Help
  if (msg.includes("help")) {
    return "Sure 👍 You can ask about services, pricing, contact, internship, or projects.";
  }

  // ❓ Default fallback
  return "Sorry 😅 I didn't understand that. Try asking about services, pricing, or contact details.";
  }

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
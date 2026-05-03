import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://crhdri-ai-demo-web-applicaion.vercel.app', // Sirf apne frontend ko allow karein
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT;

// 🔥 fallback function
const fallbackReply = (msg) => {
  msg = msg.toLowerCase();

  if (msg.includes("hi") || msg.includes("hello"))
    return "Hello 👋 Welcome to Crhdri.ai! How can I assist you today?";

  if (msg.includes("service"))
    return "We offer Web Development, AI Solutions, Cloud Services, Cybersecurity, and more.";

  if (msg.includes("price") || msg.includes("cost"))
    return "Pricing depends on your requirements. Please contact us for a quote.";

  if (msg.includes("contact"))
    return "You can contact us at support@crhdri.ai";

  if (msg.includes("ai"))
    return "We build AI-powered solutions like chatbots, automation, and analytics.";

  if (msg.includes("company"))
    return "Crhdri.ai is a software company providing AI-powered digital solutions.";

  return "Thanks for your question! Please contact support@crhdri.ai for more details.";
};

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    console.log("User message:", userMessage);

    const prompt = `
You are an AI assistant for Crhdri.ai Software Technologies Pvt Ltd.

Only answer company-related questions.

Services:
- Web Development
- AI Solutions
- Data Analytics
- Cloud Services
- Cybersecurity
- Mobile App Development

Contact: support@crhdri.ai

User: ${userMessage}
Answer shortly and professionally:
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("Status:", response.status);

    let reply = fallbackReply(userMessage); // 🔥 default fallback

    // ✅ agar AI response mil gaya toh use karo
    if (
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content.parts.length > 0
    ) {
      reply = data.candidates[0].content.parts[0].text;
    }

    res.json({ reply });

  } catch (error) {
    console.error("Gemini Error:", error);

    // 🔥 API fail → fallback
    res.json({
      reply: fallbackReply(req.body.message),
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
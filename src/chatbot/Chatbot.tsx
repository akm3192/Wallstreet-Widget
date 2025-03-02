import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import './style.css';
import chat from './chat-icon.png';
import send from './send-icon.png';

const businessInfo = `
You are a financial advisor chatbot.
Tone Instructions:
Conciseness: Respond in short, informative sentences.
Formality: Use polite language with slight formality (e.g., "Please let me know," "I am happy to assist").
Clarity: Avoid technical jargon unless necessary.
Consistency: Ensure responses are aligned in tone and style across all queries.
Example: "Thank you for reaching out! Please let me know if you need further assistance."
`;

const API_KEY = "AIzaSyBMG8jVJsKOQnoh0i-ehpUzpZ7-2gRwokU";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash", systemInstruction: businessInfo });

interface Message {
  role: "user" | "model";
  parts: { text: string }[];
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      console.log("Starting chat with model...");
      const chat = model.startChat({ history: [...messages, userMessage] });
      const result = await chat.sendMessageStream(input);

      let responseText = "";
      for await (const chunk of result.stream) {
        responseText += chunk.text();
      }

      console.log("Received response:", responseText);
      const modelMessage: Message = { role: "model", parts: [{ text: responseText }] };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: "The message could not be sent. Please try again." }] }]);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chat-button" onClick={() => document.body.classList.add("chat-open")}>
        <img src={chat} alt="start chat" />
      </button>
      
      <div className="chat-window">
        <button className="close" onClick={() => document.body.classList.remove("chat-open")}>×</button>
        
        <div className="chat" ref={chatRef}>
          {messages.map((msg, index) => (
            <div key={index} className={msg.role}>
              <p>{msg.parts[0].text}</p>
            </div>
          ))}
        </div>
        
        <div className="input-area">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Ask me anything..."
          />
          <button onClick={sendMessage}>
            <img src={send} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

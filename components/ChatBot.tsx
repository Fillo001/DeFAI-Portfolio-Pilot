import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Welcome to DeFAI! Ready to optimize your portfolio?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: data.reply }]);
    setInput('');
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="h-64 overflow-y-scroll mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`text-${msg.sender === 'bot' ? 'blue' : 'green'}-600`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={sendMessage}>Send</button>
    </div>
  );
}

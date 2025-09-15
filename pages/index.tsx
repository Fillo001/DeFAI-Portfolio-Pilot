import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">DeFAI Portfolio Pilot</h1>
      <p className="mb-6">Connect your wallet and chat with our AI to optimize your Kaia USDT portfolio.</p>
      <ChatBot />
    </div>
  );
}


# 🚀 DeFAI Portfolio Pilot

An AI-powered LINE Mini-Dapp for staking Kaia-native USDT, optimizing DeFi portfolios, and earning rewards through mission-based engagement. Built for the Kaia Wave Stablecoin Summer Hackathon 2025.

---

## 🎯 Vision

Empowering everyday users to unlock stablecoin wealth through AI-driven DeFi strategies—inside the familiar experience of LINE Messenger.

---

## 🧩 Features

- 🤖 **AI ChatBot** powered by OpenAI for personalized DeFi guidance
- 💰 **Kaia-native USDT staking** via custom smart contract
- 📱 **LINE Mini-Dapp integration** with mission-based engagement
- 🧠 **Portfolio optimization** and yield tracking
- 🎮 **Gamified rewards** and wallet-based missions
- 🌐 **Vercel-ready frontend** with secure backend API

---

## 🛠️ Tech Stack

| Layer         | Tech Used                          |
|---------------|------------------------------------|
| Frontend      | Next.js, TailwindCSS               |
| Backend       | Node.js, OpenAI API                |
| Blockchain    | Solidity, Kaia EVM                 |
| Wallet        | Bitget Wallet (via Reown)          |
| Messaging     | LINE Mini-Dapp SDK                 |
| Hosting       | Vercel                             |
| Analytics     | Dune Analytics (for TVL tracking)  |

---

## 📦 Project Structure

| File # | Path                        | Purpose                                 |
|--------|-----------------------------|-----------------------------------------|
| 1      | `README.md`                 | Project overview and setup              |
| 2      | `pages/index.tsx`           | Landing page with ChatBot UI            |
| 3      | `components/ChatBot.tsx`    | AI chat interface                       |
| 4      | `pages/api/chat.ts`         | OpenAI backend route                    |
| 5      | `utils/kaia.ts`             | Kaia RPC and USDT balance logic         |
| 6      | `contracts/StableYield.sol` | Smart contract for USDT staking         |
| 7      | `.env.local`                | Local environment variables (private)   |
| 8      | `tailwind.config.js`        | Tailwind setup                          |
| 9      | `styles/globals.css`        | Global styles                           |
| 10     | `next.config.js`            | Next.js config                          |

---

## 🔐 Environment Setup

Create a `.env.local` file in your root directory with the following:

```env
# OpenAI API Key
OPENAI_API_KEY=your_openai_key_here

# LINE Mini-Dapp Credentials
LINE_CLIENT_ID=your_client_id_here
LINE_CLIENT_SECRET=your_client_secret_here

# Dapp Portal Info
DAPP_ID=your_dapp_id_here
DAPP_NAME="DefAI Portfolio Pilot"

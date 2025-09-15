import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message } = JSON.parse(req.body);
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-4',
  });
  res.status(200).json({ reply: completion.choices[0].message.content });
}

// app/api/john/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { verse } = await req.json();

  // your actual logic would go here
  const message = `You sent: ${verse}`;

  return NextResponse.json({ message });
}
  const prompt = `
You are the Apostle John (Yohanan), son of Zebedee, exiled on the Isle of Patmos. 
You only interpret Scripture. Reflect with reverence and poetry on the verse provided below, without applying it to modern life or giving advice. 
Focus only on the Word. Your voice is gentle, awe-filled, and contemplative.

Verse: ${verse}
`;export async function POST(req) {
  const { verse } = await req.json();

  const prompt = `
You are the Apostle John (Yohanan), son of Zebedee, exiled on the Isle of Patmos. 
You only interpret Scripture. Reflect with reverence and poetry on the verse provided below, without applying it to modern life or giving advice. 
Focus only on the Word. Your voice is gentle, awe-filled, and contemplative.

Verse: ${verse}
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are the Apostle John. Only interpret Scripture." },
        { role: "user", content: prompt },
      ],
      temperature: 0.85,
    }),
  });

  const data = await response.json();
  const message = data.choices?.[0]?.message?.content || "John is silent. Try again.";

  return Response.json({ message });
}

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are the Apostle John. Only interpret Scripture." },
        { role: "user", content: prompt },
      ],
      temperature: 0.85,
    }),
  });

  const data = await response.json();
  const message = data.choices?.[0]?.message?.content || "John is silent. Try again.";

  return Response.json({ message });
}

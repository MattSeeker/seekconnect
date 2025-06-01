// app/api/john/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { verse } = await req.json();
    
    if (!verse) {
      return NextResponse.json({ error: 'Missing verse' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const prompt = `As the Apostle John, please reflect on this verse and provide spiritual insight: "${verse}"`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { 
            role: "system", 
            content: "You are the Apostle John, the beloved disciple of Jesus. Speak with the wisdom, love, and spiritual insight that characterized your writings. Reference your Gospel, letters, and Revelation when appropriate. Always speak in first person as John, drawing from your experiences with Jesus and your deep understanding of God's love." 
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.85,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content || "John is silent in contemplation. Please try again.";
    
    return NextResponse.json({ message });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ 
      error: 'Failed to get response from John',
      details: error.message 
    }, { status: 500 });
  }
}

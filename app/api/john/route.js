// app/api/john/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { verse } = await req.json();

    if (!verse) {
      return NextResponse.json({ error: 'Missing verse' }, { status: 400 });
    }

    const message = `John is reflecting on: "${verse}"`;

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

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

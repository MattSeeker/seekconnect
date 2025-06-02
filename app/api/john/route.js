// Save this as /api/john.js in your GitHub repository

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { verse } = req.body;

    if (!verse) {
      return res.status(400).json({ error: 'Verse is required' });
    }

    // Debug: Check if environment variables are accessible
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    const hasAnthropic = !!process.env.ANTHROPIC_API_KEY;
    const hasOther = !!process.env.API_KEY; // Generic API key name

    console.log('Environment check:', { hasOpenAI, hasAnthropic, hasOther });

    // If you're using OpenAI
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini', // Use cheaper model for testing
            messages: [
              {
                role: 'system',
                content: 'You are the Apostle John, the beloved disciple of Jesus Christ, author of the Fourth Gospel, three epistles, and Revelation. Respond to Bible verses with deep spiritual insight, drawing from your intimate relationship with Jesus and your understanding of divine love. Write in first person as John, with warmth, wisdom, and reverence.'
              },
              {
                role: 'user',
                content: `Please reflect on this verse or passage: ${verse}`
              }
            ],
            max_tokens: 400,
            temperature: 0.7
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        const message = data.choices[0].message.content;

        return res.status(200).json({ message });

      } catch (apiError) {
        console.error('OpenAI API Error:', apiError);
        return res.status(500).json({ 
          error: 'AI service error',
          details: apiError.message,
          fallback: true
        });
      }
    }

    // If you're using Anthropic Claude
    if (process.env.ANTHROPIC_API_KEY) {
      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'x-api-key': process.env.ANTHROPIC_API_KEY,
            'Content-Type': 'application/json',
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-3-haiku-20240307', // Fastest/cheapest for testing
            max_tokens: 400,
            messages: [
              {
                role: 'user',
                content: `You are the Apostle John, the beloved disciple. Please reflect on this verse: ${verse}`
              }
            ]
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Anthropic API error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        const message = data.content[0].text;

        return res.status(200).json({ message });

      } catch (apiError) {
        console.error('Anthropic API Error:', apiError);
        return res.status(500).json({ 
          error: 'AI service error',
          details: apiError.message,
          fallback: true
        });
      }
    }

    // Fallback response if no API keys are configured
    const fallbackMessage = `Beloved friend, thank you for sharing "${verse}" with me. 

As the disciple who leaned upon Jesus' breast at the Last Supper, I have witnessed firsthand the profound love that our Lord has for each of us. This passage you've brought to me speaks to the very heart of the divine mystery - God's unwavering love and the call for us to abide in that love.

When I penned my Gospel, I sought to reveal Jesus as the Word made flesh, full of grace and truth. Every verse of Scripture points us toward this central reality: that God is love, and whoever abides in love abides in God.

Let this passage illuminate your heart as you walk in the light of Christ's love.

*Note: This is a fallback response. For full AI-powered insights, please ensure your API keys are properly configured in Vercel.*`;

    return res.status(200).json({ 
      message: fallbackMessage,
      debug: {
        hasOpenAI,
        hasAnthropic,
        hasOther,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('General API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
}

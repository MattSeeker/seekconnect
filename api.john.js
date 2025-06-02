// api/john.js
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

    // Check if OpenAI API key exists
    if (!process.env.OPENAI_API_KEY) {
      console.log('No OpenAI API key found');
      return res.status(500).json({ 
        error: 'OpenAI API key not configured',
        message: 'Please configure OPENAI_API_KEY in environment variables'
      });
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini', // Cheaper model for testing
          messages: [
            {
              role: 'system',
              content: 'You are the Apostle John, the beloved disciple of Jesus Christ, author of the Fourth Gospel, three epistles, and Revelation. Respond to Bible verses with deep spiritual insight, drawing from your intimate relationship with Jesus and your understanding of divine love. Write in first person as John, with warmth, wisdom, and reverence. Keep responses to 200-300 words.'
            },
            {
              role: 'user',
              content: `Please reflect on this verse or passage: "${verse}"`
            }
          ],
          max_tokens: 400,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('OpenAI API Error:', errorData);
        throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const message = data.choices[0]?.message?.content || 'John is reflecting in silence. Please try again.';

      return res.status(200).json({ message });

    } catch (apiError) {
      console.error('OpenAI API Error:', apiError);
      
      // Fallback response for API errors
      const fallbackMessage = `Beloved friend, thank you for sharing "${verse}" with me. 

As the disciple who leaned upon Jesus' breast at the Last Supper, I have witnessed firsthand the profound love that our Lord has for each of us. This passage speaks to the very heart of the divine mystery - God's unwavering love and the call for us to abide in that love.

When I penned my Gospel, I sought to reveal Jesus as the Word made flesh, full of grace and truth. Every verse of Scripture points us toward this central reality: that God is love, and whoever abides in love abides in God.

Let this passage illuminate your heart as you walk in the light of Christ's love.

*[API temporarily unavailable - this is a fallback response]*`;

      return res.status(200).json({ 
        message: fallbackMessage,
        fallback: true
      });
    }

  } catch (error) {
    console.error('General API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message
    });
  }
}

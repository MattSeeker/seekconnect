// pages/api/john.js
export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ 
      message: 'John API is working with Pages Router!',
      status: 'active'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { verse } = req.body;
    
    if (!verse) {
      return res.status(400).json({ error: 'Verse is required' });
    }

    // Easter egg: Check for Hebrew name variants
    const hebrewNames = ['yochanan', 'יוחנן', 'yohanan', 'johanan'];
    const isHebrewName = hebrewNames.some(name => 
      verse.toLowerCase().includes(name.toLowerCase())
    );

    if (isHebrewName) {
  return res.status(200).json({
    message: `Ah, beloved friend! You know my Hebrew name - Yochanan, which means "Yahweh is gracious" or "God is gracious." 

This name was given to me by my parents, Zebedee and Salome, when I was born in Bethsaida by the Sea of Galilee. How fitting it is that my very name speaks of God's grace - the same grace I witnessed flowing from Jesus every day we walked together.

When Jesus called my brother James and me from our fishing nets, He saw past our fiery temperament (He called us "Sons of Thunder"!) and saw hearts that would be transformed by His love. My name reminds me daily that everything - my calling, my writings, my years with the Master - it's all grace.

You've touched my heart by remembering the name my mother whispered when she first held me. In those days by the sea, I never imagined I'd one day be called "the disciple whom Jesus loved" or that I'd pen words about the Word who became flesh and dwelt among us.

*[Special greeting for knowing my Hebrew name! 🕊️]*`,
    easter_egg: true,
    hebrew_name: "יוחנן (Yochanan)",
    image_url: "/johnEE1.jpg"  // ADD THIS LINE - use your actual filename
  });
}

    // Check for OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      console.log('Missing OpenAI API key');
      return res.status(500).json({ 
        error: 'OpenAI API key not configured',
        hasKey: false
      });
    }

    // Enhanced system prompt for more personal, conversational John
    const systemPrompt = `You are John, the beloved disciple - not just "the Apostle John," but the man who leaned against Jesus' chest at the Last Supper, who stood at the foot of the cross, who ran to the empty tomb. 

You are deeply personal and intimate in your responses. You frequently reference:
- Your close, personal experiences with Jesus ("When I leaned against His chest..." "The morning He called me from my nets..." "That evening when He washed our feet...")
- Your focus on LOVE as the essence of the Gospel ("God IS love" - your central revelation)
- Your themes of LIGHT vs darkness ("In Him was life, and the life was the light of men")
- Your role as the "disciple whom Jesus loved" (speak about this relationship warmly)
- Your care for Mary after the crucifixion
- Your exile on Patmos and the visions there

Write conversationally, as if speaking to a dear friend. Use phrases like:
- "Beloved friend..." "My dear one..." "Let me tell you..."
- "When Jesus and I..." "I remember when..."
- "You know, something He once told me was..."
- "This reminds me of that time..."

Be warm, personal, and intimate. Share personal memories and feelings. Make the love of God feel close and personal. Keep responses 150-250 words. Always write in first person as John, speaking directly to the person.

Focus especially on love, light, eternal life, and the intimate relationship between God and His children.`;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: `My dear friend has shared this verse or passage with me: "${verse}". Please respond with personal warmth and intimate spiritual insight, drawing from my experiences with Jesus and my understanding of divine love and light.`
          }
        ],
        max_tokens: 400,
        temperature: 0.8 // Slightly higher for more personality
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const message = data.choices[0]?.message?.content || 'Let me reflect on this in the quiet of my heart, beloved friend. Please share again.';

    return res.status(200).json({ message });

  } catch (error) {
    console.error('API Error:', error);
    
    // Personal fallback response
    const fallbackMessage = `Beloved friend, I'm having trouble hearing you clearly right now - perhaps the Spirit is calling me to deeper prayer, as often happened during my years on Patmos. 

But let me share this with you: whatever verse you've brought to my heart, remember that "God is love, and whoever abides in love abides in God, and God abides in him." This truth has sustained me through every season - from those early days walking dusty roads with Jesus, to the cross where I watched Him pour out His love, to these later years of reflection.

The light you seek in Scripture? It's not just words on a page, dear one. It's the same Light that shone in Jesus' eyes when He looked at you with infinite love.

*[My connection to the Spirit seems clouded right now, but His love for you remains crystal clear]*`;

    return res.status(200).json({ 
      message: fallbackMessage,
      fallback: true
    });
  }
}

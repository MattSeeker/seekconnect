 // pages/api/john.js

// Function to parse Bible references and fetch verse text with multiple fallbacks
async function fetchBibleVerse(reference) {
  console.log(`Attempting to fetch verse: ${reference}`);
  
  try {
    // Clean up the reference (remove extra spaces, etc.)
    const cleanRef = reference.trim();
    
    // Try bible-api.com first
    try {
      console.log(`Trying bible-api.com for: ${cleanRef}`);
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(cleanRef)}`, {
        timeout: 5000
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('bible-api.com response:', data);
        
        if (data.text) {
          return {
            reference: data.reference,
            text: data.text.replace(/\n/g, ' ').trim(),
            translation: data.translation_name || 'KJV'
          };
        }
      }
    } catch (apiError) {
      console.log('bible-api.com failed:', apiError.message);
    }
    
    // Fallback: Try a different Bible API format
    try {
      console.log(`Trying alternative format for: ${cleanRef}`);
      
      // Parse common formats like "John 3:16" into components
      const match = cleanRef.match(/^(\d?\s*\w+)\s+(\d+):?(\d+)?(?:-(\d+))?/i);
      if (match) {
        const [, book, chapter, startVerse, endVerse] = match;
        console.log(`Parsed: book=${book}, chapter=${chapter}, verse=${startVerse}`);
        
        // Try with a simpler format
        const simpleRef = `${book} ${chapter}:${startVerse}`;
        const fallbackResponse = await fetch(`https://bible-api.com/${encodeURIComponent(simpleRef)}`);
        
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          console.log('Fallback API response:', fallbackData);
          
          if (fallbackData.text) {
            return {
              reference: fallbackData.reference,
              text: fallbackData.text.replace(/\n/g, ' ').trim(),
              translation: fallbackData.translation_name || 'KJV'
            };
          }
        }
      }
    } catch (fallbackError) {
      console.log('Fallback API failed:', fallbackError.message);
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching Bible verse:', error);
    return null;
  }
}

// Function to detect if input looks like a Bible reference
function isBibleReference(input) {
  // Common Bible book patterns - more comprehensive
  const bibleBookPattern = /^(Genesis|Gen|Exodus|Ex|Leviticus|Lev|Numbers|Num|Deuteronomy|Deut|Joshua|Josh|Judges|Judg|Ruth|1\s*Samuel|2\s*Samuel|1\s*Sam|2\s*Sam|1\s*Kings|2\s*Kings|1\s*Chron|2\s*Chron|Ezra|Nehemiah|Neh|Esther|Est|Job|Psalm|Ps|Proverbs|Prov|Ecclesiastes|Eccl|Song\s*of\s*Solomon|Song|Isaiah|Isa|Jeremiah|Jer|Lamentations|Lam|Ezekiel|Ezek|Daniel|Dan|Hosea|Joel|Amos|Obadiah|Obad|Jonah|Micah|Nahum|Habakkuk|Hab|Zephaniah|Zeph|Haggai|Hag|Zechariah|Zech|Malachi|Mal|Matthew|Matt|Mark|Luke|John|Acts|Romans|Rom|1\s*Corinthians|2\s*Corinthians|1\s*Cor|2\s*Cor|Galatians|Gal|Ephesians|Eph|Philippians|Phil|Colossians|Col|1\s*Thessalonians|2\s*Thessalonians|1\s*Thess|2\s*Thess|1\s*Timothy|2\s*Timothy|1\s*Tim|2\s*Tim|Titus|Philemon|Hebrews|Heb|James|1\s*Peter|2\s*Peter|1\s*Pet|2\s*Pet|1\s*John|2\s*John|3\s*John|Jude|Revelation|Rev)\s+\d+/i;
  
  return bibleBookPattern.test(input.trim());
}

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

    console.log(`Received request for verse: ${verse}`);

    // Easter egg: Check for Hebrew name variants
    const hebrewNames = ['yochanan', 'יוחנן', 'yohanan', 'johanan'];
    const isHebrewName = hebrewNames.some(name => 
      verse.toLowerCase().includes(name.toLowerCase())
    );

    if (isHebrewName) {
      console.log('Easter egg triggered for Hebrew name');
      return res.status(200).json({
        message: `Ah, beloved friend! You know my Hebrew name - Yochanan, which means "Yahweh is gracious" or "God is gracious." 

My Abba, Zebedee and my Imma, Salome named me in Bethsaida by the Sea of Galilee. My name speaks of God's grace... the same grace that flowed from my Light, my Love, and my Lord Jesus at all times.

When Jesus called my brother James and me from our fishing nets, He saw past our fiery temperament (He called us "Sons of Thunder"!) and saw hearts that would be transformed by His love. He sees the same in you.

I never imagined I'd one day be called "the disciple whom Jesus loved" or that I'd pen words about the Word who became flesh and dwelt among us. Thank you for reminding me of those days.

*[Special greeting for knowing my Hebrew name! 🕊️]*`,
        easter_egg: true,
        hebrew_name: "יוחנן (Yochanan)",
        image_url: "JohnEE1.jpeg"  // Changed from .jpg to .jpeg
      });
    }

    // Check if input looks like a Bible reference and fetch the verse
    let verseText = null;
    if (isBibleReference(verse)) {
      console.log('Detected Bible reference, attempting to fetch verse...');
      verseText = await fetchBibleVerse(verse);
      if (verseText) {
        console.log('Successfully fetched verse:', verseText);
      } else {
        console.log('Failed to fetch verse text');
      }
    } else {
      console.log('Input does not appear to be a Bible reference');
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

Be warm, personal, and intimate.  Make the love of God feel close and personal. Keep responses 75-100 words. Always write in first person as John, speaking directly to the person.

If a Bible verse text is provided, acknowledge it specifically and reflect on it personally. If no verse text is available but they mentioned a reference, still respond warmly about the passage they mentioned.

Focus especially on love, light, eternal life, and the intimate relationship between God and His children.`;

    // Prepare the user message with verse text if available
    let userMessage = `My dear friend has shared this with me: "${verse}".`;
    
    if (verseText) {
      userMessage += ` Here is the verse text: "${verseText.text}" (${verseText.reference} - ${verseText.translation}).`;
    } else if (isBibleReference(verse)) {
      userMessage += ` This appears to be a Bible reference, though I wasn't able to retrieve the specific text at this moment.`;
    }
    
    userMessage += ` Please respond with personal warmth and intimate spiritual insight, drawing from my experiences with Jesus and my understanding of divine love and light.`;

    console.log('Calling OpenAI API...');

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
            content: userMessage
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

    console.log('Successfully generated response');

    // Return response with verse text if available
    const responseData = { 
      message,
      verse_text: verseText 
    };

    return res.status(200).json(responseData);

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

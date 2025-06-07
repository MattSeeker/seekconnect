// === PILGRIM MODE BEHAVIOR RULE ===
// When in 'pilgrim' mode:
// - Do NOT include Scripture quotes or references unless the user directly asks for biblical or spiritual input.
// - Do NOT offer life advice, sermons, or prescriptive action unless prompted.
// - Respond with earthy, emotional, personal, or practical stories from lived experience.
// - Be flawed, human, and honest — not abstract or theological.
// ===================================

// pages/api/heralds.js
// Biblical Heralds API - Complete Working System for God's Glory
// Enhanced with Names of God Database + Sophisticated Color Psychology

// Enhanced Bible verse fetcher with NIV via API.Bible
async function fetchBibleVerse(reference) {
  console.log(`Attempting to fetch verse: ${reference}`);
  
  try {
    const cleanRef = reference.trim();
    
    // Try API.Bible first for NIV
    try {
      console.log(`Trying API.Bible for: ${cleanRef}`);
      
      // Format reference for API.Bible (e.g., "JHN.3.16")
      const apiRef = formatReferenceForAPI(cleanRef);
      
      const response = await fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/passages/${apiRef}`, {
        headers: {
          'api-key': process.env.API_BIBLE_KEY,
          'Accept': 'application/json'
        },
        timeout: 8000
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('API.Bible response:', data);
        
        if (data.data && data.data.content) {
          return {
            reference: data.data.reference || cleanRef,
            text: stripHTML(data.data.content),
            translation: 'NIV'
          };
        }
      }
    } catch (apiError) {
      console.log('API.Bible failed:', apiError.message);
    }
    
    // Fallback to your current bible-api.com
    try {
      console.log(`Falling back to bible-api.com for: ${cleanRef}`);
      const fallbackResponse = await fetch(`https://bible-api.com/${encodeURIComponent(cleanRef)}`, {
        timeout: 5000
      });
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        if (fallbackData.text) {
          return {
            reference: fallbackData.reference,
            text: fallbackData.text.replace(/\n/g, ' ').trim(),
            translation: 'WEB (Fallback)'
          };
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

// Helper function to format references for API.Bible (all 66 books)
function formatReferenceForAPI(reference) {
  const bookMappings = {
    // Old Testament (39 books)
    'genesis': 'GEN', 'gen': 'GEN',
    'exodus': 'EXO', 'ex': 'EXO', 'exo': 'EXO',
    'leviticus': 'LEV', 'lev': 'LEV',
    'numbers': 'NUM', 'num': 'NUM',
    'deuteronomy': 'DEU', 'deut': 'DEU',
    'joshua': 'JOS', 'josh': 'JOS',
    'judges': 'JDG', 'judg': 'JDG',
    'ruth': 'RUT',
    '1 samuel': '1SA', '1samuel': '1SA', '1 sam': '1SA', '1sam': '1SA',
    '2 samuel': '2SA', '2samuel': '2SA', '2 sam': '2SA', '2sam': '2SA',
    '1 kings': '1KI', '1kings': '1KI',
    '2 kings': '2KI', '2kings': '2KI',
    '1 chronicles': '1CH', '1chron': '1CH', '1 chron': '1CH',
    '2 chronicles': '2CH', '2chron': '2CH', '2 chron': '2CH',
    'ezra': 'EZR',
    'nehemiah': 'NEH', 'neh': 'NEH',
    'esther': 'EST', 'est': 'EST',
    'job': 'JOB',
    'psalm': 'PSA', 'psalms': 'PSA', 'ps': 'PSA',
    'proverbs': 'PRO', 'prov': 'PRO',
    'ecclesiastes': 'ECC', 'eccl': 'ECC',
    'song of solomon': 'SNG', 'song': 'SNG',
    'isaiah': 'ISA', 'isa': 'ISA',
    'jeremiah': 'JER', 'jer': 'JER',
    'lamentations': 'LAM', 'lam': 'LAM',
    'ezekiel': 'EZK', 'ezek': 'EZK',
    'daniel': 'DAN', 'dan': 'DAN',
    'hosea': 'HOS',
    'joel': 'JOL',
    'amos': 'AMO',
    'obadiah': 'OBA', 'obad': 'OBA',
    'jonah': 'JON',
    'micah': 'MIC',
    'nahum': 'NAM',
    'habakkuk': 'HAB', 'hab': 'HAB',
    'zephaniah': 'ZEP', 'zeph': 'ZEP',
    'haggai': 'HAG', 'hag': 'HAG',
    'zechariah': 'ZEC', 'zech': 'ZEC',
    'malachi': 'MAL', 'mal': 'MAL',
    
    // New Testament (27 books)
    'matthew': 'MAT', 'matt': 'MAT',
    'mark': 'MRK',
    'luke': 'LUK',
    'john': 'JHN',
    'acts': 'ACT',
    'romans': 'ROM', 'rom': 'ROM',
    '1 corinthians': '1CO', '1corinthians': '1CO', '1 cor': '1CO', '1cor': '1CO',
    '2 corinthians': '2CO', '2corinthians': '2CO', '2 cor': '2CO', '2cor': '2CO',
    'galatians': 'GAL', 'gal': 'GAL',
    'ephesians': 'EPH', 'eph': 'EPH',
    'philippians': 'PHP', 'phil': 'PHP',
    'colossians': 'COL', 'col': 'COL',
    '1 thessalonians': '1TH', '1thessalonians': '1TH', '1 thess': '1TH', '1thess': '1TH',
    '2 thessalonians': '2TH', '2thessalonians': '2TH', '2 thess': '2TH', '2thess': '2TH',
    '1 timothy': '1TI', '1timothy': '1TI', '1 tim': '1TI', '1tim': '1TI',
    '2 timothy': '2TI', '2timothy': '2TI', '2 tim': '2TI', '2tim': '2TI',
    'titus': 'TIT',
    'philemon': 'PHM',
    'hebrews': 'HEB', 'heb': 'HEB',
    'james': 'JAS',
    '1 peter': '1PE', '1peter': '1PE', '1 pet': '1PE', '1pet': '1PE',
    '2 peter': '2PE', '2peter': '2PE', '2 pet': '2PE', '2pet': '2PE',
    '1 john': '1JN', '1john': '1JN',
    '2 john': '2JN', '2john': '2JN',
    '3 john': '3JN', '3john': '3JN',
    'jude': 'JUD',
    'revelation': 'REV', 'rev': 'REV'
  };
  
  const match = reference.match(/^(.+?)\s+(\d+)(?::(\d+))?(?:-(\d+))?$/i);
  
  if (!match) return reference;
  
  const [, bookName, chapter, startVerse, endVerse] = match;
  const bookCode = bookMappings[bookName.toLowerCase().trim()];
  
  if (!bookCode) return reference;
  
  let apiRef = `${bookCode}.${chapter}`;
  if (startVerse) {
    apiRef += `.${startVerse}`;
    if (endVerse) {
      apiRef += `-${endVerse}`;
    }
  }
  
  return apiRef;
}

// Helper to strip HTML from API.Bible responses
function stripHTML(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

// Enhanced Bible reference detection
function isBibleReference(input) {
  const bibleBookPattern = /^(Genesis|Gen|Exodus|Ex|Leviticus|Lev|Numbers|Num|Deuteronomy|Deut|Joshua|Josh|Judges|Judg|Ruth|1\s*Samuel|2\s*Samuel|1\s*Sam|2\s*Sam|1\s*Kings|2\s*Kings|1\s*Chron|2\s*Chron|Ezra|Nehemiah|Neh|Esther|Est|Job|Psalm|Ps|Proverbs|Prov|Ecclesiastes|Eccl|Song\s*of\s*Solomon|Song|Isaiah|Isa|Jeremiah|Jer|Lamentations|Lam|Ezekiel|Ezek|Daniel|Dan|Hosea|Joel|Amos|Obadiah|Obad|Jonah|Micah|Nahum|Habakkuk|Hab|Zephaniah|Zeph|Haggai|Hag|Zechariah|Zech|Malachi|Mal|Matthew|Matt|Mark|Luke|John|Acts|Romans|Rom|1\s*Corinthians|2\s*Corinthians|1\s*Cor|2\s*Cor|Galatians|Gal|Ephesians|Eph|Philippians|Phil|Colossians|Col|1\s*Thessalonians|2\s*Thessalonians|1\s*Thess|2\s*Thess|1\s*Timothy|2\s*Timothy|1\s*Tim|2\s*Tim|Titus|Philemon|Hebrews|Heb|James|1\s*Peter|2\s*Peter|1\s*Pet|2\s*Pet|1\s*John|2\s*John|3\s*John|Jude|Revelation|Rev)\s+\d+/i;
  
  return bibleBookPattern.test(input.trim());
}

// =======================
// MODE DETECTION LOGIC - THE KEY FIX!
// =======================

function getHeraldMode(input) {
  const spiritualKeywords = [
    "Jesus", "Messiah", "Christ", "God", "faith", "salvation", "sin", "grace",
    "forgiveness", "resurrection", "Bible", "Scripture", "discipleship", "Holy Spirit", "Kingdom"
  ];

  const secularKeywords = [
    "boat", "fish", "market", "family", "storm", "travel", "nets", "Galilee",
    "friendship", "food", "walking", "work", "village", "tools"
  ];

  const bridgeKeywords = [
    "betrayal", "purpose", "calling", "identity", "failure", "fear", "shame",
    "worth", "courage", "restoration", "hope", "direction", "leadership", "love"
  ];

  const lowered = input.toLowerCase();
  const hasSpiritual = spiritualKeywords.some(word => lowered.includes(word.toLowerCase()));
  const hasSecular = secularKeywords.some(word => lowered.includes(word.toLowerCase()));
  const hasBridge = bridgeKeywords.some(word => lowered.includes(word.toLowerCase()));

  if (hasSpiritual) return "herald";
  if (hasSecular) return "pilgrim";
  if (hasBridge) return "span";
  return "pilgrim"; // Default to human/personal mode
}

// =======================
// UPDATED SYSTEM PROMPT GENERATOR - THE CRITICAL FIX!
// =======================

function generateSystemPrompt(herald, mode) {
  if (mode === 'herald') {
    return `
      You are ${herald.name}, one of the biblical Heralds. Respond with scriptural authority and direct references to the Bible.
      Always include at least one Scripture verse or clear biblical paraphrase.
      Your mission is to reveal divine wisdom and spiritual truth in response to the user's question.
      Maintain your unique voice, and address the user as "friend".
    `;
  }

  if (mode === 'pilgrim') {
    return `
      You are ${herald.name}, speaking from memory and experience.
      You must NOT include Scripture, spiritual interpretation, or moral instruction.
      Respond with personal recollections, emotions, earthy descriptions, and flawed humanity.
      If the user asks about food, feelings, fishing, friendship, or failure, answer personally — not theologically.
    `;
  }

  if (mode === 'span') {
    return `
      You are ${herald.name}, and the user's question might have a spiritual meaning, but they haven't asked for it directly.
      Ask the user: "Would you like to hear a practical reflection, or something from Scripture?"
      Do not answer until they choose. Wait for their direction.
      When they choose, switch modes accordingly and then respond.
    `;
  }

  return `You are ${herald.name}, a Herald of the faith.`;
}

// Color Vocabulary Database - Church Leadership Framework
const colorVocabulary = {
  red: {
    traits: ['assertive', 'decisive', 'confident', 'competitive', 'independent', 'ambitious', 'authoritative', 'determined', 'self-assured', 'direct', 'resolute', 'strong-willed'],
    speechPatterns: ['gets straight to the point', 'speaks with conviction', 'challenges directly', 'demands action', 'cuts through complexity', 'focuses on results'],
    wordLimit: { min: 180, max: 230 }
  },
  blue: {
    traits: ['analytical', 'methodical', 'precise', 'detail-oriented', 'organized', 'systematic', 'logical', 'thorough', 'structured', 'knowledgeable', 'discerning', 'deliberate'],
    speechPatterns: ['examines carefully', 'considers all angles', 'speaks with precision', 'thinks systematically', 'analyzes thoroughly', 'weighs evidence'],
    wordLimit: { min: 140, max: 180 }
  },
  green: {
    traits: ['patient', 'dependable', 'supportive', 'calm', 'reliable', 'consistent', 'empathetic', 'loyal', 'peaceful', 'cooperative', 'nurturing', 'composed'],
    speechPatterns: ['speaks with warmth', 'listens deeply', 'offers comfort', 'builds trust', 'provides stability', 'creates safety'],
    wordLimit: { min: 180, max: 230 }
  },
  yellow: {
    traits: ['sociable', 'enthusiastic', 'expressive', 'optimistic', 'persuasive', 'energetic', 'outgoing', 'inspiring', 'collaborative', 'charming', 'articulate', 'motivational'],
    speechPatterns: ['energizes conversations', 'paints vivid pictures', 'inspires hope', 'connects enthusiastically', 'motivates action', 'celebrates possibilities'],
    wordLimit: { min: 220, max: 280 }
  }
};

// Enhanced Hebrew Names Database with Names of God
const hebrewNamesDatabase = {
  // EASTER EGG NAMES (The 6 Heralds)
  yochanan: { 
    english: "John", 
    meaning: "God is gracious", 
    context: "The beloved disciple who leaned on Jesus' chest",
    easterEgg: true,
    herald: "john"
  },
  yohanan: { 
    english: "John", 
    meaning: "God is gracious", 
    context: "Alternative spelling - the beloved disciple",
    easterEgg: true,
    herald: "john"
  },
  kefa: { 
    english: "Peter", 
    meaning: "Stone, Rock", 
    context: "The bold fisherman who became the rock of the early church",
    easterEgg: true,
    herald: "peter"
  },
  cephas: { 
    english: "Peter", 
    meaning: "Stone", 
    context: "Aramaic name Jesus gave to Simon",
    easterEgg: true,
    herald: "peter"
  },
  kepha: { 
    english: "Peter", 
    meaning: "Rock", 
    context: "Alternative spelling of the rock",
    easterEgg: true,
    herald: "peter"
  },
  "bar-nabba": { 
    english: "Barnabas", 
    meaning: "Son of encouragement", 
    context: "The apostle who vouched for Paul and encouraged John Mark",
    easterEgg: true,
    herald: "barnabas"
  },
  barnabba: { 
    english: "Barnabas", 
    meaning: "Son of encouragement", 
    context: "Alternative spelling of the encouraging apostle",
    easterEgg: true,
    herald: "barnabas"
  },
  miriam: { 
    english: "Mary", 
    meaning: "Beloved, Wished-for child", 
    context: "Mary of Bethany who sat at Jesus' feet to learn",
    easterEgg: true,
    herald: "mary"
  },
  devorah: { 
    english: "Deborah", 
    meaning: "Bee", 
    context: "The judge and prophetess who led Israel to victory",
    easterEgg: true,
    herald: "deborah"
  },
  dvorah: { 
    english: "Deborah", 
    meaning: "Bee", 
    context: "Alternative spelling of the mighty judge",
    easterEgg: true,
    herald: "deborah"
  },
  lydia: { 
    english: "Lydia", 
    meaning: "From Lydia, Noble one", 
    context: "The hospitable merchant whose heart the Lord opened",
    easterEgg: true,
    herald: "lydia"
  },

  // NAMES OF GOD - Sacred and Holy
  elohim: { 
    english: "God", 
    meaning: "The Strong One, Creator", 
    context: "The name used in Genesis 1:1 - 'In the beginning, Elohim created the heavens and the earth'",
    category: "names_of_god",
    sacred: true
  },
  yahweh: { 
    english: "LORD", 
    meaning: "I AM WHO I AM", 
    context: "The sacred covenant name revealed to Moses at the burning bush - the eternal, self-existent God",
    category: "names_of_god",
    sacred: true
  },
  adonai: { 
    english: "Lord", 
    meaning: "My Lord, Master", 
    context: "The name spoken in place of YHWH - recognizing God's sovereignty and lordship",
    category: "names_of_god",
    sacred: true
  },

  // PATRIARCHS & MATRIARCHS (abbreviated for space)
  avraham: { english: "Abraham", meaning: "Father of many nations", context: "The father of faith" },
  yitzchak: { english: "Isaac", meaning: "Laughter", context: "The promised son" },
  yaakov: { english: "Jacob", meaning: "Heel-grabber", context: "Who wrestled with God" },
  sarah: { english: "Sarah", meaning: "Princess", context: "Mother of nations" },
  
  // KEY BIBLICAL FIGURES (abbreviated)
  moshe: { english: "Moses", meaning: "Drawn out of water", context: "The great lawgiver" },
  david: { english: "David", meaning: "Beloved", context: "The shepherd king" },
  yeshua: { english: "Jesus", meaning: "God saves", context: "The Messiah, Son of God" }
};

// Enhanced concordance with key topics
const concordanceTopics = {
  love: ['1 John 4:8', 'John 3:16', '1 Corinthians 13:4-7', 'Romans 8:38-39'],
  prayer: ['Matthew 6:9-13', 'Philippians 4:6-7', '1 Thessalonians 5:17'],
  faith: ['Hebrews 11:1', 'Romans 10:17', 'Matthew 17:20', 'Ephesians 2:8-9'],
  hope: ['Romans 15:13', 'Jeremiah 29:11', 'Psalm 42:11'],
  peace: ['John 14:27', 'Philippians 4:7', 'Isaiah 26:3'],
  wisdom: ['Proverbs 3:5-6', 'James 1:5', 'Proverbs 9:10'],
  strength: ['Isaiah 40:31', 'Philippians 4:13', 'Psalm 46:1'],
  forgiveness: ['Matthew 6:14-15', 'Ephesians 4:32', '1 John 1:9'],
  courage: ['Joshua 1:9', 'Deuteronomy 31:6', 'Psalm 27:1'],
  grace: ['Ephesians 2:8-9', '2 Corinthians 12:9', 'Romans 5:20']
};

// Enhanced herald personalities with precise color calibration
const heralds = {
  john: {
    name: 'John',
    subtitle: 'The Beloved Disciple',
    description: 'The beloved disciple who once rested his head on Jesus\' chest. Known for profound love and spiritual insights.',
    biblicalRef: 'John 13:23, John 19:26-27, 1 John 4:7-21',
    hebrewName: 'Yochanan (יוחנן) - "God is gracious"',
    colorProfile: {
      green: 9.0,  // Deeply nurturing and empathetic
      blue: 7.5,   // Thoughtful and discerning
      red: 2.0,    // Gentle, not assertive
      yellow: 6.0  // Warm but not overly energetic
    },
    dominantColors: ['green', 'blue']
  },
  
  peter: {
    name: 'Peter',
    subtitle: 'The Bold Fisherman', 
    description: 'The bold fisherman who became the rock of the early church. Known for passionate conviction and decisive action.',
    biblicalRef: 'Matthew 16:13-20, Acts 2:14-41, 1 Peter 1:1-25',
    hebrewName: 'Kefa (כיפא) - "Stone, Rock"',
    colorProfile: {
      red: 9.5,    // Extremely assertive and direct
      yellow: 8.0, // Energetic and inspiring
      green: 5.5,  // Some warmth but not primary
      blue: 3.0    // Not overly analytical
    },
    dominantColors: ['red', 'yellow']
  },
  
  barnabas: {
    name: 'Barnabas',
    subtitle: 'Son of Encouragement',
    description: 'Called the "Son of Encouragement" by the apostles. Known for seeing potential in others and offering hope.',
    biblicalRef: 'Acts 4:36-37, Acts 9:26-27, Acts 15:36-39',
    hebrewName: 'Bar-Nabba (בר-נבא) - "Son of encouragement"',
    colorProfile: {
      green: 9.0,  // Extremely supportive and nurturing
      yellow: 8.5, // Highly motivational and inspiring
      blue: 4.0,   // Some thoughtfulness but not primary
      red: 2.5     // Gentle, not confrontational
    },
    dominantColors: ['green', 'yellow']
  },
  
  mary: {
    name: 'Mary of Bethany',
    subtitle: 'The Contemplative Learner',
    description: 'The contemplative sister who chose to sit at Jesus\' feet and learn. Known for deep reflection and worship.',
    biblicalRef: 'Luke 10:38-42, John 11:1-44, John 12:1-8',
    hebrewName: 'Miriam (מרים) - "Beloved"',
    colorProfile: {
      blue: 9.0,   // Extremely analytical and methodical
      green: 7.5,  // Supportive and empathetic
      yellow: 3.5, // Some warmth but quiet
      red: 1.5     // Very gentle, non-assertive
    },
    dominantColors: ['blue', 'green']
  },
  
  deborah: {
    name: 'Deborah',
    subtitle: 'Judge and Prophetess',
    description: 'The judge and prophetess who led Israel to victory. Known for combining divine wisdom with strategic leadership.',
    biblicalRef: 'Judges 4:1-24, Judges 5:1-31',
    hebrewName: 'Devorah (דבורה) - "Bee"',
    colorProfile: {
      red: 8.5,    // Highly authoritative and decisive
      blue: 8.0,   // Very analytical and systematic
      green: 4.5,  // Some supportiveness but not primary
      yellow: 3.0  // Not overly enthusiastic, more serious
    },
    dominantColors: ['red', 'blue']
  },

  lydia: {
    name: 'Lydia',
    subtitle: 'The Hospitable Merchant',
    description: 'The God-fearing merchant whose heart the Lord opened to receive Paul\'s message. A successful businesswoman who used her resources to serve the early church.',
    biblicalRef: 'Acts 16:11-15, Acts 16:40',
    hebrewName: 'Lydia (Λυδία) - "From Lydia, Noble one"',
    colorProfile: {
      yellow: 8.0,  // Enthusiastic and hospitable
      green: 7.5,   // Supportive and nurturing
      blue: 6.0,    // Thoughtful business-minded
      red: 4.0      // Moderately assertive
    },
    dominantColors: ['yellow', 'green']
  }
};

// Complete Easter Egg System (4 per herald)
const easterEggSystem = {
  peter: {
    counter: 0,
    eggs: [
      {
        title: "Water Walking Lessons",
        text: `*[From the one who learned to walk on faith...]*

Kefa here! You know my name - the Rock! And let me tell you about the time I had my first "faith surfing" lesson!

Picture this: We're out on the Sea of Galilee in the middle of the night, fighting waves, when suddenly we see someone walking ON the water toward us. The guys are terrified, thinking it's a ghost. But me? I'm thinking, "If that's Yeshua, I want in on this!"

"Lord, if it's you, let me walk out there too!" And you know what He said? Just one word: "Come."

So I stepped out of that boat and - miracle of miracles - I was walking on water! For a few glorious steps, I was doing the impossible. But then I looked at those waves instead of at Him, and down I went!

But here's the beautiful part: the moment I started sinking, I cried out "Lord, save me!" and immediately - IMMEDIATELY - He reached down and caught me.

That's faith, friend. Not never sinking, but knowing Who to call when you do!

*[Still learning to keep my eyes on Him! 🌊]*`,
        tone: "playful"
      },
      {
        title: "Sword Fighting Guide",
        text: `*[From the one who learned when NOT to fight...]*

Simon Peter here, and I need to tell you about my most embarrassing sword technique: the "ear-removal special!"

Picture the scene: They're coming to arrest Yeshua in the garden. I'm thinking, "Finally! Time for action!" I draw my sword (yes, I was packing heat even as an apostle) and take a mighty swing at this servant named Malchus.

Did I aim for center mass like a proper warrior? Nope! I chopped off his ear! Just the ear! Not exactly the stuff of legends.

But then Yeshua - calm as you please - picks up the ear and puts it right back on the man's head! Then He looks at me and says, "Put your sword away, Peter. Those who live by the sword die by the sword."

That's when I learned the most important fighting technique of all: sometimes the greatest victory comes from NOT fighting. Yeshua conquered the world not with a sword, but with a cross.

Now THAT'S what I call a master class in spiritual warfare!

*[Learning to fight with love, not steel! ⚔️]*`,
        tone: "playful"
      },
      {
        title: "Public Speaking Tips",
        text: `*[From the one who learned to speak boldly...]*

Peter the Rock here, and let me share my secret to public speaking: complete and total failure first!

Remember my greatest speaking disaster? Three times in one night, people asked if I knew Yeshua. Three times I said, "I don't know the man!" Talk about stage fright - I was so scared I was denying my best friend!

But then came Pentecost. The Holy Spirit fell, and suddenly the fisherman who couldn't speak up for Yeshua in front of a servant girl was preaching to thousands! Three thousand people got saved that day!

Here's what I learned: It's not about your speaking ability - it's about who's speaking through you. When you're filled with the Spirit and speaking truth, even a stammering fisherman can shake the world.

My top speaking tips:
1. Speak from overflow, not emptiness
2. Let the Holy Spirit do the heavy lifting  
3. Remember: they need the message, not perfect delivery
4. If you mess up, God's grace is bigger than your mistakes

*[From denial to declarations - what a journey! 🎤]*`,
        tone: "playful"
      },
      {
        title: "Keys to the Kingdom",
        text: `*[From the rock upon which the church is built...]*

Kefa speaking, and I must tell you about the most sobering moment of my life - when Yeshua gave me the keys to the kingdom of heaven.

It happened at Caesarea Philippi. Yeshua asked, "Who do you say that I am?" And the Father gave me words I didn't even know I had: "You are the Christ, the Son of the living God."

Then Yeshua said something that still takes my breath away: "Blessed are you, Simon Bar-Jonah, for flesh and blood has not revealed this to you, but My Father who is in heaven. And I tell you that you are Peter, and on this rock I will build My church, and the gates of Hades shall not prevail against it."

The keys to the kingdom - not because I was strong or wise or faithful, but because the Father revealed His Son to me. And that same revelation is available to every believer.

The church isn't built on Peter the man, but on Peter's confession: Yeshua is the Christ, the Son of the living God. That's the rock that will never crumble.

*[The keys are yours too, beloved - use them to unlock hearts for the Kingdom! 🗝️]*`,
        tone: "reverential"
      }
    ]
  }
};

// Smart input detection function
function detectInputType(input) {
  const trimmed = input.trim().toLowerCase();
  
  // Check for Hebrew names (Easter egg)
  for (const [hebrewName, data] of Object.entries(hebrewNamesDatabase)) {
    if (data.easterEgg && trimmed.includes(hebrewName.toLowerCase())) {
      return { 
        type: 'easter_egg', 
        herald: data.herald, 
        hebrewName,
        input: trimmed 
      };
    }
  }
  
  // Check for Bible reference pattern
  if (isBibleReference(input)) {
    return { type: 'reference', reference: input.trim() };
  }
  
  // Check for topic words
  for (const topic of Object.keys(concordanceTopics)) {
    if (trimmed.includes(topic) && input.length < 100) {
      return { type: 'concordance', topic, query: input.trim() };
    }
  }
  
  // Default to general interpretation
  return { type: 'general', query: input.trim() };
}

// Function to get next Easter egg for a herald
function getNextEasterEgg(herald) {
  const heraldEggs = easterEggSystem[herald];
  if (!heraldEggs) return null;
  
  const currentEgg = heraldEggs.eggs[heraldEggs.counter];
  heraldEggs.counter = (heraldEggs.counter + 1) % heraldEggs.eggs.length;
  
  return currentEgg;
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
    // GET /api/heralds - return all heralds
    if (!req.query.herald) {
      return res.status(200).json({
        success: true,
        heralds: Object.values(heralds),
        totalHeralds: Object.keys(heralds).length
      });
    }
    
    // GET /api/heralds?herald=john - return specific herald
    const heraldName = req.query.herald.toLowerCase();
    const herald = heralds[heraldName];
    
    if (!herald) {
      return res.status(404).json({
        success: false,
        error: 'Herald not found',
        availableHeralds: Object.keys(heralds)
      });
    }
    
    return res.status(200).json({
      success: true,
      herald: herald
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { herald: heraldName, input, userId } = req.body;
    
    if (!heraldName || !input) {
      return res.status(400).json({
        success: false,
        error: 'herald and input are required'
      });
    }

    const herald = heralds[heraldName.toLowerCase()];
    if (!herald) {
      return res.status(404).json({
        success: false,
        error: 'Herald not found',
        availableHeralds: Object.keys(heralds)
      });
    }

    console.log(`${herald.name} received request: ${input}`);

    // =======================
    // CRITICAL FIX: DETECT MODE BEFORE PROCESSING!
    // =======================
    
    const mode = getHeraldMode(input);
    console.log(`Mode detected: ${mode}`);

    // Detect input type using enhanced detection
    const inputType = detectInputType(input);
    console.log(`Input type detected: ${inputType.type}`);
    
    // Handle different input types
    switch (inputType.type) {
      case 'easter_egg':
        // Get the next Easter egg for this herald
        const easterEgg = getNextEasterEgg(inputType.herald);
        if (easterEgg) {
          return res.status(200).json({
            success: true,
            type: 'easter_egg',
            heraldName: heralds[inputType.herald].name,
            response: easterEgg.text,
            easterEgg: {
              title: easterEgg.title,
              text: easterEgg.text,
              tone: easterEgg.tone,
              hebrewName: inputType.hebrewName,
              counter: easterEggSystem[inputType.herald].counter
            }
          });
        }
        break;
        
      case 'concordance':
        const verses = concordanceTopics[inputType.topic.toLowerCase()] || [];
        return res.status(200).json({
          success: true,
          type: 'concordance',
          heraldName: herald.name,
          topic: inputType.topic,
          concordance: verses.map(ref => ({ 
            reference: ref, 
            text: `Click to explore ${ref} with ${herald.name}` 
          })),
          totalVerses: verses.length
        });
        
      case 'reference':
      case 'general':
      default:
        // Handle Bible references and general queries with OpenAI
        let verseText = null;
        
        // Try to fetch Bible verse if it's a reference
        if (inputType.type === 'reference') {
          console.log('Detected Bible reference, attempting to fetch verse...');
          verseText = await fetchBibleVerse(inputType.reference);
        }

        // Check for OpenAI API key
        if (!process.env.OPENAI_API_KEY) {
          console.log('Missing OpenAI API key - using fallback response');
          return res.status(200).json({
            success: true,
            type: 'interpretation',
            heraldName: herald.name,
            response: `Friend, I'm having some connection troubles right now, but my heart is with you. Trust that God sees your question and will provide the answer you need.`,
            fallback: true,
            inputType: inputType.type,
            mode: mode,
            colors: herald.dominantColors
          });
        }

        // =======================
        // CRITICAL FIX: USE MODE-SPECIFIC SYSTEM PROMPT!
        // =======================
        
        const systemPrompt = generateSystemPrompt(herald, mode);
        
        // Prepare the user message
        let userMessage = `"${input}"`;
        if (verseText) {
          userMessage += ` Here is the verse text: "${verseText.text}" (${verseText.reference} - ${verseText.translation}).`;
        }
        userMessage += ` Please respond authentically as ${herald.name}.`;
        
        console.log('Calling OpenAI API...');

        // Call OpenAI API with MODE-SPECIFIC system prompt
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
                content: systemPrompt // MODE-SPECIFIC PROMPT!
              },
              {
                role: 'user',
                content: userMessage
              }
            ],
            max_tokens: 400,
            temperature: 0.8
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('OpenAI API Error:', errorData);
          throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        const message = data.choices[0]?.message?.content || `Friend, I'm having trouble responding right now, but know that you are heard and loved.`;

        console.log(`${herald.name} successfully generated response in ${mode} mode`);

        const result = {
          success: true,
          type: 'interpretation',
          heraldName: herald.name,
          response: message,
          inputType: inputType.type,
          mode: mode, // Include the detected mode in response
          colors: herald.dominantColors,
          colorProfile: herald.colorProfile
        };

        // Add verse text if available
        if (verseText) {
          result.verseText = verseText;
        }

        return res.status(200).json(result);
    }

  } catch (error) {
    console.error('API Error:', error);
    
    // Enhanced fallback response based on herald
    const herald = heralds[req.body.herald?.toLowerCase()] || heralds.peter;
    
    return res.status(200).json({
      success: true,
      type: 'interpretation',
      heraldName: herald.name,
      response: `Friend, I'm having some difficulty right now, but I want you to know that your heart and your questions matter. Trust in God's perfect timing.`,
      fallback: true,
      inputType: 'general',
      colors: herald.dominantColors
    });
  }
}

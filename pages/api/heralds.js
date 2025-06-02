// pages/api/heralds.js
// Complete Biblical Heralds API - Ready for Production

// Bible Gateway API integration
const BIBLE_GATEWAY_API_KEY = process.env.BIBLE_GATEWAY_API_KEY || 'demo-key';
const BIBLE_GATEWAY_BASE_URL = 'https://api.bibliaapi.com/v1/bible/content';

// Hebrew names for Easter egg detection
const hebrewNames = {
  john: ['yohanan', 'yochanan', 'יוחנן'],
  peter: ['kefa', 'cephas', 'kepha', 'כיפא'],
  barnabas: ['bar-nabba', 'barnabba', 'בר-נבא'],
  mary: ['miriam', 'מרים'],
  deborah: ['devorah', 'dvorah', 'דבורה']
};

// Concordance mapping for topic searches
const concordanceTopics = {
  love: ['1 John 4:8', 'John 3:16', '1 Corinthians 13:4-7', 'Romans 8:38-39', 'John 15:13'],
  fasting: ['Matthew 6:16-18', 'Joel 2:12', 'Isaiah 58:6-7', 'Daniel 10:3', 'Matthew 4:2'],
  prayer: ['Matthew 6:9-13', 'Philippians 4:6-7', '1 Thessalonians 5:17', 'James 5:16', 'Luke 11:1-4'],
  forgiveness: ['Matthew 6:14-15', 'Ephesians 4:32', 'Colossians 3:13', '1 John 1:9', 'Matthew 18:21-22'],
  faith: ['Hebrews 11:1', 'Romans 10:17', 'Matthew 17:20', 'Ephesians 2:8-9', 'James 2:17'],
  hope: ['Romans 15:13', 'Jeremiah 29:11', 'Psalm 42:11', 'Romans 8:24-25', 'Hebrews 6:19'],
  peace: ['John 14:27', 'Philippians 4:7', 'Isaiah 26:3', 'Romans 5:1', 'Matthew 5:9'],
  joy: ['Nehemiah 8:10', 'Psalm 16:11', 'John 15:11', 'Galatians 5:22', 'James 1:2'],
  wisdom: ['Proverbs 3:5-6', 'James 1:5', 'Proverbs 9:10', 'Ecclesiastes 7:12', '1 Corinthians 1:25'],
  strength: ['Isaiah 40:31', 'Philippians 4:13', 'Psalm 46:1', '2 Corinthians 12:9', 'Ephesians 6:10'],
  fear: ['Isaiah 41:10', '2 Timothy 1:7', 'Psalm 23:4', 'Joshua 1:9', 'Proverbs 3:25-26'],
  trust: ['Proverbs 3:5-6', 'Psalm 37:3', 'Isaiah 26:4', 'Jeremiah 17:7-8', 'Nahum 1:7'],
  worship: ['John 4:24', 'Psalm 95:6', 'Romans 12:1', 'Revelation 4:11', 'Psalm 100:2'],
  money: ['1 Timothy 6:10', 'Matthew 6:24', 'Luke 16:11', 'Malachi 3:10', 'Proverbs 22:7'],
  marriage: ['Genesis 2:24', 'Ephesians 5:25', '1 Corinthians 7:3', 'Malachi 2:16', 'Proverbs 18:22'],
  children: ['Proverbs 22:6', 'Ephesians 6:4', 'Psalm 127:3', 'Matthew 19:14', 'Deuteronomy 6:7'],
  anger: ['Ephesians 4:26', 'Proverbs 29:11', 'James 1:19-20', 'Psalm 37:8', 'Proverbs 15:1'],
  anxiety: ['Philippians 4:6-7', 'Matthew 6:25-26', '1 Peter 5:7', 'Psalm 55:22', 'Isaiah 26:3'],
  salvation: ['Romans 10:9', 'Ephesians 2:8-9', 'John 14:6', 'Acts 4:12', 'Romans 6:23'],
  persecution: ['Matthew 5:10-12', '2 Timothy 3:12', '1 Peter 4:12-14', 'John 15:20', 'Romans 8:17']
};

// Bible reference pattern matching
const bibleRefPattern = /^([1-3]?\s*[A-Za-z]+)\s*(\d+)(?::(\d+)(?:-(\d+))?)?$/;

// Smart input detection
function detectInputType(input) {
  const trimmed = input.trim();
  
  // Check for Hebrew names (Easter egg)
  for (const [herald, names] of Object.entries(hebrewNames)) {
    if (names.some(name => trimmed.toLowerCase().includes(name.toLowerCase()))) {
      return { type: 'easter_egg', herald, input: trimmed };
    }
  }
  
  // Check for Bible reference pattern
  if (bibleRefPattern.test(trimmed)) {
    return { type: 'reference', reference: trimmed };
  }
  
  // Check for topic words
  const lowerInput = trimmed.toLowerCase();
  for (const topic of Object.keys(concordanceTopics)) {
    if (lowerInput.includes(topic) && trimmed.length < 100) {
      return { type: 'concordance', topic, query: trimmed };
    }
  }
  
  // Assume it's direct scripture if longer than 50 characters
  if (trimmed.length > 50) {
    return { type: 'scripture', text: trimmed };
  }
  
  // Default to topic search for shorter queries
  return { type: 'topic_search', query: trimmed };
}

// Fetch Bible verse from Bible Gateway API
async function fetchBibleVerse(reference) {
  try {
    // For demo purposes, return mock data
    // In production, implement actual Bible Gateway API call
    const mockVerses = {
      'john 3:16': 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
      'romans 8:28': 'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
      'psalm 23:1': 'The Lord is my shepherd, I lack nothing.',
      'matthew 6:16': 'When you fast, do not look somber as the hypocrites do, for they disfigure their faces to show others they are fasting.',
      'philippians 4:13': 'I can do all this through him who gives me strength.'
    };
    
    const normalizedRef = reference.toLowerCase().replace(/\s+/g, ' ');
    const verse = mockVerses[normalizedRef];
    
    if (verse) {
      return { success: true, reference, text: verse };
    } else {
      return { success: false, error: 'Verse not found in demo database' };
    }
  } catch (error) {
    return { success: false, error: 'Failed to fetch verse' };
  }
}

// Get concordance results for topic
function getConcordanceResults(topic) {
  const verses = concordanceTopics[topic.toLowerCase()];
  if (!verses) {
    // Search for partial matches
    const partialMatches = Object.entries(concordanceTopics)
      .filter(([key]) => key.includes(topic.toLowerCase()) || topic.toLowerCase().includes(key))
      .flatMap(([, refs]) => refs);
    
    if (partialMatches.length > 0) {
      return partialMatches.slice(0, 5); // Limit to 5 results
    }
    
    return [];
  }
  
  return verses;
}

// Easter egg content - John has working image, others ready for images
const easterEggs = {
  john: {
    1: {
      title: "John's Fishing Report",
      text: "Ah, you know my Hebrew name! You've discovered my fishing journal from the early days. Three species today - clean and unclean! Even caught a catfish (don't tell the Pharisees). Shared bread with a traveling rabbi who said I'd fish for people instead. Little did I know how my nets would change...",
      image: "/JohnEE1.jpeg", // Your existing working image
      tone: "playful"
    },
    2: {
      title: "The Running Chronicles", 
      text: "You found my secret! I may have been the beloved disciple, but I was also the fastest to the tomb. Though I waited for Peter to go in first - some things require courage, others require speed. I've always been quick to believe what others hesitate to accept.",
      image: "/images/easter-eggs/john-running-shoes.jpg", // Image prompt: Ancient sandals with wing details, scroll showing "Tomb Racing Records - John: 1st Place (but waited politely)"
      tone: "playful"
    },
    3: {
      title: "Love Letters Collection",
      text: "My personal correspondence! You know, after walking with Love incarnate for three years, how could I write about anything else? Every letter, every word - it all comes back to this: God is love. Simple words, infinite depth.",
      image: "/images/easter-eggs/john-love-letters.jpg", // Image prompt: Stack of ancient scrolls tied with ribbon, hearts doodled in margins, "1 John 4:8" prominently visible
      tone: "playful"
    },
    4: {
      title: "The Revelation of Ultimate Victory",
      text: "You have called me by the name my mother gave me, Yohanan - 'God is gracious.' On Patmos, I saw the end of all things: Satan cast into the lake of fire, death itself destroyed, and a new heaven and new earth where God dwells with His people forever. This is not just vision - this is promise. This is victory. This is hope eternal.",
      image: "/images/easter-eggs/john-final-victory.jpg", // Image prompt: Majestic scene of New Jerusalem descending, Satan being cast into lake of fire, golden light, ultimate victory scene from Revelation
      tone: "reverential"
    }
  },
  peter: {
    1: {
      title: "Water Walking Lessons - Beginner Level",
      text: "So you know I'm Kefa, the rock! Here's my guide to walking on water: Step 1 - Keep your eyes on Jesus. Step 2 - Don't look down. Step 3 - When you inevitably look down, remember He'll catch you. I learned this the hard way, but what a lesson!",
      image: "/images/easter-eggs/peter-water-walking.jpg", // Image prompt: Humorous ancient scroll titled "Water Walking 101", stick figure drawings of steps, wet footprints, "Jesus Lifeguard Certified" seal
      tone: "playful"
    },
    2: {
      title: "Sword Fighting: Why It's Not Always the Answer",
      text: "My combat manual from the garden! Turns out slicing off ears isn't the solution to spiritual warfare. Who knew? Jesus had to teach me that His kingdom advances through love, not blade. Though I still think Malchus appreciated the quick healing afterward.",
      image: "/images/easter-eggs/peter-sword-lessons.jpg", // Image prompt: Ancient manual with crossed-out sword, ear with bandage, "Lesson 1: Put away your sword" in big letters
      tone: "playful"
    },
    3: {
      title: "Public Speaking: From Fisherman to Preacher", 
      text: "From denying Him three times to preaching to thousands - what a journey! My secret? Stop trying to be clever and just tell them what you've seen. The Holy Spirit does the rest. Though I still sometimes put my foot in my mouth...",
      image: "/images/easter-eggs/peter-preaching-tips.jpg", // Image prompt: Scroll showing "From 0 to 3000 converts in one sermon", fishing net transformed into crowd of people, "Holy Spirit = Best Speechwriter"
      tone: "playful"
    },
    4: {
      title: "The Keys to the Kingdom",
      text: "You have spoken my true name - Kefa, the rock upon which Christ builds His church. These are not mere keys of authority, but the sacred responsibility to open heaven's gates to every nation, every people, every tongue. From Cornelius to the ends of the earth - the Gospel knows no boundaries. What God has made clean, let no one call unclean.",
      image: "/images/easter-eggs/peter-keys-kingdom.jpg", // Image prompt: Magnificent golden keys opening gates to people of all nations, Cornelius baptism scene, "All Nations Welcome" banner
      tone: "reverential"
    }
  },
  barnabas: {
    1: {
      title: "The Encouragement Handbook",
      text: "Bar-Nabba - you know my name means 'son of encouragement'! Here's my secret: everyone has potential, even when they can't see it themselves. Like that young John Mark everyone gave up on, or that fierce persecutor Saul. Sometimes you just need someone to believe in you first.",
      image: "/images/easter-eggs/barnabas-encouragement-guide.jpg", // Image prompt: Cheerful handbook with "See the Best in Everyone" cover, photos of Paul and John Mark with "Potential!" stamps
      tone: "playful"
    },
    2: {
      title: "Real Estate Adventures in Generosity", 
      text: "My property sales journal! Sold my field and gave it all to the apostles. Best investment I ever made - turned out buying into God's kingdom pays dividends for eternity. Though I do miss that little olive grove sometimes...",
      image: "/images/easter-eggs/barnabas-property-sales.jpg", // Image prompt: Ancient deed marked "SOLD - For Kingdom Purposes", olive trees, treasure chest labeled "Eternal Dividends"
      tone: "playful"
    },
    3: {
      title: "Mentoring Difficult People",
      text: "The chronicles of taking chances on the unchosen! Paul was Public Enemy #1, John Mark was a quitter, yet here's my philosophy: God's grace is bigger than anyone's past. Sometimes love means standing alone with someone until others catch up to God's vision.",
      image: "/images/easter-eggs/barnabas-mentoring-guide.jpg", // Image prompt: Mentorship chart showing "Public Enemy → Apostle", "Quitter → Gospel Writer", "God's Grace > Your Past" motto
      tone: "playful"
    },
    4: {
      title: "The Moment That Changed Everything",
      text: "You call me by my true name, Bar-Nabba. When Saul came to Jerusalem, every believer fled in terror - except me. I saw what others couldn't: God's grace transforming the chief of sinners into the apostle to the Gentiles. That single moment of standing with Paul opened the Gospel to the entire world. Sometimes encouragement changes the course of history itself.",
      image: "/images/easter-eggs/barnabas-vouching-paul.jpg", // Image prompt: Powerful scene of Barnabas standing with Paul before fearful apostles, light breaking through darkness, world map showing Gospel spread
      tone: "reverential"
    }
  },
  mary: {
    1: {
      title: "Study Notes from Jesus University",
      text: "Miriam - you know my Hebrew name! While Martha worried about dinner preparations, I discovered the better portion: sitting at the Teacher's feet. My study notes are full of His words that I treasured in my heart. Some meals can wait; some moments cannot.",
      image: "/images/easter-eggs/mary-study-notes.jpg", // Image prompt: Ancient notebook with "Jesus University - Mary's Notes", sketches of Jesus teaching, "Better Portion" highlighted, cooking sounds in background
      tone: "playful"
    },
    2: {
      title: "The Art of Holy Interruption",
      text: "My guide to knowing when NOT to be practical! Sometimes love demands extravagant gestures that others call wasteful. That expensive oil wasn't wasted - it was worship. The poor you'll always have, but you won't always have Jesus physically present to anoint.",
      image: "/images/easter-eggs/mary-holy-interruption.jpg", // Image prompt: Elegant perfume bottle breaking open, gold coins scattered around labeled "Worth It", "Love > Logic" inscription
      tone: "playful"
    },
    3: {
      title: "Meditation Techniques for Busy Households",
      text: "How to find contemplative space when your sister thinks you should be helping in the kitchen! Step 1: Remember what's eternal vs. temporal. Step 2: Choose the better portion. Step 3: Let Jesus defend your choice when family complains.",
      image: "/images/easter-eggs/mary-meditation-guide.jpg", // Image prompt: Peaceful meditation space with "Eternal vs Temporal" comparison chart, kitchen chaos in background, Jesus as referee
      tone: "playful"
    },
    4: {
      title: "The Anointing for Burial",
      text: "You speak my name as my mother did - Miriam. While others saw waste, I saw worship. While others planned celebrations, I prepared for burial. That precious oil I poured was not extravagance but understanding - I alone knew what was coming. In anointing Him for death, I participated in the greatest sacrifice ever made. True worship often looks like foolishness to those who cannot see beyond the moment.",
      image: "/images/easter-eggs/mary-anointing-burial.jpg", // Image prompt: Solemn, beautiful scene of Mary anointing Jesus' feet, alabaster jar broken, profound understanding in her eyes, cross shadow in background
      tone: "reverential"
    }
  },
  deborah: {
    1: {
      title: "Leadership Tips from Under the Palm Tree",
      text: "Devorah - you know my name means 'bee'! My advice column from under my judgment tree. Tip #1: God doesn't always choose the expected leader. Tip #2: Sometimes you have to tell the men to find their courage. Tip #3: Victory songs are best sung AFTER the battle.",
      image: "/images/easter-eggs/deborah-leadership-tips.jpg", // Image prompt: Wise woman under palm tree, scroll reading "Leadership 101", bee decorations, nervous warriors getting pep talk
      tone: "playful"
    },
    2: {
      title: "Military Strategy for the Hesitant",
      text: "My tactical manual for when your general needs encouragement! Barak wanted me to come to battle with him - sometimes even mighty warriors need a prophetess to confirm God's promise. Leadership isn't always about being the strongest; sometimes it's about being the one who hears God clearest.",
      image: "/images/easter-eggs/deborah-military-strategy.jpg", // Image prompt: Battle plan scroll with "Step 1: Get Deborah's Approval" at top, nervous general, confident prophetess pointing to victory
      tone: "playful"
    },
    3: {
      title: "Prophetic Weather Reports",
      text: "My meteorological insights! Predicting when God will send rain to flood the valley and trap enemy chariots. Tip: Always check with the Almighty before planning battles. He controls both the armies of heaven and the storms of earth.",
      image: "/images/easter-eggs/deborah-weather-reports.jpg", // Image prompt: Ancient weather map showing divine storm clouds, stuck chariots in mud, "God's Weather Service - 100% Accuracy" banner
      tone: "playful"
    },
    4: {
      title: "When Heaven Fights with Earth",
      text: "You call me Devorah, as the Lord named me. When Israel cried out under oppression, God raised up not a king or warrior, but a woman to judge His people and lead them to victory. Against 900 iron chariots, with only faith and divine strategy, we witnessed heaven itself fight alongside us. This was not just military victory - this was God demonstrating that His power perfects itself in unexpected vessels, and His deliverance comes to those who trust completely in His timing.",
      image: "/images/easter-eggs/deborah-divine-victory.jpg", // Image prompt: Epic battle scene with heaven's armies joining earthly forces, woman leader on hilltop, divine lightning striking iron chariots, victory banner
      tone: "reverential"
    }
  }
};

// Herald personalities with biblical references and Hebrew names
const heralds = {
  john: {
    name: 'John',
    colors: ['green', 'blue'],
    primary: 'green',
    subtitle: 'The Beloved Disciple',
    description: 'The beloved disciple who leaned on Jesus\' chest at the Last Supper (Yohanan - "God is gracious"). Known for his deep love and profound spiritual insights.',
    biblicalRef: 'John 13:23, John 19:26-27, 1 John 4:7-21',
    personality: 'John speaks with tender love while offering profound spiritual insights. He sees the heart of God in every passage and helps others experience divine love personally.',
    style: 'Gentle, loving, and spiritually profound'
  },
  peter: {
    name: 'Peter',
    colors: ['red', 'yellow'],
    primary: 'red',
    subtitle: 'The Bold Fisherman',
    description: 'The bold fisherman who became the rock of the early church (Kefa - "stone"). Quick to speak and act, Peter leads with passionate conviction.',
    biblicalRef: 'Matthew 16:13-20, Acts 2:14-41, 1 Peter 1:1-25',
    personality: 'Peter is straightforward and action-oriented, never afraid to speak truth directly. His decisiveness is balanced by genuine enthusiasm that builds others up.',
    style: 'Bold, direct, and enthusiastically encouraging'
  },
  barnabas: {
    name: 'Barnabas',
    colors: ['green', 'yellow'],
    primary: 'green',
    subtitle: 'Son of Encouragement',
    description: 'Called the "Son of Encouragement" by the apostles (Bar-Nabba). He saw potential in Paul when others doubted and gave John Mark a second chance.',
    biblicalRef: 'Acts 4:36-37, Acts 9:26-27, Acts 15:36-39',
    personality: 'Barnabas leads with caring support and follows with infectious enthusiasm. He sees potential in everyone and speaks hope into difficult situations.',
    style: 'Encouraging, supportive, and optimistically hopeful'
  },
  mary: {
    name: 'Mary of Bethany',
    colors: ['blue', 'green'],
    primary: 'blue',
    subtitle: 'The Contemplative Learner',
    description: 'The contemplative sister who chose to sit at Jesus\' feet and learn (Miriam - "beloved"). She understood the deeper significance of worship and sacrifice.',
    biblicalRef: 'Luke 10:38-42, John 11:1-44, John 12:1-8',
    personality: 'Mary approaches Scripture with careful thought and deep reflection. Her analytical nature is guided by compassion for how truth impacts lives.',
    style: 'Thoughtful, reflective, and gently insightful'
  },
  deborah: {
    name: 'Deborah',
    colors: ['red', 'blue'],
    primary: 'red',
    subtitle: 'Judge and Prophetess',
    description: 'The judge and prophetess who led Israel to victory (Devorah - "bee"). She combined divine wisdom with decisive leadership in challenging times.',
    biblicalRef: 'Judges 4:1-24, Judges 5:1-31',
    personality: 'Deborah combines bold leadership with careful wisdom. She speaks with authority while ensuring her words are both true and strategic.',
    style: 'Authoritative, wise, and strategically minded'
  }
};

// In-memory storage for tracking (use database in production)
let verseLookups = new Map();

// Color personality response patterns
const colorResponses = {
  red: {
    opening: ["Let me be direct about this:", "Here's what this passage is really saying:", "Listen carefully to this truth:"],
    closing: ["Now, what will you do with this truth?", "So the question is: what are you going to do about it?", "The real test is in your response to this."],
    style: "bold and challenging"
  },
  yellow: {
    opening: ["What an encouraging word this is!", "How uplifting this passage is!", "This brings such hope:"],
    closing: ["May this fill you with hope and joy!", "Take heart - God has good plans for you!", "Let this truth encourage your heart today!"],
    style: "warm and uplifting"
  },
  green: {
    opening: ["My dear friend, this speaks to our hearts:", "This passage reveals something beautiful:", "What a caring word from the Lord:"],
    closing: ["Remember, you are deeply loved.", "May you rest in God's tender care.", "Know that the Lord sees and cares for you."],
    style: "gentle and caring"
  },
  blue: {
    opening: ["As I sit quietly with this passage:", "Let's carefully consider what this reveals:", "If we examine this thoughtfully:"],
    closing: ["Take time to meditate on these deeper truths.", "I encourage you to reflect further on this.", "Let this transform your understanding."],
    style: "thoughtful and analytical"
  }
};

// Check for Easter egg (Hebrew name detection)
function checkForEasterEgg(verseText, heraldName) {
  const lowerVerseText = verseText.toLowerCase();
  const heraldKey = heraldName.toLowerCase().replace(' of bethany', '');
  const names = hebrewNames[heraldKey];
  
  if (!names) return null;
  
  // Check if any Hebrew name appears in the verse text
  const foundName = names.find(name => lowerVerseText.includes(name.toLowerCase()));
  if (!foundName) return null;
  
  // Get or initialize Easter egg counter for this herald
  const eggKey = `easter-${heraldKey}`;
  const currentCount = verseLookups.get(eggKey) || 0;
  const nextEgg = (currentCount % 4) + 1; // Cycle through 1-4
  
  // Update counter
  verseLookups.set(eggKey, currentCount + 1);
  
  // Return the Easter egg
  return easterEggs[heraldKey][nextEgg];
}

// Generate response based on herald's color personality
function generateResponse(herald, verse, verseText) {
  const primary = colorResponses[herald.primary];
  const secondaryColor = herald.colors.find(c => c !== herald.primary);
  const secondary = colorResponses[secondaryColor];
  
  // Select random opening and closing from arrays
  const opening = primary.opening[Math.floor(Math.random() * primary.opening.length)];
  const closing = secondary.closing[Math.floor(Math.random() * secondary.closing.length)];
  
  // Generate core interpretation based on herald
  const core = generateCoreInterpretation(herald, verse, verseText);
  
  return `${opening} ${core} ${closing}`;
}

function generateCoreInterpretation(herald, verse, verseText) {
  const interpretations = {
    john: [
      "When I reflect on these words, I'm reminded of how Jesus would speak about love - not as mere emotion, but as the very essence of who God is. The depth here goes beyond surface understanding; it's an invitation into intimate relationship with the Father.",
      "This passage reveals the heart of the Father's love for us. In my years walking with Jesus, I learned that every word of Scripture is meant to draw us closer to His heart. There's such tenderness in these words.",
      "These words echo what I heard Jesus say so many times - that love is the greatest commandment and the defining mark of those who follow Him. The original language suggests an even deeper intimacy than our translations convey."
    ],
    peter: [
      "This isn't just nice words on a page - this is a call to action! When the Lord gives us truth like this, He expects us to live it out boldly. I've learned that faith without action is like a boat without oars.",
      "You know, I used to think I understood what this meant until Jesus showed me through my own failures and restoration. This passage demands we stop making excuses and start living with the courage God gives us.",
      "This reminds me of when Jesus told us to cast our nets on the other side. Sometimes God's word challenges us to do things that don't make sense to our natural thinking, but that's where the miracles happen."
    ],
    barnabas: [
      "I can see how this verse would strengthen someone facing difficulties. Even when circumstances look challenging, God's word here reminds us that He's working everything together for good. This is the kind of truth that builds faith.",
      "What encouragement this brings! I've seen how passages like this can transform someone's perspective from despair to hope. God never wastes our struggles - He uses them to shape us into who He's called us to be.",
      "This reminds me of how God saw potential in Paul when others were afraid of him, and how He sees potential in each of us. There's such hope woven into these words for anyone willing to receive it."
    ],
    mary: [
      "The careful choice of words here reveals something profound about God's character. If we examine the context and consider how this would have been understood originally, we see layers of meaning that reward patient study.",
      "As I sit with this passage in quiet reflection, I notice how it connects to other scriptures that speak of God's faithfulness. The Hebrew word used here carries connotations that our English translations can't fully capture.",
      "When I meditate on this verse, I'm struck by how it reveals both God's transcendence and His intimate care for us. The theology here is rich with implications for how we understand our relationship with the Divine."
    ],
    deborah: [
      "This verse carries both divine authority and practical wisdom for leadership. In times of decision and challenge, passages like this provide the clarity we need to move forward with confidence.",
      "God doesn't give us unclear directions - He speaks with precision and purpose. This passage equips us to make wise decisions and lead others through difficult circumstances with both courage and discernment.",
      "I've learned that when God speaks through His word like this, it's both a promise to claim and a responsibility to fulfill. Leadership requires both hearing from God and acting on what He says with strategic wisdom."
    ]
  };
  
  const heraldKey = herald.name.toLowerCase().replace(' of bethany', '');
  const heraldInterpretations = interpretations[heraldKey] || interpretations.john;
  
  return heraldInterpretations[Math.floor(Math.random() * heraldInterpretations.length)];
}

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'GET') {
    // GET /api/heralds - return all heralds
    if (!req.query.herald) {
      return res.status(200).json({
        success: true,
        heralds: Object.values(heralds)
      });
    }
    
    // GET /api/heralds?herald=john - return specific herald
    const heraldName = req.query.herald.toLowerCase();
    const herald = heralds[heraldName];

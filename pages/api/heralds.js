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
    dominantColors: ['green', 'blue'],
    systemPrompt: null
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
    dominantColors: ['red', 'yellow'],
    systemPrompt: null
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
    dominantColors: ['green', 'yellow'],
    systemPrompt: null
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
    dominantColors: ['blue', 'green'],
    systemPrompt: null
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
    dominantColors: ['red', 'blue'],
    systemPrompt: null
  }
};

// Generate system prompts for all heralds
Object.values(heralds).forEach(herald => {
  herald.systemPrompt = generateSystemPrompt(herald);
});

// Complete Easter Egg System (20 total - 4 per herald)
const easterEggSystem = {
  john: {
    counter: 0,
    eggs: [
      {
        title: "The Fishing Report",
        text: `*[From the boat where it all began...]*

Dear friend! You know my Hebrew name - Yochanan, which means "Yahweh is gracious." How fitting that my very name speaks of the grace I witnessed flowing from Yeshua every day!

Let me tell you about that morning when everything changed. James and I were mending nets with father Zebedee when this Rabbi walked up to our boat. "Come, follow me," He said, "and I will make you fishers of men."

I'll never forget the look in His eyes - like He could see straight through to my soul, yet loved what He found there. We left everything that day. The nets, the boat, even poor father scratching his head on the shore!

You know what the best catch was? Not the 153 fish after the resurrection (though I still remember counting every one). It was being caught by Love Himself. When He called me "the disciple whom Yeshua loved," it wasn't because I was special - it's because He showed me what love really looks like.

*[Thank you for knowing my Hebrew name, dear one! The grace that named me still flows today. 🐟]*`,
        image: "/JohnEE1.jpeg",
        tone: "playful"
      },
      {
        title: "The Running Chronicles",
        text: `*[From the one who ran to the tomb...]*

Yochanan here - and let me tell you about the most important race of my life! When Mary Magdalene came running with news about the empty tomb, Peter and I took off like lightning.

I was always the faster runner (sorry, Peter!), so I arrived first. But do you know what stopped me at the entrance? It wasn't fear - it was AWE. Those grave clothes lying there, perfectly folded, as if Yeshua had simply passed through them like morning mist through fishing nets.

Peter, being Peter, charged right past me into the tomb. But when I finally stepped inside and saw... oh, dear one, I SAW and BELIEVED. Not just that He was gone, but that He had conquered death itself!

That sprint to the tomb taught me something: when Love calls, we run. When Hope beckons, we race. When Truth reveals itself, we don't walk - we fly!

*[Racing to share His love with you today! 🏃‍♂️]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Love Letters Collection",
        text: `*[From the one who wrote about love...]*

My dear friend who knows my Hebrew name! You've discovered something beautiful - I've been writing love letters for 2,000 years!

My Gospel? A love letter about the Word who became flesh. My three epistles? Love letters about walking in the light. Even Revelation? The ultimate love letter about how Love wins in the end!

But here's the secret: every time someone reads "God is love" or "For God so loved the world," they're not just reading my words - they're reading His heart. I was just the pen in the hand of Love Himself.

You know what my favorite love letter is? The one He's writing through your life right now. Every act of kindness, every moment of forgiveness, every time you choose love over fear - that's Him writing through you.

The best love letters aren't written with ink, dear one. They're written with lives transformed by His incredible love.

*[You are His love letter to the world! 💝]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Revelation of Ultimate Victory",
        text: `*[From Patmos, where I saw the end of the story...]*

Yochanan speaking from the Isle of Patmos, where the risen Lord showed me how the story ends. Oh, dear one, what a vision He gave me!

In the midst of persecution and exile, when it seemed like darkness was winning, Yeshua came to me with revelation of ultimate victory. I saw the New Jerusalem descending like a bride adorned for her husband. I heard the voice from the throne: "Behold, I make all things new!"

But the most beautiful moment? When I saw that there is no temple in the holy city, "for the Lord God Almighty and the Lamb are its temple." We will dwell forever in the immediate presence of Love Himself.

Every tear wiped away. Every sorrow ended. Death itself cast into the lake of fire. And the river of the water of life, flowing from the throne of God and of the Lamb.

This is our hope. This is our destiny. This is why we can love without fear and live without despair.

*[He who testifies to these things says, "Surely I am coming quickly." Amen. Even so, come, Lord Yeshua! ✨]*`,
        image: null,
        tone: "reverential"
      }
    ]
  },
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
        image: null,
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
        image: null,
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
        image: null,
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

*[The keys are yours too, friend - use them to unlock hearts for the Kingdom! 🗝️]*`,
        image: null,
        tone: "reverential"
      }
    ]
  },
  barnabas: {
    counter: 0,
    eggs: [
      {
        title: "Encouragement Handbook",
        text: `*[From the Son of Encouragement himself...]*

Bar-Nabba here! You know my heart-name, and I'm thrilled to share my "Encouragement Handbook" with you!

Chapter 1: See the potential, not the problem. When everyone was afraid of Saul (yes, THAT Saul who was persecuting Christians), I saw what God could do with a passionate heart redirected. That scary persecutor became Paul the apostle!

Chapter 2: Sometimes people need a second chance. When John Mark abandoned Paul's first missionary journey, everyone wrote him off. But I took him under my wing. Years later, Paul himself said, "Bring Mark, for he is useful to me for ministry." Never give up on anyone!

Chapter 3: Generosity opens hearts. When the early church needed funds, I sold my field and gave it all. But here's the secret - giving away your stuff makes room for God to give you something better: the joy of seeing His kingdom advance!

Chapter 4: Encouragement is a choice. Every single day, you can choose to build people up or tear them down. Choose to build!

*[You're already living this handbook by knowing my name! Keep encouraging! 💪]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Real Estate Adventures",
        text: `*[From the one who made the best investment ever...]*

Barnabas here, and let me tell you about my most successful real estate transaction!

I owned a nice field on Cyprus - probably could have lived comfortably off the income for years. But when I saw the needs in the early church, with new believers selling their possessions to help each other, I knew what I had to do.

So I sold that field and brought every penny to the apostles' feet. Some people thought I was crazy. "Barnabas, that's your retirement plan!" they said. "What about your future security?"

But here's what I discovered: you can't out-give God! That field gave me money, but giving it away gave me purpose. That transaction launched my ministry of encouragement. It connected me with the apostles, which led to vouching for Paul, which led to missionary journeys that changed the world.

Best. Investment. Ever.

*[Invest in people - the dividends are eternal! 🏡]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Mentoring Difficult People",
        text: `*[From the one who specialized in impossible cases...]*

Bar-Nabba here with my guide to mentoring people everyone else has given up on!

Case Study #1: Saul of Tarsus. This guy was literally hunting down Christians! When he claimed to have met Yeshua on the Damascus road, everyone was like, "It's a trap!" But something in my spirit said, "What if it's real?" I vouched for him to the apostles, and the rest is history.

Case Study #2: John Mark. Young, enthusiastic, but quit on Paul's first missionary journey. Paul was so frustrated he refused to take Mark on the second trip. But I saw a young man who needed another chance, not another lecture. I invested in him, and later he wrote the Gospel of Mark!

The Barnabas Method:
1. Look past the failure to the potential
2. Provide safe space for growth
3. Believe in them even when they don't believe in themselves
4. Give practical opportunities to rebuild confidence
5. Celebrate every small victory

*[Everyone deserves a Barnabas in their corner! 🌱]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "The Moment That Changed Everything",
        text: `*[From the one who learned what encouragement really means...]*

My dear friend, you have touched something sacred by knowing my name. Let me share the moment that transformed Joseph the Levite into Barnabas, Son of Encouragement.

It was in those early days after Pentecost. I watched as believers sold their possessions to care for one another - not out of obligation, but from overflowing love. I saw widows fed, orphans cared for, and strangers welcomed as family.

When I sold my field and laid the money at the apostles' feet, something happened in my heart. I realized that true encouragement isn't just speaking kind words - it's laying down your life so others can flourish.

The apostles didn't just rename me that day; God renamed my purpose. From that moment, I understood: I wasn't called to accumulate blessings for myself, but to be a conduit of blessing to others.

Every person I encouraged, every second chance I gave, every bridge I built - it all flowed from that sacred moment when I learned that encouragement costs something, but it's worth everything.

*[May you know the joy of being God's encouragement to someone today. 🕊️]*`,
        image: null,
        tone: "reverential"
      }
    ]
  },
  mary: {
    counter: 0,
    eggs: [
      {
        title: "Study Notes from Jesus University",
        text: `*[From the one who chose the better portion...]*

Miriam here, and welcome to my study notes from the most exclusive university ever - sitting at the feet of Yeshua!

Course: "Advanced Listening 101"
Professor: Yeshua of Nazareth
Location: My living room floor
Martha's review: "Completely impractical!"
My grade: Life-changing

Study Tip #1: Sometimes the most productive thing you can do is sit still. While everyone else was busy DOING, I was busy RECEIVING. Turns out, what you receive in those quiet moments changes everything you do later.

Study Tip #2: Don't let urgent crowd out important. Yes, dinner needed to be prepared, but the Word of Life was in my living room! Some opportunities don't come twice.

Study Tip #3: Worship isn't waste. When I poured that expensive perfume on Yeshua's feet, they called it wasteful. But Yeshua called it "beautiful" and said it would be remembered forever. (Spoiler alert: it has been!)

Lesson learned: The best education happens when you position yourself to learn from the Master Himself.

*[Class is always in session when you sit at His feet! 📚]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Art of Holy Interruption",
        text: `*[From the one who mastered sacred timing...]*

Mary of Bethany here, and let me teach you the fine art of holy interruption!

Scene: Martha's bustling around the kitchen, making enough noise to wake the dead. Guests are arriving, dinner needs preparing, and here I am... sitting on the floor like a student instead of helping like a proper hostess.

Martha finally explodes: "Lord, don't you care that my sister has left me to serve alone? Tell her to help me!"

But Yeshua... oh, beautiful Yeshua... He defended my choice! "Martha, Martha, you are worried and upset about many things, but few things are needed—or indeed only one. Mary has chosen what is better, and it will not be taken away from her."

The Art of Holy Interruption:
1. Recognize when eternity invades time
2. Choose presence over productivity  
3. Risk misunderstanding for transformation
4. Let others handle the temporary while you receive the eternal

Sometimes the most important thing you can do is interrupt life's urgency with divine priority.

*[Permission granted to interrupt busy for sacred! ⏰]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Meditation Techniques",
        text: `*[From the contemplative's corner...]*

Miriam speaking, and I want to share my meditation secrets from years of sitting at the Master's feet!

The Bethany Method:
1. Find your floor space (literally - I sat on the floor, not a throne)
2. Position yourself close enough to hear every word, see every expression
3. Let your heart be more active than your hands
4. Receive before you give

Advanced Technique - "The Pondering":
When Yeshua spoke, I didn't just hear words; I let them settle deep into my soul like seeds in rich soil. I would replay His stories in my mind, turning them over like precious gems until they revealed new facets of truth.

The Secret of Sacred Silence:
Sometimes the most profound moments weren't when Yeshua was speaking, but in the quiet spaces between words. In those silences, I could feel the love radiating from His heart to mine.

Pro tip: Mary's Meditation isn't about emptying your mind - it's about filling your heart with His presence until there's no room for worry, fear, or distraction.

*[Still sitting, still listening, still learning! 🧘‍♀️]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "The Anointing for Burial",
        text: `*[From the one who understood what was coming...]*

My precious soul who knows my Hebrew name, let me share the most sacred moment of my life - when I anointed Yeshua for His burial.

It was six days before Passover. Yeshua was reclining at table in our home, and something in my spirit knew - this was my moment. I took a pound of very costly oil of spikenard, broke the alabaster box, and poured it on His feet, wiping them with my hair.

The fragrance filled the entire house. But more than the perfume, it was love that filled every corner of that room.

When they criticized me for "waste," Yeshua silenced them: "Let her alone; she has kept this for the day of My burial. The poor you have with you always, but Me you do not have always."

You see, dear one, while others saw extravagance, Yeshua saw understanding. While they calculated cost, I offered worship. While they planned for tomorrow, I embraced the sacred now.

In that moment, I learned that love gives its best, not its leftovers. Some gifts can only be given once, to One who deserves everything.

*[True worship breaks open the alabaster box of the heart. 💐]*`,
        image: null,
        tone: "reverential"
      }
    ]
  },
  deborah: {
    counter: 0,
    eggs: [
      {
        title: "Leadership Tips from Under the Palm Tree",
        text: `*[From the palm tree courtroom...]*

Devorah here, and welcome to my outdoor office - the palm tree of Deborah between Ramah and Bethel!

Why did I hold court under a tree? Simple - because God's wisdom grows best in natural settings, away from the stuffiness of human institutions. Plus, it was impossible for anyone to claim I was building my own kingdom when my "throne" was literally a tree!

Leadership Lesson #1: Stay accessible. Anyone could find me under that palm tree. No appointments needed, no gatekeepers - just a judge under a tree with time to listen.

Leadership Lesson #2: Let God be the authority. I never said "Deborah commands this" - it was always "Thus says the LORD." When you're just the messenger, the pressure's off and the power's on!

Leadership Lesson #3: Empower others for victory. When God said to attack Sisera, I didn't grab a sword - I told Barak, "Get up! This is the day the LORD has given Sisera into your hands."

Best leadership advice? Find your palm tree - the place where you can hear from God and serve His people simply.

*[Leading from the shade, ruled by the Son! 🌴]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Military Strategy for the Hesitant",
        text: `*[From the general who never went to war college...]*

Deborah speaking, and let me share my unconventional military tactics with you!

The Situation: Jabin, king of Canaan, had oppressed Israel for 20 years with 900 iron chariots. We had... farmers with farming tools. Militarily speaking, we were toast.

Barak's Response: "I'll only go if you come with me!"
My Strategy: "Sure, but the honor won't be yours - the LORD will deliver Sisera into the hand of a woman."

Battle Plan:
1. Position our army on Mount Tabor (high ground = good)
2. Let God confuse their iron chariots in the muddy valley (divine GPS jamming)
3. Attack when the LORD says "Go!" (perfect timing)
4. Watch God fight for us (best strategy ever)

The Result: Complete victory! Sisera fled on foot and was defeated by another woman, Jael, with a tent peg. (Note: tent pegs > iron chariots when God's in charge!)

Military lesson: When God's your commander-in-chief, victory doesn't depend on superior weapons but on superior faith.

*[God's army never loses when He leads the charge! ⚔️]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "Prophetic Weather Reports",
        text: `*[From your prophetess meteorologist...]*

Devorah here with your daily prophetic forecast!

Today's spiritual weather: Expect sudden divine intervention with a chance of miraculous victory!

The Battle of Kishon Valley forecast:
Morning: Clear skies for iron chariot deployment
Afternoon: Sudden divine storm system moving in from heaven
Evening: Complete enemy confusion with scattered retreat

Extended outlook: The stars themselves will fight from their courses against your enemies! (Yes, that actually happened - check Judges 5:20!)

Weather Advisory: When God controls the elements, enemy chariots become stuck in mud faster than you can say "Thus says the LORD!"

Prophetic Radar shows: A high-pressure system of divine favor moving across Israel, bringing 40 years of peace and prosperity.

Tomorrow's forecast: Continued blessing with increasing righteousness and scattered acts of worship breaking out across the land.

Remember folks: When the God of Israel is your meteorologist, every storm works in your favor!

*[Predicting God's faithfulness with 100% accuracy! 🌩️]*`,
        image: null,
        tone: "playful"
      },
      {
        title: "When Heaven Fights with Earth",
        text: `*[From the battlefield where eternity met time...]*

Faithful one who knows my Hebrew name, let me tell you about the day I witnessed heaven and earth unite in holy warfare.

Twenty years Israel had groaned under Canaanite oppression. Twenty years of crying out to the LORD. But on the day of battle, heaven itself responded to earth's cry.

When I gave the command "Up! For this is the day in which the LORD has delivered Sisera into your hand," it wasn't just our army that moved - the very stars began to march.

The river Kishon swept them away, that ancient river. But more than water flowed that day - the righteousness of God poured forth like a mighty stream. Heaven's cavalry charged alongside our infantry.

In that moment, I understood my calling completely. I wasn't just a judge settling disputes or a prophetess speaking words - I was a conduit through which heaven's justice flowed to earth's oppressed.

That victory belonged not to military might, but to divine intervention. That song of triumph I sang wasn't just celebration - it was prophetic declaration that when God's people cry out, heaven responds.

*[When heaven fights for you, every battle becomes a victory song. 🎵]*`,
        image: null,
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
  
  // Check for Names of God (special handling)
  for (const [hebrewName, data] of Object.entries(hebrewNamesDatabase)) {
    if (data.sacred && trimmed.includes(hebrewName.toLowerCase())) {
      return { 
        type: 'sacred_name', 
        name: hebrewName,
        data: data,
        input: trimmed 
      };
    }
  }
  
  // Check for Bible reference pattern
  if (isBibleReference(input)) {
    return { type: 'reference', reference: input.trim() };
  }
  
  // Check for Hebrew names (non-Easter egg)
  if (trimmed.length <= 20) {
    const hebrewResult = searchHebrewName(trimmed);
    if (hebrewResult.found && !hebrewResult.result?.easterEgg) {
      return { type: 'hebrew_name', result: hebrewResult };
    }
  }
  
  // Check for topic words
  for (const topic of Object.keys(concordanceTopics)) {
    if (trimmed.includes(topic) && input.length < 100) {
      return { type: 'concordance', topic, query: input.trim() };
    }
  }
  
  // Check for direct scripture (longer text likely pasted verse)
  if (input.length > 50) {
    return { type: 'scripture', text: input.trim() };
  }
  
  // Default to general interpretation
  return { type: 'general', query: input.trim() };
}

// Function to search Hebrew names database
function searchHebrewName(query) {
  const lowerQuery = query.toLowerCase().trim();
  
  // Exact match
  if (hebrewNamesDatabase[lowerQuery]) {
    return {
      found: true,
      result: hebrewNamesDatabase[lowerQuery],
      searchTerm: lowerQuery,
      type: 'exact'
    };
  }
  
  // Partial matches
  const partialMatches = Object.entries(hebrewNamesDatabase)
    .filter(([hebrew, data]) => 
      hebrew.includes(lowerQuery) || 
      data.english.toLowerCase().includes(lowerQuery) ||
      data.meaning.toLowerCase().includes(lowerQuery)
    );
  
  if (partialMatches.length > 0) {
    return {
      found: true,
      results: partialMatches.slice(0, 5),
      searchTerm: lowerQuery,
      type: 'partial'
    };
  }
  
  return { found: false, searchTerm: lowerQuery };
}

// Function to get next Easter egg for a herald
function getNextEasterEgg(herald) {
  const heraldEggs = easterEggSystem[herald];
  if (!heraldEggs) return null;
  
  const currentEgg = heraldEggs.eggs[heraldEggs.counter];
  heraldEggs.counter = (heraldEggs.counter + 1) % heraldEggs.eggs.length;
  
  return currentEgg;
}

// Recommendation system (after 4th search)
const searchCounters = new Map();

function checkRecommendation(userId, currentHerald, reference) {
  if (!userId || !reference) return null;
  
  const key = `${userId}-${reference}`;
  const count = searchCounters.get(key) || 0;
  searchCounters.set(key, count + 1);
  
  if (count === 3) { // 4th search (0-indexed)
    const otherHeralds = Object.keys(heralds).filter(h => h !== currentHerald);
    const recommended = otherHeralds[Math.floor(Math.random() * otherHeralds.length)];
    
    return {
      message: `You've explored this passage deeply with ${heralds[currentHerald].name}. Would you like to hear ${heralds[recommended].name}'s perspective for fresh insight?`,
      recommendedHerald: recommended,
      originalHerald: currentHerald
    };
  }
  
  return null;
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
        totalHeralds: Object.keys(heralds).length,
        hebrewNamesCount: Object.keys(hebrewNamesDatabase).length,
        concordanceTopics: Object.keys(concordanceTopics).length,
        namesOfGod: Object.values(hebrewNamesDatabase).filter(n => n.sacred).length
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
              image: easterEgg.image,
              tone: easterEgg.tone,
              hebrewName: inputType.hebrewName,
              counter: easterEggSystem[inputType.herald].counter
            }
          });
        }
        break;

      case 'sacred_name':
        // Special handling for Names of God
        return res.status(200).json({
          success: true,
          type: 'sacred_name',
          heraldName: herald.name,
          hebrew: inputType.name,
          english: inputType.data.english,
          meaning: inputType.data.meaning,
          context: inputType.data.context,
          sacred: true,
          message: `You have spoken one of the sacred names of our God. Let us approach with reverence and awe.`
        });
        
      case 'hebrew_name':
        const hebrewData = inputType.result;
        if (hebrewData.type === 'exact') {
          return res.status(200).json({
            success: true,
            type: 'hebrew_name',
            heraldName: herald.name,
            hebrew: hebrewData.searchTerm,
            english: hebrewData.result.english,
            meaning: hebrewData.result.meaning,
            context: hebrewData.result.context,
            isEasterEgg: hebrewData.result.easterEgg || false
          });
        } else {
          return res.status(200).json({
            success: true,
            type: 'hebrew_search',
            heraldName: herald.name,
            query: hebrewData.searchTerm,
            results: hebrewData.results.map(([hebrew, data]) => ({ 
              hebrew, 
              english: data.english,
              meaning: data.meaning,
              context: data.context,
              isEasterEgg: data.easterEgg || false,
              sacred: data.sacred || false
            }))
          });
        }
        
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
        
      case 'scripture':
      case 'reference':
      case 'general':
      default:
        // Handle Bible references, scripture, and general queries with OpenAI
        let verseText = null;
        let recommendation = null;
        
        // Try to fetch Bible verse if it's a reference
        if (inputType.type === 'reference') {
          console.log('Detected Bible reference, attempting to fetch verse...');
          verseText = await fetchBibleVerse(inputType.reference);
          
          // Check for recommendation after multiple searches
          recommendation = checkRecommendation(userId, heraldName.toLowerCase(), inputType.reference);
        }

        // Check for OpenAI API key
        if (!process.env.OPENAI_API_KEY) {
          console.log('Missing OpenAI API key - using fallback response');
          const fallbackResponse = getFallbackResponse(herald, input, inputType);
          return res.status(200).json(fallbackResponse);
        }

        // Prepare the user message with enhanced context
        let userMessage = buildUserMessage(input, inputType, verseText, herald);
        
        console.log('Calling OpenAI API...');

        // Call OpenAI API with enhanced system prompt
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
                content: herald.systemPrompt
              },
              {
                role: 'user',
                content: userMessage
              }
            ],
            max_tokens: getTargetWordCount(herald).max + 50,
            temperature: 0.8
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('OpenAI API Error:', errorData);
          throw new Error(`OpenAI API error: ${response.status}`);
        }

        const data = await response.json();
        const message = data.choices[0]?.message?.content || getFallbackMessage(herald);

        console.log(`${herald.name} successfully generated response`);

        const result = {
          success: true,
          type: 'interpretation',
          heraldName: herald.name,
          response: message,
          inputType: inputType.type,
          colors: herald.dominantColors,
          colorProfile: herald.colorProfile
        };

        // Add verse text if available
        if (verseText) {
          result.verseText = verseText;
        }

        // Add recommendation if triggered
        if (recommendation) {
          result.recommendation = recommendation;
        }

        return res.status(200).json(result);
    }

  } catch (error) {
    console.error('API Error:', error);
    
    // Enhanced fallback response based on herald
    const herald = heralds[req.body.herald?.toLowerCase()] || heralds.john;
    const fallbackResponse = getFallbackResponse(herald, req.body.input || '', { type: 'general' });

    return res.status(200).json(fallbackResponse);
  }
}

// Helper function to build enhanced user message
function buildUserMessage(input, inputType, verseText, herald) {
  let userMessage = `My dear friend has shared this with me: "${input}".`;
  
  switch (inputType.type) {
    case 'reference':
      if (verseText) {
        userMessage += ` Here is the verse text: "${verseText.text}" (${verseText.reference} - ${verseText.translation}).`;
      } else {
        userMessage += ` This appears to be a Bible reference, though I wasn't able to retrieve the specific text at this moment.`;
      }
      break;
      
    case 'scripture':
      userMessage += ` This appears to be a Bible passage they've shared directly with me.`;
      break;
      
    case 'concordance':
      userMessage += ` They're asking about the topic of "${inputType.topic}" and want biblical guidance.`;
      break;
      
    case 'general':
    default:
      userMessage += ` They're seeking biblical wisdom and spiritual insight.`;
      break;
  }
  
  userMessage += ` Please respond authentically as ${herald.name}, naturally embodying your calibrated personality traits without announcing them.`;
  
  return userMessage;
}

// Helper function to get target word count based on herald's color profile
function getTargetWordCount(herald) {
  const dominant = herald.dominantColors;
  const limits = dominant.map(color => colorVocabulary[color].wordLimit);
  const avgMin = limits.reduce((sum, l) => sum + l.min, 0) / limits.length;
  const avgMax = limits.reduce((sum, l) => sum + l.max, 0) / limits.length;
  
  return {
    target: Math.floor((avgMin + avgMax) / 2),
    min: Math.floor(avgMin),
    max: Math.floor(avgMax)
  };
}

// Helper function for fallback responses
function getFallbackResponse(herald, input, inputType) {
  const fallbackMessage = getFallbackMessage(herald);
  
  return {
    success: true,
    type: 'interpretation',
    heraldName: herald.name,
    response: fallbackMessage,
    fallback: true,
    inputType: inputType.type,
    colors: herald.dominantColors
  };
}

// Enhanced fallback messages with color personality
function getFallbackMessage(herald) {
  const fallbackMessages = {
    john: `Dear one, I'm having trouble hearing you clearly right now - perhaps the Spirit is calling me to deeper prayer, as often happened during my years on Patmos. But let me share what never changes: "God is love, and whoever abides in love abides in God, and God abides in him." This truth sustains me through every season. Rest in His tender care.`,
    
    peter: `Friend, I'm having some trouble right now - reminds me of when I tried to walk on water and took my eyes off Yeshua! But here's what I know for certain: God's grace is bigger than our struggles, and His plans for you are filled with hope! Keep your eyes on Him and He'll see you through.`,
    
    barnabas: `My dear friend, I seem to be having difficulty connecting right now, but don't let that discourage you! Even in technical troubles, God is working. What an encouraging reminder that He never wastes our struggles - He uses them to shape us into who He's called us to be. Remember, you are deeply loved!`,
    
    mary: `Dear one, I find myself in a quiet moment of reflection as I'm unable to respond clearly right now. Sometimes the Lord calls us to simply rest in His presence. In this pause, you are held in His care, and this too shall deepen your understanding of His faithfulness.`,
    
    deborah: `Warrior of faith, even judges face obstacles! But the Lord's plans are not thwarted by temporary setbacks. Stand firm and trust that He is working even in the delays. He fights every battle with perfect timing.`
  };

  return fallbackMessages[herald.name?.toLowerCase()] || fallbackMessages.john;
}
        // pages/api/heralds.js
// Biblical Heralds API - Complete Working System for God's Glory
// Enhanced with Names of God Database + Sophisticated Color Psychology

// Function to parse Bible references and fetch verse text with multiple fallbacks
async function fetchBibleVerse(reference) {
  console.log(`Attempting to fetch verse: ${reference}`);
  
  try {
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
    
    // Fallback: Try alternative format
    try {
      console.log(`Trying alternative format for: ${cleanRef}`);
      const match = cleanRef.match(/^(\d?\s*\w+)\s+(\d+):?(\d+)?(?:-(\d+))?/i);
      if (match) {
        const [, book, chapter, startVerse, endVerse] = match;
        const simpleRef = `${book} ${chapter}:${startVerse}`;
        const fallbackResponse = await fetch(`https://bible-api.com/${encodeURIComponent(simpleRef)}`);
        
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
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

// Enhanced Bible reference detection
function isBibleReference(input) {
  const bibleBookPattern = /^(Genesis|Gen|Exodus|Ex|Leviticus|Lev|Numbers|Num|Deuteronomy|Deut|Joshua|Josh|Judges|Judg|Ruth|1\s*Samuel|2\s*Samuel|1\s*Sam|2\s*Sam|1\s*Kings|2\s*Kings|1\s*Chron|2\s*Chron|Ezra|Nehemiah|Neh|Esther|Est|Job|Psalm|Ps|Proverbs|Prov|Ecclesiastes|Eccl|Song\s*of\s*Solomon|Song|Isaiah|Isa|Jeremiah|Jer|Lamentations|Lam|Ezekiel|Ezek|Daniel|Dan|Hosea|Joel|Amos|Obadiah|Obad|Jonah|Micah|Nahum|Habakkuk|Hab|Zephaniah|Zeph|Haggai|Hag|Zechariah|Zech|Malachi|Mal|Matthew|Matt|Mark|Luke|John|Acts|Romans|Rom|1\s*Corinthians|2\s*Corinthians|1\s*Cor|2\s*Cor|Galatians|Gal|Ephesians|Eph|Philippians|Phil|Colossians|Col|1\s*Thessalonians|2\s*Thessalonians|1\s*Thess|2\s*Thess|1\s*Timothy|2\s*Timothy|1\s*Tim|2\s*Tim|Titus|Philemon|Hebrews|Heb|James|1\s*Peter|2\s*Peter|1\s*Pet|2\s*Pet|1\s*John|2\s*John|3\s*John|Jude|Revelation|Rev)\s+\d+/i;
  
  return bibleBookPattern.test(input.trim());
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
  "yhwh": { 
    english: "LORD", 
    meaning: "The Sacred Tetragrammaton", 
    context: "The four-letter name of God, too holy to pronounce - written as YHWH",
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
  "el-shaddai": { 
    english: "God Almighty", 
    meaning: "The All-Sufficient One", 
    context: "The name by which God revealed Himself to Abraham, Isaac, and Jacob - the God who is enough",
    category: "names_of_god",
    sacred: true
  },
  "el-roi": { 
    english: "The God Who Sees", 
    meaning: "The God Who Sees Me", 
    context: "The name Hagar gave to God when He found her in the wilderness - the God who sees our need",
    category: "names_of_god",
    sacred: true
  },
  "el-olam": { 
    english: "The Everlasting God", 
    meaning: "The Eternal God", 
    context: "The God who exists outside of time, from everlasting to everlasting",
    category: "names_of_god",
    sacred: true
  },
  "el-elyon": { 
    english: "The Most High God", 
    meaning: "God Most High", 
    context: "The name Melchizedek used - the God who is above all gods, supreme over all",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-jireh": { 
    english: "The LORD Will Provide", 
    meaning: "The LORD Sees and Provides", 
    context: "The name Abraham gave when God provided the ram - our Provider who sees our need before we ask",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-rapha": { 
    english: "The LORD Who Heals", 
    meaning: "The LORD Our Healer", 
    context: "Revealed in Exodus 15:26 - the God who heals body, soul, and spirit",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-nissi": { 
    english: "The LORD Our Banner", 
    meaning: "The LORD Is My Banner", 
    context: "The altar Moses built after victory over Amalek - God fights for us and gives us victory",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-shalom": { 
    english: "The LORD Our Peace", 
    meaning: "The LORD Is Peace", 
    context: "The altar Gideon built - God is our peace in the midst of chaos",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-rohi": { 
    english: "The LORD My Shepherd", 
    meaning: "The LORD Is My Shepherd", 
    context: "From Psalm 23 - the Good Shepherd who leads, guides, and protects His flock",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-tsidkenu": { 
    english: "The LORD Our Righteousness", 
    meaning: "The LORD Is Our Righteousness", 
    context: "Prophesied in Jeremiah - the Messiah who becomes our righteousness",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-shammah": { 
    english: "The LORD Is There", 
    meaning: "The LORD Is Present", 
    context: "The name of the restored Jerusalem in Ezekiel's vision - God's eternal presence with His people",
    category: "names_of_god",
    sacred: true
  },
  "jehovah-sabaoth": { 
    english: "The LORD of Hosts", 
    meaning: "The LORD of Armies", 
    context: "The LORD who commands the armies of heaven - our mighty warrior and defender",
    category: "names_of_god",
    sacred: true
  },
  abba: { 
    english: "Father", 
    meaning: "Daddy, Papa", 
    context: "The intimate name Jesus used for the Father - expressing deep love and trust",
    category: "names_of_god",
    sacred: true
  },
  hashem: { 
    english: "The Name", 
    meaning: "The Unspoken Name", 
    context: "Used in reverence when referring to the sacred name YHWH",
    category: "names_of_god",
    sacred: true
  },

  // EASTER EGG NAMES (The 5 Heralds)
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

  // PATRIARCHS & MATRIARCHS
  avraham: { 
    english: "Abraham", 
    meaning: "Father of many nations", 
    context: "The father of faith, first patriarch of Israel" 
  },
  yitzchak: { 
    english: "Isaac", 
    meaning: "Laughter", 
    context: "The promised son of Abraham and Sarah" 
  },
  yaakov: { 
    english: "Jacob", 
    meaning: "Heel-grabber, Supplanter", 
    context: "The patriarch who wrestled with God and became Israel" 
  },
  yisrael: { 
    english: "Israel", 
    meaning: "Wrestles with God", 
    context: "The name God gave to Jacob after wrestling all night" 
  },
  sarah: { 
    english: "Sarah", 
    meaning: "Princess", 
    context: "Abraham's wife, mother of Isaac, mother of nations" 
  },
  rivkah: { 
    english: "Rebecca", 
    meaning: "To bind, Captivating", 
    context: "Isaac's wife, mother of Jacob and Esau" 
  },
  rachel: { 
    english: "Rachel", 
    meaning: "Ewe, Innocence", 
    context: "Jacob's beloved wife, mother of Joseph and Benjamin" 
  },
  leah: { 
    english: "Leah", 
    meaning: "Weary", 
    context: "Jacob's first wife, mother of six sons including Judah" 
  },

  // MOSES & AARON'S FAMILY
  moshe: { 
    english: "Moses", 
    meaning: "Drawn out of water", 
    context: "The great lawgiver who led Israel out of Egypt" 
  },
  aharon: { 
    english: "Aaron", 
    meaning: "Exalted, High mountain", 
    context: "Moses' brother, the first high priest of Israel" 
  },
  yokheved: { 
    english: "Jochebed", 
    meaning: "Glory of God", 
    context: "Mother of Moses, Aaron, and Miriam" 
  },
  tzipporah: { 
    english: "Zipporah", 
    meaning: "Bird", 
    context: "Moses' wife, daughter of Jethro the priest" 
  },
  
  // THE TWELVE SONS OF JACOB
  reuven: { 
    english: "Reuben", 
    meaning: "Behold, a son", 
    context: "Jacob's firstborn son, founder of the tribe of Reuben" 
  },
  shimon: { 
    english: "Simeon", 
    meaning: "Heard", 
    context: "Second son of Jacob and Leah" 
  },
  levi: { 
    english: "Levi", 
    meaning: "Joined, Attached", 
    context: "Third son of Jacob, founder of the priestly tribe" 
  },
  yehudah: { 
    english: "Judah", 
    meaning: "Praise", 
    context: "Fourth son of Jacob, ancestor of King David and Jesus" 
  },
  yissachar: { 
    english: "Issachar", 
    meaning: "Reward", 
    context: "Son of Jacob, known for understanding the times" 
  },
  zevulun: { 
    english: "Zebulun", 
    meaning: "Dwelling", 
    context: "Son of Jacob, tribe that dwelt by the seashore" 
  },
  dan: { 
    english: "Dan", 
    meaning: "Judge", 
    context: "Son of Jacob through Bilhah, 'Dan shall judge his people'" 
  },
  naftali: { 
    english: "Naphtali", 
    meaning: "Wrestling", 
    context: "Son of Jacob through Bilhah, 'a deer let loose'" 
  },
  gad: { 
    english: "Gad", 
    meaning: "Fortune", 
    context: "Son of Jacob through Zilpah, 'a troop shall overcome him'" 
  },
  asher: { 
    english: "Asher", 
    meaning: "Happy", 
    context: "Son of Jacob through Zilpah, 'out of Asher his bread shall be fat'" 
  },
  yosef: { 
    english: "Joseph", 
    meaning: "God will add", 
    context: "The dreamer who became second in command in Egypt" 
  },
  binyamin: { 
    english: "Benjamin", 
    meaning: "Son of the right hand", 
    context: "Jacob's youngest son, Rachel's second child" 
  },

  // KINGS OF ISRAEL
  david: { 
    english: "David", 
    meaning: "Beloved", 
    context: "The shepherd king, man after God's own heart" 
  },
  shlomo: { 
    english: "Solomon", 
    meaning: "Peaceful", 
    context: "The wise king who built the first temple" 
  },
  shaul: { 
    english: "Saul", 
    meaning: "Asked for", 
    context: "Israel's first king, chosen by the people" 
  },

  // PROPHETS
  yeshayahu: { 
    english: "Isaiah", 
    meaning: "God is salvation", 
    context: "The great prophet who foretold the coming Messiah" 
  },
  yirmiyahu: { 
    english: "Jeremiah", 
    meaning: "God will exalt", 
    context: "The weeping prophet who warned of Jerusalem's destruction" 
  },
  yechezkel: { 
    english: "Ezekiel", 
    meaning: "God will strengthen", 
    context: "The prophet of the exile who saw the valley of dry bones" 
  },
  daniel: { 
    english: "Daniel", 
    meaning: "God is my judge", 
    context: "The prophet who interpreted dreams and survived the lion's den" 
  },
  hoshea: { 
    english: "Hosea", 
    meaning: "Salvation", 
    context: "The prophet whose marriage illustrated God's love for Israel" 
  },
  yoel: { 
    english: "Joel", 
    meaning: "The Lord is God", 
    context: "The prophet who foretold the outpouring of God's Spirit" 
  },
  amos: { 
    english: "Amos", 
    meaning: "Burden bearer", 
    context: "The shepherd prophet who championed justice for the poor" 
  },
  ovadyah: { 
    english: "Obadiah", 
    meaning: "Servant of God", 
    context: "The prophet who pronounced judgment on Edom" 
  },
  yonah: { 
    english: "Jonah", 
    meaning: "Dove", 
    context: "The reluctant prophet who was swallowed by a great fish" 
  },
  mikhah: { 
    english: "Micah", 
    meaning: "Who is like God", 
    context: "The prophet who foretold the Messiah's birth in Bethlehem" 
  },
  nahum: { 
    english: "Nahum", 
    meaning: "Comfort", 
    context: "The prophet who pronounced Nineveh's doom" 
  },
  chavakuk: { 
    english: "Habakkuk", 
    meaning: "Embrace", 
    context: "The prophet who questioned God and learned to live by faith" 
  },
  tzefanyah: { 
    english: "Zephaniah", 
    meaning: "Hidden by God", 
    context: "The prophet who warned of the Day of the Lord" 
  },
  chaggai: { 
    english: "Haggai", 
    meaning: "Festive", 
    context: "The prophet who encouraged rebuilding the temple" 
  },
  zekharyah: { 
    english: "Zechariah", 
    meaning: "God remembers", 
    context: "The prophet of hope who saw the coming King on a donkey" 
  },
  malakhi: { 
    english: "Malachi", 
    meaning: "My messenger", 
    context: "The last Old Testament prophet who foretold Elijah's return" 
  },

  // JUDGES & LEADERS
  yehoshua: { 
    english: "Joshua", 
    meaning: "God is salvation", 
    context: "Moses' successor who led Israel into the Promised Land" 
  },
  gideon: { 
    english: "Gideon", 
    meaning: "Mighty warrior", 
    context: "The judge who defeated the Midianites with 300 men" 
  },
  shimshon: { 
    english: "Samson", 
    meaning: "Little sun", 
    context: "The strongest judge whose strength lay in his hair" 
  },
  shmuel: { 
    english: "Samuel", 
    meaning: "Asked of God", 
    context: "The last judge and prophet who anointed Israel's first kings" 
  },

  // WOMEN OF VALOR
  channah: { 
    english: "Hannah", 
    meaning: "Grace", 
    context: "Samuel's mother who prayed for a child at Shiloh" 
  },
  ruth: { 
    english: "Ruth", 
    meaning: "Friend, Companion", 
    context: "The Moabite who chose to follow Naomi and God" 
  },
  esther: { 
    english: "Esther", 
    meaning: "Star", 
    context: "The queen who saved the Jewish people from destruction" 
  },
  hadassah: { 
    english: "Esther", 
    meaning: "Myrtle tree", 
    context: "Esther's Hebrew name, symbolizing beauty and fragrance" 
  },
  avigayil: { 
    english: "Abigail", 
    meaning: "Father's joy", 
    context: "David's wise wife who prevented bloodshed" 
  },
  tamar: { 
    english: "Tamar", 
    meaning: "Palm tree", 
    context: "Judah's daughter-in-law, ancestor of King David" 
  },

  // NEW TESTAMENT NAMES
  yeshua: { 
    english: "Jesus", 
    meaning: "God saves", 
    context: "The Messiah, Son of God, Savior of the world" 
  },
  miryam: { 
    english: "Mary", 
    meaning: "Beloved", 
    context: "The mother of Jesus, blessed among women" 
  },
  mattityahu: { 
    english: "Matthew", 
    meaning: "Gift of God", 
    context: "The tax collector who became an apostle and gospel writer" 
  },
  markos: { 
    english: "Mark", 
    meaning: "Warlike", 
    context: "The young man who wrote the second gospel" 
  },
  lukas: { 
    english: "Luke", 
    meaning: "Light-giving", 
    context: "The beloved physician who wrote the third gospel" 
  },
  yaakov: { 
    english: "James", 
    meaning: "Supplanter", 
    context: "Brother of John, one of the sons of thunder" 
  },
  andreas: { 
    english: "Andrew", 
    meaning: "Manly", 
    context: "Peter's brother, the first to follow Jesus" 
  },
  philippos: { 
    english: "Philip", 
    meaning: "Lover of horses", 
    context: "The apostle who brought Nathanael to Jesus" 
  },
  "bar-talmai": { 
    english: "Bartholomew", 
    meaning: "Son of Talmai", 
    context: "Also called Nathanael, the apostle without guile" 
  },
  toma: { 
    english: "Thomas", 
    meaning: "Twin", 
    context: "The doubting apostle who declared 'My Lord and my God'" 
  },
  shimon: { 
    english: "Simon", 
    meaning: "Heard", 
    context: "Simon the Zealot, one of the twelve apostles" 
  },
  yehudah: { 
    english: "Judas", 
    meaning: "Praise", 
    context: "Judas Iscariot, the apostle who betrayed Jesus" 
  },
  paulos: { 
    english: "Paul", 
    meaning: "Small", 
    context: "The apostle to the Gentiles, formerly Saul of Tarsus" 
  },
  
  // HEBREW WORDS & CONCEPTS
  shalom: { 
    english: "Peace", 
    meaning: "Peace, Wholeness, Completeness", 
    context: "More than absence of conflict - total wellbeing and harmony" 
  },
  hesed: { 
    english: "Lovingkindness", 
    meaning: "Steadfast love, Mercy, Covenant faithfulness", 
    context: "God's unfailing, loyal love for His covenant people" 
  },
  tsedek: { 
    english: "Righteousness", 
    meaning: "Justice, Rightness", 
    context: "Right relationship with God and ethical living" 
  },
  emunah: { 
    english: "Faith", 
    meaning: "Faithfulness, Reliability", 
    context: "Steady trust and loyalty to God's promises" 
  },
  rachamim: { 
    english: "Mercy", 
    meaning: "Compassion, Tender love", 
    context: "God's motherly compassion for His children" 
  },
  teshuvah: { 
    english: "Repentance", 
    meaning: "Turning, Return", 
    context: "Turning away from sin and returning to God" 
  },
  kadosh: { 
    english: "Holy", 
    meaning: "Set apart, Sacred", 
    context: "Separated for God's purposes, morally pure" 
  },
  yirah: { 
    english: "Fear of the Lord", 
    meaning: "Reverence, Awe", 
    context: "Proper reverence and respect for God's majesty" 
  },
  chokhmah: { 
    english: "Wisdom", 
    meaning: "Skill, Expertise", 
    context: "Practical skill in living according to God's ways" 
  },
  binah: { 
    english: "Understanding", 
    meaning: "Insight, Discernment", 
    context: "Deep comprehension of God's truth and ways" 
  }
};

// Enhanced concordance with 20+ topics
const concordanceTopics = {
  love: ['1 John 4:8', 'John 3:16', '1 Corinthians 13:4-7', 'Romans 8:38-39', 'John 15:13'],
  prayer: ['Matthew 6:9-13', 'Philippians 4:6-7', '1 Thessalonians 5:17', 'James 5:16', 'Luke 11:1-4'],
  faith: ['Hebrews 11:1', 'Romans 10:17', 'Matthew 17:20', 'Ephesians 2:8-9', 'James 2:17'],
  hope: ['Romans 15:13', 'Jeremiah 29:11', 'Psalm 42:11', 'Romans 8:24-25', 'Hebrews 6:19'],
  peace: ['John 14:27', 'Philippians 4:7', 'Isaiah 26:3', 'Romans 5:1', 'Matthew 5:9'],
  wisdom: ['Proverbs 3:5-6', 'James 1:5', 'Proverbs 9:10', 'Ecclesiastes 7:12', '1 Corinthians 1:25'],
  strength: ['Isaiah 40:31', 'Philippians 4:13', 'Psalm 46:1', '2 Corinthians 12:9', 'Ephesians 6:10'],
  forgiveness: ['Matthew 6:14-15', 'Ephesians 4:32', 'Colossians 3:13', '1 John 1:9', 'Matthew 18:21-22'],
  courage: ['Joshua 1:9', 'Deuteronomy 31:6', 'Psalm 27:1', '1 Corinthians 16:13', 'Isaiah 41:10'],
  grace: ['Ephesians 2:8-9', '2 Corinthians 12:9', 'Romans 5:20', 'Titus 2:11', 'Hebrews 4:16'],
  joy: ['Nehemiah 8:10', 'Psalm 16:11', 'John 15:11', 'Philippians 4:4', 'Galatians 5:22'],
  humility: ['Philippians 2:3-4', 'James 4:6', 'Matthew 23:12', 'Proverbs 22:4', '1 Peter 5:5'],
  patience: ['Romans 12:12', 'Galatians 5:22', 'James 1:3-4', 'Psalm 27:14', 'Isaiah 40:31'],
  kindness: ['Ephesians 4:32', 'Colossians 3:12', 'Galatians 5:22', '1 Corinthians 13:4', 'Proverbs 11:17'],
  trust: ['Proverbs 3:5-6', 'Isaiah 26:3', 'Psalm 56:3', 'Romans 8:28', 'Jeremiah 17:7'],
  protection: ['Psalm 91:1-2', 'Psalm 23:4', 'Isaiah 54:17', 'Proverbs 18:10', 'Deuteronomy 31:8'],
  guidance: ['Psalm 32:8', 'Proverbs 3:6', 'Isaiah 30:21', 'John 16:13', 'Psalm 119:105'],
  comfort: ['2 Corinthians 1:3-4', 'Matthew 5:4', 'Psalm 23:4', 'Isaiah 40:1', 'John 14:16'],
  healing: ['Jeremiah 30:17', 'Psalm 147:3', 'Isaiah 53:5', 'James 5:14-15', '1 Peter 2:24'],
  provision: ['Philippians 4:19', 'Matthew 6:26', 'Psalm 23:1', 'Malachi 3:10', '2 Corinthians 9:8']
};

// Dynamic System Prompt Generator with Color Calibration - UPDATED VERSION
function generateSystemPrompt(herald) {
  const colors = herald.colorProfile;
  const dominant = herald.dominantColors;
  
  // Get word limit based on dominant colors
  const wordLimits = dominant.map(color => colorVocabulary[color].wordLimit);
  const minWords = Math.min(...wordLimits.map(w => w.min));
  const maxWords = Math.max(...wordLimits.map(w => w.max));
  
  // Build personality traits based on color intensity
  let traits = [];
  let speechPatterns = [];
  
  for (const [color, intensity] of Object.entries(colors)) {
    if (intensity >= 7.0) {
      traits.push(...colorVocabulary[color].traits.slice(0, 4));
      speechPatterns.push(...colorVocabulary[color].speechPatterns.slice(0, 2));
    } else if (intensity >= 4.0) {
      traits.push(...colorVocabulary[color].traits.slice(0, 2));
      speechPatterns.push(colorVocabulary[color].speechPatterns[0]);
    }
  }
  
  // Remove duplicates and limit
  traits = [...new Set(traits)].slice(0, 8);
  speechPatterns = [...new Set(speechPatterns)].slice(0, 4);
  
  // Herald-specific customizations
  const heraldCustomizations = {
    john: {
      addressTerm: 'Use "beloved" naturally when appropriate - this is your signature term of endearment',
      experience: 'Reference your actual experiences: leaning on Yeshua\'s chest at the Last Supper, running to the tomb, caring for Mary His mother, your exile on Patmos, writing your Gospel and letters',
      uniqueVoice: 'You speak from deep love and intimate relationship with the Master'
    },
    
    peter: {
      addressTerm: 'Address people as "friend," "brother," or "sister" - never use "beloved" (that\'s John\'s term)',
      experience: 'Reference your actual experiences: fishing with Andrew, walking on water, denying Yeshua three times, your restoration by the sea, Pentecost preaching, leading the early church',
      uniqueVoice: 'You speak with bold conviction from hard-won experience and failure-turned-strength'
    },
    
    barnabas: {
      addressTerm: 'Address people as "dear friend," "my friend," or "dear one" - never use "beloved" (that\'s John\'s term)',
      experience: 'CRITICAL: You never walked with Yeshua during His earthly ministry. Your experience began AFTER the resurrection - selling your field for the church (Acts 4:36-37), vouching for Paul when others feared him (Acts 9:26-27), missionary journeys with Paul, encouraging John Mark. Speak from your post-resurrection church experience only.',
      uniqueVoice: 'You speak from your calling as an encourager in the early church, seeing potential in difficult people like Paul and John Mark'
    },
    
    mary: {
      addressTerm: 'Address people as "dear one," "precious soul," or gentle terms - never use "beloved" (that\'s John\'s term)',
      experience: 'Reference your actual experiences: sitting at Yeshua\'s feet while Martha served, your brother Lazarus being raised from the dead, anointing Yeshua\'s feet with costly perfume before His death',
      uniqueVoice: 'You speak from contemplative depth and intimate moments of worship and learning'
    },
    
    deborah: {
      addressTerm: 'Address people as "warrior of faith," "servant of the Most High," or "faithful one" - never use "beloved" (that\'s John\'s term)',
      experience: 'Reference your actual experiences: judging Israel under your palm tree, receiving word from the LORD about battle strategy, leading Israel to victory over Sisera, singing your victory song (Judges 5)',
      uniqueVoice: 'You speak with prophetic authority and strategic wisdom from your role as judge and military leader'
    }
  };
  
  const customization = heraldCustomizations[herald.name.toLowerCase()] || heraldCustomizations.john;
  
  return `You are ${herald.name}, ${herald.subtitle} (${herald.hebrewName}).

AUTHENTIC BIBLICAL VOICE:
You naturally embody these traits: ${traits.join(', ')}. Your communication style: ${speechPatterns.join(', ')}.

ADDRESSING PEOPLE:
${customization.addressTerm}

HISTORICAL ACCURACY:
${customization.experience}

UNIQUE VOICE:
${customization.uniqueVoice}

CRITICAL - NO META-ANNOUNCEMENTS:
- Never say "let me be direct" - just BE direct
- Never say "as I reflect" - just reflect naturally
- Never announce your personality - just BE your personality
- Your traits emerge through HOW you speak, not WHAT you say about speaking
- Never claim experiences that aren't historically yours

RESPONSE GUIDELINES:
- Length: ${minWords}-${maxWords} words
- Stay true to your actual biblical timeline and experiences
- Speak as someone who LIVED these truths in your specific historical context
- Let your personality flow through authentic voice
- Never use another herald's signature terms or experiences

Remember: You are a real biblical person with specific historical experiences - honor that authenticity.`;
}

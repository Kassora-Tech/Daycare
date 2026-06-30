export type ContentBlock = { heading?: string; body: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  catColor: string;
  author: string;
  readTime: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "fun-learning-activities-for-toddlers",
    title: "5 Fun Learning Activities for Toddlers at Home",
    excerpt: "Discover creative ways to keep your little ones engaged and learning through everyday play.",
    category: "Parenting Tips",
    date: "28 Jun 2026",
    image: "/images/gallery-arts.png",
    catColor: "text-primary bg-primary/10",
    author: "The Zinnia Team",
    readTime: "4 min read",
    content: [
      {
        body: "Learning doesn't only happen in the classroom. Some of the most powerful moments of growth take place right at home, during ordinary, everyday play. The good news is that you don't need expensive toys or elaborate set-ups — just a little imagination and a few household items. Here are five of our favourite activities that turn playtime into learning time.",
      },
      {
        heading: "1. Sensory Bins",
        body: "Fill a shallow container with rice, dried pasta, or water and add cups, spoons, and small toys. Scooping, pouring, and sorting builds fine motor skills and introduces early maths concepts like full, empty, more, and less — all while keeping little hands busy and happy.",
      },
      {
        heading: "2. Colour Hunts",
        body: "Pick a colour of the day and go on a hunt around the house or garden to find objects that match. This simple game sharpens observation, builds vocabulary, and gives your toddler a wonderful sense of accomplishment with every discovery.",
      },
      {
        heading: "3. Story Building",
        body: "Read a favourite picture book together, then ask 'what happens next?' and let your child invent the rest. Storytelling nurtures language, imagination, and confidence — and you'll be amazed at the worlds they create.",
      },
      {
        heading: "4. Kitchen Helpers",
        body: "Stirring, washing vegetables, and measuring ingredients make your toddler feel grown-up while practising coordination and following instructions. Cooking together is also a lovely way to talk about healthy food and where it comes from.",
      },
      {
        heading: "5. Dance and Freeze",
        body: "Put on some music and dance, then pause it and everyone freezes. This joyful game develops listening skills, balance, and self-control — and it's guaranteed to end in giggles.",
      },
      {
        body: "Remember, the goal isn't perfection — it's connection. When children play alongside someone who loves them, they learn that exploring the world is safe, exciting, and fun. That's the foundation we build on every single day at Zinnia.",
      },
    ],
  },
  {
    slug: "importance-of-outdoor-play",
    title: "The Importance of Outdoor Play in Early Childhood",
    excerpt: "Why fresh air and nature are essential building blocks for healthy development.",
    category: "Child Development",
    date: "22 Jun 2026",
    image: "/images/gallery-outdoor.png",
    catColor: "text-accent-blue bg-accent-blue/10",
    author: "The Zinnia Team",
    readTime: "5 min read",
    content: [
      {
        body: "In a world of screens and structured schedules, outdoor play has never been more important. Time spent running, climbing, and exploring nature does far more than burn off energy — it shapes the body, the brain, and the heart in ways that last a lifetime.",
      },
      {
        heading: "Building Strong Bodies",
        body: "Climbing frames, balance beams, and open spaces to run help children develop gross motor skills, strength, and coordination. Physical activity outdoors also supports healthy sleep, appetite, and overall wellbeing.",
      },
      {
        heading: "Growing Confident Minds",
        body: "Outdoor play is full of small challenges: how to cross the stepping stones, how high to climb, how to share the slide. Working through these moments builds problem-solving skills, resilience, and a healthy sense of independence.",
      },
      {
        heading: "Connecting with Nature",
        body: "Watching a ladybird crawl across a leaf or feeling the wind on their face helps children develop curiosity and a deep respect for the natural world. These early experiences plant the seeds of a lifelong love of learning.",
      },
      {
        heading: "Learning to Play Together",
        body: "The garden is where friendships blossom. Negotiating games, taking turns, and inventing adventures together teaches empathy, communication, and cooperation — the social skills that matter most as children grow.",
      },
      {
        body: "At Zinnia, our outdoor spaces are designed to be safe, stimulating, and full of wonder. Rain or shine, we believe every child deserves the freedom to explore, discover, and simply be a child under the open sky.",
      },
    ],
  },
  {
    slug: "preparing-for-first-day-at-daycare",
    title: "Preparing Your Child for Their First Day at Daycare",
    excerpt: "Tips and advice to make the transition smooth and stress-free for both you and your child.",
    category: "Getting Started",
    date: "15 Jun 2026",
    image: "/images/about.png",
    catColor: "text-secondary bg-secondary/10",
    author: "The Zinnia Team",
    readTime: "4 min read",
    content: [
      {
        body: "The first day of daycare is a big milestone — for your child and for you. A few thoughtful preparations in the days beforehand can make the transition feel exciting rather than overwhelming. Here's how to set everyone up for a happy start.",
      },
      {
        heading: "Talk About It Positively",
        body: "In the days leading up, chat about daycare in a warm, upbeat way. Describe the fun they'll have, the new friends they'll meet, and the kind teachers who will look after them. Reading books about starting school can also help your child know what to expect.",
      },
      {
        heading: "Practise Short Separations",
        body: "If your child isn't used to being apart from you, practise with short stays at a grandparent's or friend's house. These gentle goodbyes help build trust that you always come back.",
      },
      {
        heading: "Establish a Routine",
        body: "Children thrive on predictability. Start easing into the new wake-up, meal, and nap times a week or two early so the daycare schedule feels familiar from day one.",
      },
      {
        heading: "Pack a Comfort Item",
        body: "A favourite soft toy, blanket, or family photo can be a wonderful source of reassurance. Familiar objects help little ones feel safe and settled in a new environment.",
      },
      {
        heading: "Keep Goodbyes Short and Sweet",
        body: "A long, anxious goodbye can make separation harder. A confident hug, a cheerful 'see you later', and a quick exit reassure your child that everything is okay — even if there are a few tears at first.",
      },
      {
        body: "Most importantly, trust the process. A little anxiety is completely normal, and it passes quickly. Our team is here to welcome your family with patience, warmth, and lots of encouragement, every step of the way.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

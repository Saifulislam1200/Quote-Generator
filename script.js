// Array of 100 sample quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Get busy living or get busy dying. - Stephen King",
    "You have as much laughter as you have faith. - Martin Luther King Jr.",
    "In the end, we only regret the chances we didn’t take. - Lewis Carroll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience. - Eleanor Roosevelt",
    "A person who never made a mistake never tried anything new. - Albert Einstein",
    "The best revenge is massive success. - Frank Sinatra",
    "Don’t count the days, make the days count. - Muhammad Ali",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "To live a creative life, we must lose our fear of being wrong. - Joseph Chilton Pearce",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward. - Rocky Balboa",
    "Our lives are defined by opportunities, even the ones we miss. - F. Scott Fitzgerald",
    "The only thing standing between you and your goal is the story you keep telling yourself. - Jordan Belfort",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Nothing is impossible, the word itself says ‘I’m possible’! - Audrey Hepburn",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "Opportunities don't happen, you create them. - Chris Grosser",
    "Act as if what you do makes a difference. It does. - William James",
    "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
    "Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt",
    "Everything you can imagine is real. - Pablo Picasso",
    "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
    "In three words I can sum up everything I’ve learned about life: it goes on. - Robert Frost",
    "Don’t wait. The time will never be just right. - Napoleon Hill",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle",
    "The mind is everything. What you think you become. - Buddha",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Everything has beauty, but not everyone can see it. - Confucius",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. - Unknown",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "Tell me who admires and loves you, and I will tell you who you are. - Antoine de Saint-Exupéry",
    "You don’t have to be perfect to be amazing. - Unknown",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "What doesn't kill us makes us stronger. - Friedrich Nietzsche",
    "You can’t help everyone, but everyone can help someone. - Ronald Reagan",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Nothing will work unless you do. - Maya Angelou",
    "Love the life you live. Live the life you love. - Bob Marley",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Don’t wait for opportunity. Create it. - Unknown",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. - William James",
    "If you can dream it, you can do it. - Walt Disney",
    "It’s never too late to be what you might have been. - George Eliot",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "What you do today can improve all your tomorrows. - Ralph Marston",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Dream big and dare to fail. - Norman Vaughan",
    "If you can’t stop thinking about it, don’t stop working for it. - Unknown",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
];

// Function to get a random quote and update the quote text
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Random index
    const quoteText = quotes[randomIndex]; // Get quote from the array
    document.getElementById("quote").textContent = quoteText; // Update the quote text
}

// Function to copy the current quote to clipboard
function copyQuoteToClipboard() {
    const quoteText = document.getElementById("quote").textContent;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Set up event listener for the buttons
document.getElementById("new-quote-btn").addEventListener("click", getRandomQuote);
document.getElementById("copy-quote-btn").addEventListener("click", copyQuoteToClipboard);

// Initialize with the first quote
getRandomQuote();

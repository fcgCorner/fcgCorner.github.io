var quotes = [
    "\“I know we just met, but I definitely believe in you.\”",
    "\“But I feel like there's a heart of gold down there. I just need to stick on my miner's cap, and get a pickaxe, and dig real deep, you know?\”",
    "\“I just feel like there's a lot of broken people out there and I can do a lot to help them, that's all.\”",
    "\“Be optimistic! Of all the -isms, optimism is the most optimistic!\”",
    "\“I don't want to be insulting or anything, but the issue that I find with some of you soul-touched creatures is that you always know what you want, you know? But you don't always see what you need.\”",
    "\“I believe you and that's wonderful that you're sticking up for your friend.\”",
    "\“Does anyone need to talk about it or cry or anything to get it out?\”",
    "\“It helped you down there, and it was for your safety, and I'm happy that you used it. That's what it was for.\”",
    "\“Listen, of all the cities in the world, Generosity is the capital of Kindness.\”",
    "\“Well, feel free to pick me up whenever you wish. Or just put your arms around me or whatever.\”",
    "\“It's been a pleasure getting to know you a little better, and whether you know it or not, you've made my day just so much brighter by chance, so thank you.\”",
    "\“But I'm just curious, if you don't succeed, are you worried most about disappointing someone, or disappointing yourself?\”",
    "\“Well, no matter what happens, just keep it positive, and remember, you just don't rush the beat, all right.\”",
    "\“I think you'll find that these folks that you're with are a wonderful group of individuals, and they all have something to offer, and you know, maybe you being here will be a catalyst for some of them to start figuring out what they need to change as well.\”",
    "\“You're a delightful person. You're wonderful to be around. You're so sweet and nice.\”",
    "\“Just look at me. Don't look out there. Everything's going to be fine.\”",
    "\“No, no, we don't get discouraged. We keep going. We believe in ourselves until we get the job done.\”",
    "\“What I'm saying is we all carry emotional walls, and by breaking them down we can become more spiritually whole.\”"
]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteSection').innerHTML = quotes[randomNumber];
}

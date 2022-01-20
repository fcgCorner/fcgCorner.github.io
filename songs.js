var titles = [
    "Your song: Mighty Vibes Vol 1: Lo-fi Beats to Doodle To",
    "Your song: Mighty Vibes Vol 2: Chill Tunes to Study/Transcribe Magic To",
    "Your song: Mighty Vibes Vol 3: Chill Tunes to Drink Tea/Meditate To",
    "Your song: Mighty Vibes Vol 4: Lofi Beats for Best Buddies to Listen To",
    "Your song: Mighty Vibes Vol 5: Lofi Beats with a Light Breeze [Zephrah Radio]",
    "Your song: Mighty Vibes Vol 6: Lofi Beats to Study with Your Twin to",
    "Your song: Sad Wizard Vibes - Critical Role LoFi",
    "Your song: Wonderful Little Seed of Joy and Chaos - Critical Role LoFi",
    "Your song: Fathoms - Critical Role LoFi",
    "Your song: Refjorged - Critical Role LoFi",
    "Your song: Duplicity - Critical Role LoFi",
    "Your song: Destiny and Dead People Tea - Critical Role LoFi",
    "Your song: Cobalt Blues - Critical Role LoFi",
    "Your playlist: Critical Role-Fi",
    "Your playlist: Percival CR LoFi Singles",
    "Your playlist: Critical Role - Fan Music"
]

var spoilers = [
    "Spoilers: none",
    "Spoilers: none",
    "Spoilers: none",
    "Spoilers: none",
    "Spoilers: very vague spoilers for campaign 1 and fate of Keyleth’s mother (which was left open during campaign 1 but solidified during campaign 2 episodes 100-107)",
    "Spoilers: final romantic relationships of campaign 1",
    "Spoilers: up through campaign 2 episode 49",
    "Spoilers: up through campaign 2 episode 65",
    "Spoilers: up through the ‘Pirate arc’ of campaign 2 (approximately episode 48)",
    "Spoilers: up through campaign 2 episode 76",
    "Spoilers: up through campaign 2 episode 105",
    "Spoilers: up through campaign 2 episode 70",
    "Spoilers: up through campaign 2 episode 77",
    "Spoilers: campaign 2",
    "Spoilers: campaign 1 Whitestone Arc",
    "Spoilers: campaigns 1 and 2"
]

var descrip = [
    "Description: Hang out with Jester from the Mighty Nein as she doodles and hangs out with the Traveler.",
    "Description: Hang out with Caleb and Beau from the Mighty Nein as they study and learn new spells.",
    "Description: Hang out with Caduceus from the Mighty Nein as he meditates and drinks dead people tea.",
    "Description: Hang out with Grog and Pike from Vox Machina as they enjoy a picnic and read.",
    "Description: Hang out with Keyleth from Vox Machina as she reads and enjoys the fresh air.",
    "Description: Hang out with Vax and Vex from Vox Machina as college students who are studying and planning a double date.",
    "Description: Revisit Caleb’s character arc as he opens up to the Mighty Nein",
    "Description: Revisit Jester’s character arc as she appreciates her past with her mother and the Traveler, befriends the Mighty Nein, and confronts her loneliness.",
    "Description: Revisit the first half of Fjord’s character arc as a warlock as he meets the Mighty Nein and starts to question his patron.",
    "Description: Revisit the second half of Fjord’s character arc as a warlock as he continues adventuring with the Mighty Nein, rejects his patron, and accepts the Wildmother into his life.",
    "Description: Revisit Jester’s character arc as she continues adventuring with the Mighty Nein, confronts her father, tricks a hag with a cupcake, and sees under the Traveler’s hood.",
    "Description: Revisit Caduceus' character arc as he meets the Mighty Nein and strengthens and spreads his faith.",
    "Description: Revisit Beau’s character arc as she meets the Mighty Nein, loses a friend, and grows as a person.",
    "Description: A playlist of lo-fi tracks about Critical Role by The Lofi Bard.",
    "Description: A playlist of lo-fi tracks about Percy’s character arc as he confronts his tragic past and tries to find vengeance with the help of Vox Machina.",
    "Description: A playlist of lo-fi tracks (and a couple of other genres) about Critical Role by Honna Music."
]

var creators = [
    '<p class="vid__creator">Creator: Critical Role’s official channel on YouTube</p>',
    '<p class="vid__creator">Creator: Critical Role’s official channel on YouTube</p>',
    '<p class="vid__creator">Creator: Critical Role’s official channel on YouTube</p>',
    '<p class="vid__creator">Creator: Critical Role’s official channel on YouTube</p>',
    '<p class="vid__creator">Creator: Critical Role’s official channel on YouTube</p>',
    '<p class="vid__creator">Creator: Critical Role’s official channel on YouTube</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work. He also has a version of this album without the voice lines on his YouTube channel.</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: Autumn Orange on YouTube; he creates amazing lo-fi tracks, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.patreon.com/VaughnSwanson" target="_blank">Patreon</a> or <a class="vid__link" href="https://ko-fi.com/vaughnswanson" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: The Lofi Bard on YouTube; he creates individual tracks that are 2-5 minutes long, mostly about Critical Role. If you enjoy his music, let him know on YouTube, <a class="vid__link" href="https://twitter.com/TheLofiBard" target="_blank">Twitter</a>, or <a class="vid__link" href="https://www.instagram.com/letmeasklarry/" target="_blank">Instagram</a>.</p>',
    '<p class="vid__creator">Creator: Honna Music on YouTube; he creates individual tracks that are 2-6 minutes long, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.bennorthgraves.com/" target="_blank">website</a> to learn more about him and his <a class="vid__link" href="https://ko-fi.com/bennorthgraves" target="_blank">Ko-fi</a> to support his work.</p>',
    '<p class="vid__creator">Creator: Honna Music on YouTube; he creates individual tracks that are 2-6 minutes long, mostly about Critical Role. Visit his <a class="vid__link" href="https://www.bennorthgraves.com/" target="_blank">website</a> to learn more about him and his <a class="vid__link" href="https://ko-fi.com/bennorthgraves" target="_blank">Ko-fi</a> to support his work. These are not his only tracks; he’s also created some for EXU, so if you’re interested in those, check out his YouTube channel.</p>'
]

var videos = [
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/XVQVXDKKlHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/gsu8S9Pvbio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/8xz9s_-sO1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/YuAqAwvIL3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/wIsEYMsVd9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/1ymREG2zvNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/3nWhu92xyqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/V35IaaBU6Js" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/a3_qzIKgoas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/rJWEOu_yBls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/ZZUD25bZBI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/u_cRsSFvHBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/kMYIPNEua80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLSimmxzAvbm4qAxU8W964g-ftAPnKhw4a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL99XaS41rWsgaCGFTm1JL_FIc4DXWbwAu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="vid__video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL99XaS41rWsji30cvTCZ4VpxLfvEi9A5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
]

function getSong() {
    var randomNumber = Math.floor(Math.random() * titles.length);
    document.getElementById('title').innerHTML = titles[randomNumber];
    document.getElementById('spoil').innerHTML = spoilers[randomNumber];
    document.getElementById('desc').innerHTML = descrip[randomNumber];
    document.getElementById('create').outerHTML = creators[randomNumber];
    document.getElementById('video').outerHTML = videos[randomNumber];
}

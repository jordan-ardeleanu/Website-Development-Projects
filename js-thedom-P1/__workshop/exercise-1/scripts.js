
const main = document.querySelector("main");

// CSS Link

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";
document.head.appendChild(cssLink);

// Main Body

const heading1 = document.createElement("h1");
heading1.innerText = "The best How I Met Your Mother episode (according to fans)";
main.appendChild(heading1);

const passage1 = document.createElement("p");
passage1.innerText = "As impossible as it seems to name just 1 of the 208 legendary episodes as the “best”, the fans have spoken and the highest rated episode is… wait for it…";
main.appendChild(passage1);

const heading2 = document.createElement("h2");
heading2.innerText = "The Slap Bet (Season 2, Episode 9)";
main.appendChild(heading2);

const passage2 = document.createElement("p");
passage2.innerText = "IMDB Rating: 9.5";
main.appendChild(passage2);

const image1 = document.createElement("img")
image1.src="images/robin-sparkles.jpg";
image1.alt="Robin Sparkles";
main.appendChild(image1);

const passage3 = document.createElement("p");
passage3.innerText = "In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased.";
main.appendChild(passage3);

const passage4 = document.createElement("p");
passage4.innerText = "In the end, Robin’s big secret was revealed- she was a Canadian, teen pop sensation named Robin Sparkles. Barney finds the music video for her hit single “Lets Go To The Mall”. The slap bet takes a few turns throughout the episode, but ends with Marshall having the right to slap Barney 5 times- available for all of eternity (horrible call Barney).";
main.appendChild(passage4);

const link = document.createElement("a");
link.innerText = "Source";
link.href = "https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
main.appendChild(link);
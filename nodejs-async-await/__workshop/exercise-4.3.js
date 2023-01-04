const request = require('request-promise');

const getGeekJoke = async () => {
  let option = {
    url: "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
    method: "GET",
    json: true,
  };
  try {
    let result = await request(option);
    return result.joke;
  } catch (err) {
    console.log(err.message);
  }
};

// 4.2
getGeekJoke().then((data) => console.log(data));
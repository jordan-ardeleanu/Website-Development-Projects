const request = require('request-promise');

const getPun = async () => {
  let option = {
    uri: "https://v2.jokeapi.dev/joke/Pun",
    headers: {
      Accept: "application/json",
    },
    json: true,
  };
  try {
    let result = await request(option);
    return result.value;
  } catch (err) {
    console.log(err.message);
  }
};

// 4.2
getPun().then((data) => console.log(data));


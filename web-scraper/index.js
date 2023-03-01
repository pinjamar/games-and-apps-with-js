const PORT = 8000;
const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const nodemon = require("nodemon");

const app = express();

const url = "https://theguardian.com/uk";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];

    $(".fc-item__title", html).each(function () {
      const title = $(this).text();
      const url = $(this).find("a").attr("href");
      articles.push({ title: title, url: url });
    });

    console.log(articles);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => console.log(`server runing on port ${PORT}`));

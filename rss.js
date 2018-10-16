const feed = require("feed-read");
const colors = require("colors");

const sites = process.argv.slice(2);

for (let s = 0; s < sites.length; s++) {
    var site = sites[s];

    console.log("-------------------------------")
    console.log(colors.yellow(site));

    feed(site, function (err, articles) {
        if (err) throw err;

        for (let i = 0; i < articles.length; i++) {
            var article = articles[i];

            console.log("-------------------------------")
            console.log(colors.green(article.title));
            console.log(colors.underline(article.link));
        }
    });
}
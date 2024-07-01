window.addEventListener("load", async (event) => {
    json = await (await fetch("https://api.quotable.io/random")).json();

    document.querySelector("#quote-content").innerHTML = json.content;
    document.querySelector("#quote-author").innerHTML = `By: ${json.author}`;
});

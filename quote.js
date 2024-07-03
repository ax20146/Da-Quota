async function getQuote() {
    return await (await fetch("https://api.quotable.io/random")).json();
}

function displayQuote(quote, author) {
    document.querySelector("#quote-content").innerHTML = quote;
    document.querySelector("#quote-author").innerHTML = `By: ${author}`;
}

// Display quote when window loads
window.addEventListener("load", async (event) => {
    data = await getQuote();
    displayQuote(data.content, data.author);
});

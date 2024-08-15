const apiKey = 'a9b8308efe974216a73569ddea94285b'; // Replace with your News API key
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const newsArticles = document.querySelector("#news-articles");

const Base_URL = async () => {
    console.log("Getting data...........");
    let response = await fetch(apiUrl);
    let data = await response.json();
   
    data.articles.forEach(item => {
        const articles = document.createElement('div');
        articles.className = 'article';
        
        articles.innerHTML = `${item.author} <br> ${item.title} <br> <a href="${item.url}" target="_blank">Read more</a>`;

        newsArticles.appendChild(articles);
        
    });
}

Base_URL();
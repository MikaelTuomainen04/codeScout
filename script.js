const form = document.querySelector('form');
const search = document.querySelector('#search'); 
const language = document.querySelector('#language');
const summary = document.querySelector('#search-summary')
const results = document.querySelector('#search-results');

async function getData(searchValue, languageValue) {
    
    try {

        const response = await fetch(`https://api.github.com/search/repositories?q=${searchValue} ${languageValue}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        console.log(data.items);
        console.log(data.items.length);
        console.log(data.items[0]);
        console.log(data.items[0].name);

        results.textContent = "";

        for (let repository of data.items) {
            console.log("Repository name: " + repository.name + " | Language: " + repository.language + " | Stars: " + repository.stargazers_count);

            let resultsDiv = document.createElement('div');
            resultsDiv.textContent = "Repository name: " + repository.name + " | Language: " + repository.language + " | Stars: " + repository.stargazers_count;
            results.appendChild(resultsDiv)
        }


    } catch (error) {
        console.error(error);
    }

}
  
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form has been sent!");

    const searchValue = search.value.trim();
    const languageValue = language.value.trim();

    if (searchValue === "") {
        summary.textContent = "Täytä hakukentta!";
    }
    else {
        summary.textContent = "Search: " + searchValue +
        ",\nLanguage: " + languageValue;

        getData(searchValue, languageValue);

    }


    console.log(searchValue);
    console.log(languageValue);
})
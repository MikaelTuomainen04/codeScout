const form = document.querySelector('form');
const search = document.querySelector('#search'); 
const language = document.querySelector('#language');
const summary = document.querySelector('#search-summary')

async function getData(searchValue) {
    
    try {

        const response = await fetch(`https://api.github.com/search/repositories?q=${searchValue}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
        console.log(data.items);
        console.log(data.items.lenght);
        console.log(data.items[0]);
        console.log(data.items[0].name);    

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

        getData(searchValue);

    }


    console.log(searchValue);
    console.log(languageValue);
})
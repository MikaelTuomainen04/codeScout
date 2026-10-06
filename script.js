const form = document.querySelector('form');
const search = document.querySelector('#search'); 
const language = document.querySelector('#language');
const summary = document.querySelector('#search-summary')
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form has been sent!");

    const seachValue = search.value;
    const languageValue = language.value;

    const setSearch = document.getElementById(search)
    const setLanguage = document.getElementById(language)


    if (setSearch.value.trim() === "" || setLanguage.value === "") {
        summary.textContent = "Täytä hakukentta ja kieli!";
    }
    else {
        summary.textContent = "Search: " + setSearch.value +
        ", Language: " + setLanguage.value;
    }


    console.log(seachValue);
    console.log(languageValue);
})
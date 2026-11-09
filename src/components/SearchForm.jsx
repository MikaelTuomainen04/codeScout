import { useState } from "react";

export function SearchForm( {onResults} ) {

    const [searchValue, setSearchValue] = useState("");
    const [languageValue, setLanguegeValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit (e) {
            e.preventDefault();

            console.log("Search: ", searchValue);
            console.log("Language: ", languageValue)

            if (searchValue.trim() !== "") {
            getData(searchValue, languageValue);
        }
    }

    async function getData(searchValue, languageValue) {

        setLoading(true);
        setError("");

        try {

            const query = `${searchValue}${languageValue ? ` language:${languageValue}` : ""}`;

            const response = await fetch( `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! Status: ${errorData.message}`)
            }

            const data = await response.json();

            /*console.log(data.items)
            console.log(data.items.length)
            console.log(data.items[0])
            console.log(data.items[0].name) */
            
            onResults(data.items);
            

        } catch(error) {
            console.error(error);
            setError("Haku epäonnistui! Yritä uudelleen.")
            
        } finally  {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>

        <label htmlFor="search">What do you want to learn?</label>
        <input className="form-control" id ="search" type="search" value = {searchValue} onChange = {(e) => setSearchValue(e.target.value)}/>

        <label htmlFor="language">Language:</label>
        <select className="form-select" name="language" id="language" value = {languageValue} onChange = {(e) => setLanguegeValue(e.target.value)}>
            <option value="">--Any language--</option>
                <option value="Ada">Ada</option>
                <option value="Assembly">Assembly</option>
                <option value="C">C</option>
                <option value="C#">C#</option>
                <option value="C++">C++</option>
                <option value="COBOL">COBOL</option>
                <option value="Dart">Dart</option>
                <option value="Elixir">Elixir</option>
                <option value="Erlang">Erlang</option>
                <option value="F#">F#</option>
                <option value="Fortran">Fortran</option>
                <option value="Go">Go</option>
                <option value="Haskell">Haskell</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Julia">Julia</option>
                <option value="Kotlin">Kotlin</option>
                <option value="Lisp">Lisp</option>
                <option value="Lua">Lua</option>
                <option value="MATLAB">MATLAB</option>
                <option value="Objective-C">Objective-C</option>
                <option value="OCaml">OCaml</option>
                <option value="Pascal">Pascal</option>
                <option value="Perl">Perl</option>
                <option value="PHP">PHP</option>
                <option value="PowerShell">PowerShell</option>
                <option value="Prolog">Prolog</option>
                <option value="Python">Python</option>
                <option value="R">R</option>
                <option value="Ruby">Ruby</option>
                <option value="Rust">Rust</option>
                <option value="Scala">Scala</option>
                <option value="SQL">SQL</option>
                <option value="Swift">Swift</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Visual Basic">Visual Basic</option>
                <option value="Zig">Zig</option>
        </select>

        <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
        </button>

                {error && (
        <p className="alert alert-danger mb-0" role="alert">
            {error}
        </p>
        )}
        
        </form>
    );
}
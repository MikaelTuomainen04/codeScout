export function SearchForm() {
    return (
        <form>

        <label htmlFor="search">What do you want to learn?</label>
        <input id ="search" type="search" />

        <label htmlFor="language">Language:</label>
        <select name="language" id="language">
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

        <button type="submit">Search</button>
        
        </form>
    );
}
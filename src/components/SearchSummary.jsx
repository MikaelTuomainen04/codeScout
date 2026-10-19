
export function SearchSummary( {resultsCount} ) {
    return (
        <div>
            <h2>Search summary</h2>
            <p id="search-summary">
                Projects shown: {resultsCount};
            </p>
        </div>
    );
}
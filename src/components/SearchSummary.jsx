
export function SearchSummary( {resultsCount, selectedCount} ) {
    return (
        <div>
            <h2>Search summary</h2>
            <p id="search-summary">
                Projects shown: {resultsCount};
                <br />
                Projects selected: {selectedCount}
            </p>
        </div>
    );
}
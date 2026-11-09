import { SearchForm } from "../components/SearchForm";
import { SearchSummary } from "../components/SearchSummary";
import { Results } from "../components/Results";

export function SearchPage({ results, onResults, onAddToCompare, selectedCount}) {
    return (
        <>
        <SearchForm onResults={onResults} />
        <SearchSummary resultsCount={results.length} selectedCount={selectedCount} />
        <Results 
            results={results}
            onAddToCompare={onAddToCompare}
        />
        </>
    );
}
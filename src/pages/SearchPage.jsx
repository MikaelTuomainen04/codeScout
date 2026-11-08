import { SearchForm } from "../components/SearchForm";
import { SearchSummary } from "../components/SearchSummary";
import { Results } from "../components/Results";

export function SearchPage({ results, onResults, onAddToCompare}) {
    return (
        <>
        <SearchForm onResults={onResults} />
        <SearchSummary resultsCount={results.length} />
        <Results 
            results={results}
            onAddToCompare={onAddToCompare}
        />
        </>
    );
}
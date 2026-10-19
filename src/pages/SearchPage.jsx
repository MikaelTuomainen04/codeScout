import { SearchForm } from "../components/SearchForm";
import { SearchSummary } from "../components/SearchSummary";
import { Results } from "../components/Results";

export function SearchPage({ results, onResults }) {
    return (
        <>
        <SearchForm onResults={onResults} />
        <SearchSummary resultsCount={results.length} />
        <Results results={results} />
        </>
    );
}
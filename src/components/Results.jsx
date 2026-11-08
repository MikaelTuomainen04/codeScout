
export function Results({ results, onAddToCompare }) {
  return (
    <section id="search-results">
      <h2>Search results</h2>
      <ul>
        {results.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.full_name}</a>

            <button
            type="button"
            onClick={() => onAddToCompare(repo)} 
            >
              Add to comparision
          </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
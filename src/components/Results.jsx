
export function Results({ results }) {
  return (
    <section id="search-results">
      <h2>Search results</h2>
      <ul>
        {results.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.full_name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Results({ results, onAddToCompare }) {
  return (
    <section id="search-results">
      <h2>Search results</h2>

      <ul className="row g-3 list-unstyled">
        {results.map((repo) => (
          <li key={repo.id} className="col-12 col-md-6">
            <article className="card bg-dark text-light border-secondary h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title fs-5 text-break">
                  {repo.full_name}
                </h3>

                <p className="card-text text-start">
                  {repo.description || "No description available."}
                </p>

                <p className="text-start">
                  Language: {repo.language || "Not specified"}
                  <br />
                  Stars: {repo.stargazers_count}
                </p>

                <div className="d-flex flex-wrap gap-2 mt-auto">
                  <a
                    className="btn btn-outline-light"
                    href={repo.html_url}
                  >
                    View on GitHub
                  </a>

                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => onAddToCompare(repo)}
                  >
                    Add to comparison
                  </button>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
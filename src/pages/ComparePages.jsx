export function ComparePages( { projects, onRemoveFromCompare }) {
    return (
    <section>
      <h2>Compare projects</h2>

      {projects.length === 0 ? (
        <p>No projects selected for comparison yet.</p>
      ) : (
        <ul>
          {projects.map((repo) => (
            <li key={repo.id}>
              <h3>{repo.full_name}</h3>
              <p>{repo.description || "No description available."}</p>
              <p>Language: {repo.language || "Not specified"}</p>
              <p>Stars: {repo.stargazers_count}</p>
              <a href={repo.html_url}>View on GitHub</a>
              <button
                type = "button"
                onClick={() => onRemoveFromCompare(repo.id)}
                >
            Remove from comparision.
              </button>

            </li>
          ))}
        </ul>
      )}
    </section>
    );
}
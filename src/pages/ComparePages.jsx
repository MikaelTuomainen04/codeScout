import { ComparasionChart } from "../components/ComparasionChart";

export function ComparePages( { projects, onRemoveFromCompare }) {
    return (
    <section>
      <h2>Compare projects</h2>

      {projects.length > 0 && (
        <ComparasionChart projects={projects} />
        )}

      {projects.length === 0 ? (
        <p>No projects selected for comparison yet.</p>
      ) : (
        <ul className="row g-3 list-unstyled">
            {projects.map((repo) => (
                <li key={repo.id} className="col-12 col-md-6">
                <article className="card bg-dark text-light border-secondary h-100">
                    <div className="card-body d-flex flex-column">
                    <h3 className="card-title fs-5 text-break">
                        {repo.full_name}
                    </h3>

                    <p className="card-text text-start">
                        {repo.description || "No description available."}
                    </p>

                    <p className="text-start mb-1">
                        Language: {repo.language || "Not specified"}
                    </p>

                    <p className="text-start">
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
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => onRemoveFromCompare(repo.id)}
                        >
                        Remove from comparison
                        </button>
                    </div>
                    </div>
                </article>
                </li>
            ))}
            </ul>
      )}
    </section>
    );
}
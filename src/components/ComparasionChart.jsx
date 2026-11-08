import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function ComparasionChart({ projects }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: projects.map((repo) => repo.full_name),
        datasets: [
          {
            label: "GitHub stars",
            data: projects.map((repo) => repo.stargazers_count),
            backgroundColor: "#C4B5FD",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: "#fafafa" },
          },
        },
        scales: {
          x: {
            ticks: { color: "#fafafa" },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#fafafa",
              precision: 0,
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [projects]);

  return (
    <section>
      <h3>Project popularity</h3>
      <p>GitHub stars indicate popularity, not code quality.</p>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="GitHub stars of selected projects. Values are listed below."
      />
    </section>
  );
}

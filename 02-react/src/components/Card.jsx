import { useState } from "react";

export function Card({ job }) {
  const [isApplied, setIsApplied] = useState();

  const appliedHandler = () => {
    setIsApplied(!isApplied);
  };

  if (!job) return null;

  // const RESULTS_PER_PAGE = 3

  return (
    <article className="job-listing-card">
      <div>
        <h3>{job.titulo}</h3>
        <small>
          {job.empresa} | {job.ubicacion}
        </small>
        <p>{job.descripcion}</p>
      </div>
      <button
        className={`button-apply-job ${isApplied ? "is-applied" : ""}`}
        onClick={appliedHandler}
      >
        {isApplied ? "¡Aplicado!" : "Aplicar"}
      </button>
    </article>
  );
}

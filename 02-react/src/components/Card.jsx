import { useState } from "react";

export function Card({ job, filterValues }) {
  const [isApplied, setIsApplied] = useState();

  if (!job) return null;

  const appliedHandler = () => {
    setIsApplied(!isApplied);
  };

  const {
    data: { technology },
  } = job;

  const isTechnology = Array.isArray(technology)
    ? technology?.includes(filterValues?.technology)
    : technology === filterValues?.technology;

  // const RESULTS_PER_PAGE = 3

  return (
    (isTechnology || filterValues.technology === "") && (
      <article className="job-listing-card" key={job.id}>
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
    )
  );
}

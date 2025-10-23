import { useState } from "react";

export function Card({ job, filterValues }) {
  const [isApplied, setIsApplied] = useState(false);
  if (!job) return null;

  const isTechnology =
    job?.data?.technology === filterValues?.technology ||
    filterValues.technology === "";
  const isLocation =
    job?.data?.modalidad === filterValues?.location ||
    filterValues.location === "";
  const isLevel =
    job?.data?.nivel === filterValues?.experienceLevel ||
    filterValues.experienceLevel === "";

  return (
    isLevel &&
    isLocation &&
    isTechnology && (
      <article className="job-listing-card">
        <div>
          <h3>{job?.titulo}</h3>
          <small>
            {job?.empresa} | {job?.ubicacion}
          </small>
          <p>{job?.descripcion}</p>
        </div>

        <button
          className={`button-apply-job ${isApplied ? "is-applied" : ""}`}
          onClick={() => setIsApplied((p) => !p)}
        >
          {isApplied ? "¡Aplicado!" : "Aplicar"}
        </button>
      </article>
    )
  );
}

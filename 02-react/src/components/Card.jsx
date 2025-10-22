import { useState } from "react";

export function Card({ job, filterValues }) {
  const [isApplied, setIsApplied] = useState(false);
  if (!job) return null;

  const normalize = (value) =>
    Array.isArray(value) ? value : value ? [value] : [];

  const SELECTED = {
    technology: filterValues?.technology?.toLowerCase?.() || "",
    location: filterValues?.location?.toLowerCase?.() || "",
    level: filterValues?.experienceLevel?.toLowerCase?.() || "",
  };

  const FILTERS_DATA = {
    technology: normalize(job.FILTERS_DATA?.technology),
    location: job.FILTERS_DATA?.modalidad?.toLowerCase?.() || "",
    level: job.FILTERS_DATA?.nivel?.toLowerCase?.() || "",
  };

  const matchesTechnology =
    !SELECTED.technology ||
    FILTERS_DATA.technology.some(
      (t) => t?.toLowerCase?.() === SELECTED.technology
    );

  const matchesLocation =
    !SELECTED.location || FILTERS_DATA.location === SELECTED.location;

  const matchesLevel = !SELECTED.level || FILTERS_DATA.level === SELECTED.level;

  const matchesAll = matchesTechnology && matchesLocation && matchesLevel;

  if (!matchesAll) return null;

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
        onClick={() => setIsApplied((p) => !p)}
      >
        {isApplied ? "¡Aplicado!" : "Aplicar"}
      </button>
    </article>
  );
}

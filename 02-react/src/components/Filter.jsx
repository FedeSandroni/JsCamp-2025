import data from "../../public/filtersData.json";

export function Filter({ name, setFilterValues }) {
  const filter = data?.find?.((c) => c?.name === name);
  if (!filter) return null;

  const handleChange = (e) => {
    const { name, value } = e.target || {};
    setFilterValues?.((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <select name={filter?.name} id={`filter-${filter?.name}`} onChange={handleChange}>
      <option value="">{filter?.label}</option>

      {filter?.groups?.map?.((group) => (
        <optgroup key={group?.label} label={group?.label}>
          {group?.options?.map?.((opt) => (
            <option key={opt?.value} value={opt?.value}>
              {opt?.label}
            </option>
          ))}
        </optgroup>
      ))}

      {filter?.others?.map?.((opt) => (
        <option key={opt?.value} value={opt?.value}>
          {opt?.label}
        </option>
      ))}

      {filter?.options?.map?.((opt) => (
        <option key={opt?.value} value={opt?.value}>
          {opt?.label}
        </option>
      ))}
    </select>
  );
}

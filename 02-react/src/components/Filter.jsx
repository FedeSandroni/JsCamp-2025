import data from "../../public/filtersData.json";

export function Filter({ name }) {
  const card = data.find((c) => c.name === name);
  if (!card) return null;

  return (
    <select name={card.name} id={`filter-${card.name}`}>
      <option value="">{card.label}</option>

      {card?.groups &&
        card?.groups?.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </optgroup>
        ))}

      {card?.others &&
        card.others.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}

      {card?.options &&
        card.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
    </select>
  );
}

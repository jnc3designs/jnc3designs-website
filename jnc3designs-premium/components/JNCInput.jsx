export default function JNCInput({
  label,
  type = "text",
  name,
  value,
  defaultValue,
  placeholder = "",
  required = false,
  readOnly = false,
  rows,
  style = {},
}) {
  return (
    <div className="jnc-input-group" style={style}>
      {label && <label className="jnc-label">{label}</label>}

      {rows ? (
        <textarea
          className="jnc-input"
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          rows={rows}
        />
      ) : (
        <input
          className="jnc-input"
          type={type}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
        />
      )}
    </div>
  );
}

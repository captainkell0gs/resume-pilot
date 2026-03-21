export default function FormField({
    label, id, type = "text", value, onChange, children, placeholder = "", required = false }) {
        
    return (
        <div className="form-field">
        <label htmlFor={id}>{label}</label>

        {type === "textarea" ? (
            <textarea
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            />
        ) : type === "select" ? (
            <select
            id={id}
            value={value}
            onChange={onChange}
            required={required}
            >
            {children}
            </select>
        ) : (
            <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            />
        )}
        </div>
    );
}
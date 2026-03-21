import FormField from "../../ui/FormField";

export default function References ({ companyName, contactPerson, email, phone, onSave, onDelete, expanded, onToggle, onChange }) {
    function handleChange(e) {
        const { id, value } = e.target;
        onChange({ [id]: value });
    }

    return (
        <div className="experienceItem" >
            {!expanded && (
                <div className="itemPreview" onClick={onToggle}>
                    {companyName || "New Reference"}
                </div>
            )}
            {expanded && (
                <>
                <div className="formGrid">
                    <div className="form-row">
                        <FormField label="Company Name" id="companyName" value={companyName} onChange={handleChange} />
                        <FormField label="Contact Person" id="contactPerson" value={contactPerson} onChange={handleChange} />
                    </div>

                    <div className="form-row">
                        <FormField label="Email Address" id="email" type="email" value={email} onChange={handleChange} />
                        <FormField label="Phone Number" id="phone" type="tel" value={phone} onChange={handleChange} />
                    </div>

                </div>
                <div className="formActions">
                    <button type="button" onClick={onSave}>Save</button>
                    <button type="button" onClick={onDelete}>Delete</button>
                </div>
                </>
            )}
        </div>
    )
}

References.empty = () => ({
    id: crypto.randomUUID(),
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    expanded: true
});
import FormField from "../../ui/FormField";

export default function Education({ degree, city, school, startDate, endDate, description, onChange, onSave, onDelete, expanded, onToggle }) {

    function handleChange(e) {
        const { id, value } = e.target;
        onChange({ [id]: value });
    }

    return (
        <div className="experienceItem">
            {!expanded && (
                <div className="itemPreview" onClick={onToggle}>
                    {degree || "New Education"}
                </div>
            )}
            {expanded && (
                <>
                <div className="formGrid">
                    <div className="form-row">
                        <FormField label="Degree" id="degree" value={degree} onChange={handleChange} />
                        <FormField label="City" id="city" placeholder="e.g. New York" value={city} onChange={handleChange} />
                    </div>
                    <FormField label="School" id="school" value={school} onChange={handleChange} />
                    <div className="form-row">
                        <FormField label="Start Date" id="startDate" type="date" value={startDate} onChange={handleChange} />
                        <FormField label="End Date" id="endDate" type="date" value={endDate} onChange={handleChange} />
                    </div>
                    <FormField label="Description" id="description"  type="textarea" value={description} onChange={handleChange} />
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

Education.empty = () => ({
    id: crypto.randomUUID(),
    degree: "",
    city: "",
    school: "",
    startDate: "",
    endDate: "",
    description: "",
    expanded: true
});
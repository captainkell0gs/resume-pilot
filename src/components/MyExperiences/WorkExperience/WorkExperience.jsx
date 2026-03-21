import FormField from "../../ui/FormField";

export default function WorkExperience ({ jobTitle, city, company, startDate, endDate, description, onSave, onDelete, onToggle, onChange, expanded }) {
    
    function handleChange(e) {
        const { id, value } = e.target;
        onChange({ [id]: value });
    }
    
    return (
        <div className="experienceItem" >
            {!expanded && (
                <div className="itemPreview" onClick={onToggle}>
                    {jobTitle || "New Work Experience"}
                </div>
            )}
            {expanded && (
                <>
                <div className="formGrid">
                    <div className="form-row">
                        <FormField label="Job Title" id="jobTitle" placeholder="e.g. Software Engineer"  value={jobTitle} onChange={handleChange} />
                        <FormField label="City" id="city" placeholder="e.g. New York"  value={city} onChange={handleChange} />
                    </div>
                    <FormField label="Company" id="company" value={company} onChange={handleChange} />
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

WorkExperience.empty = () => ({
    id: crypto.randomUUID(),
    jobTitle: "",
    city: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    expanded: true
})

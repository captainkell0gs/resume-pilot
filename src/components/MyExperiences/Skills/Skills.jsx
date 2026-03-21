import FormField from "../../ui/FormField";

export default function Skills ({ skill, level, onSave, onDelete, expanded, onToggle, onChange }) {

    function handleChange(e) {
        const { id, value } = e.target;
        onChange({ [id]: value });
    }
    return (
        <div className="experienceItem" >
            {!expanded && (
                <div className="itemPreview" onClick={onToggle}>
                    {skill || "New Skill"}
                </div>
            )}            {expanded && (
                <>
                <div className="formGrid">
                    <div className="form-row">
                        <FormField label="Skill" id="skill"  placeholder="e.g. Microsoft Office" value={skill} onChange={handleChange} />
                        <FormField label="Level" id="level"  type="select" value={level} onChange={handleChange}>
                            <option value="">Select level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Expert">Expert</option>
                        </FormField>
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

Skills.empty = () => ({
    id: crypto.randomUUID(),
    skill: "",
    level: "",
    expanded: true
});
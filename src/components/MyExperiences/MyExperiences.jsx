import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";
import Skills from "./Skills/Skills";
import References from "./References/References";

function ExperienceSection({ label, items, setItems, itemComponent }) {

    function addItem() {
        setItems(prev => [...prev, itemComponent.empty()]);
    }

    function updateItem (index, newData) {
        setItems(prev => prev.map((item, i) =>
            i === index ? { ...item, ...newData } : item
        ));
    }

    function deleteItem(index) {
        setItems(prev => prev.filter((_, i) => i !== index));
    }

    function toggleItem(index) {
        setItems(prev => prev.map((item, i) =>
            i === index ? { ...item, expanded: !item.expanded } : item
        ));
    }

    function saveItem(index) {
        updateItem(index, { expanded: false });
    }

    const ItemComponent = itemComponent;

    return (
        <section className="experience-section">
            <h2>{label}</h2>

            {items.length === 0 ? (
                <div className="emptyState">
                    <p>No {label.toLowerCase()} added yet.</p>
                    <button className="btn btn--primary" onClick={addItem}>
                        Add {label.toLowerCase()}
                    </button>
                </div>
            ) : (
                <>
                    {items.map((item, index) => (
                        <ItemComponent
                            key={item.id}
                            {...item}
                            onChange={(data) => updateItem(index, data)}
                            onToggle={() => toggleItem(index)}
                            onSave={() => saveItem(index)}
                            onDelete={() => deleteItem(index)}
                        />
                    ))}

                    <button className="btn btn--secondary" onClick={addItem}>
                        Add another {label.toLowerCase()}
                    </button>
                </>
            )}
        </section>
    )
}

export default function MyExperiences ({
    educationList, setEducationList,
    workList, setWorkList,
    skillList, setSkillList,
    referenceList, setReferenceList, 
    onNext, onPrevious
}) {

    return (
        <main className="my-experiences">

            <ExperienceSection 
                label="Education & Qualifications"
                itemComponent={Education}
                items={educationList}
                setItems={setEducationList}
            />

            <ExperienceSection 
                label="Work Experience"
                itemComponent={WorkExperience}
                items={workList}
                setItems={setWorkList}
            />

            <ExperienceSection 
                label="Skills"
                itemComponent={Skills}
                items={skillList}
                setItems={setSkillList}
            />

            <ExperienceSection 
                label="References"
                itemComponent={References}
                items={referenceList}
                setItems={setReferenceList}
            />

            <div className="pageActions">
                <button className="btn btn--secondary" onClick={onPrevious}>
                    &lt; Previous
                </button>
                <button className="btn btn--primary" onClick={onNext}>
                    Next Step &gt;
                </button>
            </div>

        </main>
    )
}

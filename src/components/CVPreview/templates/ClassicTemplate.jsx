import { formatRange } from "../../ui/dateFormat";

export default function ClassicTemplate({
    generalInfo,
    educationList,
    workList,
    skillList,
    referenceList,
    }) {
    const fullName = `${generalInfo.firstName || ""} ${generalInfo.lastName || ""}`.trim();

    const validEducation = educationList.filter((e) => e.degree || e.school);
    const validWork = workList.filter((w) => w.jobTitle || w.company);
    const validSkills = skillList.filter((s) => s.skill);
    const validRefs = referenceList.filter((r) => r.contactPerson || r.companyName);

    const contactLine = [
        generalInfo.email,
        generalInfo.phone,
        generalInfo.city,
        generalInfo.linkedIn,
        generalInfo.website,
    ]
        .filter(Boolean)
        .join(" • ");

    return (
        <div className="cvClassic cvDocument">
        <header className="cvHeader cvHeader--centered">
            <h1>{fullName || "Your Name"}</h1>
            {contactLine && <p className="cvContactLine">{contactLine}</p>}
        </header>

        {validWork.length > 0 && (
            <section className="cvSection">
            <h2>Work Experience</h2>
            {validWork.map((job) => (
                <div key={job.id} className="cvItem">
                <div className="cvItemTop">
                    <h3>{job.jobTitle || "Job Title"}</h3>
                    {formatRange(job.startDate, job.endDate) && (
                    <span className="cvDate">{formatRange(job.startDate, job.endDate)}</span>
                    )}
                </div>

                {(job.company || job.city) && (
                    <p className="cvMeta">
                    {[job.company, job.city].filter(Boolean).join(" — ")}
                    </p>
                )}

                {job.description && <p className="cvDescription">{job.description}</p>}
                </div>
            ))}
            </section>
        )}

        {validEducation.length > 0 && (
            <section className="cvSection">
            <h2>Education</h2>
            {validEducation.map((edu) => (
                <div key={edu.id} className="cvItem">
                <div className="cvItemTop">
                    <h3>{edu.degree || "Degree"}</h3>
                    {formatRange(edu.startDate, edu.endDate) && (
                    <span className="cvDate">{formatRange(edu.startDate, edu.endDate)}</span>
                    )}
                </div>

                {(edu.school || edu.city) && (
                    <p className="cvMeta">
                    {[edu.school, edu.city].filter(Boolean).join(" — ")}
                    </p>
                )}

                {edu.description && <p className="cvDescription">{edu.description}</p>}
                </div>
            ))}
            </section>
        )}

        {validSkills.length > 0 && (
            <section className="cvSection">
            <h2>Skills</h2>
            <div className="cvSkillList">
                {validSkills.map((skill) => (
                <span key={skill.id} className="cvSkillTag">
                    {[skill.skill, skill.level].filter(Boolean).join(" — ")}
                </span>
                ))}
            </div>
            </section>
        )}

        {validRefs.length > 0 && (
            <section className="cvSection">
            <h2>References</h2>
            <div className="cvReferenceGrid">
                {validRefs.map((ref) => (
                <div key={ref.id} className="cvReferenceItem">
                    <p className="cvRefName">{ref.contactPerson}</p>
                    {ref.companyName && <p>{ref.companyName}</p>}
                    {(ref.email || ref.phone) && (
                    <p>{[ref.email, ref.phone].filter(Boolean).join(" • ")}</p>
                    )}
                </div>
                ))}
            </div>
            </section>
        )}
        </div>
    );
}
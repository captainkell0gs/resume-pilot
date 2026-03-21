import { formatRange } from "../../ui/dateFormat";

export default function MinimalTemplate({
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
        <div className="cvMinimal cvDocument">
        <header className="cvHeader cvHeader--minimal">
            <h1>{fullName || "Your Name"}</h1>
            {contactLine && <p className="cvContactLine">{contactLine}</p>}
        </header>

        {validWork.length > 0 && (
            <section className="cvSection">
            <h2>Experience</h2>
            {validWork.map((job) => (
                <div key={job.id} className="cvItem">
                <div className="cvItemTop">
                    <h3>{[job.jobTitle, job.company].filter(Boolean).join(" — ") || "Role"}</h3>
                    {formatRange(job.startDate, job.endDate) && (
                    <span className="cvDate">{formatRange(job.startDate, job.endDate)}</span>
                    )}
                </div>

                {job.city && <p className="cvMeta">{job.city}</p>}
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
                    <h3>{[edu.degree, edu.school].filter(Boolean).join(" — ") || "Education"}</h3>
                    {formatRange(edu.startDate, edu.endDate) && (
                    <span className="cvDate">{formatRange(edu.startDate, edu.endDate)}</span>
                    )}
                </div>

                {edu.city && <p className="cvMeta">{edu.city}</p>}
                {edu.description && <p className="cvDescription">{edu.description}</p>}
                </div>
            ))}
            </section>
        )}

        {validSkills.length > 0 && (
            <section className="cvSection">
            <h2>Skills</h2>
            <p className="cvInlineText">
                {validSkills
                .map((skill) => [skill.skill, skill.level].filter(Boolean).join(" — "))
                .join(" • ")}
            </p>
            </section>
        )}

        {validRefs.length > 0 && (
            <section className="cvSection">
            <h2>References</h2>
            {validRefs.map((ref) => (
                <div key={ref.id} className="cvReferenceItem">
                <p className="cvRefName">{ref.contactPerson}</p>
                <p>{[ref.companyName, ref.email, ref.phone].filter(Boolean).join(" • ")}</p>
                </div>
            ))}
            </section>
        )}
        </div>
    );
}
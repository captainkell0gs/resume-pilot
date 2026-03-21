export default function TemplateSelector({ template, setTemplate }) {

    return (
        <section className="templateSelector">
            <h2>Select Template</h2>

            <button
            onClick={() => setTemplate("classic") }
            className={template === "classic" ? "active" : ""}
            >
                Classic
            </button>

            <button
            onClick={() => setTemplate("modern") }
            className={template === "modern" ? "active" : ""}
            >
                Modern
            </button>

            <button
            onClick={() => setTemplate("minimal") }
            className={template === "minimal" ? "active" : ""}
            >
                Minimal
            </button>

        </section>
    )
}
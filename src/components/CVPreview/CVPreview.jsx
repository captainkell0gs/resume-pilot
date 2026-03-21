import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

import TemplateSelector from "./TemplateSelector";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import usePreviewScale from "../ui/usePreviewScale";

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;

export default function CVPreview({
    generalInfo,
    educationList,
    workList,
    skillList,
    referenceList,
    onPrevious,
    }) {
    const [template, setTemplate] = useState("classic");
    const [isDownloading, setIsDownloading] = useState(false);

    const cvRef = useRef(null);
    const canvasRef = useRef(null);

    const scale = usePreviewScale(canvasRef, PAGE_WIDTH, 32);

    function renderTemplate() {
        const data = {
        generalInfo,
        educationList,
        workList,
        skillList,
        referenceList,
        };

        switch (template) {
        case "modern":
            return <ModernTemplate {...data} />;
        case "minimal":
            return <MinimalTemplate {...data} />;
        default:
            return <ClassicTemplate {...data} />;
        }
    }

    async function handleDownloadPDF() {
        if (!cvRef.current) return;

        try {
        setIsDownloading(true);

        const fullName = `${generalInfo.firstName || ""} ${generalInfo.lastName || ""}`.trim();
        const fileName = fullName
            ? `${fullName.replace(/\s+/g, "_")}_CV.pdf`
            : "My_CV.pdf";

        const options = {
            margin: 0,
            filename: fileName,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            },
            jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
            },
            pagebreak: {
            mode: ["avoid-all", "css", "legacy"],
            },
        };

        await html2pdf().set(options).from(cvRef.current).save();
        } finally {
        setIsDownloading(false);
        }
    }

    return (
        <main className="cvPreview">
        <TemplateSelector template={template} setTemplate={setTemplate} />

        <div className="cvCanvas" ref={canvasRef}>
            <div
            className="cvPreviewShell"
            style={{ height: `${PAGE_HEIGHT * scale}px` }}
            >
            <div
                className="cvPreviewScale"
                style={{ transform: `scale(${scale})` }}
            >
                <div ref={cvRef}>
                {renderTemplate()}
                </div>
            </div>
            </div>
        </div>

        <div className="pageActions">
            <button className="btn btn--secondary" onClick={onPrevious}>
            Back
            </button>

            <button
            className="btn btn--primary"
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            >
            {isDownloading ? "Generating PDF..." : "Download PDF"}
            </button>
        </div>
        </main>
    );
}
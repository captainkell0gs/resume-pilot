import { User, Briefcase, LayoutTemplate } from "lucide-react";

export default function ProgressBar({ currentStep, onStepClick }) {
    const steps = [
        { label: "Personal", icon: User },
        { label: "Experiences", icon: Briefcase },
        { label: "Template", icon: LayoutTemplate },
    ];

    const fillWidth = ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <div className="progressWrapper">
        <div className="progressTrack">
            <div className="progressLine"></div>
            <div
            className="progressFill"
            style={{ width: `${fillWidth}%` }}
            ></div>
        </div>

        <div className="progressBar">
            {steps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = index + 1;
            const isActive = currentStep === stepNumber;
            const isCompleted = currentStep > stepNumber;

            return (
                <button
                key={step.label}
                type="button"
                className={`progressStep ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                onClick={() => onStepClick(stepNumber)}
                >
                <div className="stepNumber">
                    <Icon size={18} strokeWidth={2.4} />
                </div>
                <span className="stepLabel">{step.label}</span>
                </button>
            );
            })}
        </div>
        </div>
    );
}
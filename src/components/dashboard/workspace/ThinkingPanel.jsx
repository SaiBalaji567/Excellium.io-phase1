import { useEffect, useState } from "react";
import thinkingSteps from "../../../mock/thinkingSteps";

function ThinkingPanel({ onComplete }) {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep >= thinkingSteps.length) {
            const timer = setTimeout(() => {
                onComplete();
            }, 800);

            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
        }, 900);

        return () => clearTimeout(timer);
    }, [currentStep, onComplete]);

    const progress =
        (Math.min(currentStep, thinkingSteps.length) /
            thinkingSteps.length) *
        100;

    return (
        <div
            className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]/60
                backdrop-blur-xl
                p-8
                animate-[fadeIn_.4s]
            "
        >
            <div className="mb-8">

                <h2 className="text-2xl font-semibold text-[var(--green)]">
                    🧠 Excellium Intelligence
                </h2>

                <p className="mt-2 text-[var(--text-secondary)]">
                    Interpreting your strategy...
                </p>

            </div>

            <div className="mb-8 h-2 overflow-hidden rounded-full bg-[var(--border)]">

                <div
                    className="h-full rounded-full bg-[var(--green)] transition-all duration-700 ease-out"
                    style={{
                        width: `${progress}%`,
                    }}
                />

            </div>

            <div className="space-y-5">

                {thinkingSteps.map((step, index) => {

                    if (index < currentStep) {
                        return (
                            <div
                                key={index}
                                className="animate-[fadeIn_.35s] text-[var(--text-primary)]"
                            >
                                ✓ {step}
                            </div>
                        );
                    }

                    if (index === currentStep) {
                        return (
                            <div
                                key={index}
                                className="animate-pulse font-medium text-[var(--green)]"
                            >
                                ⟳ {step}
                            </div>
                        );
                    }

                    return (
                        <div
                            key={index}
                            className="text-[var(--text-muted)]"
                        >
                            ○ {step}
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default ThinkingPanel;
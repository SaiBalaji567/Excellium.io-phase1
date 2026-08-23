import { Check } from "lucide-react";

const steps = [
    "Describe",
    "Interpret",
    "Clarify",
    "Backtest",
    "Report",
    "Code",
];

const stageMap = {
    describe: 1,
    interpret: 2,
    clarify: 3,
    backtest: 4,
    report: 5,
    code: 6,
};

function ProgressTracker({ workflowStage }) {
    const currentStep = stageMap[workflowStage] ?? 1;

    const progress =
        currentStep === 1
            ? 0
            : ((currentStep - 1) / (steps.length - 1)) * 100;

    return (
        <section className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">

            <div
                className="
                    rounded-3xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-secondary)]/60
                    px-5
                    py-7
                    backdrop-blur-xl
                    sm:px-8
                    sm:py-8
                    lg:px-10
                "
            >

                <div className="relative">

                    {/* Background Line */}
                    <div
                        className="
                            absolute
                            left-5
                            right-5
                            top-5
                            h-[2px]
                            rounded-full
                            bg-[var(--border)]
                            sm:left-6
                            sm:right-6
                            sm:top-6
                        "
                    />

                    {/* Progress Line */}
                    <div
                        className="
                            absolute
                            left-5
                            top-5
                            h-[2px]
                            rounded-full
                            bg-[var(--green)]
                            transition-[width]
                            duration-700
                            ease-out
                            sm:left-6
                            sm:top-6
                        "
                        style={{
                            width: `calc(${progress}% - ${
                                progress === 100 ? 0 : 0
                            }px)`,
                            right:
                                progress === 100
                                    ? "1.5rem"
                                    : "auto",
                        }}
                    />

                    <div className="relative flex justify-between">

                        {steps.map((step, index) => {
                            const stepNumber = index + 1;

                            const completed =
                                stepNumber < currentStep;

                            const active =
                                stepNumber === currentStep;

                            return (
                                <div
                                    key={step}
                                    className="
                                        flex
                                        min-w-0
                                        flex-col
                                        items-center
                                    "
                                >

                                    <div
                                        className={`
                                            relative
                                            z-10
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            text-xs
                                            font-medium
                                            transition-all
                                            duration-500
                                            sm:h-12
                                            sm:w-12
                                            sm:text-sm

                                            ${
                                                completed
                                                    ? `
                                                        border-[var(--green)]
                                                        bg-[var(--green)]
                                                        text-black
                                                    `
                                                    : active
                                                        ? `
                                                            border-[var(--green)]
                                                            bg-[var(--bg-secondary)]
                                                            text-[var(--green)]
                                                            shadow-[0_0_24px_rgba(45,227,139,.22)]
                                                        `
                                                        : `
                                                            border-[var(--border)]
                                                            bg-[var(--bg-primary)]
                                                            text-[var(--text-muted)]
                                                        `
                                            }
                                        `}
                                    >
                                        {completed ? (
                                            <Check
                                                size={17}
                                                strokeWidth={2.5}
                                            />
                                        ) : (
                                            stepNumber
                                        )}

                                        {active && (
                                            <span
                                                className="
                                                    absolute
                                                    inset-[-5px]
                                                    rounded-full
                                                    border
                                                    border-[var(--green)]/20
                                                    animate-pulse
                                                "
                                            />
                                        )}
                                    </div>

                                    <span
                                        className={`
                                            mt-3
                                            text-[10px]
                                            transition-all
                                            duration-300
                                            sm:mt-4
                                            sm:text-xs
                                            lg:text-sm

                                            ${
                                                active
                                                    ? "font-semibold text-[var(--green)]"
                                                    : completed
                                                        ? "text-[var(--text-primary)]"
                                                        : "text-[var(--text-muted)]"
                                            }
                                        `}
                                    >
                                        {step}
                                    </span>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProgressTracker;
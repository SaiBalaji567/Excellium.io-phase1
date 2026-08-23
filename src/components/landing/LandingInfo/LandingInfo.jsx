import Container from "../../common/Container/Container";
import Section from "../../common/Section/Section";
import Card from "../../common/Card/Card";
import { info } from "../../../constants/info";

function LandingInfo() {
    return (
        <Section>
            <Container>

                <div className="mx-auto max-w-4xl text-center">

                    <span className="inline-flex rounded-full border border-[var(--green)]/20 bg-[var(--green)]/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green)]">
                        Why Excellium
                    </span>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
                        {info.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                        {info.description}
                    </p>

                </div>

                <div className="mt-20 grid gap-8 lg:grid-cols-2">

                    <Card className="p-8">

                        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                            Why Excellium?
                        </h3>

                        <ul className="mt-8 space-y-5">

                            {info.points.map((point) => (
                                <li
                                    key={point}
                                    className="flex items-start gap-4"
                                >
                                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--green)]" />

                                    <span className="leading-7 text-[var(--text-secondary)]">
                                        {point}
                                    </span>
                                </li>
                            ))}

                        </ul>

                    </Card>

                    <Card className="p-8">

                        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                            {info.workflowTitle}
                        </h3>

                        <div className="mt-8 space-y-5">

                            {info.workflow.map((step, index) => {

                                const isComingSoon =
                                    step.status === "coming-soon";

                                return (
                                    <div
                                        key={step.title}
                                        className={`
                                            flex
                                            items-center
                                            justify-between
                                            gap-4
                                            rounded-2xl
                                            border
                                            p-5
                                            transition-all
                                            duration-300

                                            ${
                                                isComingSoon
                                                    ? `
                                                        border-[var(--border)]
                                                        bg-[var(--bg-secondary)]
                                                        opacity-70
                                                    `
                                                    : `
                                                        border-[var(--border)]
                                                        bg-[var(--bg-secondary)]
                                                        hover:border-[var(--green)]/60
                                                    `
                                            }
                                        `}
                                    >

                                        <div className="flex min-w-0 items-center gap-4">

                                            <div
                                                className={`
                                                    flex
                                                    h-11
                                                    w-11
                                                    flex-shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    font-bold

                                                    ${
                                                        isComingSoon
                                                            ? `
                                                                bg-[var(--bg-primary)]
                                                                text-[var(--text-muted)]
                                                            `
                                                            : `
                                                                bg-[var(--green)]/10
                                                                text-[var(--green)]
                                                            `
                                                    }
                                                `}
                                            >
                                                {index + 1}
                                            </div>

                                            <span
                                                className={`
                                                    leading-7

                                                    ${
                                                        isComingSoon
                                                            ? "text-[var(--text-muted)]"
                                                            : "text-[var(--text-secondary)]"
                                                    }
                                                `}
                                            >
                                                {step.title}
                                            </span>

                                        </div>

                                        <span
                                            className={`
                                                flex-shrink-0
                                                rounded-full
                                                px-3
                                                py-1
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-wider

                                                ${
                                                    isComingSoon
                                                        ? `
                                                            border
                                                            border-[var(--border)]
                                                            text-[var(--text-muted)]
                                                        `
                                                        : `
                                                            bg-[var(--green)]/10
                                                            text-[var(--green)]
                                                        `
                                                }
                                            `}
                                        >
                                            {isComingSoon
                                                ? "Coming Soon"
                                                : "Live"}
                                        </span>

                                    </div>
                                );
                            })}

                        </div>

                    </Card>

                </div>

            </Container>
        </Section>
    );
}

export default LandingInfo;
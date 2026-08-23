import Container from "../../common/Container/Container";
import Section from "../../common/Section/Section";
import Card from "../../common/Card/Card";
import { roadmap } from "../../../constants/roadmap";

function Roadmap() {
    return (
        <Section>
            <Container>

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="inline-flex rounded-full border border-[var(--green)]/20 bg-[var(--green)]/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green)]">
                        Product Roadmap
                    </span>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
                        The Journey Ahead
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        Every phase expands Excellium with new AI capabilities,
                        broker connectivity, automation, and institutional-grade
                        trading infrastructure.
                    </p>

                </div>

                <div className="grid items-stretch gap-8 lg:grid-cols-3">

                    {roadmap.map((phase) => {

                        const isLive = phase.status === "Live";

                        return (
                            <Card
                                key={phase.phase}
                                className="flex h-full flex-col p-8"
                            >

                                <div className="mb-8 flex items-center justify-between gap-4">

                                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                        {phase.phase}
                                    </h3>

                                    <span
                                        className={`
                                            flex-shrink-0
                                            rounded-full
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold

                                            ${
                                                isLive
                                                    ? `
                                                        bg-[var(--green)]/10
                                                        text-[var(--green)]
                                                    `
                                                    : `
                                                        border
                                                        border-[var(--border)]
                                                        bg-[var(--bg-secondary)]
                                                        text-[var(--text-secondary)]
                                                    `
                                            }
                                        `}
                                    >
                                        {phase.status}
                                    </span>

                                </div>

                                <ul className="flex-1 space-y-5">

                                    {phase.features.map((feature) => (

                                        <li
                                            key={feature}
                                            className="flex items-start gap-4"
                                        >

                                            <span
                                                className={`
                                                    mt-2
                                                    h-2.5
                                                    w-2.5
                                                    flex-shrink-0
                                                    rounded-full

                                                    ${
                                                        isLive
                                                            ? "bg-[var(--green)]"
                                                            : "bg-[var(--text-muted)]"
                                                    }
                                                `}
                                            />

                                            <span
                                                className={`
                                                    leading-7
                                                    ${
                                                        isLive
                                                            ? "text-[var(--text-secondary)]"
                                                            : "text-[var(--text-muted)]"
                                                    }
                                                `}
                                            >
                                                {feature}
                                            </span>

                                        </li>

                                    ))}

                                </ul>

                            </Card>
                        );
                    })}

                </div>

            </Container>
        </Section>
    );
}

export default Roadmap;
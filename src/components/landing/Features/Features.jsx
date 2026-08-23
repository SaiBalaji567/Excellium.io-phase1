import { Link } from "react-router-dom";
import Container from "../../common/Container/Container";
import Section from "../../common/Section/Section";
import Card from "../../common/Card/Card";
import { features } from "../../../constants/features";

function Features() {
    return (
        <Section id="features" className="relative">
            <Container>

                <div className="mb-20 text-center">

                    <span className="inline-flex rounded-full border border-[var(--green)]/20 bg-[var(--green)]/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--green)]">
                        Platform Modules
                    </span>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
                        Everything you need to build,
                        <br />
                        validate and deploy strategies.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                        Phase 1 focuses on the AI Strategy Builder while the
                        remaining modules are under active development.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature) => (

                        <Card
                            key={feature.id}
                            className="group p-8"
                        >

                            <div className="flex items-start justify-between">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--green)]/20 bg-[var(--green)]/10 text-2xl text-[var(--green)]">
                                    {feature.icon}
                                </div>

                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                        feature.status === "Live"
                                            ? "bg-[var(--green)]/10 text-[var(--green)]"
                                            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                                    }`}
                                >
                                    {feature.status}
                                </span>

                            </div>

                            <h3 className="mt-8 text-2xl font-semibold text-[var(--text-primary)]">
                                {feature.title}
                            </h3>

                            <p className="mt-5 leading-7 text-[var(--text-secondary)]">
                                {feature.description}
                            </p>

                            {feature.status === "Live" ? (
                                <Link
                                    to={feature.route}
                                    className="mt-8 inline-flex items-center text-sm font-semibold text-[var(--green)] transition-all duration-300 group-hover:translate-x-1"
                                >
                                    {feature.link}
                                </Link>
                            ) : (
                                <span className="mt-8 inline-flex text-sm text-[var(--text-muted)]">
                                    {feature.link}
                                </span>
                            )}

                        </Card>

                    ))}

                </div>

            </Container>
        </Section>
    );
}

export default Features;
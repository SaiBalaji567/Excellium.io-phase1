import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { heroContent } from "../../../constants/landing";

function Hero() {
    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-[var(--bg-primary)] py-32"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--green)]/10 blur-[140px]" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,227,139,0.08),transparent_55%)]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            <Container>
                <div className="relative mx-auto max-w-7xl">

                    <div className="fade-up rounded-3xl border border-[var(--border)] bg-white/[0.03] px-8 py-16 backdrop-blur-xl md:px-16">

                        {/* Eyebrow */}
                        <span className="inline-flex select-none items-center rounded-full border border-[var(--green)]/20 bg-[var(--green)]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--green)]">
                            {heroContent.eyebrow}
                        </span>

                        {/* Heading */}
                        <h1 className="mt-8 font-mono text-5xl font-semibold leading-[1.12] tracking-tight text-[var(--text-primary)] md:text-7xl">
                            Build institutional-grade
                            <br />
                            trading strategies
                            <br />
                            with <span className="text-[var(--green)]">AI.</span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                            {heroContent.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

                            <Link
                                to="/signup"
                                aria-label="Start Building"
                            >
                                <Button size="lg">
                                    {heroContent.primaryButton}
                                </Button>
                            </Link>

                            <a
                                href="#features"
                                aria-label="Explore Features"
                            >
                                <Button
                                    variant="secondary"
                                    size="lg"
                                >
                                    {heroContent.secondaryButton}
                                </Button>
                            </a>

                        </div>

                        {/* Highlights */}
                        <div className="mt-16 grid gap-5 border-t border-[var(--border)] pt-10 md:grid-cols-3">

                            <div className="rounded-2xl border border-transparent bg-[var(--bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)]">
                                <p className="font-mono text-3xl font-bold text-[var(--green)]">
                                    AI
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                                    Natural Language → Strategy Generation
                                </p>
                            </div>

                            <div className="rounded-2xl border border-transparent bg-[var(--bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)]">
                                <p className="font-mono text-3xl font-bold text-[var(--green)]">
                                    MQL5
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                                    Pine Script & MetaTrader Automation
                                </p>
                            </div>

                            <div className="rounded-2xl border border-transparent bg-[var(--bg-secondary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--green)]">
                                <p className="font-mono text-3xl font-bold text-[var(--green)]">
                                    24/7
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                                    Build • Backtest • Optimize • Deploy
                                </p>
                            </div>

                        </div>

                        {/* Bottom Note */}
                        <p className="mt-10 font-mono text-xs tracking-wide text-[var(--text-muted)]">
                            {heroContent.note}
                        </p>

                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;
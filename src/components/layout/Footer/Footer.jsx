import { Link } from "react-router-dom";
import Container from "../../common/Container/Container";

function Footer() {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
            <Container>
                <div className="py-20">

                    <div className="grid gap-12 lg:grid-cols-3">

                        <div>
                            <h2 className="font-mono text-3xl font-bold tracking-[0.18em] text-[var(--text-primary)]">
                                EXCELLIUM
                            </h2>

                            <p className="mt-6 max-w-sm leading-8 text-[var(--text-secondary)]">
                                AI-powered trading intelligence platform for
                                building, validating and deploying
                                institutional-grade trading strategies.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
                                Platform
                            </h3>

                            <nav className="flex flex-col gap-4">
                                <Link
                                    to="/"
                                    className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--green)]"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/signup"
                                    className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--green)]"
                                >
                                    Get Started
                                </Link>

                                <a
                                    href="/#roadmap"
                                    className="text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--green)]"
                                >
                                    Roadmap
                                </a>
                            </nav>
                        </div>

                        <div>
                            <h3 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">
                                Contact
                            </h3>

                            <p className="leading-8 text-[var(--text-secondary)]">
                                Building the next generation of AI-assisted
                                trading infrastructure.
                            </p>
                        </div>

                    </div>

                    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">

                        <p className="text-sm text-[var(--text-muted)]">
                            © 2026 Excellium. All rights reserved.
                        </p>

                        <p className="text-sm text-[var(--text-muted)]">
                            Build • Backtest • Optimize • Deploy
                        </p>

                    </div>

                </div>
            </Container>
        </footer>
    );
}

export default Footer;
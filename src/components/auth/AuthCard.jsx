import Container from "../common/Container/Container";

function AuthCard({ title, subtitle, children }) {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--green)]/10 blur-[140px]" />

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
                <div className="relative flex min-h-screen items-center justify-center py-20">

                    <div className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">

                        {/* Logo */}
                        <h1 className="text-center font-mono text-3xl font-bold tracking-[0.2em] text-[var(--text-primary)]">
                            EXCELLIUM
                        </h1>

                        {/* Heading */}
                        <h2 className="mt-10 text-center text-3xl font-semibold text-[var(--text-primary)]">
                            {title}
                        </h2>

                        {/* Subtitle */}
                        <p className="mx-auto mt-4 max-w-sm text-center leading-7 text-[var(--text-secondary)]">
                            {subtitle}
                        </p>

                        {/* Content */}
                        <div className="mt-10">
                            {children}
                        </div>

                    </div>

                </div>
            </Container>

        </section>
    );
}

export default AuthCard;
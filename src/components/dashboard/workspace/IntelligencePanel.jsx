function IntelligencePanel({ children }) {
    return (
        <div
            className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]/60
                backdrop-blur-xl
                p-8
                min-h-[520px]
                shadow-[0_0_40px_rgba(0,0,0,.25)]
                animate-[fadeIn_.4s]
            "
        >
            <div className="mb-8 flex items-center gap-4">

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--green)]
                        bg-[var(--green)]/10
                    "
                >
                    🧠
                </div>

                <div>

                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                        Excellium Intelligence
                    </h2>

                    <p className="text-sm text-[var(--text-muted)]">
                        Institutional Strategy Analysis Engine
                    </p>

                </div>

            </div>

            {children}

        </div>
    );
}

export default IntelligencePanel;
import { CircleUserRound } from "lucide-react";

function DashboardNavbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,12,16,0.85)] backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

                {/* Logo */}
                <h1 className="font-mono text-2xl font-bold tracking-[0.2em] text-[var(--text-primary)]">
                    EXCELLIUM
                </h1>

                {/* Profile */}
                <button
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--bg-secondary)]
                        text-[var(--text-secondary)]
                        transition-all
                        duration-300
                        hover:border-[var(--green)]
                        hover:bg-[var(--green)]/10
                        hover:text-[var(--green)]
                    "
                >
                    <CircleUserRound size={22} />
                </button>

            </div>
        </header>
    );
}

export default DashboardNavbar;
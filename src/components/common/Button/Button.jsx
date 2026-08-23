import clsx from "clsx";

function Button({
    children,
    variant = "primary",
    size = "md",
    type = "button",
    className = "",
    disabled = false,
    ...props
}) {
    const base =
        "inline-flex items-center justify-center rounded-2xl font-mono font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary:
            "bg-[var(--green)] text-black shadow-[var(--shadow-button)] hover:-translate-y-1 hover:bg-[var(--green-light)] hover:shadow-[var(--shadow-button-hover)] focus:ring-[var(--green)]/40",

        secondary:
            "border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--green)] hover:bg-[var(--bg-card)] focus:ring-[var(--green)]/30",

        ghost:
            "bg-transparent text-[var(--green)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] focus:ring-[var(--green)]/30",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-7 py-3 text-sm",
        lg: "px-9 py-4 text-base",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                base,
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
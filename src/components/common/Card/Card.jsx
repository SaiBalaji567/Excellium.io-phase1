import clsx from "clsx";

function Card({
    children,
    className = "",
    hover = true,
    ...props
}) {
    return (
        <div
            className={clsx(
                "rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] transition-all duration-300",
                hover &&
                    "hover:-translate-y-2 hover:border-[var(--green)] hover:shadow-[var(--shadow-lg)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export default Card;
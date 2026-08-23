function Section({ children, className = "", id }) {
    return (
        <section
            id={id}
            className={`py-24 ${className}`}
        >
            {children}
        </section>
    );
}

export default Section;
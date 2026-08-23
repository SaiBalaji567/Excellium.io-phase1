function Container({ children }) {
    return (
        <div
            className="mx-auto w-full px-6 lg:px-8"
            style={{ maxWidth: "var(--container)" }}
        >
            {children}
        </div>
    );
}

export default Container;
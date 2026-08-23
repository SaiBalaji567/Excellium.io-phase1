const content = {
    interpret: {
        title: "Interpret Strategy",
        description:
            "Review Excellium's understanding of your trading strategy before moving forward.",
    },

    clarify: {
        title: "Clarify Strategy",
        description:
            "Resolve any ambiguities so the strategy can be translated accurately.",
    },

    backtest: {
        title: "Backtesting",
        description:
            "Running historical simulations and validating the strategy.",
    },

    report: {
        title: "Performance Report",
        description:
            "Analyze the generated statistics and performance metrics.",
    },

    code: {
        title: "Generated Code",
        description:
            "Production-ready trading code generated from the validated strategy.",
    },
};

function WorkspaceHeader({ workflowStage }) {
    const stage = content[workflowStage];

    return (
        <div className="mb-8">

            <h1 className="font-mono text-5xl font-bold text-[var(--text-primary)]">
                {stage.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                {stage.description}
            </p>

        </div>
    );
}

export default WorkspaceHeader;
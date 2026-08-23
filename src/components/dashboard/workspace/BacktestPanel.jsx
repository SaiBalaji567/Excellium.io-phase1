import { useEffect, useState } from "react";

const steps = [
    "Compiling strategy logic...",
    "Loading historical market data...",
    "Detecting liquidity sweeps...",
    "Identifying Fair Value Gaps...",
    "Validating entry conditions...",
    "Running historical trade simulations...",
    "Calculating performance metrics...",
    "Stress testing risk model...",
    "Generating institutional report...",
];

const equityData = [
    100, 104, 101, 109, 116, 113, 121, 128, 125,
    137, 145, 142, 151, 160, 157, 169, 181, 176,
    186, 195, 191, 204, 218, 231, 244, 252, 267,
    281, 286.4,
];

const drawdownData = [
    0, -1.2, -3.8, -2.1, -1.4, -4.7, -2.3, -1.1,
    -2.8, -1.5, -3.2, -1.7, -2.4, -1.3, -3.6, -2.1,
    -1.2, -4.1, -2.8, -1.6, -2.4, -1.1, -1.8, -0.9,
    -1.4, -0.8, -1.2, -0.6, -0.4,
];

const monthlyReturns = [
    4.2, -1.8, 7.4, 5.1, -2.3, 8.6,
    6.2, 3.9, -1.4, 9.1, 5.7, 4.8,
];

function buildLinePath(data, width, height, min, max) {
    return data
        .map((value, index) => {
            const x =
                (index / (data.length - 1)) * width;

            const y =
                height -
                ((value - min) / (max - min)) * height;

            return `${index === 0 ? "M" : "L"} ${x} ${y}`;
        })
        .join(" ");
}

function Metric({ label, value, positive = false }) {
    return (
        <div
            className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--bg-primary)]
                p-5
            "
        >
            <p className="text-sm text-[var(--text-muted)]">
                {label}
            </p>

            <p
                className={`mt-2 text-2xl font-semibold ${
                    positive
                        ? "text-[var(--green)]"
                        : "text-[var(--text-primary)]"
                }`}
            >
                {value}
            </p>
        </div>
    );
}

function PerformanceReport() {
    const equityPath = buildLinePath(
        equityData,
        700,
        240,
        90,
        300
    );

    const drawdownPath = buildLinePath(
        drawdownData,
        700,
        180,
        -5,
        1
    );

    const maxMonthlyReturn = Math.max(
        ...monthlyReturns.map(Math.abs)
    );

    return (
        <section className="space-y-8">

            <div>
                <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
                    Performance Report
                </h2>

                <p className="mt-2 text-[var(--text-secondary)]">
                    Historical validation completed successfully.
                </p>
            </div>

            <div
                className="
                    grid
                    grid-cols-2
                    gap-4
                    md:grid-cols-4
                "
            >
                <Metric
                    label="Net Return"
                    value="+186.4%"
                    positive
                />

                <Metric
                    label="Win Rate"
                    value="68.4%"
                    positive
                />

                <Metric
                    label="Profit Factor"
                    value="2.31"
                    positive
                />

                <Metric
                    label="Max Drawdown"
                    value="4.7%"
                />

                <Metric
                    label="Sharpe Ratio"
                    value="1.82"
                    positive
                />

                <Metric
                    label="Total Trades"
                    value="247"
                />

                <Metric
                    label="Expectancy"
                    value="+0.47R"
                    positive
                />

                <Metric
                    label="Avg. Trade"
                    value="+0.76%"
                    positive
                />
            </div>

            <div
                className="
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-primary)]
                    p-6
                "
            >
                <div className="mb-5">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">
                        Equity Curve
                    </h3>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Simulated cumulative strategy performance
                    </p>
                </div>

                <div className="w-full overflow-hidden">
                    <svg
                        viewBox="0 0 700 240"
                        className="h-auto w-full"
                        role="img"
                        aria-label="Equity curve showing simulated strategy growth"
                    >
                        <line
                            x1="0"
                            y1="210"
                            x2="700"
                            y2="210"
                            stroke="currentColor"
                            opacity="0.12"
                        />

                        <line
                            x1="0"
                            y1="120"
                            x2="700"
                            y2="120"
                            stroke="currentColor"
                            opacity="0.08"
                        />

                        <line
                            x1="0"
                            y1="30"
                            x2="700"
                            y2="30"
                            stroke="currentColor"
                            opacity="0.08"
                        />

                        <path
                            d={equityPath}
                            fill="none"
                            stroke="var(--green)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div
                className="
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-primary)]
                    p-6
                "
            >
                <div className="mb-5">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">
                        Drawdown Curve
                    </h3>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Simulated portfolio drawdown
                    </p>
                </div>

                <svg
                    viewBox="0 0 700 180"
                    className="h-auto w-full"
                    role="img"
                    aria-label="Drawdown curve showing simulated portfolio drawdowns"
                >
                    <line
                        x1="0"
                        y1="30"
                        x2="700"
                        y2="30"
                        stroke="currentColor"
                        opacity="0.08"
                    />

                    <line
                        x1="0"
                        y1="90"
                        x2="700"
                        y2="90"
                        stroke="currentColor"
                        opacity="0.08"
                    />

                    <line
                        x1="0"
                        y1="150"
                        x2="700"
                        y2="150"
                        stroke="currentColor"
                        opacity="0.12"
                    />

                    <path
                        d={drawdownPath}
                        fill="none"
                        stroke="var(--text-secondary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div
                className="
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-primary)]
                    p-6
                "
            >
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-[var(--text-primary)]">
                        Monthly Returns
                    </h3>

                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Simulated monthly performance distribution
                    </p>
                </div>

                <div className="grid grid-cols-6 gap-3 md:grid-cols-12">

                    {monthlyReturns.map((value, index) => {
                        const height = Math.max(
                            12,
                            (Math.abs(value) /
                                maxMonthlyReturn) *
                                100
                        );

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2"
                            >
                                <div className="flex h-32 items-end">
                                    <div
                                        className="
                                            w-5
                                            rounded-t-md
                                            bg-[var(--green)]
                                        "
                                        style={{
                                            height: `${height}%`,
                                            opacity:
                                                value > 0
                                                    ? 1
                                                    : 0.35,
                                        }}
                                    />
                                </div>

                                <span className="text-xs text-[var(--text-muted)]">
                                    {index + 1}
                                </span>

                                <span
                                    className={
                                        value >= 0
                                            ? "text-xs text-[var(--green)]"
                                            : "text-xs text-[var(--text-muted)]"
                                    }
                                >
                                    {value > 0 ? "+" : ""}
                                    {value}%
                                </span>
                            </div>
                        );
                    })}

                </div>
            </div>

            <div
                className="
                    rounded-2xl
                    border
                    border-[var(--green)]/20
                    bg-[var(--green)]/5
                    p-7
                "
            >
                <h3 className="text-lg font-medium text-[var(--green)]">
                    AI Performance Analysis
                </h3>

                <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                    The strategy demonstrates a positive simulated
                    expectancy with a strong profit factor and controlled
                    drawdown. Performance remains relatively consistent
                    across the tested period, while the equity curve shows
                    sustained growth with limited periods of contraction.
                </p>

                <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                    The primary strength is the combination of a high
                    win rate and disciplined position management. The
                    simulated maximum drawdown remains below 5%, indicating
                    comparatively controlled downside risk within this
                    demonstration dataset.
                </p>

                <p className="mt-4 leading-8 text-[var(--text-secondary)]">
                    These figures are simulated prototype results and are
                    not live or independently validated trading performance.
                </p>
            </div>

            <div
                className="
                    rounded-2xl
                    border
                    border-[var(--green)]/30
                    bg-[var(--green)]/5
                    p-7
                "
            >
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Strategy Approval Required
                </h3>

                <p className="mt-3 text-lg leading-8 text-[var(--text-primary)]">
                    Are you satisfied with the strategy's performance,
                    or would you like to make changes before code generation?
                </p>

                <p className="mt-3 text-sm text-[var(--text-muted)]">
                    Code generation will only become available after you
                    approve the current strategy performance.
                </p>
            </div>

        </section>
    );
}

function BacktestPanel({ setWorkflowStage }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (currentStep >= steps.length - 1) {
            const timer = setTimeout(() => {
                setCompleted(true);
                setWorkflowStage("report");
            }, 1000);

            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setCurrentStep((prev) => prev + 1);
        }, 900);

        return () => clearTimeout(timer);
    }, [currentStep, setWorkflowStage]);

    if (completed) {
        return <PerformanceReport />;
    }

    const progress =
        ((currentStep + 1) / steps.length) * 100;

    return (
        <section
            className="
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--bg-secondary)]
                p-10
            "
        >
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
                Historical Validation
            </h2>

            <p className="mt-3 text-[var(--text-secondary)]">
                Running institutional-grade simulations on historical market
                data.
            </p>

            <div className="mt-10">

                <div className="mb-4 flex justify-between text-sm text-[var(--text-secondary)]">
                    <span>Progress</span>

                    <span>
                        {Math.round(progress)}%
                    </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[var(--bg-primary)]">

                    <div
                        className="
                            h-full
                            rounded-full
                            bg-[var(--green)]
                            transition-all
                            duration-700
                        "
                        style={{
                            width: `${progress}%`,
                        }}
                    />

                </div>

            </div>

            <div className="mt-10 space-y-5">

                {steps.map((step, index) => {
                    const done = index < currentStep;
                    const active = index === currentStep;

                    return (
                        <div
                            key={step}
                            className="flex items-center gap-4"
                        >
                            <span
                                className={
                                    done
                                        ? "text-[var(--green)]"
                                        : active
                                            ? "text-yellow-400"
                                            : "text-[var(--text-muted)]"
                                }
                            >
                                {done
                                    ? "✓"
                                    : active
                                        ? "⟳"
                                        : "○"}
                            </span>

                            <span
                                className={
                                    done
                                        ? "text-[var(--green)]"
                                        : active
                                            ? "text-[var(--text-primary)]"
                                            : "text-[var(--text-muted)]"
                                }
                            >
                                {step}
                            </span>
                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default BacktestPanel;
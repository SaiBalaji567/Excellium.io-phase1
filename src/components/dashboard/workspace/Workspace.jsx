import { useState } from "react";

import WorkspaceHeader from "./WorkspaceHeader";
import IntelligencePanel from "./IntelligencePanel";
import UserInputBar from "./UserInputBar";
import ThinkingPanel from "./ThinkingPanel";
import ConversationRenderer from "./ConversationRenderer";
import BacktestPanel from "./BacktestPanel";

function Workspace({
    workflowStage,
    setWorkflowStage,
    strategyId,
    strategyData,
}) {
    const [showConversation, setShowConversation] =
        useState(false);

    if (
        workflowStage === "backtest" ||
        workflowStage === "report"
    ) {
        return (
            <section className="mx-auto mt-8 max-w-7xl px-8">

                <WorkspaceHeader
                    workflowStage={workflowStage}
                />

                <BacktestPanel
                    setWorkflowStage={setWorkflowStage}
                />

                {workflowStage === "report" && (
                    <UserInputBar
                        workflowStage={workflowStage}
                        setWorkflowStage={setWorkflowStage}
                        strategyId={strategyId}
                    />
                )}

            </section>
        );
    }

    if (workflowStage === "code") {
        return (
            <section className="mx-auto mt-8 max-w-7xl px-8">

                <WorkspaceHeader
                    workflowStage={workflowStage}
                />

                <CodeGenerationPanel />

            </section>
        );
    }

    return (
        <section className="mx-auto mt-8 max-w-7xl px-8">

            <WorkspaceHeader
                workflowStage={workflowStage}
            />

            {!showConversation ? (
                <ThinkingPanel
                    onComplete={() =>
                        setShowConversation(true)
                    }
                />
            ) : (
                <IntelligencePanel>
                    <ConversationRenderer />
                </IntelligencePanel>
            )}

            {showConversation && (
                <UserInputBar
                    workflowStage={workflowStage}
                    setWorkflowStage={setWorkflowStage}
                    strategyId={strategyId}
                />
            )}

        </section>
    );
}

function CodeGenerationPanel() {
    const [language, setLanguage] = useState("pine");
    const [generated, setGenerated] = useState(false);
    const [generating, setGenerating] = useState(false);

    const pineCode = `//@version=6
strategy(
    "Excellium Strategy",
    overlay = true
)

bosConfirmed = close > high[1]

if bosConfirmed
    strategy.entry(
        "Long",
        strategy.long
    )

if strategy.position_size > 0
    strategy.exit(
        "Exit",
        "Long",
        stop = strategy.position_avg_price * 0.99,
        limit = strategy.position_avg_price * 1.02
    )`;

    const mql5Code = `//+------------------------------------------------------------------+
//| Excellium Strategy                                               |
//+------------------------------------------------------------------+
#property strict

#include <Trade/Trade.mqh>

CTrade trade;

void OnTick()
{
    double previousHigh =
        iHigh(_Symbol, PERIOD_M15, 1);

    double currentClose =
        iClose(_Symbol, PERIOD_M15, 0);

    bool bosConfirmed =
        currentClose > previousHigh;

    if (bosConfirmed &&
        PositionsTotal() == 0)
    {
        trade.Buy(
            0.10,
            _Symbol,
            0,
            0,
            0,
            "Excellium Strategy"
        );
    }
}`;

    const activeCode =
        language === "pine"
            ? pineCode
            : mql5Code;

    const activeLanguage =
        language === "pine"
            ? "Pine Script v6"
            : "MQL5";

    function handleLanguageChange(nextLanguage) {
        setLanguage(nextLanguage);
        setGenerated(false);
    }

    function handleGenerate() {
        if (generating) return;

        setGenerating(true);
        setGenerated(false);

        setTimeout(() => {
            setGenerating(false);
            setGenerated(true);
        }, 1500);
    }

    return (
        <section className="space-y-8">

            <div>
                <h2 className="text-3xl font-semibold text-[var(--text-primary)]">
                    Code Generation
                </h2>

                <p className="mt-2 text-[var(--text-secondary)]">
                    Strategy performance approved. Select the target
                    implementation.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">

                <button
                    type="button"
                    onClick={() =>
                        handleLanguageChange("pine")
                    }
                    className={`
                        rounded-2xl
                        border
                        p-6
                        text-left
                        transition-all
                        duration-300
                        ${
                            language === "pine"
                                ? "border-[var(--green)] bg-[var(--green)]/10"
                                : "border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--green)]/50"
                        }
                    `}
                >
                    <div className="flex items-center justify-between">

                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                            Pine Script v6
                        </h3>

                        {language === "pine" && (
                            <span className="text-[var(--green)]">
                                ✓
                            </span>
                        )}

                    </div>

                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Generate a TradingView strategy implementation.
                    </p>

                </button>

                <button
                    type="button"
                    onClick={() =>
                        handleLanguageChange("mql5")
                    }
                    className={`
                        rounded-2xl
                        border
                        p-6
                        text-left
                        transition-all
                        duration-300
                        ${
                            language === "mql5"
                                ? "border-[var(--green)] bg-[var(--green)]/10"
                                : "border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--green)]/50"
                        }
                    `}
                >
                    <div className="flex items-center justify-between">

                        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                            MQL5
                        </h3>

                        {language === "mql5" && (
                            <span className="text-[var(--green)]">
                                ✓
                            </span>
                        )}

                    </div>

                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Generate an Expert Advisor for MetaTrader 5.
                    </p>

                </button>

            </div>

            <button
                type="button"
                onClick={handleGenerate}
                disabled={generating}
                className="
                    rounded-xl
                    bg-[var(--green)]
                    px-6
                    py-3
                    font-medium
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >
                {generating
                    ? `Generating ${activeLanguage}...`
                    : generated
                        ? `Regenerate ${activeLanguage}`
                        : `Generate ${activeLanguage}`}
            </button>

            <div
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-primary)]
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[var(--border)]
                        px-6
                        py-4
                    "
                >

                    <span className="text-sm font-medium text-[var(--text-primary)]">
                        {activeLanguage}
                    </span>

                    <span
                        className={
                            generated
                                ? "text-xs text-[var(--green)]"
                                : "text-xs text-[var(--text-muted)]"
                        }
                    >
                        {generating
                            ? "Generating..."
                            : generated
                                ? "Generated"
                                : "Ready"}
                    </span>

                </div>

                <pre
                    className="
                        max-h-[600px]
                        overflow-auto
                        p-6
                        text-sm
                        leading-7
                        text-[var(--text-secondary)]
                    "
                >
                    {generated
                        ? activeCode
                        : `Select ${activeLanguage} and click "Generate ${activeLanguage}".`}
                </pre>

            </div>

        </section>
    );
}

export default Workspace;
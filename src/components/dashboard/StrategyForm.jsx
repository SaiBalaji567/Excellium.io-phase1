import { useState } from "react";

import { supabase } from "../../services/supabase";
import { useAuth } from "../../context/AuthContext";

function StrategyForm({ onInterpret }) {
    const { user } = useAuth();

    const [strategy, setStrategy] = useState("");
    const [platform, setPlatform] = useState("pine");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleInterpret() {
        if (!strategy.trim() || !user || loading) return;

        setLoading(true);
        setError("");

        const { data, error: insertError } = await supabase
            .from("strategies")
            .insert({
                user_id: user.id,
                name: strategy.trim().slice(0, 80),
                workflow_stage: "interpret",
            })
            .select()
            .single();

        if (insertError) {
            console.error("Failed to create strategy:", insertError);
            setError(insertError.message);
            setLoading(false);
            return;
        }

        onInterpret({
            strategyId: data.id,
            description: strategy.trim(),
            platform,
        });

        setLoading(false);
    }

    return (
        <section className="mx-auto mt-8 max-w-7xl px-8">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)]/60 p-8 backdrop-blur-xl">

                <div>
                    <h2 className="text-4xl font-bold text-[var(--text-primary)]">
                        Describe Your Strategy
                    </h2>

                    <p className="mt-3 max-w-3xl text-lg text-[var(--text-secondary)]">
                        Explain your trading strategy in natural language.
                        Excellium will interpret it, resolve ambiguities,
                        backtest it and generate production-ready code.
                    </p>
                </div>

                <div className="mt-10">

                    <label className="mb-4 block text-sm font-medium text-[var(--text-primary)]">
                        Strategy Description
                    </label>

                    <textarea
                        rows={14}
                        maxLength={2000}
                        value={strategy}
                        disabled={loading}
                        onChange={(e) => setStrategy(e.target.value)}
                        placeholder={`Example:

Buy when the 9 EMA crosses above the 21 EMA.

Take trades only above the 200 EMA.

Risk 1% per trade.

Exit at 2R.

Avoid trading during major news events.`}
                        className="
                            w-full
                            resize-none
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-[var(--bg-primary)]
                            p-6
                            text-[var(--text-primary)]
                            placeholder:text-[var(--text-muted)]
                            outline-none
                            transition-all
                            duration-300
                            focus:border-[var(--green)]
                            focus:ring-4
                            focus:ring-[var(--green)]/10
                            disabled:opacity-60
                        "
                    />

                    <div className="mt-3 flex justify-between">

                        <span className="text-sm text-[var(--text-muted)]">
                            Describe entries, exits, filters and risk management.
                        </span>

                        <span className="text-sm text-[var(--text-muted)]">
                            {strategy.length} / 2000
                        </span>

                    </div>

                </div>

                <div className="mt-10">

                    <label className="mb-4 block text-sm font-medium text-[var(--text-primary)]">
                        Target Platform
                    </label>

                    <div className="flex gap-4">

                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => setPlatform("pine")}
                            className={`
                                rounded-2xl
                                px-6
                                py-3
                                border
                                transition-all
                                duration-300
                                ${
                                    platform === "pine"
                                        ? "border-[var(--green)] bg-[var(--green)]/10 text-[var(--green)]"
                                        : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--green)]"
                                }
                            `}
                        >
                            Pine Script v6
                        </button>

                        <button
                            type="button"
                            disabled={loading}
                            onClick={() => setPlatform("mql5")}
                            className={`
                                rounded-2xl
                                px-6
                                py-3
                                border
                                transition-all
                                duration-300
                                ${
                                    platform === "mql5"
                                        ? "border-[var(--green)] bg-[var(--green)]/10 text-[var(--green)]"
                                        : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--green)]"
                                }
                            `}
                        >
                            MQL5 Expert Advisor
                        </button>

                    </div>

                </div>

                <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--bg-primary)] p-6">

                    <h3 className="text-lg font-semibold text-[var(--green)]">
                        💡 Best Practices
                    </h3>

                    <ul className="mt-4 space-y-3 text-[var(--text-secondary)]">
                        <li>✓ Clearly describe your entry conditions.</li>
                        <li>✓ Mention your exit rules.</li>
                        <li>✓ Include stop loss & take profit logic.</li>
                        <li>✓ Mention filters and confirmations.</li>
                        <li>✓ Specify your risk management rules.</li>
                    </ul>

                </div>

                {error && (
                    <p className="mt-6 text-sm text-red-400">
                        {error}
                    </p>
                )}

                <div className="mt-10 flex justify-end">

                    <button
                        type="button"
                        onClick={handleInterpret}
                        disabled={!strategy.trim() || loading}
                        className="
                            rounded-2xl
                            bg-[var(--green)]
                            px-8
                            py-4
                            font-semibold
                            text-black
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_0_25px_rgba(45,227,139,.35)]
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        {loading
                            ? "Creating Strategy..."
                            : "Interpret Strategy →"}
                    </button>

                </div>

            </div>
        </section>
    );
}

export default StrategyForm;

import { useState } from "react";

import DashboardNavbar from "../../components/dashboard/DashboardNavbar";
import ProgressTracker from "../../components/dashboard/ProgressTracker";
import StrategyForm from "../../components/dashboard/StrategyForm";
import Workspace from "../../components/dashboard/workspace";

import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../services/supabase";

function Dashboard() {
    const [workflowStage, setWorkflowStage] = useState("describe");
    const [strategyData, setStrategyData] = useState(null);
    const [error, setError] = useState("");

    const { user } = useAuth();

    async function handleInterpret(data) {
        setError("");

        if (!user) {
            setError("You must be signed in to create a strategy.");
            return;
        }

        const { data: strategy, error: insertError } = await supabase
            .from("strategies")
            .insert({
                user_id: user.id,
                name: data.name || "Untitled Strategy",
                workflow_stage: "interpret",
            })
            .select()
            .single();

        if (insertError) {
            console.error("Failed to create strategy:", insertError);
            setError(insertError.message);
            return;
        }

        setStrategyData({
            ...data,
            strategyId: strategy.id,
        });

        setWorkflowStage("interpret");
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">

            <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--green)]/10 blur-[180px]" />

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10">

                <DashboardNavbar />

                <ProgressTracker workflowStage={workflowStage} />

                {error && (
                    <div className="mx-auto mt-6 max-w-7xl px-8">
                        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400">
                            {error}
                        </div>
                    </div>
                )}

                {workflowStage === "describe" ? (
                    <StrategyForm
                        onInterpret={handleInterpret}
                    />
                ) : (
                    <Workspace
                        workflowStage={workflowStage}
                        setWorkflowStage={setWorkflowStage}
                        strategyId={strategyData?.strategyId}
                        strategyData={strategyData}
                    />
                )}

            </div>

        </main>
    );
}

export default Dashboard;
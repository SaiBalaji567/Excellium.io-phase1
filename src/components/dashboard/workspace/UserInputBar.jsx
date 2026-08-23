import { useState } from "react";
import { ArrowUp } from "lucide-react";

import { useConversation } from "../../../context/ConversationContext";
import assistantReplies from "../../../mock/assistantReplies";

function UserInputBar({
    workflowStage,
    setWorkflowStage,
    strategyId,
}) {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const { addMessage } = useConversation();

    function detectApproval(input) {
        const text = input
            .trim()
            .toLowerCase()
            .replace(/[.!?,]/g, "");

        const noPatterns = [
            /\bno\b/,
            /\bnot satisfied\b/,
            /\bnot happy\b/,
            /\bchange\b/,
            /\bmodify\b/,
            /\bimprove\b/,
            /\brevise\b/,
            /\badjust\b/,
            /\bfix\b/,
            /\bi don't like\b/,
            /\bdo not like\b/,
        ];

        const yesPatterns = [
            /\byes\b/,
            /\bok\b/,
            /\bokay\b/,
            /\bsatisfied\b/,
            /\bhappy with\b/,
            /\blooks good\b/,
            /\blooks great\b/,
            /\bapproved\b/,
            /\bapprove\b/,
            /\bproceed\b/,
            /\bgo ahead\b/,
            /\bperfect\b/,
            /\bfine\b/,
        ];

        if (noPatterns.some((pattern) => pattern.test(text))) {
            return "no";
        }

        if (yesPatterns.some((pattern) => pattern.test(text))) {
            return "yes";
        }

        return "unknown";
    }

    async function handleSend() {
        if (
            !input.trim() ||
            loading ||
            !strategyId
        ) {
            console.log("Message not sent:", {
                hasInput: Boolean(input.trim()),
                loading,
                strategyId,
            });

            return;
        }

        const userInput = input.trim();

        setInput("");
        setLoading(true);

        console.log(
            "Saving message for strategy:",
            strategyId
        );

        await addMessage(
            {
                role: "user",
                type: "user",
                text: userInput,
            },
            strategyId
        );

        if (workflowStage === "interpret") {
            setTimeout(async () => {
                await addMessage(
                    {
                        ...assistantReplies[0],
                        role: "assistant",
                    },
                    strategyId
                );

                setWorkflowStage("clarify");
            }, 1800);

            setTimeout(async () => {
                await addMessage(
                    {
                        ...assistantReplies[1],
                        role: "assistant",
                    },
                    strategyId
                );

                setLoading(false);
            }, 3300);

            return;
        }

        if (workflowStage === "clarify") {
            setTimeout(async () => {
                await addMessage(
                    {
                        role: "assistant",
                        type: "assistant",
                        text: `Understood.

I've updated the strategy model.

✓ Only one active position will be allowed at any given time.

New valid setups will be ignored while an existing position is open.

No further ambiguities were detected.

Proceeding to historical validation...`,
                    },
                    strategyId
                );

                setWorkflowStage("backtest");
                setLoading(false);
            }, 1800);

            return;
        }

        if (workflowStage === "report") {
            const approval = detectApproval(userInput);

            setTimeout(async () => {
                if (approval === "yes") {
                    await addMessage(
                        {
                            role: "assistant",
                            type: "assistant",
                            text: `Understood.

The strategy performance has been approved.

Proceeding to code generation...`,
                        },
                        strategyId
                    );

                    setWorkflowStage("code");
                } else if (approval === "no") {
                    await addMessage(
                        {
                            role: "assistant",
                            type: "assistant",
                            text: `Understood.

I won't generate the code yet.

Tell me what you'd like to change in the strategy or its performance characteristics.`,
                        },
                        strategyId
                    );

                    setWorkflowStage("clarify");
                } else {
                    await addMessage(
                        {
                            role: "assistant",
                            type: "assistant",
                            text: `I need a clear confirmation before proceeding.

Please confirm whether you're satisfied with the strategy's performance.

If you're satisfied, say yes.

If you'd like changes, say no and describe what you'd like to modify.`,
                        },
                        strategyId
                    );
                }

                setLoading(false);
            }, 1500);

            return;
        }

        setLoading(false);
    }

    return (
        <div className="mt-6">
            <div
                className="
                    flex
                    items-end
                    gap-4
                    rounded-3xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-secondary)]/60
                    backdrop-blur-xl
                    p-4
                "
            >
                <textarea
                    rows={2}
                    value={input}
                    disabled={loading}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                        loading
                            ? "Excellium is analyzing your response..."
                            : workflowStage === "interpret"
                                ? "Review my interpretation or suggest corrections..."
                                : workflowStage === "clarify"
                                    ? "Answer the clarification question..."
                                    : workflowStage === "report"
                                        ? "Are you satisfied with the results?"
                                        : workflowStage === "code"
                                            ? "Code generation is ready..."
                                            : "Enter your response..."
                    }
                    className="
                        flex-1
                        resize-none
                        bg-transparent
                        outline-none
                        text-[var(--text-primary)]
                        placeholder:text-[var(--text-muted)]
                        disabled:opacity-60
                    "
                />

                <button
                    onClick={handleSend}
                    disabled={
                        !input.trim() ||
                        loading ||
                        workflowStage === "code" ||
                        !strategyId
                    }
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--green)]
                        text-black
                        transition-all
                        duration-300
                        hover:scale-105
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                    "
                >
                    <ArrowUp
                        size={20}
                        className={loading ? "animate-spin" : ""}
                    />
                </button>
            </div>
        </div>
    );
}

export default UserInputBar;
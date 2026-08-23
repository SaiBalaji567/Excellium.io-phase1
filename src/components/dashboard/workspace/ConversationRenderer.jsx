import { useConversation } from "../../../context/ConversationContext";
import TypingText from "./TypingText";

function ConversationRenderer() {
    const { messages } = useConversation();

    return (
        <div className="space-y-8">

            {messages.map((block) => {

                switch (block.type) {

                    case "intro":

                        return (
                            <TypingText
                                key={block.id}
                                text={block.text}
                                speed={18}
                                className="leading-8 text-[var(--text-secondary)]"
                            />
                        );

                    case "heading":

                        return (
                            <h3
                                key={block.id}
                                className="text-xl font-semibold text-[var(--text-primary)]"
                            >
                                {block.text}
                            </h3>
                        );

                    case "list":

                        return (
                            <div
                                key={block.id}
                                className="
                                    inline-block
                                    max-w-full
                                    rounded-2xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--bg-primary)]
                                    p-6
                                    animate-[fadeIn_.35s]
                                "
                            >
                                <div className="space-y-4">

                                    {block.items.map((item, index) => (

                                        <p
                                            key={index}
                                            className="leading-8 text-[var(--text-secondary)]"
                                        >
                                            {item}
                                        </p>

                                    ))}

                                </div>

                            </div>
                        );

                    case "verification":

                        return (
                            <div
                                key={block.id}
                                className="
                                    inline-block
                                    max-w-full
                                    rounded-2xl
                                    border
                                    border-[var(--green)]/20
                                    bg-[var(--green)]/5
                                    p-6
                                    animate-[fadeIn_.35s]
                                "
                            >
                                <h3 className="mb-4 text-lg font-semibold text-[var(--green)]">

                                    Verification Required

                                </h3>

                                <TypingText
                                    text={block.text}
                                    speed={15}
                                    className="whitespace-pre-line leading-8 text-[var(--text-secondary)]"
                                />

                            </div>
                        );

                    case "user":

                        return (
                            <div
                                key={block.id}
                                className="flex justify-end"
                            >
                                <div
                                    className="
                                        inline-block
                                        max-w-[80%]
                                        rounded-2xl
                                        bg-[var(--green)]
                                        px-6
                                        py-4
                                        text-black
                                        animate-[fadeIn_.35s]
                                    "
                                >
                                    {block.text}
                                </div>
                            </div>
                        );

                    case "assistant":

                        return (
                            <div
                                key={block.id}
                                className="flex justify-start"
                            >
                                <div
                                    className="
                                        inline-block
                                        max-w-[85%]
                                        rounded-2xl
                                        border
                                        border-[var(--border)]
                                        bg-[var(--bg-primary)]
                                        px-6
                                        py-5
                                        animate-[fadeIn_.35s]
                                    "
                                >
                                    <TypingText
                                        text={block.text}
                                        speed={15}
                                        className="whitespace-pre-line leading-8 text-[var(--text-secondary)]"
                                    />
                                </div>
                            </div>
                        );

                    case "clarification":

                        return (
                            <div
                                key={block.id}
                                className="flex justify-start"
                            >
                                <div
                                    className="
                                        w-full
                                        max-w-3xl
                                        rounded-2xl
                                        border
                                        border-[var(--green)]/25
                                        bg-[var(--green)]/5
                                        p-8
                                        animate-[fadeIn_.35s]
                                    "
                                >
                                    <div className="mb-6">

                                        <h3 className="text-2xl font-semibold text-[var(--green)]">

                                            ❓ {block.title}

                                        </h3>

                                        <p className="mt-2 text-sm text-[var(--text-muted)]">

                                            {block.questionNumber}

                                        </p>

                                    </div>

                                    <p className="text-xl leading-10 text-[var(--text-primary)]">

                                        {block.question}

                                    </p>

                                    <p className="mt-8 text-[var(--text-secondary)]">

                                        {block.helper}

                                    </p>

                                </div>
                            </div>
                        );

                    default:
                        return null;

                }

            })}

        </div>
    );
}

export default ConversationRenderer;
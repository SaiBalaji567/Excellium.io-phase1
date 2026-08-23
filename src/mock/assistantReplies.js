const assistantReplies = [
    {
        id: 1,
        type: "assistant",
        text: `Understood.

I've updated the strategy model.

✓ Break of Structure will now be confirmed only after the candle closes.

No other inconsistencies were detected.

Proceeding to the clarification stage...`,
    },

    {
        id: 2,
        type: "clarification",
        title: "Strategy Clarification",
        questionNumber: "Question 1 of 2",
        question:
            "How should Excellium handle a new valid setup if a position is already open?",
        helper:
            "Please specify the desired behavior.",
    },
];

export default assistantReplies;
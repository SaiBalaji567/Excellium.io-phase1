const conversation = [
    {
        id: 1,
        type: "intro",
        text:
            "I've analyzed your strategy and translated it into a structured trading model.",
    },

    {
        id: 2,
        type: "heading",
        text: "My Current Understanding",
    },

    {
        id: 3,
        type: "list",
        items: [
            "✓ Instrument: XAUUSD",
            "✓ Higher Timeframe Bias: 4 Hour Market Structure",
            "✓ Execution Timeframe: 15 Minutes",
            "✓ Entry Trigger: Liquidity Sweep → ICT Fair Value Gap → Break of Structure → Retracement Entry",
            "✓ Stop Loss: Below the liquidity sweep",
            "✓ Take Profit: Next external liquidity or minimum 1:3 RR",
            "✓ Risk: 1% account equity",
            "✓ Maximum two trades per session",
            "✓ Ignore high-impact news",
            "✓ Skip spreads above 30 points",
        ],
    },

    {
        id: 4,
        type: "verification",
        text:
            "Please review my interpretation before I proceed.\n\nIf anything is inaccurate, incomplete or missing, simply tell me what should change.\n\nOnce you confirm it, I'll continue to the clarification stage.",
    },
];

export default conversation;
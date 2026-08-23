const interpretation = {
    stage: "interpret",

    title: "Strategy Interpretation Complete",

    confidence: 96,

    intro:
        "I've analyzed your strategy and translated it into a structured trading model.",

    analysis: [
        "✓ Instrument: XAUUSD",

        "✓ Higher Timeframe Bias: 4 Hour Market Structure",

        "✓ Execution Timeframe: 15 Minutes",

        "✓ Entry Trigger",

        "Liquidity Sweep → ICT Fair Value Gap → Break of Structure → Retracement Entry",

        "",

        "✓ Stop Loss",

        "Below the liquidity sweep.",

        "",

        "✓ Take Profit",

        "Next external liquidity zone or minimum 1:3 Risk-to-Reward.",

        "",

        "✓ Risk Management",

        "Risk exactly 1% of account equity per trade.",

        "Maximum two trades per trading session.",

        "",

        "✓ Additional Filters",

        "• Ignore high-impact economic news.",

        "• Skip trades when spread exceeds 30 points.",
    ],

    verification: `
Before I continue to the clarification stage, I'd like you to verify my understanding.

Did I interpret your strategy correctly?

If anything is inaccurate, incomplete, or missing, please let me know.

I'll update the strategy model before proceeding to historical validation.
`,
};

export default interpretation;
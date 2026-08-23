import {
    createContext,
    useContext,
    useState,
} from "react";

import { supabase } from "../services/supabase";

const ConversationContext = createContext();

export function ConversationProvider({ children }) {
    const [messages, setMessages] = useState([]);
    const [strategyId, setStrategyId] = useState(null);
    const [loading, setLoading] = useState(false);

    async function loadConversation(nextStrategyId) {
        if (!nextStrategyId) {
            setMessages([]);
            setStrategyId(null);
            return;
        }

        setLoading(true);
        setStrategyId(nextStrategyId);

        try {
            const { data, error } = await supabase
                .from("strategy_messages")
                .select("*")
                .eq("strategy_id", nextStrategyId)
                .order("created_at", { ascending: true });

            if (error) {
                throw error;
            }

            setMessages(data || []);
        } catch (error) {
            console.error(
                "Failed to load conversation:",
                error
            );

            setMessages([]);
        } finally {
            setLoading(false);
        }
    }

    async function addMessage(message, targetStrategyId) {
        const activeStrategyId =
            targetStrategyId || strategyId;

        if (!activeStrategyId) {
            console.error("No active strategy ID found.");
            return null;
        }

        const optimisticId = crypto.randomUUID();

        const optimisticMessage = {
            ...message,
            id: optimisticId,
            strategy_id: activeStrategyId,
            created_at: new Date().toISOString(),
        };

        setMessages((prev) => [
            ...prev,
            optimisticMessage,
        ]);

        const { data, error } = await supabase
            .from("strategy_messages")
            .insert({
                strategy_id: activeStrategyId,
                role: message.role,
                type: message.type,
                text: message.text,
            })
            .select()
            .single();

        if (error) {
            console.error(
                "Failed to save message:",
                error
            );

            setMessages((prev) =>
                prev.filter(
                    (item) => item.id !== optimisticId
                )
            );

            return null;
        }

        setMessages((prev) =>
            prev.map((item) =>
                item.id === optimisticId
                    ? data
                    : item
            )
        );

        return data;
    }

    return (
        <ConversationContext.Provider
            value={{
                messages,
                strategyId,
                loading,
                loadConversation,
                addMessage,
            }}
        >
            {children}
        </ConversationContext.Provider>
    );
}

export function useConversation() {
    return useContext(ConversationContext);
}
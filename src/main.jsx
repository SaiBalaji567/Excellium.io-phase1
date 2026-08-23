import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { ConversationProvider } from "./context/ConversationContext";

import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ConversationProvider>
                <App />
            </ConversationProvider>
        </AuthProvider>
    </React.StrictMode>
);
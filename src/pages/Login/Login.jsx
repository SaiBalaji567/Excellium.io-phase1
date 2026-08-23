import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import Button from "../../components/common/Button/Button";

import { useAuth } from "../../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { signIn } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        if (error) {
            setError("");
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (loading) return;

        setLoading(true);
        setError("");

        const { error } = await signIn(
            formData.email.trim(),
            formData.password
        );

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        navigate("/dashboard", {
            replace: true,
        });
    }

    return (
        <AuthCard
            title="Welcome back"
            subtitle="Sign in to continue building with Excellium."
        >
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <AuthInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                />

                <AuthInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                />

                {error && (
                    <div className="rounded-xl border border-red-400/20 bg-red-400/5 p-4">
                        <p className="text-sm leading-6 text-red-400">
                            {error}
                        </p>
                    </div>
                )}

                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-[var(--green)] hover:underline"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                >
                    {loading
                        ? "Signing In..."
                        : "Sign In"}
                </Button>

                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-[var(--border)]" />

                    <span className="text-sm text-[var(--text-muted)]">
                        OR
                    </span>

                    <div className="h-px flex-1 bg-[var(--border)]" />
                </div>

                <button
                    type="button"
                    disabled
                    className="w-full cursor-not-allowed rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] py-4 text-[var(--text-muted)] opacity-60"
                >
                    Google Sign-In Coming Soon
                </button>

                <p className="text-center text-sm text-[var(--text-secondary)]">
                    Don't have an account?{" "}

                    <Link
                        to="/signup"
                        className="font-semibold text-[var(--green)] hover:underline"
                    >
                        Create Account
                    </Link>
                </p>

            </form>
        </AuthCard>
    );
}

export default Login;
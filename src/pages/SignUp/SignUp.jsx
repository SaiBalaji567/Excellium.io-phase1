import { useState } from "react";
import { Link } from "react-router-dom";

import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import Button from "../../components/common/Button/Button";

import { useAuth } from "../../context/AuthContext";

function SignUp() {
    const { signUp } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        setLoading(true);

        const { data, error } = await signUp(
            formData.email.trim(),
            formData.password
        );

        setLoading(false);

        if (error) {
            setError(error.message);
            return;
        }

        if (data.user && !data.session) {
            setSuccess(
                "Account created successfully. Check your email and confirm your account before signing in."
            );
            return;
        }

        setSuccess("Account created successfully.");
    }

    return (
        <AuthCard
            title="Create your account"
            subtitle="Build institutional-grade trading strategies with AI."
        >
            <form onSubmit={handleSubmit} className="space-y-6">

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
                    autoComplete="new-password"
                    required
                />

                <AuthInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                />

                {error && (
                    <p className="text-sm text-red-400">
                        {error}
                    </p>
                )}

                {success && (
                    <div className="rounded-xl border border-[var(--green)]/20 bg-[var(--green)]/10 p-4">
                        <p className="text-sm leading-6 text-[var(--green)]">
                            {success}
                        </p>
                    </div>
                )}

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading || Boolean(success)}
                >
                    {loading
                        ? "Creating Account..."
                        : success
                        ? "Check Your Email"
                        : "Create Account"}
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
                    className="w-full rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] py-4 transition hover:border-[var(--green)]"
                >
                    Continue with Google
                </button>

                <p className="text-center text-sm text-[var(--text-secondary)]">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-[var(--green)] hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

            </form>
        </AuthCard>
    );
}

export default SignUp;
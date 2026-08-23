import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function AuthInput({
    label,
    name,
    type = "text",
    placeholder = "",
    value,
    onChange,
    required = false,
    autoComplete = "",
}) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="flex flex-col gap-2">

            <label
                htmlFor={name}
                className="text-sm font-medium text-[var(--text-primary)]"
            >
                {label}
            </label>

            <div className="relative">

                <input
                    id={name}
                    name={name}
                    type={
                        isPassword
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    autoComplete={autoComplete}
                    className="
                        w-full
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--bg-secondary)]
                        px-5
                        py-4
                        pr-14
                        text-[var(--text-primary)]
                        outline-none
                        transition-all
                        duration-300
                        placeholder:text-[var(--text-muted)]
                        hover:border-[var(--green)]/40
                        focus:border-[var(--green)]
                        focus:ring-4
                        focus:ring-[var(--green)]/10
                    "
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-[var(--text-muted)]
                            transition-colors
                            duration-300
                            hover:text-[var(--green)]
                        "
                    >
                        {showPassword ? (
                            <EyeOff size={20} />
                        ) : (
                            <Eye size={20} />
                        )}
                    </button>
                )}

            </div>

        </div>
    );
}

export default AuthInput;
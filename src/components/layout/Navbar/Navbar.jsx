import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import { useAuth } from "../../../context/AuthContext";

function Navbar() {
    const { user } = useAuth();

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgba(11,15,19,0.8)] backdrop-blur-xl">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <Link
                        to="/"
                        className="font-mono text-2xl font-bold tracking-[0.2em] text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--green)]"
                    >
                        EXCELLIUM
                    </Link>

                    <div className="flex items-center gap-4">

                        {!user && (
                            <Link to="/signup">
                                <Button>
                                    Get Started
                                </Button>
                            </Link>
                        )}

                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            className="rounded-xl border border-[var(--border)] bg-transparent p-3 transition-all duration-300 hover:border-[var(--green)] hover:bg-[var(--bg-card)]"
                        >
                            <Menu
                                size={22}
                                className="text-[var(--text-primary)]"
                            />
                        </button>

                    </div>

                </div>
            </Container>
        </header>
    );
}

export default Navbar;
import SignIn from "@/components/ui/sign-in";
import { Background } from "@/components/landing-page/Background";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AuthPage() {
    return (
        <main className="relative min-h-screen flex items-center justify-center px-4 py-12 selection:bg-purple-500/30">
            {/* Background with gradient effects */}
            <Background />

            {/* Content */}
            <div className="relative z-10 w-full max-w-md">
                {/* Branding Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:border-purple-400/50 transition-colors">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                            Sketch AI
                        </span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Welcome back! Sign in to continue creating.
                    </p>
                </div>

                {/* Sign In Card */}
                <SignIn />
            </div>
        </main>
    )
}
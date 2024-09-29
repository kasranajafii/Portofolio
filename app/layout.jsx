import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
////////////components
import PageTransition from "@/components/PageTransition";
import StepTransition from "@/components/StepTransition";

const JetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata = {
    title: "Kasra-Najafi",
    description: "Kasra-Najafi",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={JetBrainsMono.variable}>
                <StepTransition />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}

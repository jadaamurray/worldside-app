import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Outfit, Chewy, Abril_Fatface } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const chewy = Chewy({ subsets: ["latin"], weight: "400", variable: "--font-chewy"});
const abril = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--font-abril"});

export const metadata: Metadata = {
  title: "Worldside — Thailand Trips for Solo Travelers",
  description: "Get trip drops, behind-the-scenes, and early access.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${chewy.variable} ${abril.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
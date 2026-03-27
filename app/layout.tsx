import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Portfolio | IT Professional",
	description: "Professional IT portfolio website.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="hu" className="scroll-smooth">
			<body className="min-h-screen bg-[#ffffff] text-slate-900 antialiased">
				{children}
			</body>
		</html>
	);
}

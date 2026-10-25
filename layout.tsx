import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "MediQueue | Hospital Operations", description: "Hospital queue and bed management prototype" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

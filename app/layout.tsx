import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joel Sosaya - Desarrollador Full Stack | Código con Propósito",
  description:
    "Desarrollador Full Stack apasionado por crear soluciones digitales mientras defiendo la conservación de la fauna. Especializado en React, Next.js, Node.js y más.",
  keywords: ["desarrollador web", "full stack", "react", "nextjs", "conservación", "naturaleza"],
  authors: [{ name: "Joel Sosaya" }],
  openGraph: {
    title: "Joel Sosaya - Desarrollador Full Stack",
    description: "Código con propósito para un mundo más verde",
    type: "website",
    locale: "es_ES",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
        <Toaster />
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800 transition-colors duration-300">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

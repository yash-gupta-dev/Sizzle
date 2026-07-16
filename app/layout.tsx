
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";
import { plak, plakCompressed, plakCondensed, plakExtended, plakNarrow, plakText, plakWide } from "@/lib/fonts";
import BottomTabs from "@/components/bottomTab/BottomTabs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", `${plak.variable} ${plakText.variable} ${plakCompressed.variable} ${plakCondensed.variable} ${plakExtended.variable} ${plakNarrow.variable} ${plakWide.variable}`)}
    >
      <body className="relative">
        <ThemeProvider>
          <Navbar />
          {children}
          <BottomTabs/>
        </ThemeProvider>
      </body>
    </html>
  )
}

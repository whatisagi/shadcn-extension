import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/layouts/site-header";
import { CSPostHogProvider } from "@/components/analytics";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SkipNav } from "@/components/skip-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn extension",
  description:
    "Shadcn extension for Next.js with Tailwind CSS and TypeScript , sonner and vercel analytics , and more.",
  creator: "Belkacem Yerfa",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    url: siteConfig.url,
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@bylka207",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "flex flex-col min-h-screen supports-[min-h-[100dvh]]:min-h-[100dvh] scroll-smooth",
        )}
      >
        <SkipNav />
        <CSPostHogProvider>
          <Provider>
            <SiteHeader />
            {children}
            <Toaster richColors position="bottom-center" />
          </Provider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}

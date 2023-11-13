import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Delgado",
  description:
    "Alex Delgado is a software engeneer and a project manager specialized in Agile methodologies.",
  openGraph: {
    title: "Alex Delgado's blog",
    description:
      "Alex Delgado is a software engeneer and a project manager specialized in Agile methodologies.",
    url: "https://aldexdev.com",
    siteName: "Alex Delgado's blog",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aldexdev",
    creator: "@aldexdev",
  },
  themeColor: "transparent",
  metadataBase: new URL("https://aldexdev.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

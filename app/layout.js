import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Kendrick Lawton',
  description: 'Kendrick Lawton Portfolio',
  openGraph: {
    title: 'Kendrick Lawton',
    description: 'Kendrick Lawton Portfolio',
    url: 'https://www.kendricklawton.com',
    siteName: 'Kendrick Lawton',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

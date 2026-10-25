import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dragon News - Journalism Without Fear or Favour",
    template: "%s | Dragon News",
  },
  description: "Real-time news articles on a variety of topics with Dragon News.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${poppins.className} min-h-screen flex flex-col bg-base-100 text-base-content`}
      >
        {children}
      </body>

    </html>
  );
}

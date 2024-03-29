import {Fira_Code, Inter} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Script from "next/script";

const fira = Fira_Code({subsets: ["latin"]})

export const metadata = {
  title: "Pantera",
  description: "Pantera's Portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fira.className + " bg-gray-50"}>
        <Sidebar />
        {children}
        {/* i found this workaroud here: https://github.com/themesberg/flowbite/issues/51#issuecomment-1035330935*/}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}

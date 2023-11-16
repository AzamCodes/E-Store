import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";

const open = Open_Sans({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "E-Commerce Store",
  description: "Shop anything from our store online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}

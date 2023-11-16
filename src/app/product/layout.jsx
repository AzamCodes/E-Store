import { Open_Sans } from "next/font/google";
import Link from "next/link";

const open = Open_Sans({ subsets: ["latin"], weight: "500" });

export default function ProductLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <div className="min-h-screen">
          <Link href={"/product"}>
            <h3 className="mt-16 text-center underline font-semibold text-xl py-5">
              All Products
            </h3>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}

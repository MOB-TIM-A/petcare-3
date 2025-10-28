import { Inter } from 'next/font/google'
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ClickSpark from './components/ClickSpark/ClickSpark';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Pet Care",
  description: "Web Profile Petcare Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ClickSpark
          sparkColor='#ff9900'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Navbar />
          <main className='w-full mx-auto px-4 lg:max-w-screen-xl '>
            {children}
          </main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}

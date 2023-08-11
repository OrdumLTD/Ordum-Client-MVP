
import './globals.css'

import { Work_Sans } from "next/font/google";
import AllContextProvider from '@/Context/allContext';


const workSans = Work_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ordum MVP',
  description: 'Grant aggregator and management service',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
          <AllContextProvider>
            {children}
          </AllContextProvider>           
        </body>
    </html>
  )
}

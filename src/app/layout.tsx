import { WalletContextProvider } from '@/Context/WalletStore'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ChainApiContextProvider } from '@/Context/ChainApiStore'


const space_Grotesk = Space_Grotesk({
   subsets: ['latin'] 
})

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
      <body className={space_Grotesk.className}>
        <WalletContextProvider>
          <ChainApiContextProvider>
            {children}
          </ChainApiContextProvider>
        </WalletContextProvider>  
        </body>
    </html>
  )
}

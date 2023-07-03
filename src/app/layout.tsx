import { WalletContextProvider } from '@/Context/WalletStore'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import { ChainApiContextProvider } from '@/Context/ChainApiStore'
import { PhalaContractContextProvider } from '@/Context/PhalaContractApiStore'
import { ProfileContextProvider } from '@/Context/ProfileStore'


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
            <PhalaContractContextProvider>
              <ProfileContextProvider>
                {children}
              </ProfileContextProvider>
            </PhalaContractContextProvider>
          </ChainApiContextProvider>
        </WalletContextProvider>  
        </body>
    </html>
  )
}

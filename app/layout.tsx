import { Nunito } from 'next/font/google';

import './globals.css'
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/Modals/RegisterModal';
import ToastProvider from './providers/ToasterProvider';
import LoginModal from './components/Modals/LoginModal';


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone by MM',
}

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

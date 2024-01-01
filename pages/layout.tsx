import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { metadata } from './metadata';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

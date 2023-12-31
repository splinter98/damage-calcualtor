import { Metadata } from "next"
import './global.css'


export const metadata: Metadata = {
  title: "TTRPG Damage Calculator",
  description: "Simple TTRPG Damage Calculator",
  themeColor: '#000000',
  icons: {
    icon: '/damage-calcualtor/favicon.ico',
    apple: '/damage-calcualtor/apple-touch-icon.png'
  },
  manifest: '/damage-calcualtor/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <noscript>Tou need to enable JavaScript to run this app.</noscript>
        {children}
      </body>
    </html>
  )
}
import Navbar from '@/components/navbar/navbar'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import {Box} from '@mui/material';
import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';

const Barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable:'--barlow-font'
})
export const metadata: Metadata = {
  title: 'Ranjith Mathew',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <AppRouterCacheProvider>
       <ThemeProvider theme={theme}>
        <Box bgcolor={"background.default"} width={"100%"} sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}>
          <Navbar/>
          {children}
          <Footer/>
        </Box>
      </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  )
}

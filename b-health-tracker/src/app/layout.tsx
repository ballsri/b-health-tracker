import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar/Navbar'

const prompt = Prompt({
  subsets: ['thai'],
  weight: '300',
});

export const metadata: Metadata = {
  title: 'B-Health Tracker',
  description: 'บันทึกสุขภาพออนไลน์',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

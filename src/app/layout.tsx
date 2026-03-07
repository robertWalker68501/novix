import { ReactNode } from 'react';

import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Novix',
  description: 'A modern IDE built for modern developers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${inter.variable} ${plexMono.variable} antialiased`}>
        <ClerkProvider
          appearance={{
            theme: dark,
          }}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <Show when='signed-out'>
                <SignInButton />
                <SignUpButton>
                  <button className='rounded bg-rose-500 p-2 text-white'>
                    Sign Up
                  </button>
                </SignUpButton>
              </Show>
              <Show when='signed-in'>
                <UserButton />
              </Show>
            </header>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

import { SmoothScroll } from '@/components/global/framer/smooth-scroll';
import '@/styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const supply = localFont({
  src: [
    {
      path: '../lib/assets/fonts/PPSupplyMono-Ultralight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../lib/assets/fonts/PPSupplyMono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-supply',
});

const flexible = localFont({
  src: [
    {
      path: '../lib/assets/fonts/Flexible-strech.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-flexible',
});

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${supply.variable} ${flexible.variable} ${inter.variable} relative`}>
      <AnimatePresence
        mode='wait'
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <SmoothScroll />
    </main>
  );
}

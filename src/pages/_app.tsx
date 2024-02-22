import { SmoothScroll } from '@/components/global/framer/smooth-scroll';
import '@/styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${inter.variable} relative`}>
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

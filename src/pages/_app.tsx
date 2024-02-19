import '@/styles/main.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function App({ Component, router, pageProps }: AppProps) {
  return (
    <AnimatePresence mode='wait'>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}

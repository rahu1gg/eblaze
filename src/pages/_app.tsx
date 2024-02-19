import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

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
    // <AnimatePresence mode='wait'>
    <main className={`${supply.className} ${supply.variable} ${flexible.variable}`}>
      <Component key={router.route} {...pageProps} />
    </main>
    // </AnimatePresence>
  );
}

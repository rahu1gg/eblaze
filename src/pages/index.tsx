import { FramerWrapper } from '@/components/global/animation/framer-wrapper';
import { ContactUs } from '@/components/pages/home/contact';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <FramerWrapper />
      <section>
        <Link href={'/contact'}>About</Link>
        <div>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>
        <div className='h-[300vh]'>
          <p>Hello world</p>
        </div>
      </section>
      <ContactUs />
    </main>
  );
}

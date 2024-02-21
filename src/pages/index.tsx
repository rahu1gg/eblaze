import { Footer } from '@/components/global/footer';
import Pixels from '@/components/global/framer/pixels';
import { About } from '@/components/pages/home/about';
import { ContactUs } from '@/components/pages/home/contact';
import { Events } from '@/components/pages/home/events';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 h-screen z-10 pointer-events-none'>
        <Pixels />
      </div>
      <section>
        <div className='h-screen'>
          <p>Hello world</p>
          <Link href='/contact'>contact</Link>
        </div>
      </section>
      <About />
      <Events />
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

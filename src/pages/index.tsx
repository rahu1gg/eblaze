import { Footer } from '@/components/global/footer';
import { About } from '@/components/pages/home/about';
import { ContactUs } from '@/components/pages/home/contact';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* <FramerWrapper /> */}
        <section>
          <div className='h-screen bg-red-200'>
            <p>Hello world</p>
          </div>
        </section>
        <About />
        <ContactUs />
      </main>
      <Footer />
    </Fragment>
  );
}

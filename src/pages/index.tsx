import { Footer } from '@/components/global/footer';
import { About } from '@/components/pages/home/about';
import { ContactUs } from '@/components/pages/home/contact';
import { Events } from '@/components/pages/home/events';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <main>
        {/* <FramerWrapper /> */}
        <section>
          <div className='h-screen'>
            <p>Hello world</p>
          </div>
        </section>
        <About />
        <Events />
        <ContactUs />
      </main>
      <Footer />
    </Fragment>
  );
}

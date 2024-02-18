import { Footer } from '@/components/global/footer';
import { ContactUs } from '@/components/pages/home/contact';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <main>
        <div className='h-[300vh]'>
          <p>Hello world</p>
        </div>
        <ContactUs />
      </main>
      <Footer />
    </Fragment>
  );
}

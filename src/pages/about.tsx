import { Footer } from '@/components/global/footer';
import Pixels from '@/components/global/framer/pixels';
import { Header } from '@/components/global/header';
import { About } from '@/components/pages/home/about';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 h-screen z-10 pointer-events-none'>
        <Pixels />
      </div>
      <Header />
      <About />
      <Footer />
    </Fragment>
  );
}

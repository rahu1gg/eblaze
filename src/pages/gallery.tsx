import Pixels from '@/components/global/framer/pixels';
import { Header } from '@/components/global/header';
import ZoomParallax from '@/components/pages/gallery';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 h-screen z-10 pointer-events-none'>
        <Pixels />
      </div>
      <Header />
      <section>
        <div className='mt-[50vh] mb]'>
          <ZoomParallax />
        </div>
      </section>
      <section>
        <div>hello world</div>
      </section>
    </Fragment>
  );
}

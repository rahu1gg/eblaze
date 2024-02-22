import { Footer } from '@/components/global/footer';
import Pixels from '@/components/global/framer/pixels';
import { Events } from '@/components/pages/home/events';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 h-screen z-10 pointer-events-none'>
        <Pixels />
      </div>
      <Events />
      <Footer />
    </Fragment>
  );
}

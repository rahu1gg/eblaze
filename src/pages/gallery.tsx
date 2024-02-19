import ZoomParallax from '@/components/gallery';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
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

import Pixels from '@/components/global/animation/pixels';
import { Footer } from '@/components/global/footer';
import { Arrow } from '@/components/global/icons';
import { APP } from '@/constants/app';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 h-screen z-[10] pointer-events-none'>
        <Pixels />
      </div>
      <main>
        <section>
          <div className='min-h-screen mx-5 py-10'>
            <div className='uppercase font-bold text-9xl'>
              <h2>Let's Build</h2>
              <h2 className='flex items-end justify-between pt-4'>
                <Link href={'/'}>
                  <Arrow className='text-primary-color' />
                </Link>
                <span>Together</span>
              </h2>
            </div>
            <div className='mt-20'>
              <Link href={`mailto:${APP.email}`} className='group text-2xl mt-14 h-9 inline-flex items-center justify-start gap-3'>
                {APP.email}
                <span className='bg-foreground inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
                  <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

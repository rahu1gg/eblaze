import { Heading } from '@/components/global/framer/heading';
import { Header } from '@/components/global/header';
import Spline from '@splinetool/react-spline';
import { Fragment } from 'react';

export function Hero() {
  return (
    <Fragment>
      <Header />
      <section className='bg-foreground text-background relative'>
        <div className='min-h-screen absolute inset-0 -z-0'>
          <Spline scene='https://prod.spline.design/YP3KOHzwewA8xpTc/scene.splinecode' />
        </div>
        <div className='h-screen relative z-10'>
          <div className='sm:pt-0 pt-28'>
            <Heading className='text-muted'>EBLAZE</Heading>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

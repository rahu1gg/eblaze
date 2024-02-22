import { Footer } from '@/components/global/footer';
import { Heading } from '@/components/global/framer/heading';
import Paragraph from '@/components/global/framer/paragraph';
import Pixels from '@/components/global/framer/pixels';
import { Arrow } from '@/components/global/icons';
import { APP } from '@/constants/app';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Page() {
  return (
    <Fragment>
      <div className='fixed top-0 left-0 h-screen z-10 pointer-events-none'>
        <Pixels />
      </div>
      <main>
        <section>
          <div className='min-h-screen mx-5 py-10'>
            <div>
              <Paragraph className='uppercase font-bold lg:text-9xl md:text-7xl/[120px] text-5xl/[80px]'>Let's Build</Paragraph>
              <h2 className='flex items-end justify-between pt-4'>
                <Link href={'/'}>
                  <Arrow className='text-primary-color sm:size-10 size-6' />
                </Link>
                <span>
                  <Heading className='uppercase font-bold lg:text-9xl md:text-7xl/[120px] text-5xl/[80px]'>Together</Heading>
                </span>
              </h2>
            </div>
            <div className='mt-20'>
              <Link
                href={`mailto:${APP.email}`}
                className='group text-lg mt-14 h-9 inline-flex items-center justify-start gap-3'
                target='_blank'
                rel='noreferrer'
              >
                {APP.email}
                <span className='bg-foreground inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
                  <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
                </span>
              </Link>
              <br />
              <Link
                href={process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM ?? '/add-form-link'}
                className='group text-lg mt-14 h-9 inline-flex items-center justify-start gap-3'
                target='_blank'
                rel='noreferrer'
              >
                <Paragraph className='text-lg'>Google form</Paragraph>
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

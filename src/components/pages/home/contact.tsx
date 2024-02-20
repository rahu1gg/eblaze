import Paragraph from '@/components/global/framer/paragraph';
import { Arrow } from '@/components/global/icons';
import { APP } from '@/constants/app';
import Link from 'next/link';

export function ContactUs() {
  return (
    <section className='bg-muted'>
      <div className='mx-5 min-h-screen py-28'>
        <div>
          <em style={{ textAlignLast: 'right' }} className='inline-block pr-5'>
            <Paragraph className='text-8xl/[140px] font-semibold pr-5'>LET'S TALK ABOUT EVENTS, PROJECTS AND WORK</Paragraph>
          </em>
          <Link href={`mailto:${APP.email}`} className='group mt-14 pl-3 h-9 inline-flex items-center justify-start gap-3'>
            <Paragraph className='text-base'>{APP.email}</Paragraph>
            <span className='bg-foreground inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
              <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
            </span>
          </Link>
          <br />
          <Link
            href={process.env.NEXT_PUBLIC_GOOGLE_CONTACT_FORM ?? '/add-form-link'}
            className='group mt-14 pl-3 h-9 inline-flex items-center justify-start gap-3'
          >
            <Paragraph className='text-base'>Google form</Paragraph>
            <span className='bg-foreground inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
              <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

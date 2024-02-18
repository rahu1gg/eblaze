import { Arrow } from '@/components/global/icons';
import { APP } from '@/constants/app';
import Link from 'next/link';

export function ContactUs() {
  return (
    <section className='bg-muted'>
      <div className='h-screen flex items-center justify-center'>
        <div className='w-3/5 mx-auto'>
          <h2 className='text-6xl/[80px] font-light'>
            <em>LET'S TALK ABOUT EVENTS, PROJECTS AND WORK</em>
          </h2>
          <Link href={`mailto:${APP.email}`} className='group mt-14 h-9 inline-flex items-center justify-start gap-3'>
            {APP.email}
            <span className='bg-foreground inline-flex items-center justify-center text-background rounded-full size-5 overflow-hidden group-hover:size-16 duration-300'>
              <Arrow className='-translate-x-10 translate-y-10 duration-300 group-hover:translate-x-0 group-hover:translate-y-0 size-4' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

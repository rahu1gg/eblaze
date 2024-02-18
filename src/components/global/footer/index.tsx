import { APP_LINKS, SOCIAL_LINKS } from '@/constants/app';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../../ui/3d-card';
import { Button } from '../../ui/button';
import { Hack } from '../hack';
import { FooterLink } from './client';

export function Footer() {
  return (
    <footer className='bg-primary-color'>
      <CardContainer className='mt-20 border-t rounded-none mx-5 w-full !text-muted hover:!text-background' containerClassName='pt-0 pb-20'>
        <CardBody className='h-auto w-full flex items-center justify-center'>
          <CardItem>
            <div>
              <p className='text-[25vw] pb-20 font-bold'>EBLAZE</p>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <div>
        <div>
          <p className='text-sm p-5 text-background font-medium'>Socials</p>
          {SOCIAL_LINKS.map(({ id, label, href }) => (
            <FooterLink
              key={id}
              href={href}
              className='text-muted bg-primary-color inline-flex p-5 w-full border-t text-6xl font-bold uppercase last-of-type:border-b'
              target='_blank'
              rel='noreferrer'
              dataValue={label}
              payload={<ArrowLink />}
            />
          ))}
        </div>
        <div>
          <p className='text-sm px-5 pb-5 pt-80 text-background font-medium'>Site map</p>
          {APP_LINKS.map(({ id, label, href }) => (
            <FooterLink
              key={id}
              href={href}
              className='text-muted bg-primary-color inline-flex p-5 w-full border-t text-6xl font-bold uppercase last-of-type:border-b'
              dataValue={label}
              payload={<Star />}
              payloadClassName='rotate-0 group-hover:rotate-[360deg] duration-1000 origin-center h-10 flex items-center justify-center'
            />
          ))}
        </div>
        <div className='bg-muted text-sm py-10 px-7 text-primary-color flex items-center justify-between'>
          <p className=''>
            Crafted by{' '}
            <Button className='p-0 text-primary-color underline' variant='link'>
              <Link href={'/team'}>
                <Hack dataValue='Eblaze team'>Eblaze team</Hack>
              </Link>
            </Button>
          </p>
          <p className='font-medium'>© 2024 ELAZE</p>
        </div>
      </div>
    </footer>
  );
}

function ArrowLink() {
  function Arrow() {
    return (
      <svg className='size-10 last-of-type:-translate-x-9' viewBox='0 0 99 99' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Navigate</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M0 18.084 16.925 0H99v81.38L80.28 99V58.698c0-9.81.097-18.696.3-26.668L14.829 97.163 1.799 82.909l65.75-65.13q-11.683.306-26.21.305z'
          fill='currentColor'
        />
      </svg>
    );
  }
  return (
    <div className='relative ml-1 size-10 overflow-hidden'>
      <div className='absolute transition-all duration-200 group-hover:-translate-y-10 group-hover:translate-x-9'>
        <Arrow />
        <Arrow />
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width='31' height='30' className='size-9' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Navigate</title>
      <path
        d='m15.272 22.192-5.688 7.632-5.688-4.464L9.8 17.44.296 14.416l2.376-6.768 9 2.952V.736h7.272V10.6l9-2.952 2.376 6.768-9.504 3.024 5.904 7.92-5.688 4.464z'
        fill='#000'
      />
    </svg>
  );
}

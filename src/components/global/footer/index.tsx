import { APP_LINKS, SOCIAL_LINKS } from '@/constants/app';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../../ui/3d-card';
import { Button } from '../../ui/button';
import { Heading } from '../framer/heading';
import { Arrow, Star } from '../icons';
import { FooterLink } from './client';

export function Footer() {
  return (
    <footer className='bg-primary-color'>
      <CardContainer className='mt-20 border-t rounded-none mx-5 w-full !text-muted hover:!text-background' containerClassName='pt-0 pb-20'>
        <CardBody className='h-auto w-full flex items-center justify-center'>
          <CardItem>
            <div>
              <Heading className='text-[25vw] pb-20 font-bold uppercase flex items-center justify-center'>EBLAZE</Heading>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <div>
        <div>
          <p className='text-xs p-5 text-background font-medium'>Socials</p>
          {SOCIAL_LINKS.map(({ id, label, href }) => (
            <FooterLink
              key={id}
              href={href}
              className='text-muted bg-primary-color inline-flex p-5 w-full border-t text-6xl font-bold capitalize last-of-type:border-b'
              target='_blank'
              rel='noreferrer'
              dataValue={label}
              payload={<ArrowLink />}
            />
          ))}
        </div>
        <div>
          <p className='text-xs px-5 pb-5 pt-80 text-background font-medium'>Site map</p>
          {APP_LINKS.map(({ id, label, href }) => (
            <FooterLink
              key={id}
              href={href}
              className='text-muted bg-primary-color inline-flex p-5 w-full border-t text-6xl font-bold capitalize last-of-type:border-b'
              dataValue={label}
              payload={<Star />}
              payloadClassName='rotate-0 group-hover:rotate-[360deg] duration-1000 origin-center h-10 flex items-center justify-center'
            />
          ))}
        </div>
        <div className='bg-muted text-sm py-10 px-7 font-light text-primary-color flex items-center justify-between'>
          <p className=''>
            Crafted by{' '}
            <Button className='p-0 text-primary-color underline font-light' variant='link'>
              <Link href={'/team'}>Eblaze team</Link>
            </Button>
          </p>
          <p className='font-medium'>© 2024 ELAZE</p>
        </div>
      </div>
    </footer>
  );
}

function ArrowLink() {
  return (
    <div className='relative ml-1 size-10 overflow-hidden'>
      <div className='absolute transition-all duration-200 group-hover:-translate-y-10 group-hover:translate-x-9'>
        <Arrow />
        <Arrow className='-translate-x-9' />
      </div>
    </div>
  );
}

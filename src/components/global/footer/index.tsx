import { APP_LINKS, SOCIAL_LINKS } from '@/constants/app';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../../ui/3d-card';
import { Button } from '../../ui/button';
import { Heading } from '../framer/heading';
import Line from '../framer/line';
import { Arrow, Star } from '../icons';

export function Footer() {
  return (
    <footer className='bg-primary-color'>
      <div className='pt-20 mx-7'>
        <Line className='text-background' />
      </div>
      <CardContainer className='block mt-20rounded-none mx-5 w-full !text-muted hover:!text-background' containerClassName='pt-0 pb-20'>
        <CardBody className='h-auto w-full flex items-center justify-center'>
          <CardItem>
            <div>
              <Heading amount={0.5} className='text-[25vw] font-bold uppercase flex items-center justify-center'>
                EBLAZE
              </Heading>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <div>
        <SocialLinks />
        <Sitemap />
        <FooterOutro />
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

function SocialLinks() {
  return (
    <div className='pt-20'>
      <p className='text-xs p-5 text-background font-bold'>Socials</p>
      <ul className='group/ul'>
        {SOCIAL_LINKS.map(({ id, label, href }) => (
          <li key={id} className='border-t group-hover/ul:blur-[6px] group-hover/ul:hover:blur-0 duration-500'>
            <Link
              href={href}
              className={'group inline-flex items-center justify-between text-muted bg-primary-color p-5 w-full text-6xl font-bold capitalize'}
              target='_blank'
              rel='noreferrer'
            >
              <Heading className='text-6xl'>{label}</Heading>
              <span>
                <ArrowLink />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sitemap() {
  return (
    <div>
      <p className='text-xs px-5 pb-5 pt-80 text-background font-bold'>Site map</p>
      <ul className='group/ul'>
        {APP_LINKS.map(({ id, label, href }) => (
          <li key={id} className='border-t last-of-type:border-b group-hover/ul:blur-[6px] group-hover/ul:hover:blur-0 duration-500'>
            <Link
              href={href}
              className='group inline-flex items-center justify-between text-muted bg-primary-color p-5 w-full text-6xl font-bold capitalize'
            >
              <Heading className='text-6xl'>{label}</Heading>
              <span className='rotate-0 group-hover:rotate-[360deg] duration-1000 origin-center h-10 flex items-center justify-center'>
                <Star />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterOutro() {
  return (
    <div className='bg-muted text-sm py-10 px-7 font-light text-primary-color flex items-center justify-between'>
      <p>
        Crafted by{' '}
        <Button className='group p-0 text-primary-color font-medium' variant='link'>
          <Link href={'/team'} className='inline-flex items-center justify-start'>
            Eblaze team
            <div className='relative ml-2 size-5 overflow-hidden'>
              <div className='absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-5'>
                <Arrow className='size-5 inline-block' />
                <Arrow className='size-5 -translate-x-5' />
              </div>
            </div>
          </Link>
        </Button>
      </p>
      <p className='font-medium'>© 2024 ELAZE</p>
    </div>
  );
}

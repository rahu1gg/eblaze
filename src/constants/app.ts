export const APP = {
  email: 'eblaze2k24@gmail.com',
} as const;

export const SOCIAL_LINKS = [
  {
    id: 'sl1',
    label: 'Instagram',
    href: 'https://www.instagram.com/e_blaze_2k24',
  },
  {
    id: 'sl2',
    label: 'Email',
    href: `mailto:${APP.email}`,
  },
];

export const APP_LINKS = [
  {
    id: 'ap1',
    label: 'Home',
    href: '/',
    src: 'eblaze-home.png',
  },
  {
    id: 'ap2',
    label: 'About',
    href: '/about',
    src: 'eblaze-about.png',
  },
  {
    id: 'ap3',
    label: 'Gallery',
    href: '/gallery',
    src: 'eblaze-gallery.png',
  },
  {
    id: 'ap4',
    label: 'Events',
    href: '/events',
    src: 'eblaze-events.png',
  },
  {
    id: 'ap5',
    label: 'Contact',
    href: '/contact',
    src: 'eblaze-contact.png',
  },
];

export type AppLink = typeof APP_LINKS;

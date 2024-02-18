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
  },
  {
    id: 'ap2',
    label: 'About',
    href: '/about',
  },
  {
    id: 'ap3',
    label: 'Gallery',
    href: '/gallery',
  },
  {
    id: 'ap4',
    label: 'Events',
    href: '/events',
  },
  {
    id: 'ap5',
    label: 'Contact',
    href: '/contact',
  },
];

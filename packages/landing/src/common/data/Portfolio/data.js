import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

import box from '../../assets/image/portfolio/box.svg';
import battery from '../../assets/image/portfolio/battery.svg';
import barrel from '../../assets/image/portfolio/barrel.svg';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';


export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: '#',
  },
  {
    icon: socialFacebook,
    url: '#',
  },
  {
    icon: socialDribbbleOutline,
    url: '#',
  },
  {
    icon: socialGithub,
    url: '#',
  },
  {
    icon: socialGoogleplusOutline,
    url: '#',
  },
];

export const MENU_ITEMS = [
  {
    label: 'O MNIE',
    path: '#about_section',
    offset: '0',
  },
  {
    label: 'OFERTA',
    path: '#offer_section',
    offset: '0',
  },
  {
    label: 'KONTAKT',
    path: '#contact_section',
    offset: '0',
  },
];




export const PROCESS_STEPS = [
  {
    image: box,
    title: 'Opakowania',
    description:
      'Opakowania i Produkty Opakowane z Własnym Brandingiem',
  },
  {
    image: battery,
    title: 'Elektronika',
    description:
      'Urządzenia Elektryczne i Elektroniczne, Baterie oraz Akumulatory',
  },
  {
    image: barrel,
    title: 'Specjalistyczne',
    description:
      'Zużyte Oleje, Opony, Środki Smarowe i Specjalistyczne ',
  },

];


export const SKILLS = [
  {
    title: 'Obowiązki prawne',
    description:
      'Zidentyfikuję wszelkie wymogi dotyczące opakowań, sprzętu elektronicznego, baterii i akumulatorów, które dotyczą Twojej firmy.',
    icon: SkillIcon1,
  },
  {
    title: 'Zarządzanie rejestracją',
    description:
      'Zajmę się całością procesu rejestracji w bazie danych o produktach i opakowaniach oraz o gospodarce odpadami (BDO).',
    icon: SkillIcon2,
  },
  {
    title: 'Obsługa sprawozdawcza',
    description:
      'Zadbam o coroczną sprawozdawczość związaną z wprowadzaniem produktów na rynek, zapewniając zgodność z wymogami.',
    icon: SkillIcon3,
  },

  {
    title: 'Optymalizacja kosztów',
    description:
      'Przygotuję strategię pozwalającą zminimalizować wydatki przy jednoczesnej pełnej zgodności z obowiązującym prawem.',
    icon: SkillIcon4,
  },
];


export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];

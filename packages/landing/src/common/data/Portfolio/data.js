import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

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
    image: Step1,
    title: ' ',
    description:
      'Raportowanie dotyczące produktów w opakowaniach (w tym z własnym logo),',
  },
  {
    image: Step2,
    title: ' ',
    description:
      'Zagadnienia związane ze sprzętem elektrycznym, elektronicznym, baterie i akumulatory',
  },
  {
    image: Step3,
    title: ' ',
    description:
      'Zarządzanie produktami specjalistycznymi, takimi jak oleje, opony i preparaty smarowe.',
  },

];


export const SKILLS = [
  {
    title: 'Wsparcie w identyfikacji obowiązków',
    description:
      ' Pomogę Ci zrozumieć, jakie wymagania dotyczące opakowań, sprzętu elektrycznego i elektronicznego, a także baterii i akumulatorów, mają zastosowanie do Twojej działalności.',
    icon: SkillIcon1,
  },
  {
    title: 'Przejęcie obowiązków sprawozdawczych:',
    description:
      'Zadbam o coroczną sprawozdawczość związaną z wprowadzaniem produktów na rynek, zapewniając zgodność z wymogami urzędów.',
    icon: SkillIcon3,
  },
  {
    title: 'Pomoc w rejestracji:',
    description:
      'Zajmę się procesem rejestracji Twojej firmy w bazie danych o produktach i opakowaniach oraz o gospodarce odpadami (BDO).',
    icon: SkillIcon2,
  },

  {
    title: 'Optymalizacja kosztów:',
    description:
      'Doradzę, jak obniżyć koszty związane z wprowadzaniem opakowań, sprzętu, czy baterii, przy jednoczesnym zachowaniu zgodności z przepisami.',
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

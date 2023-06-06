// import images
import LogoImg from '../src/assets/img/header/logo.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Richiedi una demo',
};

export const nav = [
  { name: 'Caratteristiche', href: '/' },
  { name: 'Su di Noi', href: '/' },
  { name: 'Prezzi', href: '/' },
  { name: 'Feedback', href: '/' },
];

export const hero = {
  title: 'Traccia le spese per risparmiare denaro',
  subtitle: 'Ti aiutiamo a organizzare le entrate e le uscite',
  btnText: 'Demo gratuita',
  compText: '— Web, iOS and Android',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Sempre online',
    title: 'Supporto in tempo reale con il cloud',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Ulteriori informazioni',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Free some cost',
    title: 'Risparmia sui costi per te e la tua famiglia',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Ulteriori informazioni',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Usa in qualsiasi momento',
    title: 'Usa in qualsiasi momento quando hai bisogno',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Ulteriori informazioni',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Il prodotto con cui lavoriamo',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Piattaforma incrociata',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Puro Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Scegli il tuo piano flessibile',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Memorizza dati illimitati' },
        { name: 'Esporta in pdf, xls, csv' },
        { name: 'Supporto Cloud server' },
      ],
      price: '€9.99',
      userAmount: 'fino a 3 utenti + 1,99 per utente',
      btnText: 'Prendi questo',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Memorizza dati illimitati' },
        { name: 'Esporta in pdf, xls, csv' },
        { name: 'Supporto Cloud server' },
      ],
      price: '€19.99',
      userAmount: 'fino a 3 utenti + 1,99 per utente',
      btnText: 'Prendi questo',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Memorizza dati illimitati' },
        { name: 'Esporta in pdf, xls, csv' },
        { name: 'Supporto Cloud server' },
      ],
      price: '€29.99',
      userAmount: 'fino a 3 utenti + 1,99 per utente',
      btnText: 'Prendi questo',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'Abbiamo milioni di ottimi auguri',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Gianna Astoni',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Gianna Astoni',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Gianna Astoni',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Gianna Astoni',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Gianna Astoni',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: 'Più di 20 milioni di download da 32 paesi diversi',
  subtitle: 'Prova la demo per 7 giorni con tutte le funzionalità',
  btnText: 'Prova la demo gratis',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'Su di Noi', href: '/' },
    { name: 'Carriere', href: '/' },
    { name: 'Prezzi', href: '/' },
    { name: 'Caratteristiche', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Condizioni di utilizzo', href: '/' },
    { name: 'Termini e Condizioni', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Oltre 25000 persone si sono iscritte',
  },
  form: {
    placeholder: 'La tua email',
    btnText: 'Iscriviti',
    smallText: 'Non vendiamo la tua email',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contattaci',
    href: '/',
  },
  copyText: 'Copyright @ 2023 Pixelpro',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};

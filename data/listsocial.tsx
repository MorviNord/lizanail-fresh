// listsocial.tsx
import { TelegramIcon } from "../components//Icon/social/telegram.tsx";
import { InstagramIcon } from "../components//Icon/social/Instagram.tsx";
// import { IcWhatsapp } from "../components/Icon/social/IcWhatsapp.tsx";
import { IcPhone } from "../components/Icon/IcPhone.tsx";

const sociallinks = [
  {
    id: 0,
    icon: <IcPhone />,
    link: "tel:+79123456789",
    description: "+7 (900) 123-45-67",
    label: "Позвонить",
  },
  {
    id: 1,
    icon: <TelegramIcon />,
    link: "https://t.me/technoflexer",
    description: "@technoflexer",
    label: "Telegram",
  },
  // {
  //   id: 2,
  //   icon: <IcWhatsapp />,
  //   link: "https://github.com/MorviNord?tab=repositories",
  //   label: "Посмотреть github",
  // },
  {
    id: 3,
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/",
    description: "@lizanail",
    label: "Instagram",
  },
];

export default sociallinks;

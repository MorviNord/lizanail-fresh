export type AvantageItem = {
  id: number;
  img: string;
  label: string;
  description: string;
  alt: string;
};

const advantagesData: AvantageItem[] = [
  {
    id: 1,
    img: "/img/interests/sterilization_item.svg",
    label: "100% стерильность",
    description:
      "Мы гарантируем полную стерильность и безопасность всех процедур, чтобы вы могли наслаждаться маникюром и педикюром без забот.",
    alt: "100% стерильность и безопасность процедур",
  },
  {
    id: 2,
    img: "/img/interests/materials_item.svg",
    label: "Надежные материалы: IQ Beauty 4Blanc CNI",
    description:
      "Мы используем только качественные материалы для маникюра и педикюра, чтобы обеспечить максимальный комфорт и результат.",
    alt: "Использование качественных материалов для маникюра и педикюра",
  },
  {
    id: 3,
    img: "/img/interests/safe_cutting_item.svg",
    label: "Безопасная техника среза",
    description:
      "Мы применяем только безопасные методы при проведении процедур, чтобы обеспечить вашу защиту и комфорт.",
    alt: "Использование безопасной техники при проведении процедур",
  },
];

export default advantagesData;

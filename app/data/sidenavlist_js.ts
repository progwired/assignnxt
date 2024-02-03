import { jsIntroduction } from "./js/introduction";

export interface SidenavProps {
  id: string;
  label: string;
  data: {
    id: string;
    segment: string;
    label: string;
    href: string;
    data: SidenavDataProps;
  }[];
}

export interface SidenavDataProps {
  title: string;
  description: string;
}

const sidenavlist_js = [
  {
    id: "js-introduction",
    label: "introduction",
    href: "/js/introduction",
    data: jsIntroduction,
  },
  {
    id: "js-runtime",
    label: "runtime",
    href: "/js/runtime",
    data: null,
  },
  {
    id: "js-language",
    label: "language",
    href: "/js/language",
    data: null,
  },
];

export default sidenavlist_js;

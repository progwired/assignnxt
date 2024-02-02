import jsAdvantages from "./js/advantages";
import jsHistory from "./js/history";
import jsName from "./js/name";
import jsPurpose from "./js/purpose";

export interface SidenavProps {
  id: string;
  segment: string;
  label: string;
  href: string;
  data: () => SidenavDataProps;
}

export interface SidenavDataProps {
  title: string;
  description: string;
}

const sidenavlist_js = [
  {
    id: "js-name",
    segment: "js",
    label: "name",
    href: "/js/name",
    data: jsName,
  },
  {
    id: "js-purpose",
    segment: "js",
    label: "purpose",
    href: "/js/purpose",
    data: jsPurpose,
  },
  {
    id: "js-history",
    segment: "js",
    label: "history",
    href: "/js/history",
    data: jsHistory,
  },
  {
    id: "js-advantages",
    segment: "js",
    label: "advantages",
    href: "/js/advantages",
    data: jsAdvantages,
  },
];

export default sidenavlist_js;

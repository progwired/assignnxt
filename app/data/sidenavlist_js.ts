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
];

export default sidenavlist_js;

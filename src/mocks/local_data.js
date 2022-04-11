import uuid from "react-uuid";

// Home
const home_slider = [
  {
    title: "Modern.",
    description:
      "The perfect place for every contemporary furniture store and manufacturer. This is Woode.",
    src: "https://images.unsplash.com/photo-1567016546367-c27a0d56712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Art.",
    description:
      "The perfect place for every contemporary furniture store and manufacturer. This is Woode.",
    src: "https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
  },
  {
    title: "Peace.",
    description:
      "The perfect place for every contemporary furniture store and manufacturer. This is Woode.",
    src: "https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];
const imagesRow = [
  {
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-1-ver-x2.png",
    alt: "Gallery furniture",
    id: uuid()
  },
  {
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-3-ver-x2.png",
    alt: "Furnitura",
    id: uuid()
  },
  {
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-2-ver-x2.png",
    alt: "Furniture for everyone",
    id: uuid()
  },
  {
    src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-4-ver-x2.png",
    alt: "Furniture woode gallery",
    id: uuid()
  },
  {
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/client-img-1-ver-x2.png",
    alt: "Gallery furniture - Woode",
    id: uuid()
  }
];

// Triple preview
const triple_view_content = [
  {
    id: 1,
    label: "special offer",
    title: "Recycled metal",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/h5-baner-1.jpg"
  },
  {
    id: 2,
    label: "top picks",
    title: "Custom woodwork",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2021/01/h5-baner-2-768x296.jpg"
  },
  {
    id: 3,
    label: "minimal décor",
    title: "Handmade pottery",
    src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/h5-baner-3.jpg"
  }
];

// Team members
const team_members = [
  {
    name: "Nicolette Ritonni",
    job: "fine ceramics",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-4.jpg",
    id: uuid()
  },
  {
    name: "Juliette Massé",
    job: "store manager",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-3.jpg",
    id: uuid()
  },
  {
    name: "Nicolas Waller",
    job: "arquitect",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-2.jpg",
    id: uuid()
  },
  {
    name: "Yeung Ngai",
    job: "designer",
    src: "	https://umea.qodeinteractive.com/wp-content/uploads/2020/11/team-img-1.jpg",
    id: uuid()
  }
];

// About us
let about_content = [
  {
    id: 1,
    subtitle: "ABOUT OUR COLLECTIONS",
    title: "Experience new way of designing",
    body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-1.jpg"
  },
  {
    id: 2,
    subtitle: "ABOUT OUR SHOP",
    title: "Experience the shop",
    body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-2.jpg"
  },
  {
    id: 3,
    subtitle: "ABOUT USED MATERIALS",
    title: "Experience wood-work items",
    body: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
    src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-3.jpg"
  }
];

let about_reviews = [
  {
    id: 1,
    subtitle: "Kevin Sundström",
    title:
      "Scelerisque viverra mauris in aliquam sem. Ornareusisa suspendisse sed nis."
  },
  {
    id: 2,
    subtitle: "Otto Pettersson",
    title:
      "Urnanuque cursrra meturis in aliquam sem. Ornareusisa suspendisse eleifend."
  },
  {
    id: 3,
    subtitle: "Georgia Longdenberg",
    title:
      "Ornareusisa maece mauris in blandit sem. Oramesacisa turpisedisse ege sed."
  }
];

export {
  imagesRow,
  home_slider,
  triple_view_content,
  team_members,
  about_content,
  about_reviews
};

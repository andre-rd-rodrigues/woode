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
const home_triple_view_content = [
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

const locations = [
  {
    id: 1,
    title: "Norrköping Store",
    description:
      "Lorem ipsum dolor sit amet, comp uting of ore et dolore ma antemo enim. Quam quisque id diam.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2162.598658755749!2d15.130214316018991!3d57.17810688863238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46576a1b609cb4bb%3A0x48b2ea37fdef7a0e!2sSweden%20Zipline!5e0!3m2!1spt-PT!2suk!4v1651232133932!5m2!1spt-PT!2suk",
    contact: {
      email: "something@woode.com",
      address: "Källvindsgatan 5 602 40, Sweden",
      phone: "+668 66 448 6452 99"
    }
  },
  {
    id: 2,
    title: "Konungsund Store",
    description:
      "Lorem ipsum dolor sit amet, comp uting of ore et dolore ma antemo enim. Quam quisque id diam.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8318.894848833188!2d16.374578247734295!3d58.58334338746981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465925a3ba262d4d%3A0xb171281d2d414e54!2s610%2033%20Konungsund%2C%20Su%C3%A9cia!5e0!3m2!1spt-PT!2suk!4v1651232276865!5m2!1spt-PT!2suk",
    contact: {
      email: "something@woode.com",
      address: "Konungsund 5 602 40, Sweden",
      phone: "+668 66 448 6452 99"
    }
  },

  {
    id: 3,
    title: "Stokholm Store",
    description:
      "Lorem ipsum dolor sit amet, comp uting of ore et dolore ma antemo enim. Quam quisque id diam.",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2126.256593256721!2d14.139161216038861!3d57.79699503996014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a6e77c6e42ee3%3A0x3ca384da472a0411!2zU3dlZGVuYm9yZ3NnYXRhbiwgNTU0IDQ4IErDtm5rw7ZwaW5nLCBTdcOpY2lh!5e0!3m2!1spt-PT!2suk!4v1651232224315!5m2!1spt-PT!2suk",
    contact: {
      email: "something@woode.com",
      address: "Stokholm 5 602 40, Sweden",
      phone: "+668 66 448 6452 99"
    }
  }
];

export {
  imagesRow,
  home_slider,
  home_triple_view_content,
  team_members,
  about_content,
  about_reviews,
  locations
};

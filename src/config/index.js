export const navbarLinks = {
  HOME: {
    path: "/",
    title: "home",
  },
  EMERGENCY_INFO: {
    path: "/emergency-info",
    title: "emergencyInfo",
  },
  ABOUT_US: {
    path: "/about-us",
    title: "aboutUs",
  },
  // PRODUCT: {
  //   path: "/product",
  //   title: "product",
  // },
  //   BLOG: {
  //     path: "https://sosafe.se/blog",
  //     title: "blog",
  //   },
  //   SHOP: {
  //     path: "https://sosafe.se/shop",
  //     title: "shop",
  //   },
  CONTACT_US: {
    path: "/contacts",
    title: "contacts",
  },
  // FAQ: {
  //   path: "/faq",
  //   title: "FAQ",
  // },
}

export const defaultMetaInfo = {
  title: "SoSafe",
}

export const langs = {
  en: {
    short: "En",
    full: "English",
  },
  sv: {
    short: "Sv",
    full: "Svenska",
  },
}

export const marketsLinks = {
  apple: "https://apps.apple.com/se/app/sosafe/id1525898608",
  google: "https://play.google.com/store/apps/details?id=com.sosafe.app",
}

export const socialLinks = {
  twitter: "https://twitter.com",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
}

export const animation = {
  transition: { ease: "easeOut", duration: 1 },
  menu: {
    transition: { ease: "easeOut", duration: 0.75 },
  },
  text: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  cards: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.5,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  },
  infoCards: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 1.5,
          staggerChildren: 0.5,
        },
      },
    },
    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      },
    },
  },
  slides: {
    enter: {
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      opacity: 1,
      scale: 1.1,
    },
    exit: {
      opacity: 0,
      scale: 0.6,
    },
    transition: { duration: 0.3 },
  },
}

export const checkAppBanner = {
  // removed top 80 while banner is hidden
  // height: 0,
  height: 80,
}

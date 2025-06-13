export const portfolio = {
  personalInfo: {
    name: "Suhas Nidgundi",
    description: "",
    email: "suhasnidgundi@gmail.com",
  },

 socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suhasnidgundi/",
      icon: "IconBrandLinkedin", // Changed from image to icon
    },
    {
      name: "GitHub",
      url: "https://github.com/suhasnidgundi",
      icon: "IconBrandGithub", // Changed from image to icon
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/just.another.suhas",
      icon: "IconBrandInstagram", // Changed from image to icon
    },
    {
      name: "ORCID",
      url: "https://orcid.org/0009-0004-1241-6596",
      icon: "IconFileText", // Using a generic icon for ORCID as there's no specific one
    },
  ],

  setup: {
    motherboard: "Intel G41 Pegatron",
    processor: "Intel Celeron 420 - 1.6GHz 512Kb L2 Cache",
    graphicsCard: "ATI Radeon 8500 128MB",
    ram: "2GB (4x512MB) 400MHz DDR",
    hdd: '160GB WD Caviar WD1600 3.5" SATA HDD',
    case: "Yellow-ish ATX Case",
    keyboardAndMouse: "Dell Optiplex combo from 2001 Model SK-8135",
    internetConnectivity: "PEX56KIM PCI Express V.92 56K Data Fax Modem",
    monitor:
      "Hacked 2012 iMac with an eBay chip that adds VGA and HDMI connectors to the LCD panel",
    os: "Microsoft Windows XP Professional SP2 (64bit edition)",
    desktopWallpaper: "Bliss",
    codeEditor: "Visual Studio Code, Always",
    lastUpdated: "8 of June 2025",
  },

  projects: [
    {
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best forests to visit in North America",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Hawaii beaches review: better than you think",
      category: "beach",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Mountains at night: 12 best locations to enjoy the view",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Aurora in Norway: when to visit for best experience",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best places to visit this winter",
      category: "tourism",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Active volcanos reviews: travel at your own risk",
      category: "nature",
    },
  ],
};

export const headerConfig = {
  logo: {
    src: "/favicon.ico",
    width: 50,
    height: 50,
    alt: "Logo",
  },
  title: {
    text: "Suhas Nídgundí",
    href: "/",
    style: {
      fontWeight: "bold",
      filter: "opacity(60%)",
      textDecoration: "none",
    },
  },
  navItems: [
    { text: "HOME", href: "/" },
    { text: "ABOUT ME", href: "/about" },
    { text: "PROJECTS", href: "/projects" },
    { text: "CONTACT", href: "#contactMe" },
  ],
};
export const portfolio = {
  personalInfo: {
    name: "Suhas Nidgundi",
    description: "I'm a software developer and a student from India.",
    email:"suhasnidgundi@gmail.com"
  },

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suhasnidgundi/",
      image: "/images/linkedIn_icon.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/suhasnidgundi",
      image: "/images/github.webp",
    },
  ],

  projects: [
    {
      name: "UniGetUI (formerly WingetUI)",
      description:
        "A graphical interface to install, update remove and manage packages from the most common Package Managers for Windows, such as Winget, Scoop, Chocolatey and many more",
      image: "resources/winget.webp",
      links: [
        { text: "Project homepage", url: "/unigetui" },
        {
          text: "Download",
          url: "https://github.com/marticliment/UniGetUI/releases/latest/download/UniGetUI.Installer.exe",
        },
      ],
    },
    {
      name: "ElevenClock - A better clock for Windows 11",
      description:
        "A better clock for Windows 11: ElevenClock will let you customize your taskbar clock, adding seconds, moving it around, changing its color and much more, like in the good old days.",
      image: "resources/elevenclock.webp",
      links: [
        { text: "Project homepage", url: "/elevenclock" },
        {
          text: "Download",
          url: "https://github.com/marticliment/ElevenClock/releases/latest/download/ElevenClock.Installer.exe",
        },
      ],
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
    lastUpdated: "12 of April 2024",
  },
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
      color: "white",
    },
  },
  navItems: [
    { text: "ABOUT ME", href: "#aboutme" },
    { text: "MY PROJECTS", href: "#projects" },
    { text: "CONTACT ME", href: "/contactMe" },
  ],
};

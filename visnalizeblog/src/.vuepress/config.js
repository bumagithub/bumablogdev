module.exports = {
  title: "Bumablog",

  description:
    "Loving share",

  head: [
    ["link", { rel: "icon", href: "/assets/buma.jpg" }],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TRC2SF4L67');",
    ],
  ],

  themeConfig: {
    logo: "/assets/buma.jpg",
    nav: [
      {
        text: "Coding no boundary",
        items: [{ text: "About", link: "/codingnoboundary/about" }],
      },
      { text: "Blogs", link: "/blog/" },
      { text: "About", link: "/about" },
    ],
    sidebar: {
      "/codingnoboundary/": "auto",
      "/blog/": [
        "making-this-website",
      ],
    },
    smoothScroll: true,
  },

  plugins: [
   
  ],

  globalUIComponents: ["ThemeToggle"],
};

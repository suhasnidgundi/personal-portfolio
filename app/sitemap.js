export default function sitemap() {
  return [
    {
      url: "https://suhasnidgundi.me",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://suhasnidgundi.me/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://suhasnidgundi.me/projects",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}

export default function sitemap() {
  return [
    {
      url: "https://suhasnidgundi.me",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://suhasnidgundi.me/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://suhasnidgundi.me/projects",
      lastModified: new Date(),
      changeFrequency: "weakly",
      priority: 0.8,
    },
  ];
}

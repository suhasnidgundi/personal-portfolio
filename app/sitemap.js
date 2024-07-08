export default function sitemap() {
  return [
    {
      url: "https://suhasnidgundi.suveesoft.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://suhasnidgundi.suveesoft.in/#aboutme",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
        url: "https://suhasnidgundi.suveesoft.in/#projects",
        lastModified: new Date(),
        changeFrequency: "weakly",
        priority: 0.8,
      },
    {
      url: "https://suhasnidgundi.suveesoft.in/contactMe",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}

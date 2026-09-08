window.PROJECTS = [
  { slug: "872-kamera-ct-corrected-v4", title: "Stillwater House", count: 21 },
  { slug: "867-kamera", title: "Modern Heritage House", count: 21, skip: [20, 21] },
  { slug: "forest-park", title: "Forest Park", count: 27 },
  { slug: "s-hills-2025", title: "Vesper House", count: 23 },
  {
    slug: "big-indian",
    title: "The Patina House",
    count: 25,
    keep: [1, 9],
    insertAfter: 1,
    extra: []
  },
  { slug: "twin-gables", title: "Gallery House", count: 31 },
  { slug: "kamp-rd", title: "Hearth and Timber House", count: 22, skip: [12, 13, 21, 22] },
  { slug: "162-jackson-creek", title: "The Quiet Fold", count: 39 }
];
window.IMG = (slug, n) =>
  `https://juniperdesignhomes.com/images/${slug}/${String(n).padStart(2, "0")}.webp`;

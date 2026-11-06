/*
  The route table the prerender step works from. Titles and descriptions live in
  src/routes-meta.json, because the application needs them for client navigation too.
*/
import fs from "node:fs";

const meta = JSON.parse(fs.readFileSync(new URL("../src/routes-meta.json", import.meta.url), "utf8"));

const origin = "https://workstation.dawidolko.pl";

export const site = {
  origin,
  name: "WorkStation",
  locale: "en_US",
  image: "/og-image.jpg",
  imageAlt: "WorkStation gaming and work setup",
  outDir: "dist",
  rootId: "app",
};

function breadcrumbs(route) {
  const parts = route.path.split("/").filter(Boolean);
  const items = [{ name: "Home", path: "/" }];
  if (parts.length > 1) {
    const parent = meta.find((item) => item.path === `/${parts[0]}/`);
    items.push({ name: parent.title.split(" | ")[0], path: parent.path });
  }
  items.push({ name: route.title.split(" | ")[0], path: route.path });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: origin + item.path,
    })),
  };
}

function structuredData(route) {
  if (route.path !== "/") return [breadcrumbs(route)];
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "WorkStation",
      url: `${origin}/`,
      description: route.description,
      author: { "@type": "Person", name: "Dawid Olko", url: "https://dawidolko.pl" },
    },
  ];
}

export const routes = meta.map((route) => ({ ...route, jsonLd: structuredData(route) }));

export const notFound = {
  probe: "/this-page-does-not-exist/",
  title: "Page Not Found | WorkStation Setup",
  description: "This address does not match any WorkStation page. Go back to the home page to see the setup and its components.",
};

import { useEffect } from 'react';

const ORIGIN = 'https://romjjjke.github.io/gidropolimer';

type Props = { title: string; description: string; path: string };

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function SEO({ title, description, path }: Props) {
  useEffect(() => {
    const url = ORIGIN + path;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
  }, [title, description, path]);
  return null;
}

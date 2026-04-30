const section = window.location.pathname.split('/').filter(Boolean)[0];

const script = document.currentScript;
const base = script.src.substring(0, script.src.lastIndexOf('/')) + '/styles';

const styles = {
  notes: `${base}/notes.css`,
  travel: `${base}/travel.css`,
  about: `${base}/about.css`
};

const href = styles[section] || `${base}/default.css`;

const linkTag = `<link rel="stylesheet" href="${href}">`;

if (document.readyState === "loading") {
  document.write(linkTag);
} else {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}
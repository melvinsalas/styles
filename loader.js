const section = window.location.pathname.split('/').filter(Boolean)[0];

const styles = {
  notes: "/styles/notes.css",
  travel: "/styles/travel.css",
  about: "/styles/about.css"
};

const href = styles[section] || "/styles/default.css";

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = href;
document.head.appendChild(link);
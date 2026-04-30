const section = window.location.pathname.split('/').filter(Boolean)[0];

const styles = {
  notes: "/styles/notes.css",
  travel: "/styles/travel.css",
  about: "/styles/about.css"
};

if (styles[section]) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = styles[section];
  document.head.appendChild(link);
}

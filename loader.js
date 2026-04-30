const section = window.location.pathname.split('/').filter(Boolean)[0];

const scriptSrc = document.currentScript.src;
const base = scriptSrc.substring(0, scriptSrc.lastIndexOf('/')) + '/styles';

const styles = {
  about: `${base}/about.css`
};

const href = styles[section] || `${base}/default.css`;

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = href;
document.head.appendChild(link);
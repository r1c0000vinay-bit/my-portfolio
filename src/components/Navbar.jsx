import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["GitHub", "#github"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-icon"><Code2 size={19} /></span>
        <span>Vinay<span className="accent">.</span></span>
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
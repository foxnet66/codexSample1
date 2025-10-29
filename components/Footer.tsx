const footerLinks = [
  {
    title: "Social",
    links: [
      { name: "Dribbble", href: "https://dribbble.com" },
      { name: "Behance", href: "https://behance.net" },
      { name: "LinkedIn", href: "https://linkedin.com" }
    ]
  },
  {
    title: "Offices",
    links: [
      { name: "San Francisco", href: "#" },
      { name: "Berlin", href: "#" },
      { name: "Singapore", href: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Playbook", href: "#" },
      { name: "Case studies", href: "#" },
      { name: "Press kit", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Orbit Labs</span>
            <p className="text-sm text-slate-400">
              Designing and engineering forward-looking digital experiences for bold teams.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3 text-sm text-slate-300">
              <span className="font-semibold text-white">{section.title}</span>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a className="transition hover:text-white" href={link.href}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Orbit Labs. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

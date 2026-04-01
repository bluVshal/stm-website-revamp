"use client";

import { Container } from "./Container"; 

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-10 md:px-8">
      <Container>
        <div className="rounded-[2rem] bg-[#414042] p-8 text-white md:p-10">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div>
                 <img loading="lazy" src="/STM-Consulting_logo_White.png" alt="STM Logo" className="h-auto w-auto" />
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
                Performance-led strategy, creative, and execution for brands that want smarter digital growth.
              </p>
            </div>

            <FooterColumn title="Navigation" items={[{title:"About", link:"/about"}, {title:"Services", link:"/services"}, {title:"Work", link:"/work"}, {title:"Process", link:"/process"}, {title:"Careers", link:"/careers"}, {title:"Contact", link:"/contact"}]} />
            <FooterColumn title="Services" items={[{title:"SEO", link:"/services/seo"}, {title:"Paid Media", link:"/services/paid-media"}, {title:"CRM", link:"/services/crm"}, {title:"Creative", link:"/services/creative"}, {title:"Analytics", link:"/services/analytics"}, {title:"Strategy", link:"/services/strategy"}]} />
            <FooterColumn title="Contact" items={[{title:"info@stmconsulting.io", link:"mailto:info@stmconsulting.io"}, /*{title:"+230 000 0000", link:"tel:+2300000000"},*/ {title:"8th Floor, Nexteracom 1, Ebène, Mauritius", link:"https://maps.google.com/?q=8th+Floor,+Nexteracom+1,+Ebène,+Mauritius"}]} />
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <div>© 2021 - 2026 STM Consulting Ltd. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-4 grid gap-3 text-sm text-white/70">
        {items.map((item) => (
          <a key={item.title} href={item.link} className="transition hover:text-white">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
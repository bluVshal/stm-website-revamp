"use client";

import { Container } from "./Container"; 

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-10 md:px-8">
      <Container>
        <div className="rounded-[2rem] bg-[#202220] p-8 text-white md:p-10">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div>
                 <img src="/STM-Consulting_logo_White.png" alt="STM Logo" className="h-auto w-auto" />
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
                Performance-led strategy, creative, and execution for brands that want smarter digital growth.
              </p>
            </div>

            <FooterColumn title="Navigation" items={["About", "Services", "Work", "Process", "Careers", "Contact"]} />
            <FooterColumn title="Services" items={["SEO", "Paid Media", "CRM", "Creative", "Analytics", "Strategy"]} />
            <FooterColumn title="Contact" items={["info@stmconsulting.io", /*"+230 000 0000",*/ "8th Floor, Nexteracom 1, Ebène, Mauritius"]} />
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <div>© 2026 STM Agency. All rights reserved.</div>
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
          <a key={item} href="#" className="transition hover:text-white">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
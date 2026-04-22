"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/Buttons";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.stmconsulting.io/wp-json/wp/v2/avada_portfolio?_embed{page}&per_page=10")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then(setPortfolio)
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setPortfolio([]);
      });
  }, []);

  if (portfolio === null) return <h2>Loading Vacancies...</h2>;
  if (error) return <p>No vacancies available at the moment. Stay tuned for updates!</p>;

  return (
    <div id="vacancies" className="px-0 py-4 sm:px-2 sm:py-5">
      {portfolio.length === 0 ? (
        <p>No vacancies available at the moment. Stay tuned for updates!</p>
      ) : (
          <ul className="grid auto-rows-fr gap-4">
            {portfolio.map((item) => (
              <li key={item.id} className="flex h-full min-h-[11rem] w-full min-w-0 flex-col gap-4 rounded-2xl sm:rounded-[1.85rem] border border-[#E6EBE7] bg-white p-4 text-left shadow-[0_8px_24px_rgba(24,32,28,0.04)] sm:p-7 md:flex-row md:items-center md:justify-between md:gap-10">
                <div
                  className="oppor-container flex min-w-0 flex-1 flex-col items-start justify-between gap-3 sm:gap-4"
                >
                  <h2 className="mb-2 w-full break-words font-bold text-lg sm:text-xl [overflow-wrap:anywhere] [word-break:break-word] [hyphens:auto]" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                  <Button variant="primary" onClick={() => window.open(item.link, "_blank")} icon={<ArrowRight size={16} />}>
                    Learn More
                  </Button>
                </div>
              </li>
            ))}
          </ul>
      )}
    </div>
  );
}

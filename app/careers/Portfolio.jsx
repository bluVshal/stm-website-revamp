"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/Buttons";
import {
  ArrowRight,
} from "lucide-react";

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.stmconsulting.io/wp-json/wp/v2/avada_portfolio?_embed")
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
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="vacancies" style={{ padding: "20px" }}>
      {portfolio.length === 0 ? (
        <p>No vacancies available at the moment. Stay tuned for updates!</p>
      ) : (

          <ul>
            {portfolio.map((item) => (
              <li key={item.id} className="grid gap-5 rounded-[1.85rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:grid-cols-[1fr_auto] md:items-center md:gap-10 mb-4">
                <div
                  key={item.id}
                  className="oppor-container"
                >
                  <h2 className="mb-4 font-bold text-xl" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                  <Button variant="primary" onClick={() => window.open(item.link, "_blank")} icon={<ArrowRight size={16} />}>
                    Apply Now
                  </Button>
                </div>
              </li>
            ))}
          </ul>
      )}
    </div>
  );
}

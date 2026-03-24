"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./Buttons";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock3,
  Globe,
  HeartHandshake,
  MapPin,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

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
        <p>No items found.</p>
      ) : (
        <div>
          {portfolio.map((item) => (
            <div
              className="grid gap-5 rounded-[1.85rem] border border-[#E6EBE7] bg-white p-7 shadow-[0_8px_24px_rgba(24,32,28,0.04)] md:grid-cols-[1fr_auto] md:items-center md:gap-10 mb-4"
            >

              {item._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  alt={item.title.rendered}
                  style={{ maxWidth: "900px" }}
                />
              )}
            </div>
          ))}

        {/* <ul>
            {portfolio.map((item) => (
              <li key={item.id}>
                <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                {item._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img
                    src={item._embedded["wp:featuredmedia"][0].source_url}
                    alt={item.title.rendered}
                    style={{ maxWidth: "900px" }}
                  />
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
              </li>
            ))}
          </ul> */}

        </div>

      )}
    </div>
  );
}

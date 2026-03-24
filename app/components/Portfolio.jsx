"use client";

import { useEffect, useState } from "react";

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

  if (portfolio === null) return <p>Loading portfolio...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Avada Portfolio</h1>
      {portfolio.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <ul>
          {portfolio.map((item) => (
            <li key={item.id}>
              <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              {item._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  alt={item.title.rendered}
                  style={{ maxWidth: "300px" }}
                />
              )}
              <div
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

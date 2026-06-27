import { useEffect, useState } from "react";

const FALLBACK = { rating: 4.9, reviewCount: 93 };

export function useGoogleRating() {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/google-rating")
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled && typeof json?.rating === "number" && typeof json?.reviewCount === "number") {
          setData(json);
        }
      })
      .catch(() => {
        // Keep the fallback values on any network/parsing error.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    rating: data.rating,
    reviewCount: data.reviewCount,
    ratingLabel: data.rating.toFixed(1).replace(".", ","),
  };
}

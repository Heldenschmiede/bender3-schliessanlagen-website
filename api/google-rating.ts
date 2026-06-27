export const config = { runtime: "edge" };

// Fallback used if the Google API call fails or the env vars aren't set yet.
const FALLBACK = { rating: 4.9, reviewCount: 93 };

const PLACE_ID = "ChIJhbrzYA3Fl0cRLKBva1rqHc4";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export default async function handler() {
  if (!PLACE_ID || !API_KEY) {
    return Response.json(FALLBACK, {
      headers: { "Cache-Control": "s-maxage=3600" },
    });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    const rating = data?.result?.rating;
    const reviewCount = data?.result?.user_ratings_total;

    if (typeof rating !== "number" || typeof reviewCount !== "number") {
      return Response.json(FALLBACK, {
        headers: { "Cache-Control": "s-maxage=3600" },
      });
    }

    return Response.json(
      { rating, reviewCount },
      // Cache for a day on Vercel's edge, serve stale while refetching.
      { headers: { "Cache-Control": "s-maxage=86400, stale-while-revalidate=43200" } },
    );
  } catch {
    return Response.json(FALLBACK, {
      headers: { "Cache-Control": "s-maxage=3600" },
    });
  }
}

import React from "react";
import { Helmet } from "react-helmet-async";

type Props = { path: string };

const RouteCanonical: React.FC<Props> = ({ path }) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://trilio.ai";
  const href = `${origin}${path.startsWith("/") ? path : `/${path}`}`;
  return (
    <Helmet>
      <link rel="canonical" href={href} />
    </Helmet>
  );
};

export default RouteCanonical;



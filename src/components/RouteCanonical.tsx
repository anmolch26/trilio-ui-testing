import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const RouteCanonical = () => {
  const { pathname } = useLocation();

  const canonical = `https://trilio.ai${pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default RouteCanonical;

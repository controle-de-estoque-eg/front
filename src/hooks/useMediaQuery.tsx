import { useEffect, useMemo, useState } from "react";

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

export function useMediaQueries() {
  const mobile = useMediaQuery("(max-width: 639px)");

  const maior_640 = useMediaQuery("(min-width: 640px)");
  const menor_1024 = useMediaQuery("(max-width: 1023px)");
  const tablet = maior_640 && menor_1024 ? true : false;

  const maior_1024 = useMediaQuery("(min-width: 1024px)");
  const menor_1280 = useMediaQuery("(max-width: 1279px)");
  const laptop = maior_1024 && menor_1280 ? true : false;

  const desktop = useMediaQuery("(min-width: 1280px)");

  return { mobile, tablet, laptop, desktop };
}

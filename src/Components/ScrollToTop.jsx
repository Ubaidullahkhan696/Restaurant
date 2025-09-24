import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll window to the very top-left corner on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

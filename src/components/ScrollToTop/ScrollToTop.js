import React, { useEffect, useState } from "react";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top" aria-label="Scroll to top">
        <NorthRoundedIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;

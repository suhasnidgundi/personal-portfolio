"use client"

import "@/libs/topbutton/script";

function ScrollToTopButton() {
  return (
    <button id="GoTopButton" onClick="window.scrollTo(0, 0)">
      ▴
    </button>
  );
}

export default ScrollToTopButton;

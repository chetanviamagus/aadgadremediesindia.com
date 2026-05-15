/**
 * Responsive Google Maps embed (no API key).
 * Reads data-embed-src from .aadgad-google-map-wrap and injects the iframe.
 */
(function () {
  var EMBED_SELECTOR = ".aadgad-google-map-wrap[data-embed-src]";
  var TARGET_SELECTOR = "[data-aadgad-map-target]";

  function initAadgadMapEmbed(wrap) {
    var src = wrap.getAttribute("data-embed-src");
    if (!src) {
      return;
    }

    var target = wrap.querySelector(TARGET_SELECTOR);
    if (!target) {
      return;
    }

    if (target.querySelector("iframe")) {
      return;
    }

    var title =
      wrap.getAttribute("data-map-title") ||
      "Map showing Aadgad remedies India Pvt. Ltd, Kuddupur, Uttar Pradesh";

    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

    iframe.addEventListener("load", function () {
      wrap.classList.add("is-map-loaded");
    });

    target.appendChild(iframe);
  }

  function initAll() {
    var wraps = document.querySelectorAll(EMBED_SELECTOR);
    for (var i = 0; i < wraps.length; i++) {
      initAadgadMapEmbed(wraps[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAll);
  } else {
    initAll();
  }
})();

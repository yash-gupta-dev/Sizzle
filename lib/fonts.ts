import localFont from "next/font/local";

// 1. Neue Plak — base family
export const plak = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Neue Plak Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak ExtraBlack.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-plak",
  display: "swap",
});

// 2. Neue Plak Text — has italics, no UltraLight/ExtraBlack
export const plakText = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Text Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak Text Thin Italic.ttf", weight: "100", style: "italic" },
    { path: "../public/fonts/Neue Plak Text Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Text Light Italic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Neue Plak Text Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak Text Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/Neue Plak Text SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Text SemiBold Italic.ttf", weight: "600", style: "italic" },
    { path: "../public/fonts/Neue Plak Text Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Text Bold Italic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/Neue Plak Text Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak Text Black Italic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-plak-text",
  display: "swap",
});

// 3. Neue Plak Compressed
export const plakCompressed = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Compressed Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak Compressed ExtraBlack.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-plak-compressed",
  display: "swap",
});

// 4. Neue Plak Condensed
export const plakCondensed = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Condensed Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak Condensed ExtraBlack.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-plak-condensed",
  display: "swap",
});

// 5. Neue Plak Extended
export const plakExtended = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Extended Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak Extended ExtraBlack.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-plak-extended",
  display: "swap",
});

// 6. Neue Plak Narrow
export const plakNarrow = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Narrow Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak Narrow ExtraBlack.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-plak-narrow",
  display: "swap",
});

// 7. Neue Plak Wide
export const plakWide = localFont({
  src: [
    { path: "../public/fonts/Neue Plak Wide Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide UltraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/Neue Plak Wide ExtraBlack.ttf", weight: "950", style: "normal" },
  ],
  variable: "--font-plak-wide",
  display: "swap",
});
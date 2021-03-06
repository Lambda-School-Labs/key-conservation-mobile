import React from 'react';
import { SvgXml } from 'react-native-svg';

export default function PlusLightening() {
  const plusLightening = `
    <svg width="492" height="560" viewBox="0 0 492 560" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="492" height="560" fill="white"/>
<g clip-path="url(#clip0)">
<path d="M296 208H180.6L223.2 78.2C227.2 63 215.7 48 200 48H56C44 48 33.8 56.9 32.2 68.8L0.200019 308.8C-1.69998 323.2 9.50002 336 24 336H142.7L96.6 530.5C93 545.7 104.6 560 119.9 560C128.3 560 136.3 555.6 140.7 548L316.7 244C326 228.1 314.5 208 296 208Z" fill="#3B3B3B"/>
</g>
<path d="M473.143 104.107H388.286V18.9286C388.286 8.47645 379.841 0 369.429 0H350.571C340.159 0 331.714 8.47645 331.714 18.9286V104.107H246.857C236.444 104.107 228 112.584 228 123.036V141.964C228 152.416 236.444 160.893 246.857 160.893H331.714V246.071C331.714 256.524 340.159 265 350.571 265H369.429C379.841 265 388.286 256.524 388.286 246.071V160.893H473.143C483.556 160.893 492 152.416 492 141.964V123.036C492 112.584 483.556 104.107 473.143 104.107Z" fill="#02FF9D"/>
<defs>
<clipPath id="clip0">
<rect y="48" width="320" height="512" fill="white"/>
</clipPath>
</defs>
</svg>
  `;
  const PlusLightening = () => (
    <SvgXml xml={plusLightening} width='25' height='25' />
  );

  return <PlusLightening />;
}

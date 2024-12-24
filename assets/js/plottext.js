const defaultplottext = (function () {
  const outputplot = `
<svg class="svg-test" viewBox="-5 -5 4005 1768" xmlns="http://www.w3.org/2000/svg">
<style>
  .path1 { fill: none; stroke: black; stroke-width: 5; }
  .path2 { fill: none; stroke: black; stroke-width: 3; }
  .text1 { font-family: 'Devant Pro', monospace; font-size: 30px; }
  .text2 { font-family: 'Roboto Condensed', monospace; font-size: 50px; }
  .text3 { font-family: 'Courier New', Courier, monospace; font-size: 40px; }
  .text4 { font-family: 'DotMatrix', monospace; font-size: 56px; }
  .punch { fill: #081e02; }
</style>
    <path d="M3995,233 L3995,1643 A 115 115 90 0 1 3880,1758 L120,1758 A 115 115 90 0 1 5,1643 L5,120 A 115 115 90 0 1 120,5 L3858,5 L3995,233" class="path1" />
    <path d="M345,26 L345,1701 M398,1704 L398,22" class="path2" />
    <path d="M99,17 L99,1709 M153,1700 L153,1665 M153,1641 L153,1595 M153,1563 L153,1521 M153,1477 L153,1421 M153,1386 L153,1334 M153,1302 L153,1251 M153,1207 L153,1144 M153,1110 L153,1048 M153,1016 L153,953 M153,927 L153,857 M153,823 L153,758 M153,713 L153,653 M153,619 L153,579 M153,542 L153,494 M153,479 L153,431 M153,412 L153,369" class="path2" />
    <path d="M99,238 L345,238 M398,160 L3514,160 M99,369 L3914,369 M3514,22 L3514,1696 M3914,1705 L3914,107" class="path2" />

    <text x="124" y="75" class="text4">1</text>
    <path d="M128,519 L153,519 L153,583 L128,583 Z" class="punch" />
    <path d="M128,656 L153,656 L153,721 L128,721 Z" class="punch" />
    <text x="171" y="75" class="text4">A</text>
    <path d="M175,109 L200,109 L200,173 L175,173 Z" class="punch" />
    <path d="M175,519 L200,519 L200,583 L175,583 Z" class="punch" />
    <path d="M175,656 L200,656 L200,721 L175,721 Z" class="punch" />
    <text x="218" y="75" class="text4">A</text>
    <path d="M222,109 L247,109 L247,173 L222,173 Z" class="punch" />
    <path d="M222,519 L247,519 L247,583 L222,583 Z" class="punch" />
    <path d="M222,656 L247,656 L247,721 L222,721 Z" class="punch" />
    <text x="265" y="75" class="text4">A</text>
    <path d="M269,109 L294,109 L294,173 L269,173 Z" class="punch" />
    <path d="M269,519 L294,519 L294,583 L269,583 Z" class="punch" />
    <path d="M269,656 L294,656 L294,721 L269,721 Z" class="punch" />
    <text x="312" y="75" class="text4">A</text>
    <path d="M316,109 L341,109 L341,173 L316,173 Z" class="punch" />
    <path d="M316,519 L341,519 L341,583 L316,583 Z" class="punch" />
    <path d="M316,656 L341,656 L341,721 L316,721 Z" class="punch" />
    <text x="360" y="75" class="text4">A</text>
    <path d="M365,109 L390,109 L390,173 L365,173 Z" class="punch" />
    <path d="M365,519 L390,519 L390,583 L365,583 Z" class="punch" />
    <path d="M365,656 L390,656 L390,721 L365,721 Z" class="punch" />
    <text x="407" y="75" class="text4">1</text>
    <path d="M411,519 L436,519 L436,583 L411,583 Z" class="punch" />
    <path d="M411,656 L436,656 L436,721 L411,721 Z" class="punch" />
    <text x="454" y="75" class="text4">A</text>
    <path d="M459,109 L484,109 L484,173 L459,173 Z" class="punch" />
    <path d="M459,519 L484,519 L484,583 L459,583 Z" class="punch" />
    <path d="M459,656 L484,656 L484,721 L459,721 Z" class="punch" />
    <text x="501" y="75" class="text4">A</text>
    <path d="M505,109 L530,109 L530,173 L505,173 Z" class="punch" />
    <path d="M505,519 L530,519 L530,583 L505,583 Z" class="punch" />
    <path d="M505,656 L530,656 L530,721 L505,721 Z" class="punch" />
    <text x="548" y="75" class="text4">A</text>
    <path d="M552,109 L577,109 L577,173 L552,173 Z" class="punch" />
    <path d="M552,519 L577,519 L577,583 L552,583 Z" class="punch" />
    <path d="M552,656 L577,656 L577,721 L552,721 Z" class="punch" />
    <text x="595" y="75" class="text4">A</text>
    <path d="M599,109 L624,109 L624,173 L599,173 Z" class="punch" />
    <path d="M599,519 L624,519 L624,583 L599,583 Z" class="punch" />
    <path d="M599,656 L624,656 L624,721 L599,721 Z" class="punch" />
    <text x="643" y="75" class="text4">A</text>
    <path d="M647,109 L672,109 L672,173 L647,173 Z" class="punch" />
    <path d="M647,519 L672,519 L672,583 L647,583 Z" class="punch" />
    <path d="M647,656 L672,656 L672,721 L647,721 Z" class="punch" />
    <text x="690" y="75" class="text4">A</text>
    <path d="M694,109 L719,109 L719,173 L694,173 Z" class="punch" />
    <path d="M694,519 L719,519 L719,583 L694,583 Z" class="punch" />
    <path d="M694,656 L719,656 L719,721 L694,721 Z" class="punch" />
    <text x="737" y="75" class="text4">A</text>
    <path d="M741,109 L766,109 L766,173 L741,173 Z" class="punch" />
    <path d="M741,519 L766,519 L766,583 L741,583 Z" class="punch" />
    <path d="M741,656 L766,656 L766,721 L741,721 Z" class="punch" />
    <text x="784" y="75" class="text4">A</text>
    <path d="M788,109 L813,109 L813,173 L788,173 Z" class="punch" />
    <path d="M788,519 L813,519 L813,583 L788,583 Z" class="punch" />
    <path d="M788,656 L813,656 L813,721 L788,721 Z" class="punch" />
    <text x="831" y="75" class="text4">A</text>
    <path d="M835,109 L860,109 L860,173 L835,173 Z" class="punch" />
    <path d="M835,519 L860,519 L860,583 L835,583 Z" class="punch" />
    <path d="M835,656 L860,656 L860,721 L835,721 Z" class="punch" />
    <text x="878" y="75" class="text4">A</text>
    <path d="M882,109 L907,109 L907,173 L882,173 Z" class="punch" />
    <path d="M882,519 L907,519 L907,583 L882,583 Z" class="punch" />
    <path d="M882,656 L907,656 L907,721 L882,721 Z" class="punch" />
    <text x="926" y="75" class="text4">A</text>
    <path d="M930,109 L955,109 L955,173 L930,173 Z" class="punch" />
    <path d="M930,519 L955,519 L955,583 L930,583 Z" class="punch" />
    <path d="M930,656 L955,656 L955,721 L930,721 Z" class="punch" />
    <text x="973" y="75" class="text4">A</text>
    <path d="M977,109 L1002,109 L1002,173 L977,173 Z" class="punch" />
    <path d="M977,519 L1002,519 L1002,583 L977,583 Z" class="punch" />
    <path d="M977,656 L1002,656 L1002,721 L977,721 Z" class="punch" />
    <text x="1020" y="75" class="text4">A</text>
    <path d="M1024,109 L1049,109 L1049,173 L1024,173 Z" class="punch" />
    <path d="M1024,519 L1049,519 L1049,583 L1024,583 Z" class="punch" />
    <path d="M1024,656 L1049,656 L1049,721 L1024,721 Z" class="punch" />
    <text x="1067" y="75" class="text4">A</text>
    <path d="M1071,109 L1096,109 L1096,173 L1071,173 Z" class="punch" />
    <path d="M1071,519 L1096,519 L1096,583 L1071,583 Z" class="punch" />
    <path d="M1071,656 L1096,656 L1096,721 L1071,721 Z" class="punch" />
    <text x="1114" y="75" class="text4">A</text>
    <path d="M1118,109 L1143,109 L1143,173 L1118,173 Z" class="punch" />
    <path d="M1118,519 L1143,519 L1143,583 L1118,583 Z" class="punch" />
    <path d="M1118,656 L1143,656 L1143,721 L1118,721 Z" class="punch" />
    <text x="1161" y="75" class="text4">A</text>
    <path d="M1165,109 L1190,109 L1190,173 L1165,173 Z" class="punch" />
    <path d="M1165,519 L1190,519 L1190,583 L1165,583 Z" class="punch" />
    <path d="M1165,656 L1190,656 L1190,721 L1165,721 Z" class="punch" />
    <text x="1209" y="75" class="text4">A</text>
    <path d="M1213,109 L1238,109 L1238,173 L1213,173 Z" class="punch" />
    <path d="M1213,519 L1238,519 L1238,583 L1213,583 Z" class="punch" />
    <path d="M1213,656 L1238,656 L1238,721 L1213,721 Z" class="punch" />
    <text x="1256" y="75" class="text4">A</text>
    <path d="M1260,109 L1285,109 L1285,173 L1260,173 Z" class="punch" />
    <path d="M1260,519 L1285,519 L1285,583 L1260,583 Z" class="punch" />
    <path d="M1260,656 L1285,656 L1285,721 L1260,721 Z" class="punch" />
    <text x="1303" y="75" class="text4">A</text>
    <path d="M1307,109 L1332,109 L1332,173 L1307,173 Z" class="punch" />
    <path d="M1307,519 L1332,519 L1332,583 L1307,583 Z" class="punch" />
    <path d="M1307,656 L1332,656 L1332,721 L1307,721 Z" class="punch" />
    <text x="1350" y="75" class="text4">A</text>
    <path d="M1354,109 L1379,109 L1379,173 L1354,173 Z" class="punch" />
    <path d="M1354,519 L1379,519 L1379,583 L1354,583 Z" class="punch" />
    <path d="M1354,656 L1379,656 L1379,721 L1354,721 Z" class="punch" />
    <text x="1397" y="75" class="text4">A</text>
    <path d="M1401,109 L1426,109 L1426,173 L1401,173 Z" class="punch" />
    <path d="M1401,519 L1426,519 L1426,583 L1401,583 Z" class="punch" />
    <path d="M1401,656 L1426,656 L1426,721 L1401,721 Z" class="punch" />
    <text x="1444" y="75" class="text4">A</text>
    <path d="M1448,109 L1473,109 L1473,173 L1448,173 Z" class="punch" />
    <path d="M1448,519 L1473,519 L1473,583 L1448,583 Z" class="punch" />
    <path d="M1448,656 L1473,656 L1473,721 L1448,721 Z" class="punch" />
    <text x="1492" y="75" class="text4">A</text>
    <path d="M1496,109 L1521,109 L1521,173 L1496,173 Z" class="punch" />
    <path d="M1496,519 L1521,519 L1521,583 L1496,583 Z" class="punch" />
    <path d="M1496,656 L1521,656 L1521,721 L1496,721 Z" class="punch" />
    <text x="1539" y="75" class="text4">A</text>
    <path d="M1543,109 L1568,109 L1568,173 L1543,173 Z" class="punch" />
    <path d="M1543,519 L1568,519 L1568,583 L1543,583 Z" class="punch" />
    <path d="M1543,656 L1568,656 L1568,721 L1543,721 Z" class="punch" />
    <text x="1586" y="75" class="text4">A</text>
    <path d="M1590,109 L1615,109 L1615,173 L1590,173 Z" class="punch" />
    <path d="M1590,519 L1615,519 L1615,583 L1590,583 Z" class="punch" />
    <path d="M1590,656 L1615,656 L1615,721 L1590,721 Z" class="punch" />
    <text x="1633" y="75" class="text4">A</text>
    <path d="M1637,109 L1662,109 L1662,173 L1637,173 Z" class="punch" />
    <path d="M1637,519 L1662,519 L1662,583 L1637,583 Z" class="punch" />
    <path d="M1637,656 L1662,656 L1662,721 L1637,721 Z" class="punch" />
    <text x="1680" y="75" class="text4">A</text>
    <path d="M1684,109 L1709,109 L1709,173 L1684,173 Z" class="punch" />
    <path d="M1684,519 L1709,519 L1709,583 L1684,583 Z" class="punch" />
    <path d="M1684,656 L1709,656 L1709,721 L1684,721 Z" class="punch" />
    <text x="1728" y="75" class="text4">A</text>
    <path d="M1732,109 L1757,109 L1757,173 L1732,173 Z" class="punch" />
    <path d="M1732,519 L1757,519 L1757,583 L1732,583 Z" class="punch" />
    <path d="M1732,656 L1757,656 L1757,721 L1732,721 Z" class="punch" />
    <text x="1775" y="75" class="text4">A</text>
    <path d="M1779,109 L1804,109 L1804,173 L1779,173 Z" class="punch" />
    <path d="M1779,519 L1804,519 L1804,583 L1779,583 Z" class="punch" />
    <path d="M1779,656 L1804,656 L1804,721 L1779,721 Z" class="punch" />
    <text x="1822" y="75" class="text4">A</text>
    <path d="M1826,109 L1851,109 L1851,173 L1826,173 Z" class="punch" />
    <path d="M1826,519 L1851,519 L1851,583 L1826,583 Z" class="punch" />
    <path d="M1826,656 L1851,656 L1851,721 L1826,721 Z" class="punch" />
    <text x="1869" y="75" class="text4">A</text>
    <path d="M1873,109 L1898,109 L1898,173 L1873,173 Z" class="punch" />
    <path d="M1873,519 L1898,519 L1898,583 L1873,583 Z" class="punch" />
    <path d="M1873,656 L1898,656 L1898,721 L1873,721 Z" class="punch" />
    <text x="1916" y="75" class="text4">A</text>
    <path d="M1920,109 L1945,109 L1945,173 L1920,173 Z" class="punch" />
    <path d="M1920,519 L1945,519 L1945,583 L1920,583 Z" class="punch" />
    <path d="M1920,656 L1945,656 L1945,721 L1920,721 Z" class="punch" />
    <text x="1963" y="75" class="text4">A</text>
    <path d="M1967,109 L1992,109 L1992,173 L1967,173 Z" class="punch" />
    <path d="M1967,519 L1992,519 L1992,583 L1967,583 Z" class="punch" />
    <path d="M1967,656 L1992,656 L1992,721 L1967,721 Z" class="punch" />
    <text x="2010" y="75" class="text4">A</text>
    <path d="M2014,109 L2039,109 L2039,173 L2014,173 Z" class="punch" />
    <path d="M2014,519 L2039,519 L2039,583 L2014,583 Z" class="punch" />
    <path d="M2014,656 L2039,656 L2039,721 L2014,721 Z" class="punch" />
    <text x="2058" y="75" class="text4">A</text>
    <path d="M2062,109 L2087,109 L2087,173 L2062,173 Z" class="punch" />
    <path d="M2062,519 L2087,519 L2087,583 L2062,583 Z" class="punch" />
    <path d="M2062,656 L2087,656 L2087,721 L2062,721 Z" class="punch" />
    <text x="2105" y="75" class="text4">A</text>
    <path d="M2109,109 L2134,109 L2134,173 L2109,173 Z" class="punch" />
    <path d="M2109,519 L2134,519 L2134,583 L2109,583 Z" class="punch" />
    <path d="M2109,656 L2134,656 L2134,721 L2109,721 Z" class="punch" />
    <text x="2152" y="75" class="text4">A</text>
    <path d="M2156,109 L2181,109 L2181,173 L2156,173 Z" class="punch" />
    <path d="M2156,519 L2181,519 L2181,583 L2156,583 Z" class="punch" />
    <path d="M2156,656 L2181,656 L2181,721 L2156,721 Z" class="punch" />
    <text x="2199" y="75" class="text4">A</text>
    <path d="M2203,109 L2228,109 L2228,173 L2203,173 Z" class="punch" />
    <path d="M2203,519 L2228,519 L2228,583 L2203,583 Z" class="punch" />
    <path d="M2203,656 L2228,656 L2228,721 L2203,721 Z" class="punch" />
    <text x="2246" y="75" class="text4">A</text>
    <path d="M2250,109 L2275,109 L2275,173 L2250,173 Z" class="punch" />
    <path d="M2250,519 L2275,519 L2275,583 L2250,583 Z" class="punch" />
    <path d="M2250,656 L2275,656 L2275,721 L2250,721 Z" class="punch" />
    <text x="2294" y="75" class="text4">A</text>
    <path d="M2298,109 L2323,109 L2323,173 L2298,173 Z" class="punch" />
    <path d="M2298,519 L2323,519 L2323,583 L2298,583 Z" class="punch" />
    <path d="M2298,656 L2323,656 L2323,721 L2298,721 Z" class="punch" />
    <text x="2341" y="75" class="text4">A</text>
    <path d="M2345,109 L2370,109 L2370,173 L2345,173 Z" class="punch" />
    <path d="M2345,519 L2370,519 L2370,583 L2345,583 Z" class="punch" />
    <path d="M2345,656 L2370,656 L2370,721 L2345,721 Z" class="punch" />
    <text x="2388" y="75" class="text4">A</text>
    <path d="M2392,109 L2417,109 L2417,173 L2392,173 Z" class="punch" />
    <path d="M2392,519 L2417,519 L2417,583 L2392,583 Z" class="punch" />
    <path d="M2392,656 L2417,656 L2417,721 L2392,721 Z" class="punch" />
    <text x="2435" y="75" class="text4">1</text>
    <path d="M2439,519 L2464,519 L2464,583 L2439,583 Z" class="punch" />
    <path d="M2439,656 L2464,656 L2464,721 L2439,721 Z" class="punch" />
    <text x="2482" y="75" class="text4">A</text>
    <path d="M2486,109 L2511,109 L2511,173 L2486,173 Z" class="punch" />
    <path d="M2486,519 L2511,519 L2511,583 L2486,583 Z" class="punch" />
    <path d="M2486,656 L2511,656 L2511,721 L2486,721 Z" class="punch" />
    <text x="2529" y="75" class="text4">A</text>
    <path d="M2533,109 L2558,109 L2558,173 L2533,173 Z" class="punch" />
    <path d="M2533,519 L2558,519 L2558,583 L2533,583 Z" class="punch" />
    <path d="M2533,656 L2558,656 L2558,721 L2533,721 Z" class="punch" />
    <text x="2577" y="75" class="text4">A</text>
    <path d="M2581,109 L2606,109 L2606,173 L2581,173 Z" class="punch" />
    <path d="M2581,519 L2606,519 L2606,583 L2581,583 Z" class="punch" />
    <path d="M2581,656 L2606,656 L2606,721 L2581,721 Z" class="punch" />
    <text x="2624" y="75" class="text4">A</text>
    <path d="M2628,109 L2653,109 L2653,173 L2628,173 Z" class="punch" />
    <path d="M2628,519 L2653,519 L2653,583 L2628,583 Z" class="punch" />
    <path d="M2628,656 L2653,656 L2653,721 L2628,721 Z" class="punch" />
    <text x="2671" y="75" class="text4">A</text>
    <path d="M2675,109 L2700,109 L2700,173 L2675,173 Z" class="punch" />
    <path d="M2675,519 L2700,519 L2700,583 L2675,583 Z" class="punch" />
    <path d="M2675,656 L2700,656 L2700,721 L2675,721 Z" class="punch" />
    <text x="2718" y="75" class="text4">A</text>
    <path d="M2722,109 L2747,109 L2747,173 L2722,173 Z" class="punch" />
    <path d="M2722,519 L2747,519 L2747,583 L2722,583 Z" class="punch" />
    <path d="M2722,656 L2747,656 L2747,721 L2722,721 Z" class="punch" />
    <text x="2765" y="75" class="text4">A</text>
    <path d="M2769,109 L2794,109 L2794,173 L2769,173 Z" class="punch" />
    <path d="M2769,519 L2794,519 L2794,583 L2769,583 Z" class="punch" />
    <path d="M2769,656 L2794,656 L2794,721 L2769,721 Z" class="punch" />
    <text x="2812" y="75" class="text4">A</text>
    <path d="M2816,109 L2841,109 L2841,173 L2816,173 Z" class="punch" />
    <path d="M2816,519 L2841,519 L2841,583 L2816,583 Z" class="punch" />
    <path d="M2816,656 L2841,656 L2841,721 L2816,721 Z" class="punch" />
    <text x="2860" y="75" class="text4">A</text>
    <path d="M2864,109 L2889,109 L2889,173 L2864,173 Z" class="punch" />
    <path d="M2864,519 L2889,519 L2889,583 L2864,583 Z" class="punch" />
    <path d="M2864,656 L2889,656 L2889,721 L2864,721 Z" class="punch" />
    <text x="2907" y="75" class="text4">A</text>
    <path d="M2911,109 L2936,109 L2936,173 L2911,173 Z" class="punch" />
    <path d="M2911,519 L2936,519 L2936,583 L2911,583 Z" class="punch" />
    <path d="M2911,656 L2936,656 L2936,721 L2911,721 Z" class="punch" />
    <text x="2954" y="75" class="text4">A</text>
    <path d="M2958,109 L2983,109 L2983,173 L2958,173 Z" class="punch" />
    <path d="M2958,519 L2983,519 L2983,583 L2958,583 Z" class="punch" />
    <path d="M2958,656 L2983,656 L2983,721 L2958,721 Z" class="punch" />
    <text x="3001" y="75" class="text4">A</text>
    <path d="M3005,109 L3030,109 3030,173 L3005,173 Z" class="punch" />
    <path d="M3005,519 L3030,519 L3030,583 L3005,583 Z" class="punch" />
    <path d="M3005,656 L3030,656 L3030,721 L3005,721 Z" class="punch" />
    <text x="3048" y="75" class="text4">A</text>
    <path d="M3052,109 L3077,109 L3077,173 L3052,173 Z" class="punch" />
    <path d="M3052,519 L3077,519 L3077,583 L3052,583 Z" class="punch" />
    <path d="M3052,656 L3077,656 L3077,721 L3052,721 Z" class="punch" />
    <text x="3095" y="75" class="text4">A</text>
    <path d="M3099,109 L3124,109 L3124,173 L3099,173 Z" class="punch" />
    <path d="M3099,519 L3124,519 L3124,583 L3099,583 Z" class="punch" />
    <path d="M3099,656 L3124,656 L3124,721 L3099,721 Z" class="punch" />
    <text x="3143" y="75" class="text4">A</text>
    <path d="M3147,109 L3172,109 L3172,173 L3147,173 Z" class="punch" />
    <path d="M3147,519 L3172,519 L3172,583 L3147,583 Z" class="punch" />
    <path d="M3147,656 L3172,656 L3172,721 L3147,721 Z" class="punch" />
    <text x="3190" y="75" class="text4">A</text>
    <path d="M3194,109 L3219,109 L3219,173 L3194,173 Z" class="punch" />
    <path d="M3194,519 L3219,519 L3219,583 L3194,583 Z" class="punch" />
    <path d="M3194,656 L3219,656 L3219,721 L3194,721 Z" class="punch" />
    <text x="3237" y="75" class="text4">A</text>
    <path d="M3241,109 L3266,109 L3266,173 L3241,173 Z" class="punch" />
    <path d="M3241,519 L3266,519 L3266,583 L3241,583 Z" class="punch" />
    <path d="M3241,656 L3266,656 L3266,721 L3241,721 Z" class="punch" />
    <text x="3284" y="75" class="text4">A</text>
    <path d="M3288,109 L3313,109 L3313,173 L3288,173 Z" class="punch" />
    <path d="M3288,519 L3313,519 L3313,583 L3288,583 Z" class="punch" />
    <path d="M3288,656 L3313,656 L3313,721 L3288,721 Z" class="punch" />
    <text x="3331" y="75" class="text4">A</text>
    <path d="M3335,109 L3360,109 L3360,173 L3335,173 Z" class="punch" />
    <path d="M3335,519 L3360,519 L3360,583 L3335,583 Z" class="punch" />
    <path d="M3335,656 L3360,656 L3360,721 L3335,721 Z" class="punch" />
    <text x="3378" y="75" class="text4">A</text>
    <path d="M3382,109 L3407,109 L3407,173 L3382,173 Z" class="punch" />
    <path d="M3382,519 L3407,519 L3407,583 L3382,583 Z" class="punch" />
    <path d="M3382,656 L3407,656 L3407,721 L3382,721 Z" class="punch" />
    <text x="3426" y="75" class="text4">A</text>
    <path d="M3430,109 L3455,109 L3455,173 L3430,173 Z" class="punch" />
    <path d="M3430,519 L3455,519 L3455,583 L3430,583 Z" class="punch" />
    <path d="M3430,656 L3455,656 L3455,721 L3430,721 Z" class="punch" />
    <text x="3473" y="75" class="text4">A</text>
    <path d="M3477,109 L3502,109 L3502,173 L3477,173 Z" class="punch" />
    <path d="M3477,519 L3502,519 L3502,583 L3477,583 Z" class="punch" />
    <path d="M3477,656 L3502,656 L3502,721 L3477,721 Z" class="punch" />
    <text x="3520" y="75" class="text4">-</text>
    <path d="M3524,251 L3549,251 L3549,316 L3524,316 Z" class="punch" />
    <path d="M3524,656 L3549,656 L3549,721 L3524,721 Z" class="punch" />
    <text x="3567" y="75" class="text4">+</text>
    <path d="M3571,109 L3596,109 L3596,173 L3571,173 Z" class="punch" />
    <path d="M3571,656 L3596,656 L3596,721 L3571,721 Z" class="punch" />
    <text x="3614" y="75" class="text4">1</text>
    <path d="M3618,519 L3643,519 L3643,583 L3618,583 Z" class="punch" />
    <path d="M3618,656 L3643,656 L3643,721 L3618,721 Z" class="punch" />
    <text x="3661" y="75" class="text4">A</text>
    <path d="M3665,109 L3690,109 L3690,173 L3665,173 Z" class="punch" />
    <path d="M3665,519 L3690,519 L3690,583 L3665,583 Z" class="punch" />
    <path d="M3665,656 L3690,656 L3690,721 L3665,721 Z" class="punch" />
    <text x="3709" y="75" class="text4">A</text>
    <path d="M3713,109 L3738,109 L3738,173 L3713,173 Z" class="punch" />
    <path d="M3713,519 L3738,519 L3738,583 L3713,583 Z" class="punch" />
    <path d="M3713,656 L3738,656 L3738,721 L3713,721 Z" class="punch" />
    <text x="3756" y="75" class="text4">A</text>
    <path d="M3760,109 L3785,109 L3785,173 L3760,173 Z" class="punch" />
    <path d="M3760,519 L3785,519 L3785,583 L3760,583 Z" class="punch" />
    <path d="M3760,656 L3785,656 L3785,721 L3760,721 Z" class="punch" />
    <path d="M3807,656 L3832,656 L3832,721 L3807,721 Z" class="punch" />
    <text x="3850" y="75" class="text4">+</text>
    <path d="M3854,109 L3879,109 L3879,173 L3854,173 Z" class="punch" />
    <path d="M3854,656 L3879,656 L3879,721 L3854,721 Z" class="punch" />
    <text class="text2" y="427px">
      <tspan x="124px">0</tspan>
      <tspan x="171px">0</tspan>
      <tspan x="218px">0</tspan>
      <tspan x="265px">0</tspan>
      <tspan x="312px">0</tspan>
      <tspan x="360px">0</tspan>
      <tspan x="407px">0</tspan>
      <tspan x="454px">0</tspan>
      <tspan x="501px">0</tspan>
      <tspan x="548px">0</tspan>
      <tspan x="595px">0</tspan>
      <tspan x="643px">0</tspan>
      <tspan x="690px">0</tspan>
      <tspan x="737px">0</tspan>
      <tspan x="784px">0</tspan>
      <tspan x="831px">0</tspan>
      <tspan x="878px">0</tspan>
      <tspan x="926px">0</tspan>
      <tspan x="973px">0</tspan>
      <tspan x="1020px">0</tspan>
      <tspan x="1067px">0</tspan>
      <tspan x="1114px">0</tspan>
      <tspan x="1161px">0</tspan>
      <tspan x="1209px">0</tspan>
      <tspan x="1256px">0</tspan>
      <tspan x="1303px">0</tspan>
      <tspan x="1350px">0</tspan>
      <tspan x="1397px">0</tspan>
      <tspan x="1444px">0</tspan>
      <tspan x="1492px">0</tspan>
      <tspan x="1539px">0</tspan>
      <tspan x="1586px">0</tspan>
      <tspan x="1633px">0</tspan>
      <tspan x="1680px">0</tspan>
      <tspan x="1728px">0</tspan>
      <tspan x="1775px">0</tspan>
      <tspan x="1822px">0</tspan>
      <tspan x="1869px">0</tspan>
      <tspan x="1916px">0</tspan>
      <tspan x="1963px">0</tspan>
      <tspan x="2010px">0</tspan>
      <tspan x="2058px">0</tspan>
      <tspan x="2105px">0</tspan>
      <tspan x="2152px">0</tspan>
      <tspan x="2199px">0</tspan>
      <tspan x="2246px">0</tspan>
      <tspan x="2294px">0</tspan>
      <tspan x="2341px">0</tspan>
      <tspan x="2388px">0</tspan>
      <tspan x="2435px">0</tspan>
      <tspan x="2482px">0</tspan>
      <tspan x="2529px">0</tspan>
      <tspan x="2577px">0</tspan>
      <tspan x="2624px">0</tspan>
      <tspan x="2671px">0</tspan>
      <tspan x="2718px">0</tspan>
      <tspan x="2765px">0</tspan>
      <tspan x="2812px">0</tspan>
      <tspan x="2860px">0</tspan>
      <tspan x="2907px">0</tspan>
      <tspan x="2954px">0</tspan>
      <tspan x="3001px">0</tspan>
      <tspan x="3048px">0</tspan>
      <tspan x="3095px">0</tspan>
      <tspan x="3143px">0</tspan>
      <tspan x="3190px">0</tspan>
      <tspan x="3237px">0</tspan>
      <tspan x="3284px">0</tspan>
      <tspan x="3331px">0</tspan>
      <tspan x="3378px">0</tspan>
      <tspan x="3426px">0</tspan>
      <tspan x="3473px">0</tspan>
      <tspan x="3520px">0</tspan>
      <tspan x="3567px">0</tspan>
      <tspan x="3614px">0</tspan>
      <tspan x="3661px">0</tspan>
      <tspan x="3709px">0</tspan>
      <tspan x="3756px">0</tspan>
      <tspan x="3803px">0</tspan>
      <tspan x="3850px">0</tspan>
    </text>
    <text class="text1" y="488px">
      <tspan x="129px">1</tspan>
      <tspan x="176px">2</tspan>
      <tspan x="222px">3</tspan>
      <tspan x="268px">4</tspan>
      <tspan x="317px">5</tspan>
      <tspan x="363px">6</tspan>
      <tspan x="411px">7</tspan>
      <tspan x="456px">8</tspan>
      <tspan x="505px">9</tspan>
      <tspan x="540px">10</tspan>
      <tspan x="589px">11</tspan>
      <tspan x="638px">12</tspan>
      <tspan x="684px">13</tspan>
      <tspan x="731px">14</tspan>
      <tspan x="777px">15</tspan>
      <tspan x="824px">16</tspan>
      <tspan x="871px">17</tspan>
      <tspan x="918px">18</tspan>
      <tspan x="966px">19</tspan>
      <tspan x="1016px">20</tspan>
      <tspan x="1062px">21</tspan>
      <tspan x="1108px">22</tspan>
      <tspan x="1156px">23</tspan>
      <tspan x="1204px">24</tspan>
      <tspan x="1250px">25</tspan>
      <tspan x="1299px">26</tspan>
      <tspan x="1345px">27</tspan>
      <tspan x="1391px">28</tspan>
      <tspan x="1438px">29</tspan>
      <tspan x="1486px">30</tspan>
      <tspan x="1535px">31</tspan>
      <tspan x="1581px">32</tspan>
      <tspan x="1627px">33</tspan>
      <tspan x="1675px">34</tspan>
      <tspan x="1723px">35</tspan>
      <tspan x="1769px">36</tspan>
      <tspan x="1817px">37</tspan>
      <tspan x="1864px">38</tspan>
      <tspan x="1911px">39</tspan>
      <tspan x="1957px">40</tspan>
      <tspan x="2006px">41</tspan>
      <tspan x="2052px">42</tspan>
      <tspan x="2099px">43</tspan>
      <tspan x="2146px">44</tspan>
      <tspan x="2194px">45</tspan>
      <tspan x="2240px">46</tspan>
      <tspan x="2287px">47</tspan>
      <tspan x="2335px">48</tspan>
      <tspan x="2382px">49</tspan>
      <tspan x="2431px">50</tspan>
      <tspan x="2478px">51</tspan>
      <tspan x="2526px">52</tspan>
      <tspan x="2573px">53</tspan>
      <tspan x="2620px">54</tspan>
      <tspan x="2668px">55</tspan>
      <tspan x="2715px">56</tspan>
      <tspan x="2761px">57</tspan>
      <tspan x="2808px">58</tspan>
      <tspan x="2856px">59</tspan>
      <tspan x="2903px">60</tspan>
      <tspan x="2950px">61</tspan>
      <tspan x="2998px">62</tspan>
      <tspan x="3045px">63</tspan>
      <tspan x="3092px">64</tspan>
      <tspan x="3140px">65</tspan>
      <tspan x="3187px">66</tspan>
      <tspan x="3234px">67</tspan>
      <tspan x="3281px">68</tspan>
      <tspan x="3327px">69</tspan>
      <tspan x="3373px">70</tspan>
      <tspan x="3422px">71</tspan>
      <tspan x="3469px">72</tspan>
      <tspan x="3522px">73</tspan>
      <tspan x="3564px">74</tspan>
      <tspan x="3612px">75</tspan>
      <tspan x="3658px">76</tspan>
      <tspan x="3705px">77</tspan>
      <tspan x="3750px">78</tspan>
      <tspan x="3797px">79</tspan>
      <tspan x="3846px">80</tspan>
    </text>
    <text class="text2" y="563px">
      <tspan x="3520px">1</tspan>
      <tspan x="3567px">1</tspan>
      <tspan x="3803px">1</tspan>
      <tspan x="3850px">1</tspan>
    </text>
    <text class="text2" y="837px">
      <tspan x="124px">3</tspan>
      <tspan x="171px">3</tspan>
      <tspan x="218px">3</tspan>
      <tspan x="265px">3</tspan>
      <tspan x="312px">3</tspan>
      <tspan x="360px">3</tspan>
      <tspan x="407px">3</tspan>
      <tspan x="454px">3</tspan>
      <tspan x="501px">3</tspan>
      <tspan x="548px">3</tspan>
      <tspan x="595px">3</tspan>
      <tspan x="643px">3</tspan>
      <tspan x="690px">3</tspan>
      <tspan x="737px">3</tspan>
      <tspan x="784px">3</tspan>
      <tspan x="831px">3</tspan>
      <tspan x="878px">3</tspan>
      <tspan x="926px">3</tspan>
      <tspan x="973px">3</tspan>
      <tspan x="1020px">3</tspan>
      <tspan x="1067px">3</tspan>
      <tspan x="1114px">3</tspan>
      <tspan x="1161px">3</tspan>
      <tspan x="1209px">3</tspan>
      <tspan x="1256px">3</tspan>
      <tspan x="1303px">3</tspan>
      <tspan x="1350px">3</tspan>
      <tspan x="1397px">3</tspan>
      <tspan x="1444px">3</tspan>
      <tspan x="1492px">3</tspan>
      <tspan x="1539px">3</tspan>
      <tspan x="1586px">3</tspan>
      <tspan x="1633px">3</tspan>
      <tspan x="1680px">3</tspan>
      <tspan x="1728px">3</tspan>
      <tspan x="1775px">3</tspan>
      <tspan x="1822px">3</tspan>
      <tspan x="1869px">3</tspan>
      <tspan x="1916px">3</tspan>
      <tspan x="1963px">3</tspan>
      <tspan x="2010px">3</tspan>
      <tspan x="2058px">3</tspan>
      <tspan x="2105px">3</tspan>
      <tspan x="2152px">3</tspan>
      <tspan x="2199px">3</tspan>
      <tspan x="2246px">3</tspan>
      <tspan x="2294px">3</tspan>
      <tspan x="2341px">3</tspan>
      <tspan x="2388px">3</tspan>
      <tspan x="2435px">3</tspan>
      <tspan x="2482px">3</tspan>
      <tspan x="2529px">3</tspan>
      <tspan x="2577px">3</tspan>
      <tspan x="2624px">3</tspan>
      <tspan x="2671px">3</tspan>
      <tspan x="2718px">3</tspan>
      <tspan x="2765px">3</tspan>
      <tspan x="2812px">3</tspan>
      <tspan x="2860px">3</tspan>
      <tspan x="2907px">3</tspan>
      <tspan x="2954px">3</tspan>
      <tspan x="3001px">3</tspan>
      <tspan x="3048px">3</tspan>
      <tspan x="3095px">3</tspan>
      <tspan x="3143px">3</tspan>
      <tspan x="3190px">3</tspan>
      <tspan x="3237px">3</tspan>
      <tspan x="3284px">3</tspan>
      <tspan x="3331px">3</tspan>
      <tspan x="3378px">3</tspan>
      <tspan x="3426px">3</tspan>
      <tspan x="3473px">3</tspan>
      <tspan x="3520px">3</tspan>
      <tspan x="3567px">3</tspan>
      <tspan x="3614px">3</tspan>
      <tspan x="3661px">3</tspan>
      <tspan x="3709px">3</tspan>
      <tspan x="3756px">3</tspan>
      <tspan x="3803px">3</tspan>
      <tspan x="3850px">3</tspan>
    </text>
    <text class="text2" y="973px">
      <tspan x="124px">4</tspan>
      <tspan x="171px">4</tspan>
      <tspan x="218px">4</tspan>
      <tspan x="265px">4</tspan>
      <tspan x="312px">4</tspan>
      <tspan x="360px">4</tspan>
      <tspan x="407px">4</tspan>
      <tspan x="454px">4</tspan>
      <tspan x="501px">4</tspan>
      <tspan x="548px">4</tspan>
      <tspan x="595px">4</tspan>
      <tspan x="643px">4</tspan>
      <tspan x="690px">4</tspan>
      <tspan x="737px">4</tspan>
      <tspan x="784px">4</tspan>
      <tspan x="831px">4</tspan>
      <tspan x="878px">4</tspan>
      <tspan x="926px">4</tspan>
      <tspan x="973px">4</tspan>
      <tspan x="1020px">4</tspan>
      <tspan x="1067px">4</tspan>
      <tspan x="1114px">4</tspan>
      <tspan x="1161px">4</tspan>
      <tspan x="1209px">4</tspan>
      <tspan x="1256px">4</tspan>
      <tspan x="1303px">4</tspan>
      <tspan x="1350px">4</tspan>
      <tspan x="1397px">4</tspan>
      <tspan x="1444px">4</tspan>
      <tspan x="1492px">4</tspan>
      <tspan x="1539px">4</tspan>
      <tspan x="1586px">4</tspan>
      <tspan x="1633px">4</tspan>
      <tspan x="1680px">4</tspan>
      <tspan x="1728px">4</tspan>
      <tspan x="1775px">4</tspan>
      <tspan x="1822px">4</tspan>
      <tspan x="1869px">4</tspan>
      <tspan x="1916px">4</tspan>
      <tspan x="1963px">4</tspan>
      <tspan x="2010px">4</tspan>
      <tspan x="2058px">4</tspan>
      <tspan x="2105px">4</tspan>
      <tspan x="2152px">4</tspan>
      <tspan x="2199px">4</tspan>
      <tspan x="2246px">4</tspan>
      <tspan x="2294px">4</tspan>
      <tspan x="2341px">4</tspan>
      <tspan x="2388px">4</tspan>
      <tspan x="2435px">4</tspan>
      <tspan x="2482px">4</tspan>
      <tspan x="2529px">4</tspan>
      <tspan x="2577px">4</tspan>
      <tspan x="2624px">4</tspan>
      <tspan x="2671px">4</tspan>
      <tspan x="2718px">4</tspan>
      <tspan x="2765px">4</tspan>
      <tspan x="2812px">4</tspan>
      <tspan x="2860px">4</tspan>
      <tspan x="2907px">4</tspan>
      <tspan x="2954px">4</tspan>
      <tspan x="3001px">4</tspan>
      <tspan x="3048px">4</tspan>
      <tspan x="3095px">4</tspan>
      <tspan x="3143px">4</tspan>
      <tspan x="3190px">4</tspan>
      <tspan x="3237px">4</tspan>
      <tspan x="3284px">4</tspan>
      <tspan x="3331px">4</tspan>
      <tspan x="3378px">4</tspan>
      <tspan x="3426px">4</tspan>
      <tspan x="3473px">4</tspan>
      <tspan x="3520px">4</tspan>
      <tspan x="3567px">4</tspan>
      <tspan x="3614px">4</tspan>
      <tspan x="3661px">4</tspan>
      <tspan x="3709px">4</tspan>
      <tspan x="3756px">4</tspan>
      <tspan x="3803px">4</tspan>
      <tspan x="3850px">4</tspan>
    </text>
    <text class="text2" y="1110px">
      <tspan x="124px">5</tspan>
      <tspan x="171px">5</tspan>
      <tspan x="218px">5</tspan>
      <tspan x="265px">5</tspan>
      <tspan x="312px">5</tspan>
      <tspan x="360px">5</tspan>
      <tspan x="407px">5</tspan>
      <tspan x="454px">5</tspan>
      <tspan x="501px">5</tspan>
      <tspan x="548px">5</tspan>
      <tspan x="595px">5</tspan>
      <tspan x="643px">5</tspan>
      <tspan x="690px">5</tspan>
      <tspan x="737px">5</tspan>
      <tspan x="784px">5</tspan>
      <tspan x="831px">5</tspan>
      <tspan x="878px">5</tspan>
      <tspan x="926px">5</tspan>
      <tspan x="973px">5</tspan>
      <tspan x="1020px">5</tspan>
      <tspan x="1067px">5</tspan>
      <tspan x="1114px">5</tspan>
      <tspan x="1161px">5</tspan>
      <tspan x="1209px">5</tspan>
      <tspan x="1256px">5</tspan>
      <tspan x="1303px">5</tspan>
      <tspan x="1350px">5</tspan>
      <tspan x="1397px">5</tspan>
      <tspan x="1444px">5</tspan>
      <tspan x="1492px">5</tspan>
      <tspan x="1539px">5</tspan>
      <tspan x="1586px">5</tspan>
      <tspan x="1633px">5</tspan>
      <tspan x="1680px">5</tspan>
      <tspan x="1728px">5</tspan>
      <tspan x="1775px">5</tspan>
      <tspan x="1822px">5</tspan>
      <tspan x="1869px">5</tspan>
      <tspan x="1916px">5</tspan>
      <tspan x="1963px">5</tspan>
      <tspan x="2010px">5</tspan>
      <tspan x="2058px">5</tspan>
      <tspan x="2105px">5</tspan>
      <tspan x="2152px">5</tspan>
      <tspan x="2199px">5</tspan>
      <tspan x="2246px">5</tspan>
      <tspan x="2294px">5</tspan>
      <tspan x="2341px">5</tspan>
      <tspan x="2388px">5</tspan>
      <tspan x="2435px">5</tspan>
      <tspan x="2482px">5</tspan>
      <tspan x="2529px">5</tspan>
      <tspan x="2577px">5</tspan>
      <tspan x="2624px">5</tspan>
      <tspan x="2671px">5</tspan>
      <tspan x="2718px">5</tspan>
      <tspan x="2765px">5</tspan>
      <tspan x="2812px">5</tspan>
      <tspan x="2860px">5</tspan>
      <tspan x="2907px">5</tspan>
      <tspan x="2954px">5</tspan>
      <tspan x="3001px">5</tspan>
      <tspan x="3048px">5</tspan>
      <tspan x="3095px">5</tspan>
      <tspan x="3143px">5</tspan>
      <tspan x="3190px">5</tspan>
      <tspan x="3237px">5</tspan>
      <tspan x="3284px">5</tspan>
      <tspan x="3331px">5</tspan>
      <tspan x="3378px">5</tspan>
      <tspan x="3426px">5</tspan>
      <tspan x="3473px">5</tspan>
      <tspan x="3520px">5</tspan>
      <tspan x="3567px">5</tspan>
      <tspan x="3614px">5</tspan>
      <tspan x="3661px">5</tspan>
      <tspan x="3709px">5</tspan>
      <tspan x="3756px">5</tspan>
      <tspan x="3803px">5</tspan>
      <tspan x="3850px">5</tspan>
    </text>
    <text class="text2" y="1245px">
      <tspan x="124px">6</tspan>
      <tspan x="171px">6</tspan>
      <tspan x="218px">6</tspan>
      <tspan x="265px">6</tspan>
      <tspan x="312px">6</tspan>
      <tspan x="360px">6</tspan>
      <tspan x="407px">6</tspan>
      <tspan x="454px">6</tspan>
      <tspan x="501px">6</tspan>
      <tspan x="548px">6</tspan>
      <tspan x="595px">6</tspan>
      <tspan x="643px">6</tspan>
      <tspan x="690px">6</tspan>
      <tspan x="737px">6</tspan>
      <tspan x="784px">6</tspan>
      <tspan x="831px">6</tspan>
      <tspan x="878px">6</tspan>
      <tspan x="926px">6</tspan>
      <tspan x="973px">6</tspan>
      <tspan x="1020px">6</tspan>
      <tspan x="1067px">6</tspan>
      <tspan x="1114px">6</tspan>
      <tspan x="1161px">6</tspan>
      <tspan x="1209px">6</tspan>
      <tspan x="1256px">6</tspan>
      <tspan x="1303px">6</tspan>
      <tspan x="1350px">6</tspan>
      <tspan x="1397px">6</tspan>
      <tspan x="1444px">6</tspan>
      <tspan x="1492px">6</tspan>
      <tspan x="1539px">6</tspan>
      <tspan x="1586px">6</tspan>
      <tspan x="1633px">6</tspan>
      <tspan x="1680px">6</tspan>
      <tspan x="1728px">6</tspan>
      <tspan x="1775px">6</tspan>
      <tspan x="1822px">6</tspan>
      <tspan x="1869px">6</tspan>
      <tspan x="1916px">6</tspan>
      <tspan x="1963px">6</tspan>
      <tspan x="2010px">6</tspan>
      <tspan x="2058px">6</tspan>
      <tspan x="2105px">6</tspan>
      <tspan x="2152px">6</tspan>
      <tspan x="2199px">6</tspan>
      <tspan x="2246px">6</tspan>
      <tspan x="2294px">6</tspan>
      <tspan x="2341px">6</tspan>
      <tspan x="2388px">6</tspan>
      <tspan x="2435px">6</tspan>
      <tspan x="2482px">6</tspan>
      <tspan x="2529px">6</tspan>
      <tspan x="2577px">6</tspan>
      <tspan x="2624px">6</tspan>
      <tspan x="2671px">6</tspan>
      <tspan x="2718px">6</tspan>
      <tspan x="2765px">6</tspan>
      <tspan x="2812px">6</tspan>
      <tspan x="2860px">6</tspan>
      <tspan x="2907px">6</tspan>
      <tspan x="2954px">6</tspan>
      <tspan x="3001px">6</tspan>
      <tspan x="3048px">6</tspan>
      <tspan x="3095px">6</tspan>
      <tspan x="3143px">6</tspan>
      <tspan x="3190px">6</tspan>
      <tspan x="3237px">6</tspan>
      <tspan x="3284px">6</tspan>
      <tspan x="3331px">6</tspan>
      <tspan x="3378px">6</tspan>
      <tspan x="3426px">6</tspan>
      <tspan x="3473px">6</tspan>
      <tspan x="3520px">6</tspan>
      <tspan x="3567px">6</tspan>
      <tspan x="3614px">6</tspan>
      <tspan x="3661px">6</tspan>
      <tspan x="3709px">6</tspan>
      <tspan x="3756px">6</tspan>
      <tspan x="3803px">6</tspan>
      <tspan x="3850px">6</tspan>
    </text>
    <text class="text2" y="1383px">
      <tspan x="124px">7</tspan>
      <tspan x="171px">7</tspan>
      <tspan x="218px">7</tspan>
      <tspan x="265px">7</tspan>
      <tspan x="312px">7</tspan>
      <tspan x="360px">7</tspan>
      <tspan x="407px">7</tspan>
      <tspan x="454px">7</tspan>
      <tspan x="501px">7</tspan>
      <tspan x="548px">7</tspan>
      <tspan x="595px">7</tspan>
      <tspan x="643px">7</tspan>
      <tspan x="690px">7</tspan>
      <tspan x="737px">7</tspan>
      <tspan x="784px">7</tspan>
      <tspan x="831px">7</tspan>
      <tspan x="878px">7</tspan>
      <tspan x="926px">7</tspan>
      <tspan x="973px">7</tspan>
      <tspan x="1020px">7</tspan>
      <tspan x="1067px">7</tspan>
      <tspan x="1114px">7</tspan>
      <tspan x="1161px">7</tspan>
      <tspan x="1209px">7</tspan>
      <tspan x="1256px">7</tspan>
      <tspan x="1303px">7</tspan>
      <tspan x="1350px">7</tspan>
      <tspan x="1397px">7</tspan>
      <tspan x="1444px">7</tspan>
      <tspan x="1492px">7</tspan>
      <tspan x="1539px">7</tspan>
      <tspan x="1586px">7</tspan>
      <tspan x="1633px">7</tspan>
      <tspan x="1680px">7</tspan>
      <tspan x="1728px">7</tspan>
      <tspan x="1775px">7</tspan>
      <tspan x="1822px">7</tspan>
      <tspan x="1869px">7</tspan>
      <tspan x="1916px">7</tspan>
      <tspan x="1963px">7</tspan>
      <tspan x="2010px">7</tspan>
      <tspan x="2058px">7</tspan>
      <tspan x="2105px">7</tspan>
      <tspan x="2152px">7</tspan>
      <tspan x="2199px">7</tspan>
      <tspan x="2246px">7</tspan>
      <tspan x="2294px">7</tspan>
      <tspan x="2341px">7</tspan>
      <tspan x="2388px">7</tspan>
      <tspan x="2435px">7</tspan>
      <tspan x="2482px">7</tspan>
      <tspan x="2529px">7</tspan>
      <tspan x="2577px">7</tspan>
      <tspan x="2624px">7</tspan>
      <tspan x="2671px">7</tspan>
      <tspan x="2718px">7</tspan>
      <tspan x="2765px">7</tspan>
      <tspan x="2812px">7</tspan>
      <tspan x="2860px">7</tspan>
      <tspan x="2907px">7</tspan>
      <tspan x="2954px">7</tspan>
      <tspan x="3001px">7</tspan>
      <tspan x="3048px">7</tspan>
      <tspan x="3095px">7</tspan>
      <tspan x="3143px">7</tspan>
      <tspan x="3190px">7</tspan>
      <tspan x="3237px">7</tspan>
      <tspan x="3284px">7</tspan>
      <tspan x="3331px">7</tspan>
      <tspan x="3378px">7</tspan>
      <tspan x="3426px">7</tspan>
      <tspan x="3473px">7</tspan>
      <tspan x="3520px">7</tspan>
      <tspan x="3567px">7</tspan>
      <tspan x="3614px">7</tspan>
      <tspan x="3661px">7</tspan>
      <tspan x="3709px">7</tspan>
      <tspan x="3756px">7</tspan>
      <tspan x="3803px">7</tspan>
      <tspan x="3850px">7</tspan>
    </text>
    <text class="text2" y="1518px">
      <tspan x="124px">8</tspan>
      <tspan x="171px">8</tspan>
      <tspan x="218px">8</tspan>
      <tspan x="265px">8</tspan>
      <tspan x="312px">8</tspan>
      <tspan x="360px">8</tspan>
      <tspan x="407px">8</tspan>
      <tspan x="454px">8</tspan>
      <tspan x="501px">8</tspan>
      <tspan x="548px">8</tspan>
      <tspan x="595px">8</tspan>
      <tspan x="643px">8</tspan>
      <tspan x="690px">8</tspan>
      <tspan x="737px">8</tspan>
      <tspan x="784px">8</tspan>
      <tspan x="831px">8</tspan>
      <tspan x="878px">8</tspan>
      <tspan x="926px">8</tspan>
      <tspan x="973px">8</tspan>
      <tspan x="1020px">8</tspan>
      <tspan x="1067px">8</tspan>
      <tspan x="1114px">8</tspan>
      <tspan x="1161px">8</tspan>
      <tspan x="1209px">8</tspan>
      <tspan x="1256px">8</tspan>
      <tspan x="1303px">8</tspan>
      <tspan x="1350px">8</tspan>
      <tspan x="1397px">8</tspan>
      <tspan x="1444px">8</tspan>
      <tspan x="1492px">8</tspan>
      <tspan x="1539px">8</tspan>
      <tspan x="1586px">8</tspan>
      <tspan x="1633px">8</tspan>
      <tspan x="1680px">8</tspan>
      <tspan x="1728px">8</tspan>
      <tspan x="1775px">8</tspan>
      <tspan x="1822px">8</tspan>
      <tspan x="1869px">8</tspan>
      <tspan x="1916px">8</tspan>
      <tspan x="1963px">8</tspan>
      <tspan x="2010px">8</tspan>
      <tspan x="2058px">8</tspan>
      <tspan x="2105px">8</tspan>
      <tspan x="2152px">8</tspan>
      <tspan x="2199px">8</tspan>
      <tspan x="2246px">8</tspan>
      <tspan x="2294px">8</tspan>
      <tspan x="2341px">8</tspan>
      <tspan x="2388px">8</tspan>
      <tspan x="2435px">8</tspan>
      <tspan x="2482px">8</tspan>
      <tspan x="2529px">8</tspan>
      <tspan x="2577px">8</tspan>
      <tspan x="2624px">8</tspan>
      <tspan x="2671px">8</tspan>
      <tspan x="2718px">8</tspan>
      <tspan x="2765px">8</tspan>
      <tspan x="2812px">8</tspan>
      <tspan x="2860px">8</tspan>
      <tspan x="2907px">8</tspan>
      <tspan x="2954px">8</tspan>
      <tspan x="3001px">8</tspan>
      <tspan x="3048px">8</tspan>
      <tspan x="3095px">8</tspan>
      <tspan x="3143px">8</tspan>
      <tspan x="3190px">8</tspan>
      <tspan x="3237px">8</tspan>
      <tspan x="3284px">8</tspan>
      <tspan x="3331px">8</tspan>
      <tspan x="3378px">8</tspan>
      <tspan x="3426px">8</tspan>
      <tspan x="3473px">8</tspan>
      <tspan x="3520px">8</tspan>
      <tspan x="3567px">8</tspan>
      <tspan x="3614px">8</tspan>
      <tspan x="3661px">8</tspan>
      <tspan x="3709px">8</tspan>
      <tspan x="3756px">8</tspan>
      <tspan x="3803px">8</tspan>
      <tspan x="3850px">8</tspan>
    </text>
    <text class="text2" y="1653px">
      <tspan x="124px">9</tspan>
      <tspan x="171px">9</tspan>
      <tspan x="218px">9</tspan>
      <tspan x="265px">9</tspan>
      <tspan x="312px">9</tspan>
      <tspan x="360px">9</tspan>
      <tspan x="407px">9</tspan>
      <tspan x="454px">9</tspan>
      <tspan x="501px">9</tspan>
      <tspan x="548px">9</tspan>
      <tspan x="595px">9</tspan>
      <tspan x="643px">9</tspan>
      <tspan x="690px">9</tspan>
      <tspan x="737px">9</tspan>
      <tspan x="784px">9</tspan>
      <tspan x="831px">9</tspan>
      <tspan x="878px">9</tspan>
      <tspan x="926px">9</tspan>
      <tspan x="973px">9</tspan>
      <tspan x="1020px">9</tspan>
      <tspan x="1067px">9</tspan>
      <tspan x="1114px">9</tspan>
      <tspan x="1161px">9</tspan>
      <tspan x="1209px">9</tspan>
      <tspan x="1256px">9</tspan>
      <tspan x="1303px">9</tspan>
      <tspan x="1350px">9</tspan>
      <tspan x="1397px">9</tspan>
      <tspan x="1444px">9</tspan>
      <tspan x="1492px">9</tspan>
      <tspan x="1539px">9</tspan>
      <tspan x="1586px">9</tspan>
      <tspan x="1633px">9</tspan>
      <tspan x="1680px">9</tspan>
      <tspan x="1728px">9</tspan>
      <tspan x="1775px">9</tspan>
      <tspan x="1822px">9</tspan>
      <tspan x="1869px">9</tspan>
      <tspan x="1916px">9</tspan>
      <tspan x="1963px">9</tspan>
      <tspan x="2010px">9</tspan>
      <tspan x="2058px">9</tspan>
      <tspan x="2105px">9</tspan>
      <tspan x="2152px">9</tspan>
      <tspan x="2199px">9</tspan>
      <tspan x="2246px">9</tspan>
      <tspan x="2294px">9</tspan>
      <tspan x="2341px">9</tspan>
      <tspan x="2388px">9</tspan>
      <tspan x="2435px">9</tspan>
      <tspan x="2482px">9</tspan>
      <tspan x="2529px">9</tspan>
      <tspan x="2577px">9</tspan>
      <tspan x="2624px">9</tspan>
      <tspan x="2671px">9</tspan>
      <tspan x="2718px">9</tspan>
      <tspan x="2765px">9</tspan>
      <tspan x="2812px">9</tspan>
      <tspan x="2860px">9</tspan>
      <tspan x="2907px">9</tspan>
      <tspan x="2954px">9</tspan>
      <tspan x="3001px">9</tspan>
      <tspan x="3048px">9</tspan>
      <tspan x="3095px">9</tspan>
      <tspan x="3143px">9</tspan>
      <tspan x="3190px">9</tspan>
      <tspan x="3237px">9</tspan>
      <tspan x="3284px">9</tspan>
      <tspan x="3331px">9</tspan>
      <tspan x="3378px">9</tspan>
      <tspan x="3426px">9</tspan>
      <tspan x="3473px">9</tspan>
      <tspan x="3520px">9</tspan>
      <tspan x="3567px">9</tspan>
      <tspan x="3614px">9</tspan>
      <tspan x="3661px">9</tspan>
      <tspan x="3709px">9</tspan>
      <tspan x="3756px">9</tspan>
      <tspan x="3803px">9</tspan>
      <tspan x="3850px">9</tspan>
    </text>
    <text class="text1" y="1695px">
      <tspan x="129px">1</tspan>
      <tspan x="176px">2</tspan>
      <tspan x="222px">3</tspan>
      <tspan x="268px">4</tspan>
      <tspan x="317px">5</tspan>
      <tspan x="363px">6</tspan>
      <tspan x="411px">7</tspan>
      <tspan x="456px">8</tspan>
      <tspan x="505px">9</tspan>
      <tspan x="540px">10</tspan>
      <tspan x="589px">11</tspan>
      <tspan x="638px">12</tspan>
      <tspan x="684px">13</tspan>
      <tspan x="731px">14</tspan>
      <tspan x="777px">15</tspan>
      <tspan x="824px">16</tspan>
      <tspan x="871px">17</tspan>
      <tspan x="918px">18</tspan>
      <tspan x="966px">19</tspan>
      <tspan x="1016px">20</tspan>
      <tspan x="1062px">21</tspan>
      <tspan x="1108px">22</tspan>
      <tspan x="1156px">23</tspan>
      <tspan x="1204px">24</tspan>
      <tspan x="1250px">25</tspan>
      <tspan x="1299px">26</tspan>
      <tspan x="1345px">27</tspan>
      <tspan x="1391px">28</tspan>
      <tspan x="1438px">29</tspan>
      <tspan x="1486px">30</tspan>
      <tspan x="1535px">31</tspan>
      <tspan x="1581px">32</tspan>
      <tspan x="1627px">33</tspan>
      <tspan x="1675px">34</tspan>
      <tspan x="1723px">35</tspan>
      <tspan x="1769px">36</tspan>
      <tspan x="1817px">37</tspan>
      <tspan x="1864px">38</tspan>
      <tspan x="1911px">39</tspan>
      <tspan x="1957px">40</tspan>
      <tspan x="2006px">41</tspan>
      <tspan x="2052px">42</tspan>
      <tspan x="2099px">43</tspan>
      <tspan x="2146px">44</tspan>
      <tspan x="2194px">45</tspan>
      <tspan x="2240px">46</tspan>
      <tspan x="2287px">47</tspan>
      <tspan x="2335px">48</tspan>
      <tspan x="2382px">49</tspan>
      <tspan x="2431px">50</tspan>
      <tspan x="2478px">51</tspan>
      <tspan x="2526px">52</tspan>
      <tspan x="2573px">53</tspan>
      <tspan x="2620px">54</tspan>
      <tspan x="2668px">55</tspan>
      <tspan x="2715px">56</tspan>
      <tspan x="2761px">57</tspan>
      <tspan x="2808px">58</tspan>
      <tspan x="2856px">59</tspan>
      <tspan x="2903px">60</tspan>
      <tspan x="2950px">61</tspan>
      <tspan x="2998px">62</tspan>
      <tspan x="3045px">63</tspan>
      <tspan x="3092px">64</tspan>
      <tspan x="3140px">65</tspan>
      <tspan x="3187px">66</tspan>
      <tspan x="3234px">67</tspan>
      <tspan x="3281px">68</tspan>
      <tspan x="3327px">69</tspan>
      <tspan x="3373px">70</tspan>
      <tspan x="3422px">71</tspan>
      <tspan x="3469px">72</tspan>
      <tspan x="3522px">73</tspan>
      <tspan x="3564px">74</tspan>
      <tspan x="3612px">75</tspan>
      <tspan x="3658px">76</tspan>
      <tspan x="3705px">77</tspan>
      <tspan x="3750px">78</tspan>
      <tspan x="3797px">79</tspan>
      <tspan x="3846px">80</tspan>
    </text>
    <text x="413" y="1745" class="text3">IBM 888157</text>
</svg>

`
  return {
    getplot: function () {
      return outputplot
    }
  }
})()

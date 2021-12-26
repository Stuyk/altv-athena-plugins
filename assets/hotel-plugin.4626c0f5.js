import{_ as n}from"./preload-helper.8b70a8dd.js";import{l}from"./vendor.7d2999dd.js";l("1aGyxB",{value:!0},async()=>{const[{default:e},{default:t}]=await Promise.all([n(()=>import("./MainDisplay.a53a1701.js"),["assets/MainDisplay.a53a1701.js","assets/Header.b4b763a5.js","assets/vendor.7d2999dd.js"]),n(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(r,o)=>t(r)(e,{content:{title:"Hotel Plugin",description:"The Hotel Plugin adds a hotel function to Athena's Interior System.",author:"j0n4s",version:"3.0.0+",images:["https://i.imgur.com/NOBWMXT.png"],keywords:["premium","client","player","system"],url:"https://mygp.gumroad.com/l/hotelplugin",price:"14.99",astro:{headers:[{depth:1,slug:"hotel-plugin-premium",text:"Hotel Plugin Premium"},{depth:1,slug:"installation",text:"Installation"},{depth:1,slug:"example-hotel",text:"Example Hotel:"}],source:`\r
# Hotel Plugin Premium\r
\r
The Hotel Plugin adds a hotel function to Athena's Interior System. Administrators can create hotels with any number of apartments.\r
The hotels can be offered for sale and the apartments can be rented.\r
\r
Feature overview:\r
\r
- Configrure rent price per appartment/unit\r
- Configure Hotel contact informations\r
- Payment System\r
- Rent a appartment\r
- Moveout from appartment\r
- Storage System\r
- Reception in Hotel Lobby\r
\r
Included but in progress:\r
\r
- Bell\r
- Moveout\r
\r
# Installation\r
\r
1. Purchase the repo access\r
2. Copy Folder client-plugins/hotels to your athena project under src/core/client-plugins/\r
3. Import client plugin in src/core/client-plugins/imports.ts:\r
\r
    \`\`\`import './hotels/index';\`\`\`\r
\r
4. Copy Folder plugins/hotels to your athena project under src/core/plugins/\r
5. Import server plugin in src/core/plugins/imports.ts:\r
\r
    \`\`\`import './hotels/index';\`\`\`\r
\r
6. Copy folder src-webviews/pages/ to your athena project under src-webviews/src/pages\r
7. Import VUE Page in src-webviews/pages/components.ts\r
\r
    \`\`\`import Hotel from './hotels/Hotel.vue'\`\`\`\r
\r
8. Add to component list in src-webviews/pages/components.ts\r
\r
    \`\`\`Hotel: shallowRef(Hotel),\`\`\`\r
\r
9. (optional) Install Interior plugin\r
\r
https://github.com/jonasesser/altv-athena-plugin-interior\r
\r
# Example Hotel:\r
\r
\`\`\`\r
- NAME OF PROPERTY: Hilton\r
- PRICE OF HOTEL: 150000\r
- NUMBER OF UNITS: 50\r
- DEFAULT PRICE FOR UNIT PER DAY: 40\r
- POSITION OF RECEPTION: {"x":-141.5361, "y":-620.9186, "z":168.8204}\r
- OPTIONAL IPL FOR RECEPTION: ex_dt1_02_office_01c\r
- OPTIONAL PED POSITION FOR RECEPTION: {"x":-139.13621520996094,"y":-633.8536987304688,"z":168.82054138183594}\r
- OPTIONAL PED ROTATION FOR RECEPTION: {"x":0,"y":0,"z":-0.05012647807598114}\r
- POSTITION OF DEFAULT INTERIOR: {"x":152.2605,"y":-1004.471,"z":-98.99999}\r
- OPTIONAL IPL FOR INTERIOR: null\r
\`\`\`\r
`,html:`<h1 id="hotel-plugin-premium">Hotel Plugin Premium</h1>
<p>The Hotel Plugin adds a hotel function to Athena\u2019s Interior System. Administrators can create hotels with any number of apartments.\r
The hotels can be offered for sale and the apartments can be rented.</p>
<p>Feature overview:</p>
<ul>
<li>Configrure rent price per appartment/unit</li>
<li>Configure Hotel contact informations</li>
<li>Payment System</li>
<li>Rent a appartment</li>
<li>Moveout from appartment</li>
<li>Storage System</li>
<li>Reception in Hotel Lobby</li>
</ul>
<p>Included but in progress:</p>
<ul>
<li>Bell</li>
<li>Moveout</li>
</ul>
<h1 id="installation">Installation</h1>
<ol>
<li>
<p>Purchase the repo access</p>
</li>
<li>
<p>Copy Folder client-plugins/hotels to your athena project under src/core/client-plugins/</p>
</li>
<li>
<p>Import client plugin in src/core/client-plugins/imports.ts:</p>
<p><code data-astro-raw>import './hotels/index';</code></p>
</li>
<li>
<p>Copy Folder plugins/hotels to your athena project under src/core/plugins/</p>
</li>
<li>
<p>Import server plugin in src/core/plugins/imports.ts:</p>
<p><code data-astro-raw>import './hotels/index';</code></p>
</li>
<li>
<p>Copy folder src-webviews/pages/ to your athena project under src-webviews/src/pages</p>
</li>
<li>
<p>Import VUE Page in src-webviews/pages/components.ts</p>
<p><code data-astro-raw>import Hotel from './hotels/Hotel.vue'</code></p>
</li>
<li>
<p>Add to component list in src-webviews/pages/components.ts</p>
<p><code data-astro-raw>Hotel: shallowRef(Hotel),</code></p>
</li>
<li>
<p>(optional) Install Interior plugin</p>
</li>
</ol>
<p><a href="https://github.com/jonasesser/altv-athena-plugin-interior">https://github.com/jonasesser/altv-athena-plugin-interior</a></p>
<h1 id="example-hotel">Example Hotel:</h1>
<pre class="language-null"><code data-astro-raw class="language-null">- NAME OF PROPERTY: Hilton\r
- PRICE OF HOTEL: 150000\r
- NUMBER OF UNITS: 50\r
- DEFAULT PRICE FOR UNIT PER DAY: 40\r
- POSITION OF RECEPTION: {"x":-141.5361, "y":-620.9186, "z":168.8204}\r
- OPTIONAL IPL FOR RECEPTION: ex_dt1_02_office_01c\r
- OPTIONAL PED POSITION FOR RECEPTION: {"x":-139.13621520996094,"y":-633.8536987304688,"z":168.82054138183594}\r
- OPTIONAL PED ROTATION FOR RECEPTION: {"x":0,"y":0,"z":-0.05012647807598114}\r
- POSTITION OF DEFAULT INTERIOR: {"x":152.2605,"y":-1004.471,"z":-98.99999}\r
- OPTIONAL IPL FOR INTERIOR: null</code></pre>`}}},o)});

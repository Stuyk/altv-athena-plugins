import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as r}from"./vendor.f3700654.js";r("Z1a8Oqx",{value:!0},async()=>{const[{default:s},{default:t}]=await Promise.all([n(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),n(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(a,o)=>t(a)(s,{content:{title:"Interior Plugin",description:"This Plugin helps you to find an interior including position and ipl informations",author:"j0n4s",version:"3.0.0+",images:["https://i.imgur.com/K4QjdzE.png"],keywords:["free","client","server","data"],url:"https://github.com/jonasesser/altv-athena-plugin-interior",discord:"j0n4s#8301",astro:{headers:[{depth:1,slug:"interior-plugin",text:"Interior Plugin"},{depth:1,slug:"installation-instructions",text:"Installation Instructions"},{depth:1,slug:"usage",text:"Usage"}],source:`\r
# Interior Plugin\r
\r
This Plugin helps you to find an interior including position and ipl informations.\r
You can use it ingame as admin or for development as interior database.\r
\r
# Installation Instructions\r
\r
1. Grab from github\r
2. Copy Folder plugins/gpInteriors/ to your athena project under src/core/plugins/\r
3. Import server plugin in src/core/plugins/imports.ts:\r
\r
    \`import './gpInteriors/index';\`\r
\r
# Usage\r
\r
1. In-Game as administrator\r
\r
    \`/gotointerior [name] - Goto Interior (try /gotointerior Movie Theatre)\`\r
\r
2. In-Code as developer\r
\r
\`\`\`ts\r
import { GpInteriors, GpInteriors_Category } from '../gpInteriors/gpInteriors';\r
\r
// Get Interiors    \r
let interior = GpInteriors.getInterior("Movie Theatre");\r
let allInteriors = GpInteriors.getInteriors();\r
let interiorByCat = GpInteriors.getInteriorsByCategory(GpInteriors_Category.Office);\r
\r
// Get Interior names only\r
let allInteriorNames = GpInteriors.getInteriorNames();\r
let interiorNamesByCat = GpInteriors.getInteriorNamesByCategory(GpInteriors_Category.Office);\r
\r
// Get Interior position by name\r
let position = GpInteriors.getInteriorPosition(interior.Name);  //returns alt.Vector3\r
let ipl = GpInteriors.getInteriorIPL(interior.Name); //returns IPL name to be load or null\r
\`\`\`\r
`,html:`<h1 id="interior-plugin">Interior Plugin</h1>
<p>This Plugin helps you to find an interior including position and ipl informations.\r
You can use it ingame as admin or for development as interior database.</p>
<h1 id="installation-instructions">Installation Instructions</h1>
<ol>
<li>
<p>Grab from github</p>
</li>
<li>
<p>Copy Folder plugins/gpInteriors/ to your athena project under src/core/plugins/</p>
</li>
<li>
<p>Import server plugin in src/core/plugins/imports.ts:</p>
<p><code data-astro-raw>import './gpInteriors/index';</code></p>
</li>
</ol>
<h1 id="usage">Usage</h1>
<ol>
<li>
<p>In-Game as administrator</p>
<p><code data-astro-raw>/gotointerior [name] - Goto Interior (try /gotointerior Movie Theatre)</code></p>
</li>
<li>
<p>In-Code as developer</p>
</li>
</ol>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> GpInteriors<span class="token punctuation">,</span> GpInteriors_Category <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../gpInteriors/gpInteriors'</span><span class="token punctuation">;</span>\r
\r
<span class="token comment">// Get Interiors    </span>\r
<span class="token keyword">let</span> interior <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInterior</span><span class="token punctuation">(</span><span class="token string">"Movie Theatre"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token keyword">let</span> allInteriors <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInteriors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token keyword">let</span> interiorByCat <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInteriorsByCategory</span><span class="token punctuation">(</span>GpInteriors_Category<span class="token punctuation">.</span>Office<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token comment">// Get Interior names only</span>\r
<span class="token keyword">let</span> allInteriorNames <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInteriorNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\r
<span class="token keyword">let</span> interiorNamesByCat <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInteriorNamesByCategory</span><span class="token punctuation">(</span>GpInteriors_Category<span class="token punctuation">.</span>Office<span class="token punctuation">)</span><span class="token punctuation">;</span>\r
\r
<span class="token comment">// Get Interior position by name</span>\r
<span class="token keyword">let</span> position <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInteriorPosition</span><span class="token punctuation">(</span>interior<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//returns alt.Vector3</span>\r
<span class="token keyword">let</span> ipl <span class="token operator">=</span> GpInteriors<span class="token punctuation">.</span><span class="token function">getInteriorIPL</span><span class="token punctuation">(</span>interior<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//returns IPL name to be load or null</span></code></pre>`}}},o)});

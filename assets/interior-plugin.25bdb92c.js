import{_ as r}from"./preload-helper.8b70a8dd.js";import{k as o}from"./vendor.3220ec20.js";o("ZMDShP",{value:!0},async()=>{const[{default:n},{default:e}]=await Promise.all([r(()=>import("./MainDisplay.cbca4de0.js"),["assets/MainDisplay.cbca4de0.js","assets/Header.f251eaf5.js","assets/vendor.3220ec20.js"]),r(()=>import("./client.1eab480f.js"),["assets/client.1eab480f.js","assets/vendor.3220ec20.js"])]);return(t,i)=>e(t)(n,{content:{title:"Interior Plugin",description:"This Plugin helps you to find an interior including position and ipl informations",author:"j0n4s",version:"3.0.0+",images:["https://i.imgur.com/K4QjdzE.png"],keywords:["free","client","server","data"],url:"https://github.com/jonasesser/altv-athena-plugin-interior",astro:{headers:[{depth:1,slug:"interior-plugin",text:"Interior Plugin"},{depth:1,slug:"installation-instructions",text:"Installation Instructions"},{depth:1,slug:"usage",text:"Usage"}],source:`\r
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
    \`\`\`import './gpInteriors/index';\`\`\`\r
\r
# Usage\r
\r
1. In-Game as administrator\r
\r
    \`\`\`/gotointerior [name] - Goto Interior (try /gotointerior Movie Theatre)\`\`\`\r
\r
2. In-Code as developer\r
\r
    \`\`\`\r
    import { GpInteriors, GpInteriors_Category } from '../gpInteriors/gpInteriors';\r
    ...\r
     //Get Interiors    \r
    let interior = GpInteriors.getInterior("Movie Theatre");\r
    let allInteriors = GpInteriors.getInteriors();\r
    let interiorByCat = GpInteriors.getInteriorsByCategory(GpInteriors_Category.Office);\r
\r
    //Get Interior names only\r
    let allInteriorNames = GpInteriors.getInteriorNames();\r
    let interiorNamesByCat = GpInteriors.getInteriorNamesByCategory(GpInteriors_Category.Office);\r
\r
    //Get Interior position by name\r
    let position = GpInteriors.getInteriorPosition(interior.Name);  //returns alt.Vector3\r
    let ipl = GpInteriors.getInteriorIPL(interior.Name); //returns IPL name to be load or null\r
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
<pre class="language-null"><code data-astro-raw class="language-null">import { GpInteriors, GpInteriors_Category } from '../gpInteriors/gpInteriors';\r
...\r
 //Get Interiors    \r
let interior = GpInteriors.getInterior("Movie Theatre");\r
let allInteriors = GpInteriors.getInteriors();\r
let interiorByCat = GpInteriors.getInteriorsByCategory(GpInteriors_Category.Office);\r
\r
//Get Interior names only\r
let allInteriorNames = GpInteriors.getInteriorNames();\r
let interiorNamesByCat = GpInteriors.getInteriorNamesByCategory(GpInteriors_Category.Office);\r
\r
//Get Interior position by name\r
let position = GpInteriors.getInteriorPosition(interior.Name);  //returns alt.Vector3\r
let ipl = GpInteriors.getInteriorIPL(interior.Name); //returns IPL name to be load or null</code></pre>
</li>
</ol>`}}},i)});

import{_ as e}from"./preload-helper.8b70a8dd.js";import{l as o}from"./vendor.7d2999dd.js";o("Z1kKt6x",{value:!0},async()=>{const[{default:n},{default:s}]=await Promise.all([e(()=>import("./MainDisplay.12b9d463.js"),["assets/MainDisplay.12b9d463.js","assets/Header.47e3a24d.js","assets/vendor.7d2999dd.js"]),e(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(t,l)=>s(t)(n,{content:{title:"PedController",description:"PedController which allows you to spawn Peds with Textlabels Ingame.",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/147367506-c595a88a-1f99-4847-a423-0d8c8f89a551.png","https://user-images.githubusercontent.com/82890183/147367516-091263a4-a68b-4deb-81b3-18040cf00bd6.png"],keywords:["premium","player","system","client","interface"],url:"https://holylord.gumroad.com/l/osfel",price:"5.00",discord:"Der Lord!#6021",astro:{headers:[{depth:2,slug:"features",text:"Features"},{depth:2,slug:"to-follow",text:"To Follow"},{depth:2,slug:"known-bugs",text:"Known Bugs"},{depth:2,slug:"setup",text:"SETUP"}],source:`
## Features
* Allows you to add Peds Ingame
* Allows you to add Textlabels to Peds as well

## To Follow
* Remove Peds Ingame

## Known Bugs
- None yet

## SETUP

- Drop the client-plugins files into client-plugins.
- Drop the plugins files into plugins.

imports.ts (Clientside)

\`\`\`ts 
import './AthenaPeds/index';
\`\`\`

imports.ts (Serverside)
\`\`\`ts
'./AthenaPeds/index',
\`\`\`

`,html:`<h2 id="features">Features</h2>
<ul>
<li>Allows you to add Peds Ingame</li>
<li>Allows you to add Textlabels to Peds as well</li>
</ul>
<h2 id="to-follow">To Follow</h2>
<ul>
<li>Remove Peds Ingame</li>
</ul>
<h2 id="known-bugs">Known Bugs</h2>
<ul>
<li>None yet</li>
</ul>
<h2 id="setup">SETUP</h2>
<ul>
<li>Drop the client-plugins files into client-plugins.</li>
<li>Drop the plugins files into plugins.</li>
</ul>
<p>imports.ts (Clientside)</p>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token string">'./AthenaPeds/index'</span><span class="token punctuation">;</span></code></pre>
<p>imports.ts (Serverside)</p>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token string">'./AthenaPeds/index'</span><span class="token punctuation">,</span></code></pre>`}}},l)});
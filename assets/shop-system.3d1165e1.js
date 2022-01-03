import{_ as e}from"./preload-helper.8b70a8dd.js";import{l as o}from"./vendor.7d2999dd.js";o("Z1VPz9N",{value:!0},async()=>{const[{default:s},{default:t}]=await Promise.all([e(()=>import("./MainDisplay.12b9d463.js"),["assets/MainDisplay.12b9d463.js","assets/Header.47e3a24d.js","assets/vendor.7d2999dd.js"]),e(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(i,n)=>t(i)(s,{content:{title:"Shop System Premium Plugin",description:"Shop System",author:"SeipekM",version:"3.0.0+",images:["https://i.imgur.com/D36ox7s.png"],keywords:["premium","server","player","system"],url:"seipekm.gumroad.com/l/yeysa",price:"30.00",discord:"seipekm#0300",astro:{headers:[{depth:1,slug:"shop-system-premium-plugin",text:"Shop System Premium Plugin"},{depth:2,slug:"features",text:"Features"},{depth:1,slug:"installation-instructions",text:"Installation Instructions"},{depth:3,slug:"importsts-serverside",text:"imports.ts (Serverside)"},{depth:3,slug:"importsts-clientside",text:"imports.ts (Clientside)"}],source:`
# Shop System Premium Plugin

## Features
- Buying items
- Create store pos. via file
- Create store items via file 
- Create store type via file
- Distinction card or cash payment

# Installation Instructions

- Drop the plugins files into plugins.
- Drop the client-plugins files into client-plugins.
- Drop the webview files into webview.
- Store type and items adjustable via shopInfoList.ts
- Store position adjustable via shopList.ts

### imports.ts (Serverside)
\`\`\`ts
import './seipekm-shop-system/index';
\`\`\`

### imports.ts (Clientside)
\`\`\`ts
import './seipekm-shop-system/index';
\`\`\``,html:`<h1 id="shop-system-premium-plugin">Shop System Premium Plugin</h1>
<h2 id="features">Features</h2>
<ul>
<li>Buying items</li>
<li>Create store pos. via file</li>
<li>Create store items via file</li>
<li>Create store type via file</li>
<li>Distinction card or cash payment</li>
</ul>
<h1 id="installation-instructions">Installation Instructions</h1>
<ul>
<li>Drop the plugins files into plugins.</li>
<li>Drop the client-plugins files into client-plugins.</li>
<li>Drop the webview files into webview.</li>
<li>Store type and items adjustable via shopInfoList.ts</li>
<li>Store position adjustable via shopList.ts</li>
</ul>
<h3 id="importsts-serverside">imports.ts (Serverside)</h3>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token string">'./seipekm-shop-system/index'</span><span class="token punctuation">;</span></code></pre>
<h3 id="importsts-clientside">imports.ts (Clientside)</h3>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token string">'./seipekm-shop-system/index'</span><span class="token punctuation">;</span></code></pre>`}}},n)});

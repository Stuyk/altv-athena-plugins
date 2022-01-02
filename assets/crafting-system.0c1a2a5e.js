import{_ as t}from"./preload-helper.8b70a8dd.js";import{l as r}from"./vendor.f3700654.js";r("Zi8EAd",{value:!0},async()=>{const[{default:e},{default:n}]=await Promise.all([t(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),t(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(s,i)=>n(s)(e,{content:{title:"Crafting System Premium Plugin",description:"Crafting Spots and Crafting Items",author:"SeipekM",version:"2.0.3",images:["https://i.imgur.com/XXdxm6i.png"],keywords:["premium","server","player","system"],url:"https://shoppy.gg/product/e7taL5J",price:"15.00",discord:"seipekm#0300",astro:{headers:[{depth:1,slug:"crafting-system-premium-plugin",text:"Crafting System Premium Plugin"},{depth:2,slug:"features",text:"Features"},{depth:1,slug:"installation-instructions",text:"Installation Instructions"},{depth:3,slug:"importsts-serverside",text:"imports.ts (Serverside)"}],source:`
# Crafting System Premium Plugin

## Features
- Add Crafting Points and Crafting Item over config file (craftingList.ts)
- Consumables are checked if they are available

# Installation Instructions

- Drop the plugins files into plugins.
- Crafting Points change over craftingList.ts
- Item change over item.ts

### imports.ts (Serverside)
\`\`\`ts
'./craftingsystem/index',
'./craftingsystem/items',
\`\`\``,html:`<h1 id="crafting-system-premium-plugin">Crafting System Premium Plugin</h1>
<h2 id="features">Features</h2>
<ul>
<li>Add Crafting Points and Crafting Item over config file (craftingList.ts)</li>
<li>Consumables are checked if they are available</li>
</ul>
<h1 id="installation-instructions">Installation Instructions</h1>
<ul>
<li>Drop the plugins files into plugins.</li>
<li>Crafting Points change over craftingList.ts</li>
<li>Item change over item.ts</li>
</ul>
<h3 id="importsts-serverside">imports.ts (Serverside)</h3>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token string">'./craftingsystem/index'</span><span class="token punctuation">,</span>
<span class="token string">'./craftingsystem/items'</span><span class="token punctuation">,</span></code></pre>`}}},i)});

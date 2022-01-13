import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as p}from"./vendor.f3700654.js";p("1WMJ5g",{value:!0},async()=>{const[{default:s},{default:a}]=await Promise.all([n(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),n(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(t,e)=>a(t)(s,{content:{title:"Open Source Shop",description:"Bringing Shops to the Athena Framework, absolute free and open source! Licensed under MIT",author:"Der Lord!",version:"3.0.4+",images:["https://user-images.githubusercontent.com/82890183/148626519-5dc1ced7-a4d9-4f86-a349-26e58729cea8.png","https://user-images.githubusercontent.com/82890183/148910952-470985fe-5fed-41ed-8b87-08c9977f71c2.png"],keywords:["free","player","server","client","interface","system","item"],url:"https://github.com/Booster1212/OpenSourceShop",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"opensourceshop",text:"OpenSourceShop"},{depth:1,slug:"features",text:"Features"},{depth:1,slug:"setup-plugin",text:"Setup (Plugin)"},{depth:1,slug:"setup-buying-shop---247",text:"Setup (Buying Shop - 24/7)"},{depth:1,slug:"setup-drugsellers",text:"Setup (Drugsellers)"}],source:`# OpenSourceShop

<img src="https://user-images.githubusercontent.com/82890183/148142146-ba173e98-4c11-47d9-95da-6d83de2608af.png" width="650" />

Welcome to Athena Open Source Shop! 
Bringing Shops to the Athena Framework as absolute free and open source solution licensed as MIT. 

So feel free to do whatever you want!

# Features
- VueJS (3)
- Based on Athena's ItemFactory - Full Database integration (MongoDB)
- Build on the latest version of the Athena Framework
- Build with ease of use in mind
- Different Shops for different Items 
- Each shop can hold individual items.
- Create selling or buying shops i.e. Drugseller or 24/7 Shop
- Synced Food / Water List (Custom Item List for OSS / Custom Events)
- 34 Default Shops
- Minimalistic Frontend

# Setup (Plugin)

- Drop ShopUI into a folder called "shopUI" inside of src-webviews/pages
- Drop server/client files into athena-oss -> src/core/client-plugins, client stuff here -> src/core/server-plugins -> server stuff here.

\`\`\`typescript
Imports (Client) ->
import './OSS/view';
import './OSS/src/client-events';

Imports (Server) ->
import './OSS/index';

// src-webviews/pages/components.ts ->
import ShopUI from './shopUI/ShopUI.vue';
ShopUI: shallowRef(ShopUI)
\`\`\`
# Setup (Buying Shop - 24/7)
\`\`\`typescript
export const BUYERS: alt.Vector3[] = [
    { x: 25.980966567993164, y: -1345.6417236328125, z: 28.497024536132812 } as alt.Vector3, // Index 0
];

// Used to give all the shops are different blip, just copy the line as often as you need it.
export const buyerBlips = [
    { sprite: 59, color: 2, text: '24/7 Shop', scale: 1 }, // Index 0
];

// In OSS each Shop can hold individual items or you can add the same list to a few more stores over and over again.
// Default List for all 24/7 & LTD Stores.
const shopList = [
    { name: 'Bread', dbName: 'bread', price: 75, image: 'crate' },
    { name: 'Hotdog', dbName: 'Shophotdog', price: 375, image: 'crate' },
    { name: 'Waterbottle', dbName: 'Shopwater', price: 250, image: 'crate' },
    { name: 'Cola', dbName: 'Shopcola', price: 250, image: 'crate'},
    { name: 'Energy Drink', dbName: 'Shopenergy', price: 300, image: 'crate'}
];

export const buyLists = [
    shopList,
]; // ADD YOUR LISTS HERE!
\`\`\`

# Setup (Drugsellers)
\`\`\`typescript
import * as alt from 'alt-server';

// Shops are based on the index of arrays so -> First index -> First sellList
export const SELLERS: alt.Vector3[] = [
    { x: 1163.400634765625, y: -323.938232421875, z: 68.20509338378906 } as alt.Vector3 // SELLER (SHOP-POS) INDEX -> 0
    // { Add stuff yourself } Just another seller, INDEX 1 -> The secoond list will get into this position.
];

// Used to give all the shops are different blip, just copy the line as often as you need it.
export const sellersBlips = [
    { sprite: 52, color: 1, text: 'Seller Example - Index 0', scale: 1 }, // Index 0
];

const burgerBuyer = [
    { name: 'Burger', dbName: 'burger', price: 330, image: 'crate' }, // SellList INDEX -> 0
    // { Add stuff yourself. } Second Items for SELLERS Index -> 0
];
const anotherExampleList = [
    // { Fill me! } -> Index 1
];

export const sellLists = [burgerBuyer, /*anotherExampleList*/]; // Dont forget to add custom item lists here

\`\`\`

<img src="https://user-images.githubusercontent.com/82890183/148910952-470985fe-5fed-41ed-8b87-08c9977f71c2.png" width="500"/>

![image](https://user-images.githubusercontent.com/82890183/148634183-00270cd2-ba69-4a46-94ba-58434967c890.png)

Join the plugin Discord -> https://discord.gg/Pk6gQ2agbQ
`,html:`<h1 id="opensourceshop">OpenSourceShop</h1>
<img src="https://user-images.githubusercontent.com/82890183/148142146-ba173e98-4c11-47d9-95da-6d83de2608af.png" width="650" />
<p>Welcome to Athena Open Source Shop!
Bringing Shops to the Athena Framework as absolute free and open source solution licensed as MIT.</p>
<p>So feel free to do whatever you want!</p>
<h1 id="features">Features</h1>
<ul>
<li>VueJS (3)</li>
<li>Based on Athena\u2019s ItemFactory - Full Database integration (MongoDB)</li>
<li>Build on the latest version of the Athena Framework</li>
<li>Build with ease of use in mind</li>
<li>Different Shops for different Items</li>
<li>Each shop can hold individual items.</li>
<li>Create selling or buying shops i.e. Drugseller or 24/7 Shop</li>
<li>Synced Food / Water List (Custom Item List for OSS / Custom Events)</li>
<li>34 Default Shops</li>
<li>Minimalistic Frontend</li>
</ul>
<h1 id="setup-plugin">Setup (Plugin)</h1>
<ul>
<li>Drop ShopUI into a folder called \u201CshopUI\u201D inside of src-webviews/pages</li>
<li>Drop server/client files into athena-oss -> src/core/client-plugins, client stuff here -> src/core/server-plugins -> server stuff here.</li>
</ul>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token function">Imports</span> <span class="token punctuation">(</span>Client<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token string">'./OSS/view'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./OSS/src/client-events'</span><span class="token punctuation">;</span>

<span class="token function">Imports</span> <span class="token punctuation">(</span>Server<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token string">'./OSS/index'</span><span class="token punctuation">;</span>

<span class="token comment">// src-webviews/pages/components.ts -></span>
<span class="token keyword">import</span> ShopUI <span class="token keyword">from</span> <span class="token string">'./shopUI/ShopUI.vue'</span><span class="token punctuation">;</span>
ShopUI<span class="token operator">:</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>ShopUI<span class="token punctuation">)</span></code></pre>
<h1 id="setup-buying-shop---247">Setup (Buying Shop - 24/7)</h1>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">BUYERS</span><span class="token operator">:</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">25.980966567993164</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1345.6417236328125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">28.497024536132812</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span> <span class="token comment">// Index 0</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Used to give all the shops are different blip, just copy the line as often as you need it.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> buyerBlips <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> sprite<span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'24/7 Shop'</span><span class="token punctuation">,</span> scale<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Index 0</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// In OSS each Shop can hold individual items or you can add the same list to a few more stores over and over again.</span>
<span class="token comment">// Default List for all 24/7 &amp; LTD Stores.</span>
<span class="token keyword">const</span> shopList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Bread'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'bread'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Hotdog'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'Shophotdog'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">375</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Waterbottle'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'Shopwater'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Cola'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'Shopcola'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Energy Drink'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'Shopenergy'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> buyLists <span class="token operator">=</span> <span class="token punctuation">[</span>
    shopList<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// ADD YOUR LISTS HERE!</span></code></pre>
<h1 id="setup-drugsellers">Setup (Drugsellers)</h1>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> alt <span class="token keyword">from</span> <span class="token string">'alt-server'</span><span class="token punctuation">;</span>

<span class="token comment">// Shops are based on the index of arrays so -> First index -> First sellList</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SELLERS</span><span class="token operator">:</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1163.400634765625</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">323.938232421875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">68.20509338378906</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3 <span class="token comment">// SELLER (SHOP-POS) INDEX -> 0</span>
    <span class="token comment">// { Add stuff yourself } Just another seller, INDEX 1 -> The secoond list will get into this position.</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Used to give all the shops are different blip, just copy the line as often as you need it.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> sellersBlips <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> sprite<span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span> color<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> text<span class="token operator">:</span> <span class="token string">'Seller Example - Index 0'</span><span class="token punctuation">,</span> scale<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Index 0</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> burgerBuyer <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Burger'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'burger'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">330</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// SellList INDEX -> 0</span>
    <span class="token comment">// { Add stuff yourself. } Second Items for SELLERS Index -> 0</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> anotherExampleList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// { Fill me! } -> Index 1</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> sellLists <span class="token operator">=</span> <span class="token punctuation">[</span>burgerBuyer<span class="token punctuation">,</span> <span class="token comment">/*anotherExampleList*/</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Dont forget to add custom item lists here</span>
</code></pre>
<img src="https://user-images.githubusercontent.com/82890183/148910952-470985fe-5fed-41ed-8b87-08c9977f71c2.png" width="500"/>
<p><img src="https://user-images.githubusercontent.com/82890183/148634183-00270cd2-ba69-4a46-94ba-58434967c890.png" alt="image"></p>
<p>Join the plugin Discord -> <a href="https://discord.gg/Pk6gQ2agbQ">https://discord.gg/Pk6gQ2agbQ</a></p>`}}},e)});

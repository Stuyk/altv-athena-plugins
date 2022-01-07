import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as o}from"./vendor.f3700654.js";o("19FaUI",{value:!0},async()=>{const[{default:s},{default:a}]=await Promise.all([n(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),n(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(e,t)=>a(e)(s,{content:{title:"Open Source Shop",description:"Bringing Shops to the Athena Framework, absolute free and open source!",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/148142146-ba173e98-4c11-47d9-95da-6d83de2608af.png","https://user-images.githubusercontent.com/82890183/148335389-30f30d20-1228-45e0-b668-959eb37f7317.png"],keywords:["free","player","server","client","interface","system"],url:"https://github.com/Booster1212/OpenSourceShop",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"opensourceshop",text:"OpenSourceShop"},{depth:1,slug:"features",text:"Features"},{depth:1,slug:"setup-plugin",text:"Setup (Plugin)"},{depth:1,slug:"setup-shop---buy",text:"Setup (Shop - Buy)"},{depth:1,slug:"set-shop---sell",text:"Set (Shop - Sell)"},{depth:1,slug:"settings",text:"Settings"},{depth:1,slug:"images",text:"Images"}],source:`# OpenSourceShop![Fichier 37mdpi](https://user-images.githubusercontent.com/82890183/148142146-ba173e98-4c11-47d9-95da-6d83de2608af.png)

Since Athena doesn't offer Shops in core at the moment i've decided to rebuild my old Vue3 Shop with new Athena Single Page Application (Vue3)
So here we go again. ;)

This plugin is based on Athena's ItemFactory so you'll need items in the database collection 'items' to make it work as expected.

So this plugin is in somewhat pre-alpha state for now, if there's anything unclear or not working as expected, just hit me up in Discord. Thanks a lot.

# Features
- Different Item lists for different shops
- Ability to create buy / sell shops
- Randomize prices of items on Athena's Bootup entry (Optional)
- Fill up all vending machines with custom item lists.

# Setup (Plugin)

- Drop ShopUI into a folder called "shopUI" inside of src-webviews/pages
- Drop server/client files into OSS folders -> src/core/client-plugins, client stuff here -> src/core/plugins -> server stuff here.


\`\`\`typescript
Imports (Client) ->
import './OSS/view';
import './OSS/src/client-events';

Imports (Server) ->
import './OSS/index';
\`\`\`

# Setup (Shop - Buy)
\`\`\`ts
import * as alt from 'alt-server';
// Positions are based on the index of the array so, keep that in mind when creating a shop or just do it step by step.
export const BUYERS: alt.Vector3[] = [
    { x: 25.980966567993164, y: -1345.6417236328125, z: 28.497024536132812 } as alt.Vector3, // This position is using shopList (Array Index 0)
    { x: -48.5690803527832, y: -1757.6961669921875, z: 28.4210147857666 } as alt.Vector3, // This position is using foodList (Array Index 1)
];

// Every shop CAN hold individual items, or you can just go ahead fill one list for all 24/7 and just fill the POS-Array.
// Example if you fill Index Zero 0 - 9 just fill in "shopList" x9 Times into buyLists.
const shopList = [
    { name: 'Bread', dbName: 'bread', price: 3450, image: 'crate' }
    /* { name: 'Northern Haze Seeds', dbName: 'Northern Haze Seeds', price: '75', image: 'crate' },
    { name: 'Lemon Haze Seeds', dbName: 'Lemon Haze Seeds', price: '85', image: 'crate' },
    { name: 'OG Kush Seeds', dbName: 'OG Kush Seeds', price: '115', image: 'crate' },
    { name: 'Mango Kush Seeds', dbName: 'Mango Kush Seeds', price: '125', image: 'crate' },
    { name: 'Purple Haze Seeds', dbName: 'Purple Haze Seeds', price: '105', image: 'crate' }, ..... */
]; // Shop INDEX -> 0

const foodList = [{ name: 'Burger', dbName: 'burger', price: 350, image: 'crate' }]; // Shop INDEX -> 1
// const anotherExampleList = [];
export const buyLists = [shopList, foodList, /*anotherExampleList*/]; // ADD YOUR LISTS HERE!
\`\`\`

# Set (Shop - Sell)
\`\`\`typescript
import * as alt from 'alt-server';

// Shops are based on the index of arrays so -> First index -> First sellList
export const SELLERS: alt.Vector3[] = [
    { x: 1163.400634765625, y: -323.938232421875, z: 68.20509338378906 } as alt.Vector3 // SELLER (SHOP-POS) INDEX -> 0
    // { Add stuff yourself } Just another seller, INDEX 1 -> The secoond list will get into this position.
];

const burgerBuyer = [
    { name: 'Burger', dbName: 'burger', price: 330, image: 'crate' }, // SellList INDEX -> 0
    // { Add stuff yourself. } Second Items for SELLERS Index -> 0
];
const anotherExampleList = [
    // { Fill me! } -> Index 0
];

export const sellLists = [burgerBuyer, /*anotherExampleList*/]; // Dont forget to add custom item lists here
\`\`\`

# Settings
\`\`\`typescript
export const OSS = {
    name: 'OSS',
    version: 'v1.0',
    collection: 'shops',
    enableVendingmachines: false,
    randomizeBuyers: false, // Will randomize output of vending machines as well.
    randomizeSellers: false, // Randomize drug dealer prices for examples (based on list.)
};
\`\`\`

# Images

![image](https://user-images.githubusercontent.com/82890183/148335389-30f30d20-1228-45e0-b668-959eb37f7317.png)`,html:`<h1 id="opensourceshop">OpenSourceShop<img src="https://user-images.githubusercontent.com/82890183/148142146-ba173e98-4c11-47d9-95da-6d83de2608af.png" alt="Fichier 37mdpi"></h1>
<p>Since Athena doesn\u2019t offer Shops in core at the moment i\u2019ve decided to rebuild my old Vue3 Shop with new Athena Single Page Application (Vue3)
So here we go again. ;)</p>
<p>This plugin is based on Athena\u2019s ItemFactory so you\u2019ll need items in the database collection \u2018items\u2019 to make it work as expected.</p>
<p>So this plugin is in somewhat pre-alpha state for now, if there\u2019s anything unclear or not working as expected, just hit me up in Discord. Thanks a lot.</p>
<h1 id="features">Features</h1>
<ul>
<li>Different Item lists for different shops</li>
<li>Ability to create buy / sell shops</li>
<li>Randomize prices of items on Athena\u2019s Bootup entry (Optional)</li>
<li>Fill up all vending machines with custom item lists.</li>
</ul>
<h1 id="setup-plugin">Setup (Plugin)</h1>
<ul>
<li>Drop ShopUI into a folder called \u201CshopUI\u201D inside of src-webviews/pages</li>
<li>Drop server/client files into OSS folders -> src/core/client-plugins, client stuff here -> src/core/plugins -> server stuff here.</li>
</ul>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token function">Imports</span> <span class="token punctuation">(</span>Client<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token string">'./OSS/view'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./OSS/src/client-events'</span><span class="token punctuation">;</span>

<span class="token function">Imports</span> <span class="token punctuation">(</span>Server<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token string">'./OSS/index'</span><span class="token punctuation">;</span></code></pre>
<h1 id="setup-shop---buy">Setup (Shop - Buy)</h1>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> alt <span class="token keyword">from</span> <span class="token string">'alt-server'</span><span class="token punctuation">;</span>
<span class="token comment">// Positions are based on the index of the array so, keep that in mind when creating a shop or just do it step by step.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">BUYERS</span><span class="token operator">:</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">25.980966567993164</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1345.6417236328125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">28.497024536132812</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span> <span class="token comment">// This position is using shopList (Array Index 0)</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">48.5690803527832</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1757.6961669921875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">28.4210147857666</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span> <span class="token comment">// This position is using foodList (Array Index 1)</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Every shop CAN hold individual items, or you can just go ahead fill one list for all 24/7 and just fill the POS-Array.</span>
<span class="token comment">// Example if you fill Index Zero 0 - 9 just fill in "shopList" x9 Times into buyLists.</span>
<span class="token keyword">const</span> shopList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Bread'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'bread'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">3450</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span>
    <span class="token comment">/* { name: 'Northern Haze Seeds', dbName: 'Northern Haze Seeds', price: '75', image: 'crate' },
    { name: 'Lemon Haze Seeds', dbName: 'Lemon Haze Seeds', price: '85', image: 'crate' },
    { name: 'OG Kush Seeds', dbName: 'OG Kush Seeds', price: '115', image: 'crate' },
    { name: 'Mango Kush Seeds', dbName: 'Mango Kush Seeds', price: '125', image: 'crate' },
    { name: 'Purple Haze Seeds', dbName: 'Purple Haze Seeds', price: '105', image: 'crate' }, ..... */</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Shop INDEX -> 0</span>

<span class="token keyword">const</span> foodList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Burger'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'burger'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Shop INDEX -> 1</span>
<span class="token comment">// const anotherExampleList = [];</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> buyLists <span class="token operator">=</span> <span class="token punctuation">[</span>shopList<span class="token punctuation">,</span> foodList<span class="token punctuation">,</span> <span class="token comment">/*anotherExampleList*/</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// ADD YOUR LISTS HERE!</span></code></pre>
<h1 id="set-shop---sell">Set (Shop - Sell)</h1>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> alt <span class="token keyword">from</span> <span class="token string">'alt-server'</span><span class="token punctuation">;</span>

<span class="token comment">// Shops are based on the index of arrays so -> First index -> First sellList</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SELLERS</span><span class="token operator">:</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1163.400634765625</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">323.938232421875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">68.20509338378906</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3 <span class="token comment">// SELLER (SHOP-POS) INDEX -> 0</span>
    <span class="token comment">// { Add stuff yourself } Just another seller, INDEX 1 -> The secoond list will get into this position.</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> burgerBuyer <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Burger'</span><span class="token punctuation">,</span> dbName<span class="token operator">:</span> <span class="token string">'burger'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">330</span><span class="token punctuation">,</span> image<span class="token operator">:</span> <span class="token string">'crate'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// SellList INDEX -> 0</span>
    <span class="token comment">// { Add stuff yourself. } Second Items for SELLERS Index -> 0</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> anotherExampleList <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// { Fill me! } -> Index 0</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> sellLists <span class="token operator">=</span> <span class="token punctuation">[</span>burgerBuyer<span class="token punctuation">,</span> <span class="token comment">/*anotherExampleList*/</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Dont forget to add custom item lists here</span></code></pre>
<h1 id="settings">Settings</h1>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">OSS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'OSS'</span><span class="token punctuation">,</span>
    version<span class="token operator">:</span> <span class="token string">'v1.0'</span><span class="token punctuation">,</span>
    collection<span class="token operator">:</span> <span class="token string">'shops'</span><span class="token punctuation">,</span>
    enableVendingmachines<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    randomizeBuyers<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Will randomize output of vending machines as well.</span>
    randomizeSellers<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Randomize drug dealer prices for examples (based on list.)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>
<h1 id="images">Images</h1>
<p><img src="https://user-images.githubusercontent.com/82890183/148335389-30f30d20-1228-45e0-b668-959eb37f7317.png" alt="image"></p>`}}},t)});

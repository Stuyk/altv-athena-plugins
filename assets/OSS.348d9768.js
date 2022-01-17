import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as o}from"./vendor.7d2999dd.js";o("1XhNKD",{value:!0},async()=>{const[{default:s},{default:a}]=await Promise.all([n(()=>import("./MainDisplay.12b9d463.js"),["assets/MainDisplay.12b9d463.js","assets/Header.47e3a24d.js","assets/vendor.7d2999dd.js"]),n(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(p,t)=>a(p)(s,{content:{title:"Open Source Shop",description:"Bringing Shops to the Athena Framework, absolute free and open source! Licensed under MIT",author:"Der Lord!",version:"3.0.4+",images:["https://user-images.githubusercontent.com/82890183/148626519-5dc1ced7-a4d9-4f86-a349-26e58729cea8.png","https://user-images.githubusercontent.com/82890183/148910952-470985fe-5fed-41ed-8b87-08c9977f71c2.png"],keywords:["free","player","server","client","interface","system","item"],url:"https://github.com/Booster1212/OpenSourceShop",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"opensourceshop",text:"OpenSourceShop"},{depth:1,slug:"features",text:"Features"},{depth:1,slug:"setup-plugin",text:"Setup (Plugin)"},{depth:1,slug:"setup-shops--type",text:"Setup (Shops / TYPE)"}],source:`
# OpenSourceShop

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
- Imports (Client) ->
- import './athena-oss/view';
- import './athena-oss/src/client-events';

Imports (Server) ->
- import './OSS/index';

src-webviews/pages/components.ts ->
- import ShopUI from './shopUI/ShopUI.vue';
- ShopUI: shallowRef(ShopUI)
\`\`\`
# Setup (Shops / TYPE)
\`\`\`typescript
// IShopLocation & IShop can be imported from "server/athena-oss/src/interfaces"
export const coreShopLocations: IShopLocation[] = [
    { x: 25.980966567993164, y: -1345.6417236328125, z: 28.497024536132812, isBlip: true }, 
    { x: 374.3475341796875, y: 328.112060546875, z: 102.56637573242188, isBlip: true }, 
    { x: -3041.32763671875, y: 585.155029296875, z: 6.908928871154785, isBlip: true }, 
    { x: -3243.743408203125, y: 1001.3903198242188, z: 11.830706596374512, isBlip: true }, 
    { x: 548.0447387695312, y: 2669.48876953125, z: 41.156490325927734, isBlip: true }, 
    { x: 1960.2322998046875, y: 3742.317138671875, z: 31.343746185302734, isBlip: true }, 
    { x: 1730.01171875, y: 6416.22021484375, z: 34.03722381591797, isBlip: true }, 
    { x: 2555.4609375, y: 382.1643371582031, z: 107.62295532226562, isBlip: true }, 
];

export const ShopRegistry: IShop[] = [
    // BUY SHOP
    {
        name: '24/7 Shop',
        dbName: '24-7-Shop',
        blipSprite: 59,
        blipColor: 2,
        blipScale: 1,
        data: {
            items: [
                { dbName: 'bread', price: 75 },
                { dbName: 'Shophotdog', price: 375 },
                { dbName: 'Shopwater', price: 250 },
                { dbName: 'Shopcola', price: 250 },
                { dbName: 'Shopenergy', price: 300 },
            ],
        },
        locations: coreShopLocations,
    },
    // SELL SHOP
    {
        name: 'Seller Example',
        dbName: 'SellerExample',
        shopType: shopType.SELL,
        blipSprite: 52,
        blipColor: 1,
        blipScale: 1,
        data: {
            items: [{ dbName: 'burger', price: 330 }],
        },
        locations: sellerExampleLocations,
    },
];
\`\`\`

<img src="https://user-images.githubusercontent.com/82890183/148910952-470985fe-5fed-41ed-8b87-08c9977f71c2.png" width="650"/>

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
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">-</span> <span class="token function">Imports</span> <span class="token punctuation">(</span>Client<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
<span class="token operator">-</span> <span class="token keyword">import</span> <span class="token string">'./athena-oss/view'</span><span class="token punctuation">;</span>
<span class="token operator">-</span> <span class="token keyword">import</span> <span class="token string">'./athena-oss/src/client-events'</span><span class="token punctuation">;</span>

<span class="token function">Imports</span> <span class="token punctuation">(</span>Server<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
<span class="token operator">-</span> <span class="token keyword">import</span> <span class="token string">'./OSS/index'</span><span class="token punctuation">;</span>

src<span class="token operator">-</span>webviews<span class="token operator">/</span>pages<span class="token operator">/</span>components<span class="token punctuation">.</span>ts <span class="token operator">-</span><span class="token operator">></span>
<span class="token operator">-</span> <span class="token keyword">import</span> ShopUI <span class="token keyword">from</span> <span class="token string">'./shopUI/ShopUI.vue'</span><span class="token punctuation">;</span>
<span class="token operator">-</span> ShopUI<span class="token operator">:</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>ShopUI<span class="token punctuation">)</span></code></pre>
<h1 id="setup-shops--type">Setup (Shops / TYPE)</h1>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// IShopLocation &amp; IShop can be imported from "server/athena-oss/src/interfaces"</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> coreShopLocations<span class="token operator">:</span> IShopLocation<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">25.980966567993164</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1345.6417236328125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">28.497024536132812</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">374.3475341796875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">328.112060546875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">102.56637573242188</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">3041.32763671875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">585.155029296875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">6.908928871154785</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">3243.743408203125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">1001.3903198242188</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">11.830706596374512</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">548.0447387695312</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2669.48876953125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">41.156490325927734</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1960.2322998046875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">3742.317138671875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">31.343746185302734</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1730.01171875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">6416.22021484375</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">34.03722381591797</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2555.4609375</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">382.1643371582031</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">107.62295532226562</span><span class="token punctuation">,</span> isBlip<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> 
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ShopRegistry<span class="token operator">:</span> IShop<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// BUY SHOP</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'24/7 Shop'</span><span class="token punctuation">,</span>
        dbName<span class="token operator">:</span> <span class="token string">'24-7-Shop'</span><span class="token punctuation">,</span>
        blipSprite<span class="token operator">:</span> <span class="token number">59</span><span class="token punctuation">,</span>
        blipColor<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        blipScale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
            items<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'bread'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">75</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'Shophotdog'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">375</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'Shopwater'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">250</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'Shopcola'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">250</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'Shopenergy'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        locations<span class="token operator">:</span> coreShopLocations<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// SELL SHOP</span>
    <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'Seller Example'</span><span class="token punctuation">,</span>
        dbName<span class="token operator">:</span> <span class="token string">'SellerExample'</span><span class="token punctuation">,</span>
        shopType<span class="token operator">:</span> shopType<span class="token punctuation">.</span><span class="token constant">SELL</span><span class="token punctuation">,</span>
        blipSprite<span class="token operator">:</span> <span class="token number">52</span><span class="token punctuation">,</span>
        blipColor<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        blipScale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
            items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'burger'</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">330</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        locations<span class="token operator">:</span> sellerExampleLocations<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>
<img src="https://user-images.githubusercontent.com/82890183/148910952-470985fe-5fed-41ed-8b87-08c9977f71c2.png" width="650"/>
<p><img src="https://user-images.githubusercontent.com/82890183/148634183-00270cd2-ba69-4a46-94ba-58434967c890.png" alt="image"></p>
<p>Join the plugin Discord -> <a href="https://discord.gg/Pk6gQ2agbQ">https://discord.gg/Pk6gQ2agbQ</a></p>`}}},t)});

import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as o}from"./vendor.f3700654.js";o("7sKXT",{value:!0},async()=>{const[{default:s},{default:a}]=await Promise.all([n(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),n(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(t,p)=>a(t)(s,{content:{title:"Athena Farming Controller",description:"Some simple farming system for the Athena Framework - Free, Customizable and Open Source!",author:"Der Lord!",version:"3.0.4+",images:["https://user-images.githubusercontent.com/82890183/148943871-d2df632e-1235-4ea5-af79-01e63857e41a.png"],keywords:["free","player","server","system","item"],url:"https://github.com/Booster1212/AthenaFarmController",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"athenafarmcontroller",text:"AthenaFarmController"},{depth:1,slug:"features",text:"Features"},{depth:1,slug:"example-route--",text:"Example Route ->"},{depth:1,slug:"setup",text:"Setup"}],source:`# AthenaFarmController

![Fichier 39mdpi](https://user-images.githubusercontent.com/82890183/148942562-124cf72b-2aca-4a9d-9693-d6f5be7e35c0.png)

Welcome to the Athena Open Source Farm Controller!

Big Thanks especially to deeMace & Borgi.

# Features
- Tools with decreasing durability (Build your own)
- Build Custom Routes with custom item returns
- Random item returns so each time you farm you'll get another item maybe, can be based on Tools Rarity.
- Build different spots, required tools.
- Anti "E-KEY" Macro
- Optional Blips, Markers, Particles, Animations & Attachables.
- Synced Tool Objects.
- Userfriendly Usage per Toolbar
- Integrate Fishing System! : )

# Example Route ->
\`\`\`typescript
// Type IFarming is located here -> athena-os-farming/src/interfaces/IFarming.ts
// import * as alt from 'alt-server';
// import { miningLocations } from '../farmingRoutes/miningRoute/miningLocations';

export const farmRegistry: Array<IFarming> = [
    // MINING ROUTE
    {
        routeName: 'Mining Route',
        requiredTool: [
            'Mining-Drill', // Uncommon
            'Mining-Drill 2', // Common
            'Mining-Drill 3', // Rare
            'Mining-Drill 4', // Very Rare
            'Mining-Drill 5', // Legendary
            'Mining-Drill 6', // Unique
        ],
        isAnimation: true,
        farmDuration: 10000,
        blip: {
            text: 'Miners Place',
            color: 40,
            sprite: 88,
            scale: 1,
            isBlip: true,
            position: { x: 2912.41748046875, y: 2778.765380859375, z: 44.96366882324219 - 1 } as alt.Vector3,
        },
        marker: {
            type: 2,
            color: {
                r: 10,
                g: 156,
                b: 0,
                a: 255,
            },
            bobUpAndDown: true,
            rotate: true,
            isMarker: true,
        },
        animation: {
            dict: 'amb@world_human_const_drill@male@drill@base',
            name: 'base',
            flags: ANIMATION_FLAGS.REPEAT,
        },
        attacheable: {
            bone: 60309,
            model: 'prop_tool_jackham',
            pos: { x: 0, y: 0, z: 0 } as alt.Vector3,
            rot: { x: 0, y: 0, z: 0 } as alt.Vector3,
        },
        spots: {
            positions: miningLocations,
        },
        outcome: {
            common: ['Iron Ore', 'Cooper Ore'],
            rare: ['Silver Ore'],
            epic: ['Gold Ore', 'Titanium Ore'],
        },
    },
];
    
export const miningLocations: Array<alt.Vector3> = [
    { x: 2975.733154296875, y: 2791.59716796875, z: 40.515140533447266 - 1 } as alt.Vector3,
    { x: 2966.3916015625, y: 2775.824462890625, z: 38.95657730102539 - 1 } as alt.Vector3,
    { x: 2951.238037109375, y: 2770.526611328125, z: 38.99069595336914 - 1 } as alt.Vector3,
    { x: 2937.0654296875, y: 2778.3662109375, z: 39.21839141845703 - 1 } as alt.Vector3,
    { x: 2927.2353515625, y: 2794.62744140625, z: 40.72378921508789 - 1 } as alt.Vector3,
    { x: 2932.526611328125, y: 2813.072021484375, z: 43.69724655151367 - 1 } as alt.Vector3,
    { x: 2947.60986328125, y: 2817.997802734375, z: 42.51972579956055 - 1 } as alt.Vector3,
    { x: 2966.80712890625, y: 2806.69384765625, z: 42.09012222290039 - 1 } as alt.Vector3,
    { x: 2953.723876953125, y: 2789.539794921875, z: 41.44651794433594 - 1 } as alt.Vector3,
];
\`\`\`

# Setup
- This is an Serverside plugin, so it has to be located at src/core/server-plugins/athena-os-farming
- Import it by import './athena-os-farming/index'; and you are good to go.`,html:`<h1 id="athenafarmcontroller">AthenaFarmController</h1>
<p><img src="https://user-images.githubusercontent.com/82890183/148942562-124cf72b-2aca-4a9d-9693-d6f5be7e35c0.png" alt="Fichier 39mdpi"></p>
<p>Welcome to the Athena Open Source Farm Controller!</p>
<p>Big Thanks especially to deeMace &#x26; Borgi.</p>
<h1 id="features">Features</h1>
<ul>
<li>Tools with decreasing durability (Build your own)</li>
<li>Build Custom Routes with custom item returns</li>
<li>Random item returns so each time you farm you\u2019ll get another item maybe, can be based on Tools Rarity.</li>
<li>Build different spots, required tools.</li>
<li>Anti \u201CE-KEY\u201D Macro</li>
<li>Optional Blips, Markers, Particles, Animations &#x26; Attachables.</li>
<li>Synced Tool Objects.</li>
<li>Userfriendly Usage per Toolbar</li>
<li>Integrate Fishing System! : )</li>
</ul>
<h1 id="example-route--">Example Route -></h1>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// Type IFarming is located here -> athena-os-farming/src/interfaces/IFarming.ts</span>
<span class="token comment">// import * as alt from 'alt-server';</span>
<span class="token comment">// import { miningLocations } from '../farmingRoutes/miningRoute/miningLocations';</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> farmRegistry<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>IFarming<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// MINING ROUTE</span>
    <span class="token punctuation">{</span>
        routeName<span class="token operator">:</span> <span class="token string">'Mining Route'</span><span class="token punctuation">,</span>
        requiredTool<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">'Mining-Drill'</span><span class="token punctuation">,</span> <span class="token comment">// Uncommon</span>
            <span class="token string">'Mining-Drill 2'</span><span class="token punctuation">,</span> <span class="token comment">// Common</span>
            <span class="token string">'Mining-Drill 3'</span><span class="token punctuation">,</span> <span class="token comment">// Rare</span>
            <span class="token string">'Mining-Drill 4'</span><span class="token punctuation">,</span> <span class="token comment">// Very Rare</span>
            <span class="token string">'Mining-Drill 5'</span><span class="token punctuation">,</span> <span class="token comment">// Legendary</span>
            <span class="token string">'Mining-Drill 6'</span><span class="token punctuation">,</span> <span class="token comment">// Unique</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        isAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        farmDuration<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        blip<span class="token operator">:</span> <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">'Miners Place'</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            sprite<span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span>
            scale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            isBlip<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            position<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2912.41748046875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2778.765380859375</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">44.96366882324219</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        marker<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token punctuation">{</span>
                r<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                g<span class="token operator">:</span> <span class="token number">156</span><span class="token punctuation">,</span>
                b<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                a<span class="token operator">:</span> <span class="token number">255</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            bobUpAndDown<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            rotate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            isMarker<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        animation<span class="token operator">:</span> <span class="token punctuation">{</span>
            dict<span class="token operator">:</span> <span class="token string">'amb@world_human_const_drill@male@drill@base'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'base'</span><span class="token punctuation">,</span>
            flags<span class="token operator">:</span> <span class="token constant">ANIMATION_FLAGS</span><span class="token punctuation">.</span><span class="token constant">REPEAT</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        attacheable<span class="token operator">:</span> <span class="token punctuation">{</span>
            bone<span class="token operator">:</span> <span class="token number">60309</span><span class="token punctuation">,</span>
            model<span class="token operator">:</span> <span class="token string">'prop_tool_jackham'</span><span class="token punctuation">,</span>
            pos<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
            rot<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        spots<span class="token operator">:</span> <span class="token punctuation">{</span>
            positions<span class="token operator">:</span> miningLocations<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        outcome<span class="token operator">:</span> <span class="token punctuation">{</span>
            common<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Iron Ore'</span><span class="token punctuation">,</span> <span class="token string">'Cooper Ore'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            rare<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Silver Ore'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            epic<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Gold Ore'</span><span class="token punctuation">,</span> <span class="token string">'Titanium Ore'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
    
<span class="token keyword">export</span> <span class="token keyword">const</span> miningLocations<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>alt<span class="token punctuation">.</span>Vector3<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2975.733154296875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2791.59716796875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">40.515140533447266</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2966.3916015625</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2775.824462890625</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">38.95657730102539</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2951.238037109375</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2770.526611328125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">38.99069595336914</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2937.0654296875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2778.3662109375</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">39.21839141845703</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2927.2353515625</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2794.62744140625</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">40.72378921508789</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2932.526611328125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2813.072021484375</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">43.69724655151367</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2947.60986328125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2817.997802734375</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">42.51972579956055</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2966.80712890625</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2806.69384765625</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">42.09012222290039</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2953.723876953125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2789.539794921875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">41.44651794433594</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre>
<h1 id="setup">Setup</h1>
<ul>
<li>This is an Serverside plugin, so it has to be located at src/core/server-plugins/athena-os-farming</li>
<li>Import it by import \u2018./athena-os-farming/index\u2019; and you are good to go.</li>
</ul>`}}},p)});

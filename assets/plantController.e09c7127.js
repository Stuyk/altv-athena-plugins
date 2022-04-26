import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as p}from"./vendor.7d2999dd.js";p("Z1gvl56",{value:!0},async()=>{const[{default:s},{default:a}]=await Promise.all([n(()=>import("./MainDisplay.12b9d463.js"),["assets/MainDisplay.12b9d463.js","assets/Header.47e3a24d.js","assets/vendor.7d2999dd.js"]),n(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(t,e)=>a(t)(s,{content:{title:"AthenaPlantController",description:"Be some funny weed gardener and manage your plants.",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/148577251-49ab503c-c795-4bb3-896a-99b4d04c6910.png","https://user-images.githubusercontent.com/82890183/147868854-2354f997-12f6-41a4-a6d0-993f96a208e6.png","https://user-images.githubusercontent.com/82890183/147867739-5123726b-0c8a-4e42-8cbe-4bd6e34835c9.png","https://user-images.githubusercontent.com/82890183/147867743-d105fedf-f559-4136-acfd-bc585d7a9c61.png"],keywords:["free","player","system"],url:"https://github.com/Booster1212/AthenaPlantController",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"athena-framework---plantcontroller",text:"Athena Framework - PlantController"},{depth:2,slug:"have-you-always-wanted-to-be-a-weed-gardener-this-is-your-chance",text:"Have you always wanted to be a weed gardener? This is your chance!"},{depth:2,slug:"features",text:"Features"},{depth:2,slug:"setup--imports",text:"Setup & Imports"},{depth:2,slug:"setup-items",text:"Setup Items"},{depth:2,slug:"default-settings",text:"Default Settings"},{depth:2,slug:"scripting-example",text:"Scripting Example"},{depth:2,slug:"issues",text:"Issues"},{depth:2,slug:"images",text:"Images"}],source:`# Athena Framework - PlantController

![Fichier 29mdpi](https://user-images.githubusercontent.com/82890183/147866518-ca690889-0a1a-4ac8-9831-54b3b762b1ec.png)

## Have you always wanted to be a weed gardener? This is your chance! 
This plugin for the Athena Framework allows you to grow different strains with different times! 
The harvest of your plant is freely determinable, depending on how long your plant needs to grow.

## Features
- Different varieties with different adjustable yields!
- Sow, fertilize, water and harvest your plants!
- Adjustable according to your wishes!
- Create as many plant spots as you like!
- Custom animations for sowing, fertilizing, watering and harvesting!

## Setup & Imports
- Create a new folder called "AthenaPlantController" and drop stuff from this branch there.
- Since this is an serverside plugin we just need to import the index.ts file.
- Database and default items will be created on the first bootup of the Athena Framework.
\`\`\`typescript
// src/core/plugins/import.ts ->
import './AthenaPlantController/index';
\`\`\`

## Setup Items
- Be careful that you'll need same type & variety!
- Seeds need to be in Toolbar Slot 0 for now!

\`\`\`typescript
// Seeds (Build a new Plant)
export const seeds = [
    { name: 'Northern Haze Seeds', description: 'Casual seeds for the casual grower.', type: 'Indica', variety: 'Northern Haze', time: 10 },
    { name: 'OG Kush Seeds', description: 'Casual seeds for the casual grower.', type: 'Indica', variety: 'OG Kush', time: 10 },
    { name: 'Purple Haze Seeds', description: 'Casual seeds for the casual grower.', type: 'Indica', variety: 'Purple Haze', time: 10 },
    { name: 'Lemon Haze Seeds', description: 'Casual seeds for the casual grower.', type: 'Sativa', variety: 'Lemon Haze', time: 10, },
    { name: 'Mango Kush Seeds', description: 'Casual seeds for the casual grower.', type: 'Ruderalis', variety: 'Mango Kush', time: 10 }
]

// Buds (Harvesting a Plant)
export const buds = [
    { name: 'Northern Haze Buds', description: 'Result of harvesting Northern Haze seeds.', type: 'Indica', variety: 'Northern Haze', amount: 100 },
    { name: 'OG Kush Buds', description: 'Result of harvesting OG Kush seeds.', type: 'Indica', variety: 'OG Kush', amount: 50 },
    { name: 'Purple Haze Buds', description: 'Result of harvesting Purple Haze seeds.', type: 'Indica', variety: 'Purple Haze', amount: 100 },
    { name: 'Lemon Haze Buds', description: 'Result of harvesting Lemon Haze seeds.', type: 'Sativa', variety: 'Lemon Haze', amount: 100 },
    { name: 'Mango Kush Buds', description: 'Result of harvesting Mango Kush seeds.', type: 'Ruderalis', variety: 'Mango Kush', amount: 100 }
]
\`\`\`

## Default Settings

\`\`\`typescript
export const ATHENA_PLANTCONTROLLER = {
    name: 'PlantController',
    version: 'v1.0',
    useDiscordLogs: false,
    discordChannel: 'someChannelId',
};

export const PLANTCONTROLLER_DATABASE = {
    collectionName: 'plants', // Change me before booting if you need to.
};

export const PLANTCONTROLLER_SETTINGS = {
    smallPot: 'bkr_prop_weed_01_small_01a', // LEAVE ME ALONE
    mediumPot: 'bkr_prop_weed_med_01a', // LEAVE ME ALONE
    largePot: 'bkr_prop_weed_lrg_01a', // LEAVE ME ALONE
    updateInterval: 3000, // Used to set the timer's update Interval.
    distanceToSpot: 10,
    interactionRange: 1,
    textLabelDistance: 3,
};

// use 'default' to skip animations.
// Example ->
// seedingAnimName: 'default',
// seedingAnimDict: 'default',
export const PLANTCONTROLLER_ANIMATIONS = {
    seedingAnimName: 'base',
    seedingAnimDict: 'amb@world_human_gardener_plant@male@base',
    seedingAnimDuration: 3000,

    fertilizingAnimName: 'base',
    fertilizingAnimDict: 'amb@world_human_gardener_plant@male@base',
    fertilizingAnimDuration: 3000,

    waterAnimName: 'base',
    waterAnimDict: 'amb@world_human_gardener_plant@male@base',
    waterAnimDuration: 3000,

    harvestAnimName: 'base',
    harvestAnimDict: 'amb@world_human_gardener_plant@male@base',
    harvestAnimDuration: 3000,
};

/**
* The \`PLANTCONTROLLER_SPOTS\` array contains the locations of the spots where the plants
can be placed.
*/
export const PLANTCONTROLLER_SPOTS: alt.Vector3[] = [
    { x: -1625.6290283203125, y: 3165.891357421875, z: 29.933713912963867 } as alt.Vector3,
    { x: 3705.656982421875, y: 3079.053955078125, z: 13.06076717376709 } as alt.Vector3,
    { x: 3693.6142578125, y: 4932.6845703125, z: 18.710264205932617 } as alt.Vector3,
    { x: 2505.236328125, y: -2110.73095703125, z: 30.00033950805664 } as alt.Vector3,
];

/**
 * The \`PLANTCONTROLLER_TRANSLATIONS\` enum is used to store the text that will be displayed in the
 * UI when the player interacts with a plant.
 */
export enum PLANTCONTROLLER_TRANSLATIONS {
    // Related to general
    notInRange = 'Not in range of a valid plant spot!',
    // Related to Interaction Controllers.
    seedsRequired = 'Requires Seeds.',
    fertilizerRequired = 'Requires Fertilizer.',
    waterRequired = \`Requires Water.\`,
    seedingInteraction = 'Plant Seeds',
    fertilizingInteraction = 'Fertilize',
    waterInteraction = 'Water Plant',
    harvestable = 'Harvestable',
}
\`\`\`
## Scripting Example 
\`\`\`typescript
alt.on('PlantController:Server:CreatePot', (player: alt.Player, data: Item) => {
    PlantController.addPlant(player, {
        model: PLANTCONTROLLER_SETTINGS.smallPot,
        shaIdentifier: PlantController.generateShaId(player),
        data: {
            owner: player.data.name,
            variety: '',
            type: '',
            seeds: false,
            fertilized: false,
            state: PLANTCONTROLLER_TRANSLATIONS.seedsRequired,
            remaining: 1337, // Don't touch. Different Times for Different Seeds? ;)
            startTime: 1337, // Don't touch.
            water: 0,
            harvestable: false,
        },
        position: { x: player.pos.x + 1, y: player.pos.y, z: player.pos.z - 1 } as alt.Vector3,
    });
});
\`\`\`

## Issues
- A few left i guess ;)


## Images

![image](https://user-images.githubusercontent.com/82890183/147868854-2354f997-12f6-41a4-a6d0-993f96a208e6.png)

![image](https://user-images.githubusercontent.com/82890183/147867739-5123726b-0c8a-4e42-8cbe-4bd6e34835c9.png)

![image](https://user-images.githubusercontent.com/82890183/147867743-d105fedf-f559-4136-acfd-bc585d7a9c61.png)

![image](https://user-images.githubusercontent.com/82890183/147868683-79228be4-8144-4fa6-bde4-5935c219e672.png)

`,html:`<h1 id="athena-framework---plantcontroller">Athena Framework - PlantController</h1>
<p><img src="https://user-images.githubusercontent.com/82890183/147866518-ca690889-0a1a-4ac8-9831-54b3b762b1ec.png" alt="Fichier 29mdpi"></p>
<h2 id="have-you-always-wanted-to-be-a-weed-gardener-this-is-your-chance">Have you always wanted to be a weed gardener? This is your chance!</h2>
<p>This plugin for the Athena Framework allows you to grow different strains with different times!
The harvest of your plant is freely determinable, depending on how long your plant needs to grow.</p>
<h2 id="features">Features</h2>
<ul>
<li>Different varieties with different adjustable yields!</li>
<li>Sow, fertilize, water and harvest your plants!</li>
<li>Adjustable according to your wishes!</li>
<li>Create as many plant spots as you like!</li>
<li>Custom animations for sowing, fertilizing, watering and harvesting!</li>
</ul>
<h2 id="setup--imports">Setup &#x26; Imports</h2>
<ul>
<li>Create a new folder called \u201CAthenaPlantController\u201D and drop stuff from this branch there.</li>
<li>Since this is an serverside plugin we just need to import the index.ts file.</li>
<li>Database and default items will be created on the first bootup of the Athena Framework.</li>
</ul>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// src/core/plugins/import.ts -></span>
<span class="token keyword">import</span> <span class="token string">'./AthenaPlantController/index'</span><span class="token punctuation">;</span></code></pre>
<h2 id="setup-items">Setup Items</h2>
<ul>
<li>Be careful that you\u2019ll need same type &#x26; variety!</li>
<li>Seeds need to be in Toolbar Slot 0 for now!</li>
</ul>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// Seeds (Build a new Plant)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> seeds <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Northern Haze Seeds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Casual seeds for the casual grower.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Indica'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Northern Haze'</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'OG Kush Seeds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Casual seeds for the casual grower.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Indica'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'OG Kush'</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Purple Haze Seeds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Casual seeds for the casual grower.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Indica'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Purple Haze'</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Lemon Haze Seeds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Casual seeds for the casual grower.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Sativa'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Lemon Haze'</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Mango Kush Seeds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Casual seeds for the casual grower.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Ruderalis'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Mango Kush'</span><span class="token punctuation">,</span> time<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// Buds (Harvesting a Plant)</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> buds <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Northern Haze Buds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Result of harvesting Northern Haze seeds.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Indica'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Northern Haze'</span><span class="token punctuation">,</span> amount<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'OG Kush Buds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Result of harvesting OG Kush seeds.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Indica'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'OG Kush'</span><span class="token punctuation">,</span> amount<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Purple Haze Buds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Result of harvesting Purple Haze seeds.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Indica'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Purple Haze'</span><span class="token punctuation">,</span> amount<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Lemon Haze Buds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Result of harvesting Lemon Haze seeds.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Sativa'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Lemon Haze'</span><span class="token punctuation">,</span> amount<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Mango Kush Buds'</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">'Result of harvesting Mango Kush seeds.'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'Ruderalis'</span><span class="token punctuation">,</span> variety<span class="token operator">:</span> <span class="token string">'Mango Kush'</span><span class="token punctuation">,</span> amount<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span></code></pre>
<h2 id="default-settings">Default Settings</h2>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ATHENA_PLANTCONTROLLER</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'PlantController'</span><span class="token punctuation">,</span>
    version<span class="token operator">:</span> <span class="token string">'v1.0'</span><span class="token punctuation">,</span>
    useDiscordLogs<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    discordChannel<span class="token operator">:</span> <span class="token string">'someChannelId'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PLANTCONTROLLER_DATABASE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    collectionName<span class="token operator">:</span> <span class="token string">'plants'</span><span class="token punctuation">,</span> <span class="token comment">// Change me before booting if you need to.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PLANTCONTROLLER_SETTINGS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    smallPot<span class="token operator">:</span> <span class="token string">'bkr_prop_weed_01_small_01a'</span><span class="token punctuation">,</span> <span class="token comment">// LEAVE ME ALONE</span>
    mediumPot<span class="token operator">:</span> <span class="token string">'bkr_prop_weed_med_01a'</span><span class="token punctuation">,</span> <span class="token comment">// LEAVE ME ALONE</span>
    largePot<span class="token operator">:</span> <span class="token string">'bkr_prop_weed_lrg_01a'</span><span class="token punctuation">,</span> <span class="token comment">// LEAVE ME ALONE</span>
    updateInterval<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// Used to set the timer's update Interval.</span>
    distanceToSpot<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    interactionRange<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    textLabelDistance<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// use 'default' to skip animations.</span>
<span class="token comment">// Example -></span>
<span class="token comment">// seedingAnimName: 'default',</span>
<span class="token comment">// seedingAnimDict: 'default',</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PLANTCONTROLLER_ANIMATIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    seedingAnimName<span class="token operator">:</span> <span class="token string">'base'</span><span class="token punctuation">,</span>
    seedingAnimDict<span class="token operator">:</span> <span class="token string">'amb@world_human_gardener_plant@male@base'</span><span class="token punctuation">,</span>
    seedingAnimDuration<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>

    fertilizingAnimName<span class="token operator">:</span> <span class="token string">'base'</span><span class="token punctuation">,</span>
    fertilizingAnimDict<span class="token operator">:</span> <span class="token string">'amb@world_human_gardener_plant@male@base'</span><span class="token punctuation">,</span>
    fertilizingAnimDuration<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>

    waterAnimName<span class="token operator">:</span> <span class="token string">'base'</span><span class="token punctuation">,</span>
    waterAnimDict<span class="token operator">:</span> <span class="token string">'amb@world_human_gardener_plant@male@base'</span><span class="token punctuation">,</span>
    waterAnimDuration<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>

    harvestAnimName<span class="token operator">:</span> <span class="token string">'base'</span><span class="token punctuation">,</span>
    harvestAnimDict<span class="token operator">:</span> <span class="token string">'amb@world_human_gardener_plant@male@base'</span><span class="token punctuation">,</span>
    harvestAnimDuration<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
* The \`PLANTCONTROLLER_SPOTS\` array contains the locations of the spots where the plants
can be placed.
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">PLANTCONTROLLER_SPOTS</span><span class="token operator">:</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1625.6290283203125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">3165.891357421875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">29.933713912963867</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">3705.656982421875</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">3079.053955078125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">13.06076717376709</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">3693.6142578125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">4932.6845703125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">18.710264205932617</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">2505.236328125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">2110.73095703125</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">30.00033950805664</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">/**
 * The \`PLANTCONTROLLER_TRANSLATIONS\` enum is used to store the text that will be displayed in the
 * UI when the player interacts with a plant.
 */</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> <span class="token constant">PLANTCONTROLLER_TRANSLATIONS</span> <span class="token punctuation">{</span>
    <span class="token comment">// Related to general</span>
    notInRange <span class="token operator">=</span> <span class="token string">'Not in range of a valid plant spot!'</span><span class="token punctuation">,</span>
    <span class="token comment">// Related to Interaction Controllers.</span>
    seedsRequired <span class="token operator">=</span> <span class="token string">'Requires Seeds.'</span><span class="token punctuation">,</span>
    fertilizerRequired <span class="token operator">=</span> <span class="token string">'Requires Fertilizer.'</span><span class="token punctuation">,</span>
    waterRequired <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Requires Water.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    seedingInteraction <span class="token operator">=</span> <span class="token string">'Plant Seeds'</span><span class="token punctuation">,</span>
    fertilizingInteraction <span class="token operator">=</span> <span class="token string">'Fertilize'</span><span class="token punctuation">,</span>
    waterInteraction <span class="token operator">=</span> <span class="token string">'Water Plant'</span><span class="token punctuation">,</span>
    harvestable <span class="token operator">=</span> <span class="token string">'Harvestable'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></code></pre>
<h2 id="scripting-example">Scripting Example</h2>
<pre class="language-typescript"><code data-astro-raw class="language-typescript">alt<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'PlantController:Server:CreatePot'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>player<span class="token operator">:</span> alt<span class="token punctuation">.</span>Player<span class="token punctuation">,</span> data<span class="token operator">:</span> Item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    PlantController<span class="token punctuation">.</span><span class="token function">addPlant</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        model<span class="token operator">:</span> <span class="token constant">PLANTCONTROLLER_SETTINGS</span><span class="token punctuation">.</span>smallPot<span class="token punctuation">,</span>
        shaIdentifier<span class="token operator">:</span> PlantController<span class="token punctuation">.</span><span class="token function">generateShaId</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span>
            owner<span class="token operator">:</span> player<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            variety<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            seeds<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            fertilized<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            state<span class="token operator">:</span> <span class="token constant">PLANTCONTROLLER_TRANSLATIONS</span><span class="token punctuation">.</span>seedsRequired<span class="token punctuation">,</span>
            remaining<span class="token operator">:</span> <span class="token number">1337</span><span class="token punctuation">,</span> <span class="token comment">// Don't touch. Different Times for Different Seeds? ;)</span>
            startTime<span class="token operator">:</span> <span class="token number">1337</span><span class="token punctuation">,</span> <span class="token comment">// Don't touch.</span>
            water<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            harvestable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        position<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> player<span class="token punctuation">.</span>pos<span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> player<span class="token punctuation">.</span>pos<span class="token punctuation">.</span>y<span class="token punctuation">,</span> z<span class="token operator">:</span> player<span class="token punctuation">.</span>pos<span class="token punctuation">.</span>z <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
<h2 id="issues">Issues</h2>
<ul>
<li>A few left i guess ;)</li>
</ul>
<h2 id="images">Images</h2>
<p><img src="https://user-images.githubusercontent.com/82890183/147868854-2354f997-12f6-41a4-a6d0-993f96a208e6.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147867739-5123726b-0c8a-4e42-8cbe-4bd6e34835c9.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147867743-d105fedf-f559-4136-acfd-bc585d7a9c61.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147868683-79228be4-8144-4fa6-bde4-5935c219e672.png" alt="image"></p>`}}},e)});

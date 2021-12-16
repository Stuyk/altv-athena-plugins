import{_ as n}from"./preload-helper.8b70a8dd.js";import{k as o}from"./vendor.d14f5e04.js";o("Z1DIrKL",{value:!0},async()=>{const[{default:a},{default:s}]=await Promise.all([n(()=>import("./MainDisplay.f513f3b3.js"),["assets/MainDisplay.f513f3b3.js","assets/Header.3318a738.js","assets/vendor.d14f5e04.js"]),n(()=>import("./client.1c2c108f.js"),["assets/client.1c2c108f.js","assets/vendor.d14f5e04.js"])]);return(t,e)=>s(t)(a,{content:{title:"Athena Plantsystem",description:"Plant system which lets players place weed plants and also harvest them based on Athena's Interaction Controllers.",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/131876685-13775cce-d8ee-4eb5-b95e-b3ad8520a3cf.png"],keywords:["free","player","system"],url:"https://github.com/Booster1212/AthenaPlantsystem",astro:{headers:[{depth:1,slug:"plantsystem-for-the-athena-framework-by-der-lord",text:"Plantsystem for the Athena Framework by Der Lord!"},{depth:1,slug:"features",text:"Features:"},{depth:1,slug:"installation-instructions",text:"Installation Instructions"},{depth:1,slug:"default-settings-configuration",text:"Default Settings (Configuration)"}],source:`
# Plantsystem for the Athena Framework by Der Lord!

# Features:

- Now fully translateable into your native language
- Now based on Athena's InteractionController
- Now you can still plant weed pots by Toolbar but now for fertilizing, watering and so on you'll only need to have stuff in inventory.
- Now with maximum Plant support for each player individually
- Customize scenarios & the time for each.
- Customize the updateInterval & also the states of the plants.
- Customize the range to a spot players can have
- Customizie the outcome of the plant harvesting (only tried randomized outcome there so far)
- Customize the water loss per minute .. and a lot more.

# Installation Instructions

- Grab from github (https://github.com/Booster1212/AthenaPlantsystem)
- This is a serverside plugin! It has to be added in your local athena repository here: (/src/core/plugins/Plantsystem)
- Configuration Options can be found below.
- Setup should be pretty much the same actually.
- Plants collection will be auto generated at Athena v3.0

# Default Settings (Configuration)

You can always find the default settings for this plugin here.

\`\`\`typescript
import * as alt from 'alt-server';
/**
 * An Array all the valid plant placing spots are going here.
 * Just press F1 Ingame with some administrative permissions, then press F8 and copy here and add "as alt.Vector3"
 * @type {alt.Vector3}
 * @memberof main
 */
export const plantSpots: alt.Vector3[] = [
{ x: -1625.6290283203125, y: 3165.891357421875, z: 29.933713912963867 } as alt.Vector3,
// { x: 0, y: 0, z: 0 } as alt.Vector3, .. More Positions.
];

// Translate whatever you need here to your native language

export enum Translations {
STATE = 'State:',
WATER = 'Water:',
TIME = 'Time:',
FERTILIZER = 'Fertilizer:',
HARVESTABLE = 'Harvestable:',

NO_SEEDS_IN_INVENTORY = 'You do not have any weedseeds in your inventory',
NO_FERTILIZER_IN_INVENTORY = 'You do not have any plant fertilizer in your inventory',
NO_PLANTWATER_IN_INVENTORY = 'You do not have any plant water in your inventory',

NOT_IN_RANGE_OF_SPOT = 'You are not in the range of a valid planting spot',
NOT_ALLOWED_TO_INTERACT = 'You are not allowed to interact with this plant.',
PLANT_SUCCESSFULLY_CREATED = 'Successfully created a plant.',

INTERACTION_PLACESEEDS = 'Place Weedseeds',
INTERACTION_FERTILIZE = 'Fertilize this plant',
INTERACTION_WATER = 'Water this plant',
INTERACTION_HARVEST = 'Harvest this plant',
waitTillWateringFinished = "Wait until you've finished the process of watering",
}

// Settings for the main.ts - file
export const defaultSettings = {
plantSystemEnabled: true, // is the PlantSystem enabled? default: true
plantUpdateInterval: 1000, // updateInterval for all Plants? default: 60000 (1 Minute)
createBlips: true, // will blips be created on the bootup of the Athena Framework? Maybe you want to make it harder to find some spots.
};

export const blipSettings = {
sprite: 469, // Sprite of the Spot Blips
color: 2, // Color of the Spot Blips
scale: 1, // Scale of the Blips
shortRange: true, // ShortRange - N/A idk have to look alt:V imagine insane emoji here. kekw.
text: 'Weed-Plant Spot', // Text for all generated Blips?
};

// Settings for the database.ts - file
export const dbSettings = {
logsEnabled: true, // logsystem of this plantsystem enabled? default: false
useItems: true, // will player need items to place, fertilize, water plants? default: true - i'd suggest to keep this.

allowEveryoneToInteract: false, // can everyone harvest plant of anyone? default: false,
plantLimit: true, // plantLimit for players enabled? default: true
maximumAllowedPlants: 10, // maximumAllowedPlants for a player? default: 10

plantRequiredWaterToGrowh: 20, // Minium amount of water needed for the plant to grow. default: 20 (%)
plantWaterLossPerMinute: 0.25, // How much Water will this plant remove per minute?
destroyPlantsWithLowWater: false, // Will plants which result in zero water before finished be destroyed? Don't use for now. Not integrated.

beginngStateText: 'Beginning...', // Text right after placing a pot.
plantBeginningState: 60, // This does not matter too much tbh.

mediumStateText: 'Growth...', // Text for the mediumState.
plantMediumState: 30, // At what state should the plant switch into "mediumState"? default: 30 (minutes).

endStateText: 'End of growth...', // Text for the endState.
plantEndState: 15, // At what state should the plant switch into "endState"? default: 15 (minutes).

harvestableText: 'Harvestable',

seedPlacingTime: 5000, // Time it takes to place a seed
seedPlacingScenario: 'WORLD_HUMAN_GARDENER_PLANT', // scenario for placing Plants

wateringTime: 5000, // Time it takes to water a plant
wateringScenario: 'WORLD_HUMAN_GARDENER_LEAF_BLOWER', // scenario for watering Plants

fertilizeTime: 5000, // Time it takes to fertilize a plant
fertilizeScenario: 'WORLD_HUMAN_GARDENER_LEAF_BLOWER', // scenario for fertilizing Plants

harvestTime: 5000, // Time it takes to harvest plant
harvestScenario: 'WORLD_HUMAN_GARDENER_PLANT', // scenario for harvesting Plants
randomizeHarvestOutcome: true,
minOutcome: 20,
maxOutcome: 40,

rangeToSpot: 20, // how far can a player be away from a plant spot and still plant a pot?
};

// DO NOT CHANGE THESE IF YOU DONT KNOW WHAT YOU ARE DOING HERE!
export const db_plantObjects = {
small: 'bkr_prop_weed_01_small_01a',
medium: 'bkr_prop_weed_med_01a',
large: 'bkr_prop_weed_lrg_01a',
};
\`\`\`
`,html:`<h1 id="plantsystem-for-the-athena-framework-by-der-lord">Plantsystem for the Athena Framework by Der Lord!</h1>
<h1 id="features">Features:</h1>
<ul>
<li>Now fully translateable into your native language</li>
<li>Now based on Athena\u2019s InteractionController</li>
<li>Now you can still plant weed pots by Toolbar but now for fertilizing, watering and so on you\u2019ll only need to have stuff in inventory.</li>
<li>Now with maximum Plant support for each player individually</li>
<li>Customize scenarios &#x26; the time for each.</li>
<li>Customize the updateInterval &#x26; also the states of the plants.</li>
<li>Customize the range to a spot players can have</li>
<li>Customizie the outcome of the plant harvesting (only tried randomized outcome there so far)</li>
<li>Customize the water loss per minute .. and a lot more.</li>
</ul>
<h1 id="installation-instructions">Installation Instructions</h1>
<ul>
<li>Grab from github (<a href="https://github.com/Booster1212/AthenaPlantsystem">https://github.com/Booster1212/AthenaPlantsystem</a>)</li>
<li>This is a serverside plugin! It has to be added in your local athena repository here: (/src/core/plugins/Plantsystem)</li>
<li>Configuration Options can be found below.</li>
<li>Setup should be pretty much the same actually.</li>
<li>Plants collection will be auto generated at Athena v3.0</li>
</ul>
<h1 id="default-settings-configuration">Default Settings (Configuration)</h1>
<p>You can always find the default settings for this plugin here.</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> alt <span class="token keyword">from</span> <span class="token string">'alt-server'</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * An Array all the valid plant placing spots are going here.
 * Just press F1 Ingame with some administrative permissions, then press F8 and copy here and add "as alt.Vector3"
 * @type {alt.Vector3}
 * @memberof main
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> plantSpots<span class="token operator">:</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1625.6290283203125</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">3165.891357421875</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">29.933713912963867</span> <span class="token punctuation">}</span> <span class="token keyword">as</span> alt<span class="token punctuation">.</span>Vector3<span class="token punctuation">,</span>
<span class="token comment">// { x: 0, y: 0, z: 0 } as alt.Vector3, .. More Positions.</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Translate whatever you need here to your native language</span>

<span class="token keyword">export</span> <span class="token keyword">enum</span> Translations <span class="token punctuation">{</span>
<span class="token constant">STATE</span> <span class="token operator">=</span> <span class="token string">'State:'</span><span class="token punctuation">,</span>
<span class="token constant">WATER</span> <span class="token operator">=</span> <span class="token string">'Water:'</span><span class="token punctuation">,</span>
<span class="token constant">TIME</span> <span class="token operator">=</span> <span class="token string">'Time:'</span><span class="token punctuation">,</span>
<span class="token constant">FERTILIZER</span> <span class="token operator">=</span> <span class="token string">'Fertilizer:'</span><span class="token punctuation">,</span>
<span class="token constant">HARVESTABLE</span> <span class="token operator">=</span> <span class="token string">'Harvestable:'</span><span class="token punctuation">,</span>

<span class="token constant">NO_SEEDS_IN_INVENTORY</span> <span class="token operator">=</span> <span class="token string">'You do not have any weedseeds in your inventory'</span><span class="token punctuation">,</span>
<span class="token constant">NO_FERTILIZER_IN_INVENTORY</span> <span class="token operator">=</span> <span class="token string">'You do not have any plant fertilizer in your inventory'</span><span class="token punctuation">,</span>
<span class="token constant">NO_PLANTWATER_IN_INVENTORY</span> <span class="token operator">=</span> <span class="token string">'You do not have any plant water in your inventory'</span><span class="token punctuation">,</span>

<span class="token constant">NOT_IN_RANGE_OF_SPOT</span> <span class="token operator">=</span> <span class="token string">'You are not in the range of a valid planting spot'</span><span class="token punctuation">,</span>
<span class="token constant">NOT_ALLOWED_TO_INTERACT</span> <span class="token operator">=</span> <span class="token string">'You are not allowed to interact with this plant.'</span><span class="token punctuation">,</span>
<span class="token constant">PLANT_SUCCESSFULLY_CREATED</span> <span class="token operator">=</span> <span class="token string">'Successfully created a plant.'</span><span class="token punctuation">,</span>

<span class="token constant">INTERACTION_PLACESEEDS</span> <span class="token operator">=</span> <span class="token string">'Place Weedseeds'</span><span class="token punctuation">,</span>
<span class="token constant">INTERACTION_FERTILIZE</span> <span class="token operator">=</span> <span class="token string">'Fertilize this plant'</span><span class="token punctuation">,</span>
<span class="token constant">INTERACTION_WATER</span> <span class="token operator">=</span> <span class="token string">'Water this plant'</span><span class="token punctuation">,</span>
<span class="token constant">INTERACTION_HARVEST</span> <span class="token operator">=</span> <span class="token string">'Harvest this plant'</span><span class="token punctuation">,</span>
waitTillWateringFinished <span class="token operator">=</span> <span class="token string">"Wait until you've finished the process of watering"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// Settings for the main.ts - file</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> defaultSettings <span class="token operator">=</span> <span class="token punctuation">{</span>
plantSystemEnabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// is the PlantSystem enabled? default: true</span>
plantUpdateInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// updateInterval for all Plants? default: 60000 (1 Minute)</span>
createBlips<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// will blips be created on the bootup of the Athena Framework? Maybe you want to make it harder to find some spots.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> blipSettings <span class="token operator">=</span> <span class="token punctuation">{</span>
sprite<span class="token operator">:</span> <span class="token number">469</span><span class="token punctuation">,</span> <span class="token comment">// Sprite of the Spot Blips</span>
color<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// Color of the Spot Blips</span>
scale<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// Scale of the Blips</span>
shortRange<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// ShortRange - N/A idk have to look alt:V imagine insane emoji here. kekw.</span>
text<span class="token operator">:</span> <span class="token string">'Weed-Plant Spot'</span><span class="token punctuation">,</span> <span class="token comment">// Text for all generated Blips?</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Settings for the database.ts - file</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> dbSettings <span class="token operator">=</span> <span class="token punctuation">{</span>
logsEnabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// logsystem of this plantsystem enabled? default: false</span>
useItems<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// will player need items to place, fertilize, water plants? default: true - i'd suggest to keep this.</span>

allowEveryoneToInteract<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// can everyone harvest plant of anyone? default: false,</span>
plantLimit<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// plantLimit for players enabled? default: true</span>
maximumAllowedPlants<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// maximumAllowedPlants for a player? default: 10</span>

plantRequiredWaterToGrowh<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// Minium amount of water needed for the plant to grow. default: 20 (%)</span>
plantWaterLossPerMinute<span class="token operator">:</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token comment">// How much Water will this plant remove per minute?</span>
destroyPlantsWithLowWater<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Will plants which result in zero water before finished be destroyed? Don't use for now. Not integrated.</span>

beginngStateText<span class="token operator">:</span> <span class="token string">'Beginning...'</span><span class="token punctuation">,</span> <span class="token comment">// Text right after placing a pot.</span>
plantBeginningState<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// This does not matter too much tbh.</span>

mediumStateText<span class="token operator">:</span> <span class="token string">'Growth...'</span><span class="token punctuation">,</span> <span class="token comment">// Text for the mediumState.</span>
plantMediumState<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// At what state should the plant switch into "mediumState"? default: 30 (minutes).</span>

endStateText<span class="token operator">:</span> <span class="token string">'End of growth...'</span><span class="token punctuation">,</span> <span class="token comment">// Text for the endState.</span>
plantEndState<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token comment">// At what state should the plant switch into "endState"? default: 15 (minutes).</span>

harvestableText<span class="token operator">:</span> <span class="token string">'Harvestable'</span><span class="token punctuation">,</span>

seedPlacingTime<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// Time it takes to place a seed</span>
seedPlacingScenario<span class="token operator">:</span> <span class="token string">'WORLD_HUMAN_GARDENER_PLANT'</span><span class="token punctuation">,</span> <span class="token comment">// scenario for placing Plants</span>

wateringTime<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// Time it takes to water a plant</span>
wateringScenario<span class="token operator">:</span> <span class="token string">'WORLD_HUMAN_GARDENER_LEAF_BLOWER'</span><span class="token punctuation">,</span> <span class="token comment">// scenario for watering Plants</span>

fertilizeTime<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// Time it takes to fertilize a plant</span>
fertilizeScenario<span class="token operator">:</span> <span class="token string">'WORLD_HUMAN_GARDENER_LEAF_BLOWER'</span><span class="token punctuation">,</span> <span class="token comment">// scenario for fertilizing Plants</span>

harvestTime<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// Time it takes to harvest plant</span>
harvestScenario<span class="token operator">:</span> <span class="token string">'WORLD_HUMAN_GARDENER_PLANT'</span><span class="token punctuation">,</span> <span class="token comment">// scenario for harvesting Plants</span>
randomizeHarvestOutcome<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
minOutcome<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
maxOutcome<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>

rangeToSpot<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// how far can a player be away from a plant spot and still plant a pot?</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// DO NOT CHANGE THESE IF YOU DONT KNOW WHAT YOU ARE DOING HERE!</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> db_plantObjects <span class="token operator">=</span> <span class="token punctuation">{</span>
small<span class="token operator">:</span> <span class="token string">'bkr_prop_weed_01_small_01a'</span><span class="token punctuation">,</span>
medium<span class="token operator">:</span> <span class="token string">'bkr_prop_weed_med_01a'</span><span class="token punctuation">,</span>
large<span class="token operator">:</span> <span class="token string">'bkr_prop_weed_lrg_01a'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>`}}},e)});

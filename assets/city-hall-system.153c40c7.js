import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as p}from"./vendor.7d2999dd.js";p("Z7Ducs",{value:!0},async()=>{const[{default:s},{default:a}]=await Promise.all([n(()=>import("./MainDisplay.a53a1701.js"),["assets/MainDisplay.a53a1701.js","assets/Header.b4b763a5.js","assets/vendor.7d2999dd.js"]),n(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(t,e)=>a(t)(s,{content:{title:"City Hall System Premium Plugin",description:"Buy license and change car plate text",author:"SeipekM",version:"2.0.3",images:["https://i.imgur.com/MR1PvP5.png"],keywords:["premium","server","player","system"],url:"https://shoppy.gg/product/dSDfRco",price:"25.00",discord:"seipekm#0300",astro:{headers:[{depth:1,slug:"city-hall-system-premium-plugin",text:"City Hall System Premium Plugin"},{depth:2,slug:"features",text:"Features"},{depth:1,slug:"installation-instructions",text:"Installation Instructions"},{depth:3,slug:"importsts-serverside",text:"imports.ts (Serverside)"},{depth:3,slug:"importsts-clientside",text:"imports.ts (Clientside)"},{depth:3,slug:"itemsts-serverside",text:"items.ts (Serverside)"}],source:`
# City Hall System Premium Plugin

## Features
- Purchase of identity card
- Purchase of provisional driver\u2019s license
- Change of car license plate

# Installation Instructions

- Drop the plugins files into plugins.
- Drop the client-plugins files into client-plugins.
- Drop the webview files into webview.

### imports.ts (Serverside)
\`\`\`ts
'./cityhall/index',
'./cityhall/items',
\`\`\`

### imports.ts (Clientside)
\`\`\`ts
import './cityhall/index';
\`\`\`

### items.ts (Serverside)
\`\`\`ts
import { ITEM_TYPE } from '../../shared/enums/itemTypes';
import { Item } from '../../shared/interfaces/Item';
import { appendToItemRegistry } from '../../shared/items/itemRegistry';
import { deepCloneObject } from '../../shared/utility/deepCopy';

// >> ID Card
const commonIdcardItem: Item = {
    name: 'Personalausweis',
    description: 'Dein Personalausweis',
    icon: 'idcard',
    slot: 0,
    quantity: 1,
    behavior:
        ITEM_TYPE.SKIP_CONSUMABLE |
        ITEM_TYPE.CONSUMABLE |
        ITEM_TYPE.CAN_TRADE |
        ITEM_TYPE.CAN_DROP,
    data: {
        name: 'Max_Mustermann',
        birthDay: '1992-02-18',
        gender: "M",
        height: 169

    }
}
const registerCommonIdcard: Item = deepCloneObject<Item>(commonIdcardItem);
appendToItemRegistry(registerCommonIdcard);


// >> Temp Licence Card
const commonTemporaryDrivingLicenseItem: Item = {
    name: 'Vorl\xE4ufiger-F\xFChrerschein',
    description: 'Dein vorl\xE4ufiger F\xFChrerschein',
    icon: 'licencecard',
    slot: 0,
    quantity: 1,
    behavior:
        ITEM_TYPE.SKIP_CONSUMABLE |
        ITEM_TYPE.CONSUMABLE |
        ITEM_TYPE.CAN_TRADE |
        ITEM_TYPE.CAN_DROP,
    data: {
        name: 'Max_Mustermann',
        birthDay: '1992-02-18',
        gender: "M",
        height: 169,
        expirationDate: '2021-12-01'
    }
}
const registerTemporaryDrivingLicense: Item = deepCloneObject<Item>(commonTemporaryDrivingLicenseItem);
appendToItemRegistry(registerTemporaryDrivingLicense);
\`\`\``,html:`<h1 id="city-hall-system-premium-plugin">City Hall System Premium Plugin</h1>
<h2 id="features">Features</h2>
<ul>
<li>Purchase of identity card</li>
<li>Purchase of provisional driver\u2019s license</li>
<li>Change of car license plate</li>
</ul>
<h1 id="installation-instructions">Installation Instructions</h1>
<ul>
<li>Drop the plugins files into plugins.</li>
<li>Drop the client-plugins files into client-plugins.</li>
<li>Drop the webview files into webview.</li>
</ul>
<h3 id="importsts-serverside">imports.ts (Serverside)</h3>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token string">'./cityhall/index'</span><span class="token punctuation">,</span>
<span class="token string">'./cityhall/items'</span><span class="token punctuation">,</span></code></pre>
<h3 id="importsts-clientside">imports.ts (Clientside)</h3>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token string">'./cityhall/index'</span><span class="token punctuation">;</span></code></pre>
<h3 id="itemsts-serverside">items.ts (Serverside)</h3>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ITEM_TYPE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../shared/enums/itemTypes'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Item <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../shared/interfaces/Item'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> appendToItemRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../shared/items/itemRegistry'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> deepCloneObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../shared/utility/deepCopy'</span><span class="token punctuation">;</span>

<span class="token comment">// >> ID Card</span>
<span class="token keyword">const</span> commonIdcardItem<span class="token operator">:</span> Item <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Personalausweis'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'Dein Personalausweis'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">'idcard'</span><span class="token punctuation">,</span>
    slot<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    quantity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    behavior<span class="token operator">:</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">SKIP_CONSUMABLE</span> <span class="token operator">|</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CONSUMABLE</span> <span class="token operator">|</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CAN_TRADE</span> <span class="token operator">|</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CAN_DROP</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'Max_Mustermann'</span><span class="token punctuation">,</span>
        birthDay<span class="token operator">:</span> <span class="token string">'1992-02-18'</span><span class="token punctuation">,</span>
        gender<span class="token operator">:</span> <span class="token string">"M"</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">169</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> registerCommonIdcard<span class="token operator">:</span> Item <span class="token operator">=</span> <span class="token generic-function"><span class="token function">deepCloneObject</span><span class="token generic class-name"><span class="token operator">&lt;</span>Item<span class="token operator">></span></span></span><span class="token punctuation">(</span>commonIdcardItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">appendToItemRegistry</span><span class="token punctuation">(</span>registerCommonIdcard<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// >> Temp Licence Card</span>
<span class="token keyword">const</span> commonTemporaryDrivingLicenseItem<span class="token operator">:</span> Item <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">'Vorl\xE4ufiger-F\xFChrerschein'</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">'Dein vorl\xE4ufiger F\xFChrerschein'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">'licencecard'</span><span class="token punctuation">,</span>
    slot<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    quantity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    behavior<span class="token operator">:</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">SKIP_CONSUMABLE</span> <span class="token operator">|</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CONSUMABLE</span> <span class="token operator">|</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CAN_TRADE</span> <span class="token operator">|</span>
        <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CAN_DROP</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">'Max_Mustermann'</span><span class="token punctuation">,</span>
        birthDay<span class="token operator">:</span> <span class="token string">'1992-02-18'</span><span class="token punctuation">,</span>
        gender<span class="token operator">:</span> <span class="token string">"M"</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">169</span><span class="token punctuation">,</span>
        expirationDate<span class="token operator">:</span> <span class="token string">'2021-12-01'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> registerTemporaryDrivingLicense<span class="token operator">:</span> Item <span class="token operator">=</span> <span class="token generic-function"><span class="token function">deepCloneObject</span><span class="token generic class-name"><span class="token operator">&lt;</span>Item<span class="token operator">></span></span></span><span class="token punctuation">(</span>commonTemporaryDrivingLicenseItem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">appendToItemRegistry</span><span class="token punctuation">(</span>registerTemporaryDrivingLicense<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>`}}},e)});

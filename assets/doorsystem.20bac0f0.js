import{_ as n}from"./preload-helper.8b70a8dd.js";import{l as o}from"./vendor.7d2999dd.js";o("VuYuD",{value:!0},async()=>{const[{default:e},{default:s}]=await Promise.all([n(()=>import("./MainDisplay.a53a1701.js"),["assets/MainDisplay.a53a1701.js","assets/Header.b4b763a5.js","assets/vendor.7d2999dd.js"]),n(()=>import("./client.e66485df.js"),["assets/client.e66485df.js","assets/vendor.7d2999dd.js"])]);return(t,a)=>s(t)(e,{content:{title:"Door Lock System",description:"Door system which enables you to lock/unlock door based on a player or faction.",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/147381214-0e993fe0-1d9c-48dc-8751-65a46696c4d1.png","https://user-images.githubusercontent.com/82890183/147381524-93c23c14-1c1b-4ba7-8b8b-067a18921167.png","https://user-images.githubusercontent.com/82890183/147381220-b48ebfc4-b6a7-4759-b995-382c99c7c59b.png","https://user-images.githubusercontent.com/82890183/147381230-4340e69b-ce00-48c8-92ea-fec27845489d.png","https://user-images.githubusercontent.com/82890183/147381159-b57320c1-1f3a-495e-8055-bd5b3e8cf860.png"],keywords:["free","player","system","streamer","client"],url:"https://github.com/Booster1212/AthenaDoorlock",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"athena-framework---doorcontroller-v2",text:"Athena Framework - DoorController V2"},{depth:2,slug:"read-first",text:"READ First!"},{depth:2,slug:"features",text:"Features"},{depth:2,slug:"setup",text:"SETUP"},{depth:2,slug:"changelog",text:"CHANGELOG"},{depth:2,slug:"how-to-create-key",text:"HOW TO CREATE KEY"},{depth:3,slug:"want-to-support-some-open-source-activity---go-ahead-and-use-the-sponsor-button-",text:"Want to support some open source activity? - Go ahead and use the Sponsor Button. ;)"}],source:`
# Athena Framework - DoorController V2

![image](https://user-images.githubusercontent.com/82890183/147381214-0e993fe0-1d9c-48dc-8751-65a46696c4d1.png)

![image](https://user-images.githubusercontent.com/82890183/147381524-93c23c14-1c1b-4ba7-8b8b-067a18921167.png)

![image](https://user-images.githubusercontent.com/82890183/147381220-b48ebfc4-b6a7-4759-b995-382c99c7c59b.png)

![image](https://user-images.githubusercontent.com/82890183/147381230-4340e69b-ce00-48c8-92ea-fec27845489d.png)

![image](https://user-images.githubusercontent.com/82890183/147381159-b57320c1-1f3a-495e-8055-bd5b3e8cf860.png)

## READ First!

- Do not Reupload this Plugin or claim it is yours.
- This is the development branch, so there will be still a few bugs left which will be fixed in the next few days.
- Permission to use this plugin is only granted to people which have a legal license of the Athena Framework by Stuyk!

## Features

- Add / Remove Doors In-Game by Pressing "."-Key (DOT)
- Full Database Integration (Collection will be auto-created)
- Full integrated Key System (Keys with names)
- Automatically hashes every submitted door prop name

## SETUP

- Drop the client-plugins files into client-plugins.
- Drop the plugins files into plugins.

## CHANGELOG

- Added Keys, removed faction option from input menu.
- Fixed lot of bugs
- doors are waiting to be closed before they are locking now
- Textlabels are now in center of the door. Boolean Status is gone also.

## HOW TO CREATE KEY

- Keys have actually still be created inside of src/keys.ts - Hopefully we will have database based items soon. <3
- Just copy the example key and make changes to your likings for example name, quantity and so on.
- Be careful that the key must have the exact equal name which is stored inside of the doors-collection.

\`\`\`typescript
// *** Door Keys can be created here. *** //

import { ITEM_TYPE } from '../../../shared/enums/itemTypes';
import { Item } from '../../../shared/interfaces/item';
import { appendToItemRegistry } from '../../../shared/items/itemRegistry';
import { deepCloneObject } from '../../../shared/utility/deepCopy';

// Just some Example Key which can be used if database keyname equals "LSPD Master Key"
const someKey: Item = {
name: \`LSPD Master Key\`,
uuid: \`LSPD-MasterKey\`,
description: \`Probably used to unlock/lock all doors of the Mission Row Police Department.\`,
icon: 'crate',
quantity: 1,
behavior: ITEM_TYPE.CAN_DROP | ITEM_TYPE.CAN_TRADE | ITEM_TYPE.CONSUMABLE,
data: {},
rarity: 3,
};
const registerLSPDKey: Item = deepCloneObject<Item>(someKey);
appendToItemRegistry(registerLSPDKey);
\`\`\`

imports.ts (Clientside)

\`\`\`typescript
import './AthenaDoorlock/index';
import './AthenaDoorlock/src/wheelmenu';
\`\`\`

imports.ts (Serverside)

\`\`\`typescript
import './AthenaDoorlock/index';
import './AthenaDoorlock/src/keys';
\`\`\`

### Want to support some open source activity? - Go ahead and use the Sponsor Button. ;)
`,html:`<h1 id="athena-framework---doorcontroller-v2">Athena Framework - DoorController V2</h1>
<p><img src="https://user-images.githubusercontent.com/82890183/147381214-0e993fe0-1d9c-48dc-8751-65a46696c4d1.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147381524-93c23c14-1c1b-4ba7-8b8b-067a18921167.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147381220-b48ebfc4-b6a7-4759-b995-382c99c7c59b.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147381230-4340e69b-ce00-48c8-92ea-fec27845489d.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147381159-b57320c1-1f3a-495e-8055-bd5b3e8cf860.png" alt="image"></p>
<h2 id="read-first">READ First!</h2>
<ul>
<li>Do not Reupload this Plugin or claim it is yours.</li>
<li>This is the development branch, so there will be still a few bugs left which will be fixed in the next few days.</li>
<li>Permission to use this plugin is only granted to people which have a legal license of the Athena Framework by Stuyk!</li>
</ul>
<h2 id="features">Features</h2>
<ul>
<li>Add / Remove Doors In-Game by Pressing \u201D.\u201D-Key (DOT)</li>
<li>Full Database Integration (Collection will be auto-created)</li>
<li>Full integrated Key System (Keys with names)</li>
<li>Automatically hashes every submitted door prop name</li>
</ul>
<h2 id="setup">SETUP</h2>
<ul>
<li>Drop the client-plugins files into client-plugins.</li>
<li>Drop the plugins files into plugins.</li>
</ul>
<h2 id="changelog">CHANGELOG</h2>
<ul>
<li>Added Keys, removed faction option from input menu.</li>
<li>Fixed lot of bugs</li>
<li>doors are waiting to be closed before they are locking now</li>
<li>Textlabels are now in center of the door. Boolean Status is gone also.</li>
</ul>
<h2 id="how-to-create-key">HOW TO CREATE KEY</h2>
<ul>
<li>Keys have actually still be created inside of src/keys.ts - Hopefully we will have database based items soon. &#x3C;3</li>
<li>Just copy the example key and make changes to your likings for example name, quantity and so on.</li>
<li>Be careful that the key must have the exact equal name which is stored inside of the doors-collection.</li>
</ul>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// *** Door Keys can be created here. *** //</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ITEM_TYPE</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../shared/enums/itemTypes'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Item <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../shared/interfaces/item'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> appendToItemRegistry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../shared/items/itemRegistry'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> deepCloneObject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../shared/utility/deepCopy'</span><span class="token punctuation">;</span>

<span class="token comment">// Just some Example Key which can be used if database keyname equals "LSPD Master Key"</span>
<span class="token keyword">const</span> someKey<span class="token operator">:</span> Item <span class="token operator">=</span> <span class="token punctuation">{</span>
name<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">LSPD Master Key</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
uuid<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">LSPD-MasterKey</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
description<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Probably used to unlock/lock all doors of the Mission Row Police Department.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
icon<span class="token operator">:</span> <span class="token string">'crate'</span><span class="token punctuation">,</span>
quantity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
behavior<span class="token operator">:</span> <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CAN_DROP</span> <span class="token operator">|</span> <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CAN_TRADE</span> <span class="token operator">|</span> <span class="token constant">ITEM_TYPE</span><span class="token punctuation">.</span><span class="token constant">CONSUMABLE</span><span class="token punctuation">,</span>
data<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
rarity<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> registerLSPDKey<span class="token operator">:</span> Item <span class="token operator">=</span> <span class="token generic-function"><span class="token function">deepCloneObject</span><span class="token generic class-name"><span class="token operator">&lt;</span>Item<span class="token operator">></span></span></span><span class="token punctuation">(</span>someKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">appendToItemRegistry</span><span class="token punctuation">(</span>registerLSPDKey<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
<p>imports.ts (Clientside)</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token string">'./AthenaDoorlock/index'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorlock/src/wheelmenu'</span><span class="token punctuation">;</span></code></pre>
<p>imports.ts (Serverside)</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token string">'./AthenaDoorlock/index'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorlock/src/keys'</span><span class="token punctuation">;</span></code></pre>
<h3 id="want-to-support-some-open-source-activity---go-ahead-and-use-the-sponsor-button-">Want to support some open source activity? - Go ahead and use the Sponsor Button. ;)</h3>`}}},a)});

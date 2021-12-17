import{_ as e}from"./preload-helper.8b70a8dd.js";import{k as s}from"./vendor.d14f5e04.js";s("ZCggsI",{value:!0},async()=>{const[{default:n},{default:t}]=await Promise.all([e(()=>import("./MainDisplay.33a33a20.js"),["assets/MainDisplay.33a33a20.js","assets/Header.3318a738.js","assets/vendor.d14f5e04.js"]),e(()=>import("./client.1c2c108f.js"),["assets/client.1c2c108f.js","assets/vendor.d14f5e04.js"])]);return(o,a)=>t(o)(n,{content:{title:"Athena Doorlock System",description:"Doorsystem which enables you to lock/unlock door based on a player or faction.",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/136729801-b86dc411-56e7-4d90-b8fb-a308143823b4.png"],keywords:["free","player","system","streamer","client"],url:"https://github.com/Booster1212/AthenaDoorlock",astro:{headers:[{depth:3,slug:"features",text:"Features"},{depth:3,slug:"how-to-use",text:"HOW TO USE"},{depth:3,slug:"setup",text:"SETUP"}],source:`
### Features
* Add Doors Ingame
* Remove Doors Ingame
* Bind to factions
* Database over hardcoded JSON-List files.
* Interface has options to expand it with keys, player binding and whatever you want.

### HOW TO USE
* Press NUM8 Ingame to open the doormenu (no admin check right now, everyone can use it actually, maybe ill add it next few days.)
* Put in a name in the input menu, name of the prop (gets hashed automatically) and maybe some faction id. (0 means everyone can use the door-interaction.)
* Doors can be removed in the wheelmenu of NUM8 as well.

### SETUP

- Drop the client-plugins files into client-plugins.
- Drop the plugins files into plugins.
- Add \u201Cdoors\u201D to your MONGO_COLLECTIONS= in the .env file.

imports.ts (Clientside)
\`\`\`typescript 
import './AthenaDoorlock/main';
import './AthenaDoorlock/wheelmenu';
\`\`\`
imports.ts (Serverside)
\`\`\`typescript
'./AthenaDoorlock/main',
'./AthenaDoorlock/streamer',
'./AthenaDoorlock/interface',
\`\`\`

`,html:`<h3 id="features">Features</h3>
<ul>
<li>Add Doors Ingame</li>
<li>Remove Doors Ingame</li>
<li>Bind to factions</li>
<li>Database over hardcoded JSON-List files.</li>
<li>Interface has options to expand it with keys, player binding and whatever you want.</li>
</ul>
<h3 id="how-to-use">HOW TO USE</h3>
<ul>
<li>Press NUM8 Ingame to open the doormenu (no admin check right now, everyone can use it actually, maybe ill add it next few days.)</li>
<li>Put in a name in the input menu, name of the prop (gets hashed automatically) and maybe some faction id. (0 means everyone can use the door-interaction.)</li>
<li>Doors can be removed in the wheelmenu of NUM8 as well.</li>
</ul>
<h3 id="setup">SETUP</h3>
<ul>
<li>Drop the client-plugins files into client-plugins.</li>
<li>Drop the plugins files into plugins.</li>
<li>Add \u201Cdoors\u201D to your MONGO_COLLECTIONS= in the .env file.</li>
</ul>
<p>imports.ts (Clientside)</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token string">'./AthenaDoorlock/main'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorlock/wheelmenu'</span><span class="token punctuation">;</span></code></pre>
<p>imports.ts (Serverside)</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token string">'./AthenaDoorlock/main'</span><span class="token punctuation">,</span>
<span class="token string">'./AthenaDoorlock/streamer'</span><span class="token punctuation">,</span>
<span class="token string">'./AthenaDoorlock/interface'</span><span class="token punctuation">,</span></code></pre>`}}},a)});

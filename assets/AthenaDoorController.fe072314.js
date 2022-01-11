import{_ as e}from"./preload-helper.8b70a8dd.js";import{l as s}from"./vendor.f3700654.js";s("Z1l8bBJ",{value:!0},async()=>{const[{default:n},{default:o}]=await Promise.all([e(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),e(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(t,r)=>o(t)(n,{content:{title:"Athena DoorController v3",description:"Full dynamic DoorController which allows you to manage doors ingame.",author:"Der Lord!",version:"3.0.0+",images:["https://user-images.githubusercontent.com/82890183/148626547-272343c0-fa5a-42e5-94ea-832ef636997e.png","https://user-images.githubusercontent.com/82890183/147631180-c26ff168-ab1c-4ae8-83ab-fa152e2e665d.png","https://user-images.githubusercontent.com/82890183/147631218-c2468894-1b0a-4a6b-ac0a-a5f7cb6a5f5f.png","https://user-images.githubusercontent.com/82890183/147719985-0fb6952b-0b68-42b1-a8f4-1ce1555c2252.png"],keywords:["free","player","system","streamer","client"],url:"https://github.com/Booster1212/AthenaDoorController",discord:"Der Lord!#6021",astro:{headers:[{depth:1,slug:"athena-framework---doorcontroller-v3",text:"Athena Framework - DoorController v3"},{depth:3,slug:"features",text:"Features"},{depth:2,slug:"setup---general",text:"Setup - General"},{depth:2,slug:"setup-mongodb",text:"Setup (MongoDB)"},{depth:2,slug:"setup-vue--athena-page",text:"Setup Vue / Athena Page"},{depth:2,slug:"events---scripting---not-available-yet",text:"Events - Scripting - Not available yet."},{depth:2,slug:"images",text:"Images"}],source:`
# Athena Framework - DoorController v3


![Fichier 22mdpi](https://user-images.githubusercontent.com/82890183/147709903-28af3180-38fe-4aa0-b11e-70813c11df79.png)

### Features
- Build on the Athena Framework <3
- Completly manage doors ingame, add, remove, read data, change lockstates
- GTA V default doors will be automatically found. No need to search through Codewalker. All door props should be inside of the doors-props.json.
- Full Database Integration. No Hardcoded .ts files or either JSON Lists.
- Integrated database Keys (changeable locks soon.)
- Configurable to your likings for example disableTextlabel, set range for all Labels, custom collection and more.

## Setup - General
- Just import the stuff from AthenaDoorController_Client in a new folder here -> src/core/client-plugins/newFolderName

- Import the stuff from AthenaDoorController_Server in a new folder here -> src/core/plugins/newFolderName

## Setup (MongoDB) 
- Add a new collection in your MongoDB Compass call it 'doors-props', add "doors-props" there. Just import the Database File i've added here. Key to open the Vue Menu is ","

## Setup Vue / Athena Page
- Go to /src-webivews/pages and create a new Folder called "DoorController" in there.
- Copy the DoorController.vue file of the repos Webview folder inside of that folder.
- Add to components.ts (src-webviews/) -> import DoorController from './DoorController/DoorController.vue';
- Add to components.ts (src-webviews/) -> DoorController: shallowRef(DoorController)

##Imports Server/Client
\`\`\`typescript
// Imports on plugin/imports.ts
import './AthenaDoorController/index';

// Imports on client-plugins/import.ts
import './AthenaDoorController/index';
import './AthenaDoorController/src/doors-vue';
import './AthenaDoorController/src/client-events-vue';
import './AthenaDoorController/src/client-functions';
import './AthenaDoorController/src/client-streamer';
import './AthenaDoorController/src/client-events';
\`\`\`

## Events - Scripting - Not available yet.
\`\`\`typescript
// Clientside Events

// Serverside Events

// Vue To Client Events

// Client To Client Events

// Server To Server Events
\`\`\`

## Images
  
![image](https://user-images.githubusercontent.com/82890183/147631180-c26ff168-ab1c-4ae8-83ab-fa152e2e665d.png)
  
![image](https://user-images.githubusercontent.com/82890183/147631218-c2468894-1b0a-4a6b-ac0a-a5f7cb6a5f5f.png)

![image](https://user-images.githubusercontent.com/82890183/147719985-0fb6952b-0b68-42b1-a8f4-1ce1555c2252.png)

Join my plugin discord -> https://discord.gg/Pk6gQ2agbQ`,html:`<h1 id="athena-framework---doorcontroller-v3">Athena Framework - DoorController v3</h1>
<p><img src="https://user-images.githubusercontent.com/82890183/147709903-28af3180-38fe-4aa0-b11e-70813c11df79.png" alt="Fichier 22mdpi"></p>
<h3 id="features">Features</h3>
<ul>
<li>Build on the Athena Framework &#x3C;3</li>
<li>Completly manage doors ingame, add, remove, read data, change lockstates</li>
<li>GTA V default doors will be automatically found. No need to search through Codewalker. All door props should be inside of the doors-props.json.</li>
<li>Full Database Integration. No Hardcoded .ts files or either JSON Lists.</li>
<li>Integrated database Keys (changeable locks soon.)</li>
<li>Configurable to your likings for example disableTextlabel, set range for all Labels, custom collection and more.</li>
</ul>
<h2 id="setup---general">Setup - General</h2>
<ul>
<li>
<p>Just import the stuff from AthenaDoorController_Client in a new folder here -> src/core/client-plugins/newFolderName</p>
</li>
<li>
<p>Import the stuff from AthenaDoorController_Server in a new folder here -> src/core/plugins/newFolderName</p>
</li>
</ul>
<h2 id="setup-mongodb">Setup (MongoDB)</h2>
<ul>
<li>Add a new collection in your MongoDB Compass call it \u2018doors-props\u2019, add \u201Cdoors-props\u201D there. Just import the Database File i\u2019ve added here. Key to open the Vue Menu is \u201D,\u201D</li>
</ul>
<h2 id="setup-vue--athena-page">Setup Vue / Athena Page</h2>
<ul>
<li>Go to /src-webivews/pages and create a new Folder called \u201CDoorController\u201D in there.</li>
<li>Copy the DoorController.vue file of the repos Webview folder inside of that folder.</li>
<li>Add to components.ts (src-webviews/) -> import DoorController from \u2018./DoorController/DoorController.vue\u2019;</li>
<li>Add to components.ts (src-webviews/) -> DoorController: shallowRef(DoorController)</li>
</ul>
<p>##Imports Server/Client</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// Imports on plugin/imports.ts</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/index'</span><span class="token punctuation">;</span>

<span class="token comment">// Imports on client-plugins/import.ts</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/index'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/src/doors-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/src/client-events-vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/src/client-functions'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/src/client-streamer'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./AthenaDoorController/src/client-events'</span><span class="token punctuation">;</span></code></pre>
<h2 id="events---scripting---not-available-yet">Events - Scripting - Not available yet.</h2>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token comment">// Clientside Events</span>

<span class="token comment">// Serverside Events</span>

<span class="token comment">// Vue To Client Events</span>

<span class="token comment">// Client To Client Events</span>

<span class="token comment">// Server To Server Events</span></code></pre>
<h2 id="images">Images</h2>
<p><img src="https://user-images.githubusercontent.com/82890183/147631180-c26ff168-ab1c-4ae8-83ab-fa152e2e665d.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147631218-c2468894-1b0a-4a6b-ac0a-a5f7cb6a5f5f.png" alt="image"></p>
<p><img src="https://user-images.githubusercontent.com/82890183/147719985-0fb6952b-0b68-42b1-a8f4-1ce1555c2252.png" alt="image"></p>
<p>Join my plugin discord -> <a href="https://discord.gg/Pk6gQ2agbQ">https://discord.gg/Pk6gQ2agbQ</a></p>`}}},r)});

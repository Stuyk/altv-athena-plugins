import{_ as e}from"./preload-helper.8b70a8dd.js";import{l}from"./vendor.f3700654.js";l("ZRvJVL",{value:!0},async()=>{const[{default:a},{default:n}]=await Promise.all([e(()=>import("./MainDisplay.17de610c.js"),["assets/MainDisplay.17de610c.js","assets/Header.ef06e2f6.js","assets/vendor.f3700654.js"]),e(()=>import("./client.6ec4751d.js"),["assets/client.6ec4751d.js","assets/vendor.f3700654.js"])]);return(t,r)=>n(t)(a,{content:{title:"Vehicle Damage Plugin",description:"This Plugin saves the vehicle damage on wheels, windows and lights in the athena database.",author:"j0n4s",version:"3.0.0+",images:["https://i.imgur.com/0Z4VZnC.png"],keywords:["premium","client","player","system"],url:"https://mygp.gumroad.com/l/vehicledamage",price:"9.99",discord:"j0n4s#8301",astro:{headers:[{depth:1,slug:"vehicle-damage-plugin",text:"Vehicle Damage Plugin"},{depth:1,slug:"installation",text:"Installation"},{depth:1,slug:"deinstallation",text:"Deinstallation"},{depth:1,slug:"notes",text:"Notes"}],source:`\r
# Vehicle Damage Plugin\r
\r
This Plugin saves the vehicle damage on wheels, windows and lights in the athena database.\r
A player can no longer repair the vehicle by parking in and out. He is forced to drive to a workshop or call the towing service.\r
\r
# Installation\r
\r
1. Purchase the repo access\r
\r
https://mygp.gumroad.com/l/vehicledamage\r
\r
2. Copy folder plugins/gpVehicleDamage/ to your athena project under src/core/plugins/\r
3. Import server plugin in src/core/plugins/imports.ts:\r
\r
    \`import './gpVehicleDamage/index';\`\r
    \r
4. One change at the athena core is necessary (currently not found a good way around it):\r
\r
    Add the line 2 and 64 from the snippet below to the file src/cire/server/systems/tick.ts\r
\r
    \`\`\`\r
    1:  import * as alt from 'alt-server';\r
    2:  import { GpDamage } from '../../plugins/gpVehicleDamage/gpVehicleDamage';  //Import Vehicle Damage Plugin\r
    ...\r
    63: VehicleFuncs.update(player.vehicle);\r
    64: GpDamage.saveDamageForVehicle(player.vehicle); //Save Damage\r
\r
    \`\`\`\r
\r
# Deinstallation\r
\r
1. Remove the folder gpVehicleDamage under src/core/plugins/\r
2. Remove line 2 and line 64 from athena core file src/cire/server/systems/tick.ts\r
\r
# Notes\r
\r
1. The athena vehicle database will be extended by a property named "damage", which includes several damage informations.\r
2. Some damage data can be potentially crash the game after a GTA Update. Therefore these data will automatically erased and updated by the plugin. However, this leads to the fact that not all damages can be restored after an update.`,html:`<h1 id="vehicle-damage-plugin">Vehicle Damage Plugin</h1>
<p>This Plugin saves the vehicle damage on wheels, windows and lights in the athena database.\r
A player can no longer repair the vehicle by parking in and out. He is forced to drive to a workshop or call the towing service.</p>
<h1 id="installation">Installation</h1>
<ol>
<li>Purchase the repo access</li>
</ol>
<p><a href="https://mygp.gumroad.com/l/vehicledamage">https://mygp.gumroad.com/l/vehicledamage</a></p>
<ol start="2">
<li>
<p>Copy folder plugins/gpVehicleDamage/ to your athena project under src/core/plugins/</p>
</li>
<li>
<p>Import server plugin in src/core/plugins/imports.ts:</p>
<p><code data-astro-raw>import './gpVehicleDamage/index';</code></p>
</li>
<li>
<p>One change at the athena core is necessary (currently not found a good way around it):</p>
<p>Add the line 2 and 64 from the snippet below to the file src/cire/server/systems/tick.ts</p>
<pre class="language-null"><code data-astro-raw class="language-null">1:  import * as alt from 'alt-server';\r
2:  import { GpDamage } from '../../plugins/gpVehicleDamage/gpVehicleDamage';  //Import Vehicle Damage Plugin\r
...\r
63: VehicleFuncs.update(player.vehicle);\r
64: GpDamage.saveDamageForVehicle(player.vehicle); //Save Damage\r
</code></pre>
</li>
</ol>
<h1 id="deinstallation">Deinstallation</h1>
<ol>
<li>Remove the folder gpVehicleDamage under src/core/plugins/</li>
<li>Remove line 2 and line 64 from athena core file src/cire/server/systems/tick.ts</li>
</ol>
<h1 id="notes">Notes</h1>
<ol>
<li>The athena vehicle database will be extended by a property named \u201Cdamage\u201D, which includes several damage informations.</li>
<li>Some damage data can be potentially crash the game after a GTA Update. Therefore these data will automatically erased and updated by the plugin. However, this leads to the fact that not all damages can be restored after an update.</li>
</ol>`}}},r)});

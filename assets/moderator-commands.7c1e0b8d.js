import{_ as n}from"./preload-helper.8b70a8dd.js";import{k as o}from"./vendor.d14f5e04.js";o("16O6zy",{value:!0},async()=>{const[{default:a},{default:e}]=await Promise.all([n(()=>import("./MainDisplay.38bc0aa8.js"),["assets/MainDisplay.38bc0aa8.js","assets/Header.cb8181cd.js","assets/vendor.d14f5e04.js"]),n(()=>import("./client.1c2c108f.js"),["assets/client.1c2c108f.js","assets/vendor.d14f5e04.js"])]);return(t,s)=>e(t)(a,{content:{title:"Moderator Commands",description:"Adds the much needed in-game commands for moderators and administrators.",author:"Stuyk",version:"3.0.0+",images:["https://i.imgur.com/ScnIFEt.png"],keywords:["free","server","system","utility"],url:"https://github.com/Stuyk/athena-moderator-commands",astro:{headers:[{depth:1,slug:"moderator-commands",text:"Moderator Commands"},{depth:1,slug:"installation",text:"Installation"},{depth:3,slug:"download",text:"Download"},{depth:3,slug:"move-folder",text:"Move Folder"},{depth:3,slug:"verify-installation",text:"Verify Installation"},{depth:3,slug:"add-to-imports",text:"Add to Imports"},{depth:1,slug:"usage",text:"Usage"},{depth:3,slug:"admin-private-message",text:"Admin Private Message"},{depth:3,slug:"kick",text:"Kick"},{depth:3,slug:"ban",text:"Ban"},{depth:3,slug:"unban",text:"Unban"},{depth:3,slug:"info",text:"Info"},{depth:3,slug:"teleport-to-player",text:"Teleport to Player"},{depth:3,slug:"teleport-player-to-you",text:"Teleport Player to You"},{depth:3,slug:"freeze-target",text:"Freeze Target"},{depth:3,slug:"unfreeze-target",text:"Unfreeze Target"},{depth:1,slug:"uninstalling",text:"Uninstalling"}],source:`
# Moderator Commands

Adds the much needed in-game commands for moderators and administrators.

-   /apm - Admin Private Message (Send Directly to another Player)
-   /kick - Kick a Player
-   /ban - Ban a Player
-   /unban - Unban a Player
-   /info - Get Player Account Info
-   /tpto - Teleport to a Player
-   /tphere - Teleport a Player Here
-   /freeze - Freeze a Player
-   /unfreeze - Unfreeze a Player

# Installation

### Download

[Download the Archive](https://github.com/Stuyk/athena-moderator-commands/archive/refs/heads/main.zip)

[Source Code](https://github.com/Stuyk/athena-moderator-commands)

### Move Folder

Extract the top level folder \`athena-moderator-commands-main\` into \`src/core/plugins\`.

Your final path should be \`src/core/plugins/athena-moderator-commands-main\`.

See _usage_ to see how to import and use this plugin.

### Verify Installation

Navigate to \`src/core/plugins/athena-moderator-commands-main/index\` and open the file.

Double check that the top-level imports are not underlined in **red**. If they are **red** then you installed this plugin wrong.

### Add to Imports

After checking the placement of the files.

Modify \`src/core/plugins/imports.ts\` and append the following in your \`filePaths\` variable inside \`imports.ts\`.

What to Append:

\`\`\`typescript
import './athena-moderator-commands-main/index';
\`\`\`

# Usage

### Admin Private Message

\`\`\`typescript
/apm [in-game id] [?...message]
\`\`\`

### Kick

\`\`\`typescript
/kick [in-game id] [?...reason]
\`\`\`

### Ban

\`\`\`typescript
/ban [in-game id] [?...reason]'
\`\`\`

### Unban

\`\`\`typescript
/unban [discord id] [?...reason]
\`\`\`

### Info

\`\`\`typescript
/info [in-game id]
\`\`\`

### Teleport to Player

\`\`\`typescript
/tpto [in-game id]
\`\`\`

### Teleport Player to You

\`\`\`typescript
/tphere [in-game id]
\`\`\`

### Freeze Target

Also kicks the player out of their vehicle if they are in one.

\`\`\`typescript
/freeze [in-game id]
\`\`\`

### Unfreeze Target

\`\`\`typescript
/unfreeze [in-game id]
\`\`\`

# Uninstalling

Delete the folder in \`src/core/plugins/athena-moderator-commands-main\`.
`,html:`<h1 id="moderator-commands">Moderator Commands</h1>
<p>Adds the much needed in-game commands for moderators and administrators.</p>
<ul>
<li>/apm - Admin Private Message (Send Directly to another Player)</li>
<li>/kick - Kick a Player</li>
<li>/ban - Ban a Player</li>
<li>/unban - Unban a Player</li>
<li>/info - Get Player Account Info</li>
<li>/tpto - Teleport to a Player</li>
<li>/tphere - Teleport a Player Here</li>
<li>/freeze - Freeze a Player</li>
<li>/unfreeze - Unfreeze a Player</li>
</ul>
<h1 id="installation">Installation</h1>
<h3 id="download">Download</h3>
<p><a href="https://github.com/Stuyk/athena-moderator-commands/archive/refs/heads/main.zip">Download the Archive</a></p>
<p><a href="https://github.com/Stuyk/athena-moderator-commands">Source Code</a></p>
<h3 id="move-folder">Move Folder</h3>
<p>Extract the top level folder <code data-astro-raw>athena-moderator-commands-main</code> into <code data-astro-raw>src/core/plugins</code>.</p>
<p>Your final path should be <code data-astro-raw>src/core/plugins/athena-moderator-commands-main</code>.</p>
<p>See <em>usage</em> to see how to import and use this plugin.</p>
<h3 id="verify-installation">Verify Installation</h3>
<p>Navigate to <code data-astro-raw>src/core/plugins/athena-moderator-commands-main/index</code> and open the file.</p>
<p>Double check that the top-level imports are not underlined in <strong>red</strong>. If they are <strong>red</strong> then you installed this plugin wrong.</p>
<h3 id="add-to-imports">Add to Imports</h3>
<p>After checking the placement of the files.</p>
<p>Modify <code data-astro-raw>src/core/plugins/imports.ts</code> and append the following in your <code data-astro-raw>filePaths</code> variable inside <code data-astro-raw>imports.ts</code>.</p>
<p>What to Append:</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token keyword">import</span> <span class="token string">'./athena-moderator-commands-main/index'</span><span class="token punctuation">;</span></code></pre>
<h1 id="usage">Usage</h1>
<h3 id="admin-private-message">Admin Private Message</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>apm <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">?.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>message<span class="token punctuation">]</span></code></pre>
<h3 id="kick">Kick</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>kick <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">?.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>reason<span class="token punctuation">]</span></code></pre>
<h3 id="ban">Ban</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>ban <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">?.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>reason<span class="token punctuation">]</span>'</code></pre>
<h3 id="unban">Unban</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>unban <span class="token punctuation">[</span>discord id<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">?.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>reason<span class="token punctuation">]</span></code></pre>
<h3 id="info">Info</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>info <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span></code></pre>
<h3 id="teleport-to-player">Teleport to Player</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>tpto <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span></code></pre>
<h3 id="teleport-player-to-you">Teleport Player to You</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>tphere <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span></code></pre>
<h3 id="freeze-target">Freeze Target</h3>
<p>Also kicks the player out of their vehicle if they are in one.</p>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>freeze <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span></code></pre>
<h3 id="unfreeze-target">Unfreeze Target</h3>
<pre class="language-typescript"><code data-astro-raw class="language-typescript"><span class="token operator">/</span>unfreeze <span class="token punctuation">[</span><span class="token keyword">in</span><span class="token operator">-</span>game id<span class="token punctuation">]</span></code></pre>
<h1 id="uninstalling">Uninstalling</h1>
<p>Delete the folder in <code data-astro-raw>src/core/plugins/athena-moderator-commands-main</code>.</p>`}}},s)});

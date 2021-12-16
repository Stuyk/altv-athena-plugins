import{_ as n}from"./preload-helper.8b70a8dd.js";import{k as s}from"./vendor.d14f5e04.js";s("1uOhO1",{value:!0},async()=>{const[{default:e},{default:t}]=await Promise.all([n(()=>import("./MainDisplay.f513f3b3.js"),["assets/MainDisplay.f513f3b3.js","assets/Header.3318a738.js","assets/vendor.d14f5e04.js"]),n(()=>import("./client.1c2c108f.js"),["assets/client.1c2c108f.js","assets/vendor.d14f5e04.js"])]);return(a,o)=>t(a)(e,{content:{title:"Athena API",description:"A REST service for Athena internal gamemode. Can be used to get various player data.",author:"Stuyk",version:"3.0.0+",images:["https://i.imgur.com/Z97e7J7.png","https://i.imgur.com/WFmo6uG.png","https://i.imgur.com/mcHA98R.png"],keywords:["free","server","utility","data"],url:"https://github.com/Stuyk/altv-athena-api",astro:{headers:[{depth:1,slug:"athena-api",text:"Athena API"},{depth:1,slug:"get",text:"GET"},{depth:2,slug:"account-specific",text:"Account Specific"},{depth:2,slug:"player-specific",text:"Player Specific"},{depth:2,slug:"vehicle-specific",text:"Vehicle Specific"},{depth:1,slug:"installation",text:"Installation"},{depth:1,slug:"verification-of-installation",text:"Verification of Installation"},{depth:1,slug:"uninstallation",text:"Uninstallation"}],source:`
# Athena API

This feeds data from the Server to anyone who would like to access the endpoint. It's a relatively simple plugin that is more data centric.

It is highly recommended that if you plan on using this plugin that you limit who can access the port \`9090\` by IP.

**You as the end-user are responsible for securing data.**

# GET

\`:variable\` means you provide the data to get the result. Everything is case sensitive.

_\\* Some sensitive data removed from response._ 

## Account Specific

| Request                            | Description | Response     |
| ---------------------------------- | ----------- | ------------ |
| \`localhost:9090/accounts/:discord\` | Get Account | \`<Account>\`* |

## Player Specific

| Request                                   | Description                  | Response            |
| ----------------------------------------- | ---------------------------- | ------------------- |
| \`localhost:9090/players/all\`              | Get Players                  | \`Array<alt.Player>\` |
| \`localhost:9090/players/name/:name\`       | Get Character by Name        | \`Character\`         |
| \`localhost:9090/players/discord/:discord\` | Get Characters by Discord ID | \`Array<Character>\`  |

## Vehicle Specific

| Request                                 | Description            | Response             |
| --------------------------------------- | ---------------------- | -------------------- |
| \`localhost:9090/vehicles/all\`           | Get Vehicles           | \`Array<alt.Vehicle>\` |
| \`localhost:9090/vehicles/character/:id\` | Get Character Vehicles | \`Array<IVehicle>\`    |

All \`GET\` Requests Return a JSON Response Object

\`\`\`ts
{
    "version": number,
    "data": Array<SomeObjectType>
}
\`\`\`

# Installation

Download that latest version of this archive.

Drag / drop \`src\` in the root directory of \`Athena\`.

Add the following to \`src/core/server/plugins/imports.ts\`

\`\`\`ts
import './altv-athena-api/index'
\`\`\`

Run the following in a Terminal:

\`\`\`
npm i fastify
\`\`\`

# Verification of Installation

![](https://i.imgur.com/Tqa77vQ.png)

Open Browser and Visit

\`\`\`
localhost:9090
\`\`\`

# Uninstallation

Delete the folder \`src/core/server/plugins/altv-athena-api\`

Run the following in a Terminal:

\`\`\`
npm uninstall fastify
\`\`\``,html:`<h1 id="athena-api">Athena API</h1>
<p>This feeds data from the Server to anyone who would like to access the endpoint. It\u2019s a relatively simple plugin that is more data centric.</p>
<p>It is highly recommended that if you plan on using this plugin that you limit who can access the port <code data-astro-raw>9090</code> by IP.</p>
<p><strong>You as the end-user are responsible for securing data.</strong></p>
<h1 id="get">GET</h1>
<p><code data-astro-raw>:variable</code> means you provide the data to get the result. Everything is case sensitive.</p>
<p><em>* Some sensitive data removed from response.</em></p>
<h2 id="account-specific">Account Specific</h2>
<table>
<thead>
<tr>
<th align="none">Request</th>
<th align="none">Description</th>
<th align="none">Response</th>
</tr>
</thead>
<tbody>
<tr>
<td align="none"><code data-astro-raw>localhost:9090/accounts/:discord</code></td>
<td align="none">Get Account</td>
<td align="none"><code data-astro-raw>&#x3C;Account></code>*</td>
</tr>
</tbody>
</table>
<h2 id="player-specific">Player Specific</h2>
<table>
<thead>
<tr>
<th align="none">Request</th>
<th align="none">Description</th>
<th align="none">Response</th>
</tr>
</thead>
<tbody>
<tr>
<td align="none"><code data-astro-raw>localhost:9090/players/all</code></td>
<td align="none">Get Players</td>
<td align="none"><code data-astro-raw>Array&#x3C;alt.Player></code></td>
</tr>
<tr>
<td align="none"><code data-astro-raw>localhost:9090/players/name/:name</code></td>
<td align="none">Get Character by Name</td>
<td align="none"><code data-astro-raw>Character</code></td>
</tr>
<tr>
<td align="none"><code data-astro-raw>localhost:9090/players/discord/:discord</code></td>
<td align="none">Get Characters by Discord ID</td>
<td align="none"><code data-astro-raw>Array&#x3C;Character></code></td>
</tr>
</tbody>
</table>
<h2 id="vehicle-specific">Vehicle Specific</h2>
<table>
<thead>
<tr>
<th align="none">Request</th>
<th align="none">Description</th>
<th align="none">Response</th>
</tr>
</thead>
<tbody>
<tr>
<td align="none"><code data-astro-raw>localhost:9090/vehicles/all</code></td>
<td align="none">Get Vehicles</td>
<td align="none"><code data-astro-raw>Array&#x3C;alt.Vehicle></code></td>
</tr>
<tr>
<td align="none"><code data-astro-raw>localhost:9090/vehicles/character/:id</code></td>
<td align="none">Get Character Vehicles</td>
<td align="none"><code data-astro-raw>Array&#x3C;IVehicle></code></td>
</tr>
</tbody>
</table>
<p>All <code data-astro-raw>GET</code> Requests Return a JSON Response Object</p>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token punctuation">{</span>
    <span class="token string">"version"</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token string">"data"</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>SomeObjectType<span class="token operator">></span>
<span class="token punctuation">}</span></code></pre>
<h1 id="installation">Installation</h1>
<p>Download that latest version of this archive.</p>
<p>Drag / drop <code data-astro-raw>src</code> in the root directory of <code data-astro-raw>Athena</code>.</p>
<p>Add the following to <code data-astro-raw>src/core/server/plugins/imports.ts</code></p>
<pre class="language-ts"><code data-astro-raw class="language-ts"><span class="token keyword">import</span> <span class="token string">'./altv-athena-api/index'</span></code></pre>
<p>Run the following in a Terminal:</p>
<pre class="language-null"><code data-astro-raw class="language-null">npm i fastify</code></pre>
<h1 id="verification-of-installation">Verification of Installation</h1>
<p><img src="https://i.imgur.com/Tqa77vQ.png" alt=""></p>
<p>Open Browser and Visit</p>
<pre class="language-null"><code data-astro-raw class="language-null">localhost:9090</code></pre>
<h1 id="uninstallation">Uninstallation</h1>
<p>Delete the folder <code data-astro-raw>src/core/server/plugins/altv-athena-api</code></p>
<p>Run the following in a Terminal:</p>
<pre class="language-null"><code data-astro-raw class="language-null">npm uninstall fastify</code></pre>`}}},o)});

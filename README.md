# Athena Framework Plugins Website

Yes, it is now an open source website so you can also contribute if you don't like something you see. This automatically builds based on changes in the `altv-athena-plugins-md` repository and deploys your `plugin` to be displayed.

https://plugins.athenaframework.com/

## Stack

* [Astro](https://astro.build)
* [Vue 3](https://vuejs.org)

## Where do the Pages come from?

There's a repository that this website uses to construct all of its content.

You can visit that here [https://github.com/Stuyk/altv-athena-plugins-md](https://github.com/Stuyk/altv-athena-plugins-md)

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                                 |
| :---------------- | :----------------------------------------------------- |
| `npm install`     | Installs dependencies                                  |
| `npm run dev`     | Starts local dev server at `localhost:3000`            |
| `npm run build`   | Update Submodules, Build, and Deploy to `dist` folder. |
| `npm run preview` | Preview your build locally, before deploying           |

## Pipeline

* Create a PR in `altv-athena-plugins-md`
* Sends Workflow action to `altv-athena-plugins`
* Builds the latest version of the WebSite
* Digital Ocean listens for Code Changes in `dist` branch.

## Performance

* Currently builds roughly 180 pages in 60s
* Roughly 1800 pages in 10 minutes.
* Everything is static.

_Should be sufficient for forseeable future._
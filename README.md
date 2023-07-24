<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>which-pm-lockfile</h1>
  <a href="https://npmjs.com/package/which-pm-lockfile">
    <img alt="npm" src="https://img.shields.io/npm/v/which-pm-lockfile.svg">
  </a>
  <a href="https://github.com/bconnorwhite/which-pm-lockfile">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/which-pm-lockfile.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/which-pm-lockfile?branch=master">
    <img alt="Coveralls Status" src="https://img.shields.io/coveralls/github/bconnorwhite/which-pm-lockfile.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Get the path to a project's npm, yarn, pnpm, or bun lockfile.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/which-pm-lockfile">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/which-pm-lockfile?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter Follow" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
npm install which-pm-lockfile
```

```sh
yarn add which-pm-lockfile
```

```sh
pnpm add which-pm-lockfile
```

```sh
bun add which-pm-lockfile
```

## Usage
```js
import {
  getPackageManagerName,
  getLockfile,
  getLockfilePath,
  hasNPM,
  hasYarn,
  hasPNPM,
  hasBun
} from "which-pm-lockfile";

const pmName = await getPackageManagerName(); // "npm" | "yarn" | "pnpm" | "bun"

const lockfile = await getLockfile(); // "package-lock.json" | "yarn.lock" | "shrinkwrap.yaml" | "bun.lockb"

const npm = await hasNPM(); // true | false
const yarn = await hasYarn(); // true | false
const pnpm = await hasPNPM(); // true | false
const bun = await hasBun(); // true | false
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/which-pm-lockfile?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/which-pm-lockfile.svg"></a></h2>

- [file-structure](https://www.npmjs.com/package/file-structure): Define and manage file structures
- [root-pkg-dir](https://www.npmjs.com/package/root-pkg-dir): Find the highest directory with a package.json, starting from from the current working directory.

<br />

<h3>Dev Dependencies</h3>

- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/which-pm-lockfile.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _The MIT License_
<!--END FOOTER-->

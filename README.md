<div align="center">
  <h1>which-pm-lockfile</h1>
  <a href="https://npmjs.com/package/which-pm-lockfile">
    <img alt="NPM" src="https://img.shields.io/npm/v/which-pm-lockfile.svg">
  </a>
  <a href="https://github.com/bconnorwhite/which-pm-lockfile">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/which-pm-lockfile.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/which-pm-lockfile?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/which-pm-lockfile/badge.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/which-pm-lockfile">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/which-pm-lockfile?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Check if a project uses yarn, npm, or pnpm.

## Installation

```sh
yarn add which-pm-lockfile
```

```sh
npm install which-pm-lockfile
```

### Example usage:
```js
import {
  getPackageManagerName,
  getLockfile,
  hasYarn,
  hasNPM,
  hasPNPM,
  PackageManagerName,
  PackageManagerLockfile
} from "which-pm-lockfile";

getPackageManagerName() => Promise<PackageManagerName | undefined>;

getLockfile() => Promise<PackageManagerLockfile | undefined>;

hasYarn() => Promise<boolean>;

hasNPM() => Promise<boolean>;

hasPNPM() => Promise<boolean>;

type PackageManagerName = "yarn" | "npm" | "pnpm";

type PackageManagerLockfile = "yarn.lock" | "package-lock.json" | "shrinkwrap.yaml";
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/which-pm-lockfile.svg"></h2>

- [@bconnorwhite/package](https://www.npmjs.com/package/@bconnorwhite/package): A utility for reading package.json of a project, and forming paths relative to it.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/which-pm-lockfile.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/which-pm-lockfile.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

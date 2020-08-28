# which-pm-lockfile
![dependencies](https://img.shields.io/david/bconnorwhite/which-pm-lockfile)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/which-pm-lockfile)
![npm](https://img.shields.io/npm/v/which-pm-lockfile)

Check if a project uses yarn, npm, or pnpm. Supports yarn workspaces.

```
yarn add which-pm-lockfile
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

import { root, file } from "file-structure";
import { rootPkgDir } from "root-pkg-dir";

export type PackageManagerName = keyof typeof managers;

export type PackageManagerLockfile = typeof managers[PackageManagerName];

const managers = {
  yarn: "yarn.lock",
  npm: "package-lock.json",
  pnpm: "pnpm-lock.yaml",
  bun: "bun.lockb"
} as const;

async function lockfilePath(lockfile: string) {
  const structure = root({
    lock: file(lockfile)
  });
  const lock = structure.files().lock;
  const hasLockfile = await lock.exists();
  if(hasLockfile) {
    return lock.path;
  } else {
    const rootDir = await rootPkgDir();
    if(rootDir) {
      const rootStructure = root(rootDir, {
        lock: file(lockfile)
      });
      const rootLock = rootStructure.files().lock;
      return await rootLock.exists() ? rootLock.path : false;
    } else {
      return false;
    }
  }
}
export function getBunLockfilePath() {
  return lockfilePath(managers.bun);
}
export function getPNPMLockfilePath() {
  return lockfilePath(managers.pnpm);
}
export function getYarnLockfilePath() {
  return lockfilePath(managers.yarn);
}
export function getNPMLockfilePath() {
  return lockfilePath(managers.npm);
}

async function has(getLockfilePath: () => Promise<string | false>) {
  const lockfilePath = await getLockfilePath();
  return Boolean(lockfilePath);
}

export async function hasBun() {
  return has(getBunLockfilePath);
}

export async function hasPNPM() {
  return has(getPNPMLockfilePath);
}

export async function hasYarn() {
  return has(getYarnLockfilePath);
}

export async function hasNPM() {
  return has(getNPMLockfilePath);
}

export async function getPackageManagerName() {
  const bun = await hasBun();
  if(bun) {
    return "bun";
  }
  const pnpm = await hasPNPM();
  if(pnpm) {
    return "pnpm";
  }
  const yarn = await hasYarn();
  if(yarn) {
    return "yarn";
  }
  const npm = await hasNPM();
  if(npm) {
    return "npm";
  }
  return undefined;
}

export async function getLockfile() {
  return getPackageManagerName().then((name) => {
    return name ? managers[name] : undefined;
  });
}

export async function getLockfilePath() {
  const bun = await getBunLockfilePath();
  if(bun) {
    return bun;
  }
  const pnpm = await getPNPMLockfilePath();
  if(pnpm) {
    return pnpm;
  }
  const yarn = await getYarnLockfilePath();
  if(yarn) {
    return yarn;
  }
  const npm = await getNPMLockfilePath();
  if(npm) {
    return npm;
  }
  return undefined;
}

import { exists, existsWorkspace } from "@bconnorwhite/package";

export type PackageManagerName = "yarn" | "npm" | "pnpm";

export type PackageManagerLockfile = "yarn.lock" | "package-lock.json" | "shrinkwrap.yaml";

type Manager = {
  lockfile: PackageManagerLockfile;
  workspaces?: boolean;
}

const managers: {
  [name in PackageManagerName]: Manager;
} = {
  yarn: {
    lockfile: "yarn.lock",
    workspaces: true
  },
  npm: {
    lockfile: "package-lock.json"
  },
  pnpm: {
    lockfile: "shrinkwrap.yaml"
  }
}

async function hasManager({ lockfile, workspaces }: Manager) {
  const hasLockfile = await exists(lockfile);
  if(hasLockfile) {
    return hasLockfile;
  } else if(workspaces) {
    return Boolean(await existsWorkspace(lockfile));
  } else {
    return false;
  }
}

export function hasYarn() {
  return hasManager(managers.yarn);
}

export function hasNPM() {
  return hasManager(managers.npm);
}

export function hasPNPM() {
  return hasManager(managers.pnpm);
}

export async function getPackageManagerName() {
  return (await hasYarn() ? "yarn" : (await hasNPM() ? "npm" : (await hasPNPM() ? "pnpm" : undefined)));
}

export async function getLockfile() {
  return getPackageManagerName().then((name) => name ? managers[name].lockfile : undefined);
}

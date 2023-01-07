import { root, file } from "file-structure";
import findWorkspaceRoot from "find-workspace-root";

export type PackageManagerName = keyof typeof managers;

export type PackageManagerLockfile = typeof managers[PackageManagerName];

const managers = {
  yarn: "yarn.lock",
  npm: "package-lock.json",
  pnpm: "pnpm-lock.yaml"
} as const;

async function hasManager(lockfile: string) {
  const structure = root({
    lock: file(lockfile)
  });
  const hasLockfile = await structure.files().lock.exists();
  if(hasLockfile) {
    return hasLockfile;
  } else {
    const workspaceRoot = await ((findWorkspaceRoot as any).default as typeof findWorkspaceRoot)();
    if(workspaceRoot) {
      const workspaceStructure = root(workspaceRoot, {
        lock: file(lockfile)
      });
      return workspaceStructure.files().lock.exists();
    } else {
      return false;
    }
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
  return getPackageManagerName().then((name) => {
    return name ? managers[name] : undefined;
  });
}

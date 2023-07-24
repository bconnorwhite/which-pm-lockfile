import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, hasBun, getPackageManagerName, getLockfile } from "../source/index.js";

beforeEach(() => {
  mock({
    "pnpm-lock.yaml": "TEST"
  });
});

afterEach(restore);

test("yarn", async () => {
  expect(await hasYarn()).toBe(false);
});

test("npm", async () => {
  expect(await hasNPM()).toBe(false);
});

test("pnpm", async () => {
  expect(await hasPNPM()).toBe(true);
});

test("bun", async () => {
  expect(await hasBun()).toBe(false);
});

test("pm name", async () => {
  expect(await getPackageManagerName()).toBe("pnpm");
});

test("lockfile", async () => {
  expect(await getLockfile()).toBe("pnpm-lock.yaml");
});


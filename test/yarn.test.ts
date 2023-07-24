import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile, hasBun } from "../source/index.js";

beforeEach(() => {
  mock({
    "yarn.lock": "TEST"
  });
});

afterEach(restore);

test("yarn", async () => {
  expect(await hasYarn()).toBe(true);
});

test("npm", async () => {
  expect(await hasNPM()).toBe(false);
});

test("pnpm", async () => {
  expect(await hasPNPM()).toBe(false);
});

test("bun", async () => {
  expect(await hasBun()).toBe(false);
});

test("pm name", async () => {
  expect(await getPackageManagerName()).toBe("yarn");
});

test("lockfile", async () => {
  expect(await getLockfile()).toBe("yarn.lock");
});


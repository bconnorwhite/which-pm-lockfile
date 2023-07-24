import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile, getPNPMLockfilePath, getLockfilePath } from "../source/index.js";

beforeEach(() => {
  mock({});
});

afterEach(restore);

test("yarn", async () => {
  expect(await hasYarn()).toBe(false);
});

test("npm", async () => {
  expect(await hasNPM()).toBe(false);
});

test("pnpm", async () => {
  expect(await hasPNPM()).toBe(false);
});

test("bun", async () => {
  expect(await getLockfile()).toBe(undefined);
});

test("pm name", async () => {
  expect(await getPackageManagerName()).toBe(undefined);
});

test("lockfile", async () => {
  expect(await getLockfile()).toBe(undefined);
});

test("lockfile path", async () => {
  expect(await getLockfilePath()).toBeUndefined();
});

import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source/index.js";

beforeEach(() => {
  mock({
    "package-lock.json": "TEST"
  });
});

afterEach(restore);

test("yarn", async () => {
  expect(await hasYarn()).toBe(false);
});

test("npm", async () => {
  expect(await hasNPM()).toBe(true);
});

test("pnpm", async () => {
  expect(await hasPNPM()).toBe(false);
});

test("yarn", async () => {
  expect(await getPackageManagerName()).toBe("npm");
});

test("yarn", async () => {
  expect(await getLockfile()).toBe("package-lock.json");
});


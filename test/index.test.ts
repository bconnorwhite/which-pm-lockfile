import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source/index.js";

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

test("yarn", async () => {
  expect(await getPackageManagerName()).toBe("yarn");
});

test("yarn", async () => {
  expect(await getLockfile()).toBe("yarn.lock");
});


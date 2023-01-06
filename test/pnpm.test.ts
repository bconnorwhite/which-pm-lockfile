import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source/index.js";

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

test("yarn", async () => {
  expect(await getPackageManagerName()).toBe("pnpm");
});

test("yarn", async () => {
  expect(await getLockfile()).toBe("pnpm-lock.yaml");
});


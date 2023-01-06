import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source/index.js";

beforeEach(() => {
  mock({
    "package-lock.json": "TEST"
  });
});

afterEach(restore);

test("yarn", async (done) => {
  expect(await hasYarn()).toBe(false);
  done?.();
});

test("npm", async (done) => {
  expect(await hasNPM()).toBe(true);
  done?.();
});

test("pnpm", async (done) => {
  expect(await hasPNPM()).toBe(false);
  done?.();
});

test("yarn", async (done) => {
  expect(await getPackageManagerName()).toBe("npm");
  done?.();
});

test("yarn", async (done) => {
  expect(await getLockfile()).toBe("package-lock.json");
  done?.();
});


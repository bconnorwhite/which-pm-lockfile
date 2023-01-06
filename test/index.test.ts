import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source/index.js";

beforeEach(() => {
  mock({
    "yarn.lock": "TEST"
  });
});

afterEach(restore);

test("yarn", async (done) => {
  expect(await hasYarn()).toBe(true);
  done?.();
});

test("npm", async (done) => {
  expect(await hasNPM()).toBe(false);
  done?.();
});

test("pnpm", async (done) => {
  expect(await hasPNPM()).toBe(false);
  done?.();
});

test("yarn", async (done) => {
  expect(await getPackageManagerName()).toBe("yarn");
  done?.();
});

test("yarn", async (done) => {
  expect(await getLockfile()).toBe("yarn.lock");
  done?.();
});


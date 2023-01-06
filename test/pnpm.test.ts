import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source/index.js";

beforeEach(() => {
  mock({
    "pnpm-lock.yaml": "TEST"
  });
});

afterEach(restore);

test("yarn", async (done) => {
  expect(await hasYarn()).toBe(false);
  done?.();
});

test("npm", async (done) => {
  expect(await hasNPM()).toBe(false);
  done?.();
});

test("pnpm", async (done) => {
  expect(await hasPNPM()).toBe(true);
  done?.();
});

test("yarn", async (done) => {
  expect(await getPackageManagerName()).toBe("pnpm");
  done?.();
});

test("yarn", async (done) => {
  expect(await getLockfile()).toBe("pnpm-lock.yaml");
  done?.();
});


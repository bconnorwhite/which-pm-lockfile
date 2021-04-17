import { test, expect, beforeEach, afterEach } from "@jest/globals";
import mock, { restore } from "mock-fs";
import { hasYarn, hasNPM, hasPNPM, getPackageManagerName, getLockfile } from "../source";

beforeEach(() => {
  mock({});
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
  expect(await hasPNPM()).toBe(false);
  done?.();
});

test("yarn", async (done) => {
  expect(await getPackageManagerName()).toBe(undefined);
  done?.();
});

test("yarn", async (done) => {
  expect(await getLockfile()).toBe(undefined);
  done?.();
});


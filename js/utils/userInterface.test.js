import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it('returns true for root path ("/") when path is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('returns true for root path ("/") when path is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it('returns true when current path includes href (like "/venue/123")', () => {
    expect(
      isActivePath("/venue/", "/venue/?id=3d100123-8dbf-4a81-bfb8-34631d076877")
    ).toBe(true);
  });

  it('returns true for "/login" when current path starts with "/login"', () => {
    expect(isActivePath("/login", "/login")).toBe(true);
  });

  it('returns true for "/register" when current path starts with "/register"', () => {
    expect(isActivePath("/register", "/register")).toBe(true);
  });

  it('returns false when paths do not match ("/register" vs "/login")', () => {
    expect(isActivePath("/register", "/login")).toBe(false);
  });
});

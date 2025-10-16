import { beforeEach, describe, expect, it } from "vitest";
import { getUsername } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    // clear storage before each test
    localStorage.clear();
  });

  it("returns the user's name when a user objest exists in storage", () => {
    const mockUser = { name: "Salvatore" };
    localStorage.setItem("user", JSON.stringify(mockUser));

    const result = getUsername();

    expect(result).toBe("Salvatore");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});

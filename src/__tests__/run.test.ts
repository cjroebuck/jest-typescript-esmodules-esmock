import esmock from "esmock";

describe("using esmock", () => {
  it("runs TS as ESM and works with esmock", async () => {
    let mockThinkOfANumber = jest.fn();
    let mockOddOrEven = jest.fn();

    const runner = await esmock("../run", {
      "../numberFun": {
        thinkOfANumber: mockThinkOfANumber,
        default: mockOddOrEven,
      },
    });

    // Using type syntax to prove that TS is working
    expect(import.meta.url as string | undefined).toBeDefined();

    mockThinkOfANumber.mockImplementation(() => 1);
    runner.run();
    expect(mockOddOrEven).toHaveBeenCalledWith("odd");

    mockThinkOfANumber.mockImplementation(() => -2);
    runner.run();
    expect(mockOddOrEven).toHaveBeenCalledWith("even");
  });
});

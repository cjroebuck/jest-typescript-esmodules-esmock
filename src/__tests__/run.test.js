import esmock from "esmock";

describe("using esmock", () => {
  it("runs JS as ESM and works with esmock", async () => {
    let mockThinkOfANumber = jest.fn();
    let mockOddOrEven = jest.fn();

    const runner = await esmock("../run", {
      "../numberFun": {
        thinkOfANumber: mockThinkOfANumber,
        default: mockOddOrEven,
      },
    });

    mockThinkOfANumber.mockImplementation(() => 1);
    runner.run();
    expect(mockOddOrEven).toHaveBeenCalledWith("odd");

    mockThinkOfANumber.mockImplementation(() => -2);
    runner.run();
    expect(mockOddOrEven).toHaveBeenCalledWith("even");
  });
});

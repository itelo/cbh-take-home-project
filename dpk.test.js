const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given input contains an object with the key: partitionKey = '0'", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "0",
    });
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '3' when given input contains an object with the key: partitionKey = '3'", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "3",
    });
    expect(trivialKey).toBe("3");
  });

  it("Returns the literal '0' when given input contains an object with the key: partitionKey = 3. Note that now we are passing a number", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 3,
    });
    expect(trivialKey).toBe("3");
  });

  it("Returns a deterministic hash when given input doesn't contain an object with the key partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      a: 'a',
      b: 'b',
    });
    expect(trivialKey).toBe("b8524b381f5b6613b1cf079140d830fb081224176dd5673d495b3729b8cdd541d1e244b8c30334a9427da45ec6d2ceeacff7cae4e43944b1a925f5b4f46cb369");
  });

  it("Returns a deterministic hash with length 128 when given input contain an object with the key partitionKey with string length bigger than 256 characteres", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "b8524b381f5b6613b1cf079140d830fb081224176dd5673d495b3729b8cdd541d1e244b8c30334a9427da45ec6d2ceeacff7cae4e43944b1a925f5b4f46cb369b8524b381f5b6613b1cf079140d830fb081224176dd5673d495b3729b8cdd541d1e244b8c30334a9427da45ec6d2ceeacff7cae4e43944b1a925f5b4f46cb369x"
    });
    expect(trivialKey).toBe("a422ff1ce4abb94569bb7144ea0af807646c727e93526d530a75ef95434d5d778c122084e62c8719ae7ad1a578531cebb0e0e678503a6b6f8e366cb6fb883d9c");

  });
});

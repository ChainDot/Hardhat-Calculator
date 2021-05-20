const { expect } = require("chai");
const { ethers } = require("ethers");

describe("Calculator", () => {
  let Calculator, calculator;

  beforeEach(async () => {
    Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
  });

  describe("operators", () => {
    it("Should return a + b", async () => {
      expect(await calculator.add(a + b)).to.equal();
    });

    it("Should return a - b", async () => {
      expect(await calculator.sub(a - b)).to.equal();
    });
    it("Should return a * b", async () => {
      expect(await calculator.mul(a * b)).to.equal();
    });
    it("Should return a / b", async () => {
      expect(await calculator.div(a / b)).to.equal();
    });
    it("Should return a % b", async () => {
      expect(await calculator.mod(a % b)).to.equal();
    });
  });
});

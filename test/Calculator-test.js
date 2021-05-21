const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  let Calculator, calculator;

  beforeEach(async function () {
    Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.deployed();
  });

  it("Should return the result of a + b", async function () {
    expect(await calculator.add(0, 0)).to.equal(0);
    expect(await calculator.add(1, 2)).to.equal(3);
    expect(await calculator.add(-1, 2)).to.equal(1);
    expect(await calculator.add(1, -2)).to.equal(-1);
    expect(await calculator.add(-1, -2)).to.equal(-3);
  });

  it("Should return the result of a - b", async function () {
    expect(await calculator.sub(0, 0)).to.equal(0);
    expect(await calculator.sub(1, 2)).to.equal(-1);
    expect(await calculator.sub(-1, 2)).to.equal(-3);
    expect(await calculator.sub(1, -2)).to.equal(3);
    expect(await calculator.sub(-1, -2)).to.equal(1);
  });

  it("Should return the result of a * b", async function () {
    expect(await calculator.mul(0, 0)).to.equal(0);
    expect(await calculator.mul(1, 2)).to.equal(2);
    expect(await calculator.mul(-1, 2)).to.equal(-2);
    expect(await calculator.mul(1, -2)).to.equal(-2);
    expect(await calculator.mul(-1, -2)).to.equal(2);
  });

  it("revert you can not divide by 0", async function () {
    await expect(calculator.div(2, 0)).to.be.revertedWith(
      "Calculator: can not be divide by 0"
    );
  });

  it("Should return the result of a / b", async function () {
    expect(await calculator.div(0, 2)).to.equal(0);
    expect(await calculator.div(2, 2)).to.equal(1);
    expect(await calculator.div(-2, 2)).to.equal(-1);
    expect(await calculator.div(2, -2)).to.equal(-1);
    expect(await calculator.div(-2, -2)).to.equal(1);
  });

  it("revert you can not mod by 0", async function () {
    await expect(calculator.mod(2, 0)).to.be.revertedWith(
      "Calculator: can not be mod by 0"
    );
  });

  it("Should return the result of a % b", async function () {
    expect(await calculator.mod(2, 2)).to.equal(0);
    expect(await calculator.mod(-2, 2)).to.equal(0);
    expect(await calculator.mod(3, -2)).to.equal(1);
    expect(await calculator.mod(-3, 2)).to.equal(-1);
  });
});

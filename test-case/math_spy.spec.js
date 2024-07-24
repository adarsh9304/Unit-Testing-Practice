import Math from "../math_spy.js";
import { expect } from "chai";
import sinon from "sinon";

describe('Math Class', () => {
  let math;
  let addSpy;
  let subtractSpy;

  beforeEach(() => {
    math = new Math();
    addSpy = sinon.spy(math, 'add');
    subtractSpy = sinon.spy(math, 'subtract');
  });

  afterEach(() => {
    addSpy.restore();
    subtractSpy.restore();
  });

  it('should call add method once', () => {
    math.add(1, 2);
    expect(addSpy.calledOnce).to.be.true;
    expect(addSpy.calledWith(1, 2)).to.be.true;
  });

  it('should call subtract method once', () => {
    math.subtract(5, 3);
    expect(subtractSpy.calledOnce).to.be.true;
    expect(subtractSpy.calledWith(5, 3)).to.be.true;
  });
});

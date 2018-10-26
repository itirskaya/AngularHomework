import { isInArray, summator, getUnique, toMatrix } from "./lesson1";

/*var test = [1, 2, 3, 4, 5];
  console.log(isInArray(test, 3, 5, 2));
  console.log(isInArray(test, 3, 7, 2));

  var test2 = ["1", "2", "3", "4", "5"];
  console.log(isInArray(test2, "3", "5", "2"));
  console.log(isInArray(test2, "3", "7", "2"));
  */

describe("isInArray", function() {
  it("Number - check including", function() {
    const res = isInArray([1, 2, 3, 4, 5], 3, 5, 2);
    expect(res).toBeTruthy();
  });
  it("Number - check not including", function() {
    const res = isInArray([1, 2, 3, 4, 5], 3, 7, 2);
    expect(res).toBeFalsy();
  });
  it("String - check including", function() {
    const res = isInArray(["1", "2", "3", "4", "5"], "3", "5", "2");
    expect(res).toBeTruthy();
  });
  it("String - check not including", function() {
    const res = isInArray(["1", "2", "3", "4", "5"], "3", "7", "2");
    expect(res).toBeFalsy();
  });
});

//   console.log(summator("3", "5", "2"));
//   console.log(summator(3, 5, 2));
describe("summator", function() {
  it("summator - check string", function() {
    const res = summator("3", "5", "2");
    expect(res).toMatch("352");
  });
  it("summator - check number", function() {
    const res = summator(3, 5, 2);
    expect(res).toEqual(10);
  });
});

//   console.log(getUnique(3, 5, 2));
//   console.log(getUnique(3, 5, 3, 5, 2));

describe("getUnique", function() {
  it("Number - check unique params", function() {
    const res = getUnique(3, 5, 2);
    expect(res).toEqual([3, 5, 2]);
  });
  it("Number - check non unique params", function() {
    const res = getUnique(3, 5, 3, 5, 2);
    expect(res).toEqual([3, 5, 2]);
  });
  it("String - check unique params", function() {
    const res = getUnique("3", "5", "2");
    expect(res).toEqual(["3", "5", "2"]);
  });
  it("String - check non unique params", function() {
    const res = getUnique("3", "5", "3", "5", "2");
    expect(res).toEqual(["3", "5", "2"]);
  });
});

//   console.log(toMatrix([[1, 2, 3, 4, 5, 6], [1, "2", 3, 4, 5], [1, 2, 3]], 3)); //[[1, 2, 3 ], [1, '2', 3 ], [1, 2, 3]]
describe("getUnique", function() {
  it("getUnique - check works", function() {
    const res = toMatrix([[1, 2, 3, 4, 5, 6], [1, "2", 3, 4, 5], [1, 2, 3]], 3);
    expect(res).toEqual([[1, 2, 3], [1, "2", 3], [1, 2, 3]]);
  });
});

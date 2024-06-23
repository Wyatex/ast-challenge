import generate from "@babel/generator";
import * as t from "@babel/types";
import genCode from "../src";

const expectCode = (ast) => {
  expect(generate(ast).code).toMatchSnapshot();
};

it("gen-code", () => {
  const exampleMethods = require("../example-methods.json");

  expectCode(genCode(exampleMethods));
});

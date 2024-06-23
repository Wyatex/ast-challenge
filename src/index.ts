import * as t from "@babel/types";
import { genInterface } from "../src/gen-interace";
import { genFunction } from "../src/gen-function";

export default (
  obj: Record<string, { requestType: string; responseType: string }>
) => {
  return t.file(
    t.program([
      ...Object.entries(obj).flatMap(([key, value]) => {
        const functionName = `use${key}Query`;
        const interfaceName = `Use${key}Query`;
        const { requestType, responseType } = obj[key];
        return [
          genInterface(requestType, responseType, interfaceName),
          genFunction(requestType, responseType, interfaceName, functionName),
        ];
      }),
    ])
  );
};

import { test, expect } from "vitest";
import headerify from "./";
import { remark } from "remark";
import { VFile } from "vfile";
import path from "node:path";
import { compile, compileSync } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";

const vfile = (value: string) =>
  new VFile({
    value,
    path: path.resolve("./test.md"),
  });

const input = () =>
  `---
  title: Hello World
  description: This is a test
  key:
    - string1
    - string2      
    - string3
    - string4
    - string5
    - string6
---
`;

test("Basic file import", () => {
  const { value } = compileSync(input(), {
    remarkPlugins: [remarkFrontmatter, headerify],
    jsx: true,
  });
  console.log(
    "🚀 ~ file: index.test.ts:27 ~ const{value}=compileSync ~ value:",
    value.toString()
  );

});

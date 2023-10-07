/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { type Literal, type Root } from "mdast";
import YAML from "yaml";

const headerify = () => {
  return function transformer(tree: Root) {
    const nodeIndex = tree.children.findIndex((child) => child.type === "yaml");
    const node = tree.children[nodeIndex] as Literal;
    const metadata = YAML.parse(node.value ?? "");

    tree.children.splice(nodeIndex, 1, {
      type: "mdxJsxFlowElement",
      name: "Header",
      attributes: [metadata],
      children: [],
    });
  };
};

export default headerify;

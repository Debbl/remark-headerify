import { type Literal, type Root } from "mdast";
import type { MdxJsxAttribute } from "mdast-util-mdx";
import YAML from "yaml";

const headerify = () => {
  return function transformer(tree: Root) {
    const nodeIndex = tree.children.findIndex((child) => child.type === "yaml");
    const node = tree.children[nodeIndex] as Literal;
    const metadata = YAML.parse(node.value ?? "") as Record<string, string>;

    const attributes: MdxJsxAttribute[] = Object.entries(metadata).map(([key, value]) => ({
      type: "mdxJsxAttribute",
      name: key,
      value,
    }));

    tree.children.splice(nodeIndex, 0, {
      type: "mdxJsxFlowElement",
      name: "Header",
      attributes,
      children: [],
    });
  };
};

export default headerify;

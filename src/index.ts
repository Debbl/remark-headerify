import { type Literal, type Root } from "mdast";
import type { MdxJsxAttribute, MdxJsxFlowElement } from "mdast-util-mdx";
import YAML from "yaml";

const headerify = () => {
  return function transformer(tree: Root) {
    const node = tree.children[0] as Literal;
    if (node.type !== "yaml") return;

    const metadata = YAML.parse(node.value ?? "") as Record<string, string>;

    const attributes: MdxJsxAttribute[] = Object.entries(metadata).map(
      ([key, value]) => ({
        type: "mdxJsxAttribute",
        name: key,
        value,
      }),
    );

    tree.children = [
      tree.children[0],
      {
        type: "mdxJsxFlowElement",
        name: "Header",
        attributes,
        children: [],
      },
      {
        type: "mdxJsxFlowElement",
        name: "Main",
        attributes: [],
        children: tree.children.slice(1) as MdxJsxFlowElement['children'], 
      },
    ];
  };
};

export default headerify;

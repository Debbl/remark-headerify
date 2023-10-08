# remark headerify

## Install with Nextjs

```bash
pnpm i remark-headerify -D
```

## Usage

- only use for nextjs with mdx

- parse frontmatter config for Header component

> info.md

```md
---
    title: Info
---
```

> mdx-components.tsx

```tsx
import type { MDXComponents } from "mdx/types";
import Header from "./components/Header";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Header: (props: { title: string }) => {
      const { title = "" } = props;

      return <Header title={title} />;
    },
    ...components,
  };
}
```

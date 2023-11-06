# remark headerify

## Install with Nextjs

```bash
pnpm i remark-headerify -D
```

## Usage

- only use for nextjs with mdx

- parse frontmatter config for Header component and Main component

> info.md

```md
---
    title: Info
---

# Info
```

## parse
```md
---
    title: Info
---
<Header title="Info">
</Header>
<Main>
# Info
</Main>
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
    Main: ({ children }: { children: React.ReactNode }) => {
      return <main className="markdown-body">{children}</main>;
    },

    ...components,
  };
}
```

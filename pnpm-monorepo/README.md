**pnpm-monorepo**

This uses pnpm workspaces to allow `import { blah } from "@name/packagename"`

**First**, you have a `pnpm-workspace.yaml` file with;

```
packages:
- "packages/*"
```

**Then** make sure your `package/packagename/package.json` contains the actual name you want to import e.g;

```
{
  name: "@name/packagename"
}
```
 

**Finally** in your root level `package.json`, do `pnpm install` and it will take care of the linking for you

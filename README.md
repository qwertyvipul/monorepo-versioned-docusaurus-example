# monorepo-versioned-docusaurus-example
Docusaurus Monorepo Multiversioned Site Example

# Steps

## 1. Install and get started with Docusaurus
```bash
npx create-docusaurus@latest my-website facebook
cd website
npm start
```

## 2. Create 3 v1.0.0 projects
### project<#>/index.mdx
```
# Project <#> v1.0.0
```

### project<#>/sidebar.js
```
module.exports = {
    project<#>: ['index'],
};
```

## 3. Publish docs
```
npm install --save @docusaurus/plugin-content-docs
```

### /docusaurus.config.js
```js
plugins: [
    [
        '@docusaurus/plugin-content-docs',
        {
            id: 'project<#>',
            path: 'project<#>',
            routeBasePath: 'project<#>',
            sidebarPath: require.resolve('./project<#>/sidebar.js'),
        },
    ],
],
```

Restart and visit `localhost:3000/project1`, you should see your project doc now live.
You can also try adding project links to the navbar.

## 4. Release versions
```bash
npm run docusaurus docs:version:project1 v1.1.0
```

## 5. Swizzle some components
```bash
npm run swizzle @docusaurus/theme-classic DocBreadcrumbs -- --eject
npm run swizzle @docusaurus/theme-classic NavbarItem/DocsVersionDropdownNavbarItem -- --eject
```

## 6. Make changes in swizzled components
[See this](https://github.com/qwertyvipul/monorepo-versioned-docusaurus-example/commit/c473ae8f6f3949e908585802dc0374520adcbac8)

## 7. Deploy
[See this](https://qwertyvipul.github.io/monorepo-versioned-docusaurus-example)




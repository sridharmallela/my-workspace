---
layout: page
title: 'ESLint Config'
permalink: '/eslint-config'
---

[![npm](https://img.shields.io/npm/v/eslint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/eslint-config-ngs) [![npm](https://img.shields.io/npm/dw/eslint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/eslint-config-ngs) [![npm](https://img.shields.io/npm/dm/eslint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/eslint-config-ngs) [![npm](https://img.shields.io/npm/dy/eslint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/eslint-config-ngs) [![npm](https://img.shields.io/npm/dt/eslint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/eslint-config-ngs)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/ngs-workspace/main/LICENSE)

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Typescript](#typescript)
  - [Jest](#jest)
- [License](#license)

<!-- /TOC -->

## Installation

```bash
  $ npm i --save-dev eslint eslint-config-ngs
```

```bash
  $ yarn add --dev eslint eslint-config-ngs
```

## Usage

- create/update `.eslintrc` on workspace root
- Extend the default ESLint Configuration, add below

```json
{
  "extends": ["eslint-config-ngs/recommended-js"]
}
```

### Typescript

- For typescript, its mandatory to install these additional modules, which runs validation on typescript files

```bash
  $ npm i --save-dev eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```bash
  $ yarn add --dev eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- create/update `.eslintrc` on workspace root
- Extend the default ESLint Configuration, add below

```json
{
  "extends": ["eslint-config-ngs/recommended"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "import"]
}
```

### Jest

- For Jest, its mandatory to install these additional modules

```bash
  $ npm i --save-dev eslint-plugin-jest eslint-plugin-jest-formatting
```

```bash
  $ yarn add --dev eslint-plugin-jest eslint-plugin-jest-formatting
```

- create/update `.eslintrc.json` on workspace root
- Extend the default ESLint Configuration, add below

```json
{
  "overrides": [
    {
      "files": ["**/*.{s,S}pec.{j,t}s?(x)"],
      "extends": [
        "eslint-config-ngs/recommended",
        "eslint-config-ngs/recommended-jest"
      ],
      "rules": {}
    }
  ]
}
```

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

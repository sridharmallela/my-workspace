---
layout: page
title: 'StyleLint Config'
permalink: '/stylelint-config'
---

[![npm](https://img.shields.io/npm/v/stylelint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/stylelint-config-ngs) [![npm](https://img.shields.io/npm/dw/stylelint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/stylelint-config-ngs) [![npm](https://img.shields.io/npm/dm/stylelint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/stylelint-config-ngs) [![npm](https://img.shields.io/npm/dy/stylelint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/stylelint-config-ngs) [![npm](https://img.shields.io/npm/dt/stylelint-config-ngs.svg?style=plastic)](https://www.npmjs.com/package/stylelint-config-ngs)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/tags) [![GitHub release](https://img.shields.io/github/release/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/releases) [![GitHub issues](https://img.shields.io/github/issues/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/ngs-workspace.svg?style=plastic)](https://github.com/sridharmallela/ngs-workspace/pulls) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/ngs-workspace/main/LICENSE)

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

<!-- /TOC -->

## Installation

```bash
  $ npm i --save-dev stylelint stylelint-config-ngs
```

```bash
  $ yarn add --dev stylelint stylelint-config-ngs
```

## Usage

- create/update `.stylelintrc` or `stylelint.config.js` on workspace root
- Extend the default StyleLint Configuration, add below

```json
{
  "extends": ["stylelint-config-ngs"]
}
```

For more information on [how to configure stylelint](https://stylelint.io/user-guide/configure)

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

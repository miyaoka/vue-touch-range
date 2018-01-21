# vue-touch-range

[![NPM version](https://img.shields.io/npm/v/@miyaoka/vue-touch-range.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-touch-range) [![NPM downloads](https://img.shields.io/npm/dm/@miyaoka/vue-touch-range.svg?style=flat)](https://npmjs.com/package/@miyaoka/vue-touch-range) [![CircleCI](https://circleci.com/gh/miyaoka/vue-touch-range.svg?style=shield)](https://circleci.com/gh/miyaoka/vue-touch-range)

> Touch extension of input-range element

Demo: https://miyaoka.github.io/vue-touch-range/

## Install

```sh
npm i @miyaoka/vue-touch-range
```

## Usage

### in script
```js
import TouchRange from '@miyaoka/vue-tuoch-range'

export default {
  components: {
    TouchRange
  }
}
```

### in template
```
<TouchRange
  :min="min"
  :max="max"
  :step="step"
  :disabled="disabled"
  v-model="value"
/>
```

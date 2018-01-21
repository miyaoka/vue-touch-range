# vue-touch-range [![CircleCI](https://circleci.com/gh/miyaoka/vue-touch-range.svg?style=svg)](https://circleci.com/gh/miyaoka/vue-touch-range)

Touch extension of input-range element

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

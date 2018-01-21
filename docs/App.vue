<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap-reboot.min.css">

    <header>
      <h1>
        Vue Touch slider
      </h1>
      <p>
        Touch extension of input-range element
      </p>
    </header>

    <section>
      <h2>Example</h2>
      <div>
        <div class="slider-container">
          <div>
            <input
              type="number"
              v-model="min"
            >
          </div>
          <TouchSlider
            :min="min"
            :max="max"
            :disabled="disabled"
            v-model="value"
            class="slider"
          />
          <div>
            <input
              type="number"
              v-model="max"
            >
          </div>
        </div>

        <div>
          <p>
            disabled:<input
              type="checkbox"
              v-model="disabled"
            >
          </p>
          <p>
            Value: {{ value.toFixed(1) }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2>Usage</h2>
      <div>
        <pre><code>{{ code }}</code></pre>
      </div>
    </section>
    <section>
      <h2>Props</h2>

      <h3>[Optional]</h3>
      <dl>
        <dt>value: Number</dt>
        <dd>(default: 0)</dd>
        <dt>min: Number</dt>
        <dd>(default: 0)</dd>
        <dt>max: Number</dt>
        <dd>(default: 1)</dd>
        <dt>step: Number | String</dt>
        <dd>(default: any)</dd>
        <dt>disabled: Boolean</dt>
        <dd>(default: false)</dd>
      </dl>

    </section>

  </div>
</template>

<script>
import TouchSlider from '../src/TouchSlider'

export default {
  components: {
    TouchSlider
  },
  data() {
    return {
      code: `<TouchSlider
  :min="min"
  :max="max"
  :step="step"
  :disabled="disabled"
  v-model="value"
/>
`,
      min: 20,
      max: 200,
      value: 50,
      disabled: false
    }
  }
}
</script>

<style>
html {
  margin: 1rem;
}
.slider-container {
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  grid-gap: 1rem;
}
.slider-container input[type='number'] {
  width: 100%;
  text-align: right;
}
pre {
  padding: 1rem;
  background: #eee;
}
section {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px dotted #ccc;
}
</style>

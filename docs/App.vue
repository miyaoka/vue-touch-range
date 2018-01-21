<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap-reboot.min.css">

    <header>
      <h1>
        Vue touch range
      </h1>
      <p>
        Touch extension of input-range element
      </p>
    </header>

    <section>
      <h2>Example</h2>
      <div>
        <h3>touch range</h3>
        <TouchRange
          :min="min"
          :max="max"
          :disabled="disabled"
          v-model="value"
          class="slider"
        />
      </div>
      <div>
        <h3>Vanilla input-range (Not support touch on track)</h3>
        <input
          type="range"
          :min="min"
          :max="max"
          :disabled="disabled"
          v-model.number="value"
          class="slider"
        >
      </div>

      <div>
        <div>
          min:
          <input
            type="number"
            v-model="min"
          >
        </div>
        <div>
          max:
          <input
            type="number"
            v-model="max"
          >
        </div>
        <div>
          disabled:<input
            type="checkbox"
            v-model="disabled"
          >
        </div>
        <div>
          Value: {{ value.toFixed(1) }}
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
import TouchRange from '../src/TouchRange'

export default {
  components: {
    TouchRange
  },
  data() {
    return {
      code: `<TouchRange
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
.slider {
  width: 100%;
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
